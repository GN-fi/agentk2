import { NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";

// Edge Runtime을 사용하도록 설정
export const runtime = "edge";

// Neon HTTP URL은 환경 변수에서 가져옵니다.
const neonHttpUrl = process.env.NEON_HTTP_URL;

if (!neonHttpUrl) {
	throw new Error("NEON_HTTP_URL 환경 변수가 설정되지 않았습니다.");
}

const client = neon(neonHttpUrl);
const db = drizzle(client);

// 예시: posts 테이블 (실제로는 스키마에 정의해야 함)
// import * as schema from '@/db/schema'; // Drizzle 스키마 파일 경로 (생성 필요)

export async function GET() {
	try {
		// Drizzle을 사용하여 posts 테이블에서 모든 데이터를 가져오는 예시
		// const posts = await db.select().from(schema.posts); // Drizzle 스키마의 posts 테이블 사용

		// 임시 응답 (실제로는 DB 조회 결과를 반환해야 함)
		const posts = [
			{ id: 1, title: "첫 번째 게시글 (Edge)" },
			{ id: 2, title: "두 번째 게시글 (Edge)" },
		];

		return NextResponse.json(posts);
	} catch (error) {
		console.error("Edge Route 오류:", error);
		return NextResponse.json(
			{ error: "데이터를 가져오는 데 실패했습니다." },
			{ status: 500 },
		);
	}
}
