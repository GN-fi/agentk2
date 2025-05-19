// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

const OverviewPage = () => {
	return (
		<div>
			<h1 className="mb-4 text-3xl font-bold text-purple-400">VIBE AI: 개요</h1>
			<p>
				VIBE AI는 코드 작성, 디버깅, 학습 등 개발의 모든 단계에서 도움을 주는
				강력한 인공지능 기능 모음입니다. VIBE의 개발 환경에 깊숙이 통합되어
				있어, 개발자가 더욱 생산적이고 창의적으로 작업할 수 있도록 지원합니다.
			</p>

			<h2 className="mt-6 mb-3 text-2xl font-semibold">주요 기능</h2>
			<ul className="list-inside list-disc space-y-2">
				<li>
					<strong>AI 코드 자동 완성:</strong> 문맥에 맞는 코드를 실시간으로
					제안하여 작성 속도를 높입니다.
				</li>
				<li>
					<strong>AI 코드 생성:</strong> 주석이나 간단한 설명만으로 복잡한 코드
					스니펫을 생성합니다.
				</li>
				<li>
					<strong>AI 기반 디버깅:</strong> 오류의 원인을 분석하고 해결 방법을
					제안합니다.
				</li>
				<li>
					<strong>AI 채팅 지원:</strong> 개발 관련 질문에 답변하고, 아이디어를
					구체화하도록 돕습니다. (VIBE Assistant)
				</li>
				<li>
					<strong>AI 에이전트:</strong> 반복적인 작업을 자동화하고, 프로젝트
					관리를 돕습니다. (VIBE Agent)
				</li>
			</ul>

			<h2 className="mt-6 mb-3 text-2xl font-semibold">VIBE AI 활용하기</h2>
			<p>
				VIBE AI 기능들은 에디터 곳곳에서 자연스럽게 접근할 수 있도록
				설계되었습니다. 각 기능의 상세한 사용법은 해당 문서 페이지를
				참고해주세요.
			</p>
			<p className="mt-2">
				VIBE AI와 함께 더욱 스마트한 개발 경험을 시작해보세요!
			</p>
		</div>
	);
};
export default OverviewPage;
