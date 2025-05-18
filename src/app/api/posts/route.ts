import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redis, getOrSet } from "@/lib/cache";
import { db } from "@/lib/db"; // Drizzle 인스턴스 import
import { posts as postsSchema, type Post } from "@/lib/db/schema"; // Drizzle posts 스키마 import

export const runtime = "edge"; // Edge 런타임 활성화

// 게시물 목록 캐시 키
const POSTS_ALL_CACHE_KEY = "posts:all";
// 개별 게시물 캐시 키 프리픽스 (뒤에 id가 붙음)
const POST_CACHE_KEY_PREFIX = "post:";
// TTL: 1시간 (예시)
const DEFAULT_CACHE_TTL = 3600;

export async function GET() {
	try {
		const posts = await getOrSet<Post[]>(
			POSTS_ALL_CACHE_KEY,
			async () => {
				console.log(
					`캐시 미스: ${POSTS_ALL_CACHE_KEY}, DB에서 게시물 목록 조회`,
				);
				// Drizzle 타입 Post[]를 반환하도록 명시
				const allPosts: Post[] = await db.select().from(postsSchema);
				return allPosts;
			},
			DEFAULT_CACHE_TTL,
		);

		// getOrSet 내부에서 캐시 미스 시 DB 조회 결과가 없을 경우 (빈 배열 등) 처리 가능하므로,
		// 여기서 posts가 null 또는 undefined인지 체크하는 것은 getOrSet 구현에 따라 달라질 수 있습니다.
		// 현재 getOrSet은 DB조회 실패가 아닌 이상 데이터를 반환하므로, posts가 !posts일 경우는 거의 없습니다.
		// if (!posts || posts.length === 0) {
		//   return NextResponse.json({ error: "게시물을 찾을 수 없습니다." }, { status: 404 });
		// }

		return NextResponse.json(posts);
	} catch (error) {
		console.error("Edge Route GET 오류:", error);
		return NextResponse.json(
			{ error: "데이터를 가져오는 데 실패했습니다." },
			{ status: 500 },
		);
	}
}

/**
 * POST /api/posts - 새 게시물 생성 (Prisma 사용 - Node.js 런타임)
 * Edge 에서는 Prisma 직접 사용이 어려우므로, 이 POST 핸들러는 Node.js 환경에서 실행되어야 합니다.
 * 따라서, 이 파일 전체를 Edge로 돌릴 경우 POST는 별도의 Node.js API 라우트로 분리해야 합니다.
 * 여기서는 GET만 Edge로 가정하고, POST는 그대로 두겠습니다. (실제로는 POST도 다른 파일로 분리하거나, Prisma Data Proxy + Edge 조합을 고려해야 함)
 */
export async function POST(request: Request) {
	// TODO: 사용자 인증 로직 추가 (요청자 ID를 authorId로 사용)
	try {
		const body = await request.json();
		const {
			title,
			content,
			authorId,
		} = // 실제로는 인증된 사용자 ID를 사용해야 함
			body;

		if (!title || !authorId) {
			return NextResponse.json(
				{ error: "제목과 작성자 ID는 필수입니다." },
				{ status: 400 },
			);
		}

		const newPost = await prisma.post.create({
			data: {
				title,
				content,
				authorId,
			},
		});

		// 캐시 업데이트 전략:
		// 1. 전체 목록 캐시를 무효화 (가장 간단한 방법)
		await redis.del(POSTS_ALL_CACHE_KEY);
		console.log(`캐시 무효화: ${POSTS_ALL_CACHE_KEY}`);

		// 2. 새로 생성된 게시물을 개별적으로 캐시에 추가 (선택적)
		//    이렇게 하면 개별 게시물 GET 요청 시 DB를 거치지 않을 수 있음
		const newPostCacheKey = `${POST_CACHE_KEY_PREFIX}${newPost.id}`;
		await redis.set(newPostCacheKey, JSON.stringify(newPost), {
			ex: DEFAULT_CACHE_TTL,
		});
		console.log(
			`새 게시물 캐시 저장: ${newPostCacheKey}, TTL: ${DEFAULT_CACHE_TTL}s`,
		);

		// 3. (고급) 전체 목록 캐시를 직접 업데이트 (예: 목록의 시작 부분에 새 게시물 추가)
		//    이 방법은 더 복잡하지만, 목록 캐시의 즉각적인 일관성을 높일 수 있습니다.
		//    const currentPosts = await redis.get<Post[]>(POSTS_ALL_CACHE_KEY);
		//    if (currentPosts) {
		//      const updatedPosts = [newPost, ...currentPosts];
		//      await redis.set(POSTS_ALL_CACHE_KEY, JSON.stringify(updatedPosts), { ex: DEFAULT_CACHE_TTL });
		//    }

		return NextResponse.json(newPost, { status: 201 });
	} catch (error) {
		console.error("[POSTS_POST_ERROR]", error);
		return NextResponse.json(
			{ error: "게시물 생성 중 오류가 발생했습니다." },
			{ status: 500 },
		);
	}
}
