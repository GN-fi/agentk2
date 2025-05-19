import Link from "next/link";

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

const GettingStartedPage = () => {
	return (
		<div>
			<h1 className="mb-4 text-3xl font-bold text-purple-400">시작하기</h1>
			<p className="mb-4">
				VIBE 플랫폼 사용을 시작하는 데 필요한 모든 정보를 확인하세요. 왼쪽
				메뉴에서 특정 주제를 선택하거나 아래 링크를 통해 주요 내용을 바로 확인할
				수 있습니다.
			</p>
			<ul className="list-inside list-disc space-y-2">
				<li>
					<a
						href="/docs/getting-started/introduction"
						className="text-pink-400 hover:underline"
					>
						VIBE 소개
					</a>
				</li>
				<li>
					<Link
						href="/docs/getting-started/quickstarts"
						className="text-pink-400 hover:underline"
					>
						빠른 시작 가이드
					</Link>
				</li>
				<li>
					<Link
						href="/docs/getting-started/vibe-core"
						className="text-pink-400 hover:underline"
					>
						VIBE Core 이해하기
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default GettingStartedPage;
