import Link from "next/link";

const VibeAssistantPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-6 text-purple-400">
				VIBE 어시스턴트: 당신의 지능형 코딩 동반자
			</h1>
			<p className="text-lg mb-8">
				VIBE 어시스턴트는 VIBE IDE에 내장된 대화형 AI 챗봇으로, 개발자가 코드
				작성, 문제 해결, 학습 등 개발의 모든 과정에서 실시간으로 도움을 받을 수
				있도록 설계되었습니다. 단순한 질문 답변을 넘어, 현재 작업 중인 코드의
				맥락을 이해하고 적극적으로 솔루션을 제안하여 개발 생산성을 극대화합니다.
			</p>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE 어시스턴트의 핵심 기능
				</h2>
				<ul className="list-disc pl-6 mb-6 space-y-3">
					<li>
						<strong>맥락 인지 기반 코드 생성 및 수정:</strong> 현재 열려 있는
						파일, 선택된 코드 블록, 프로젝트 구조 등을 파악하여 사용자의
						질문이나 요청에 대해 높은 정확도의 코드 스니펫을 생성하거나 기존
						코드를 수정합니다. "이 함수를 TypeScript로 바꿔줘", "선택한 부분에
						대한 에러 핸들링 코드를 추가해줘" 등의 요청을 처리할 수 있습니다.
					</li>
					<li>
						<strong>실시간 코드 분석 및 디버깅 지원:</strong> 코드의 잠재적인
						오류를 지적하고, 디버깅 과정에서 문제의 원인을 파악하거나 해결책을
						제안합니다. "이 코드에서 왜 에러가 나는지 알려줘", "이 버그를
						수정하려면 어떻게 해야 해?" 등의 질문에 답합니다.
					</li>
					<li>
						<strong>자연어 질문 답변:</strong> 특정 프로그래밍 개념, 라이브러리
						사용법, 알고리즘, 개발 모범 사례 등 개발과 관련된 모든 질문에 대해
						간결하고 명확한 답변을 제공합니다.
					</li>
					<li>
						<strong>새로운 기술 및 지식 학습:</strong> 최신 기술 트렌드, 새로운
						라이브러리나 프레임워크에 대한 정보를 빠르게 습득하고, 학습 자료나
						예제 코드를 제공하여 개발자가 새로운 기술을 익히는 데 도움을 줍니다.
					</li>
					<li>
						<strong>코드 설명 및 문서화 지원:</strong> 복잡한 코드 블록의 작동
						방식을 설명하거나, 함수 및 클래스에 대한 문서 주석(DocString)을
						자동으로 생성하여 코드 가독성과 유지보수성을 높입니다.
					</li>
					<li>
						<strong>VIBE 에이전트 연동:</strong>{" "}
						<Link
							href="/docs/vibe-ai/vibe-agent"
							className="text-pink-400 hover:underline"
						>
							VIBE 에이전트
						</Link>
						를 호출하여 반복적인 작업을 지시하거나 자동화된 워크플로우를 실행할
						수 있습니다. (예: "@agent 새 컴포넌트 만들어줘")
					</li>
				</ul>
				<div className="bg-gray-800 p-4 rounded-md shadow">
					<h4 className="font-semibold text-purple-200 mb-2">
						VIBE 어시스턴트의 지향점:
					</h4>
					<p className="text-sm">
						개발자의 창의적인 문제 해결에 집중할 수 있는 환경을 제공하고, "막힘"
						없는 개발 경험을 선사하여 개발의 즐거움을 높이는 것입니다.
					</p>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE 어시스턴트 시작하기
				</h2>
				<p className="mb-4">
					VIBE 어시스턴트는 IDE 내에서 쉽게 접근하고 사용할 수 있습니다.
				</p>
				<ol className="list-decimal pl-6 mb-6 space-y-3">
					<li>
						<strong>어시스턴트 패널 열기:</strong> VIBE IDE의 사이드바에서
						'어시스턴트' 아이콘을 클릭하거나, 단축키(예:{" "}
						<code className="bg-gray-700 px-1 rounded">Ctrl+Shift+A</code>)를
						사용하여 어시스턴트 채팅 패널을 엽니다.
					</li>
					<li>
						<strong>질문 또는 요청 입력:</strong> 채팅 입력창에 궁금한 점이나
						필요한 작업을 자연어로 입력합니다. (예: "React에서 상태 관리하는
						가장 좋은 방법은 뭐야?", "이 Python 코드를 최적화해줘.")
					</li>
					<li>
						<strong>코드 참조:</strong> 질문이나 요청과 관련된 코드가 있다면,
						해당 코드를 에디터에서 선택한 후 어시스턴트에게 문의하면 더욱 정확한
						답변을 얻을 수 있습니다. 일부 어시스턴트는 선택된 코드를 자동으로
						참조합니다.
					</li>
					<li>
						<strong>제안 적용 및 추가 질문:</strong> 어시스턴트가 제공한
						답변이나 코드 제안을 검토하고, 필요시 클릭 한 번으로 코드에 적용할
						수 있습니다. 이해가 안 되거나 추가 정보가 필요하면 계속해서 질문할
						수 있습니다.
					</li>
				</ol>
				{/* TODO: VIBE 어시스턴트 UI 스크린샷 또는 GIF 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					효과적인 어시스턴트 활용 팁
				</h2>
				<ul className="list-disc pl-6 mb-6 space-y-3">
					<li>
						<strong>명확하고 구체적인 질문:</strong> 원하는 답변을 얻기 위해서는
						질문이나 요청을 최대한 명확하고 구체적으로 작성하는 것이 좋습니다.
						(예: "JavaScript 배열 정렬" 보다는 "JavaScript에서 객체 배열을 특정
						속성값 기준으로 내림차순 정렬하는 방법 알려줘")
					</li>
					<li>
						<strong>맥락 정보 제공:</strong> 해결하려는 문제, 사용 중인 특정
						라이브러리나 프레임워크 버전 등 관련 맥락 정보를 함께 제공하면
						어시스턴트가 더 정확하고 유용한 답변을 생성하는 데 도움이 됩니다.
					</li>
					<li>
						<strong>단계별 접근:</strong> 복잡한 문제의 경우 한 번에 모든 것을
						해결하려고 하기보다, 문제를 작은 단위로 나누어 단계별로 질문하고
						해결해 나가는 것이 효과적입니다.
					</li>
					<li>
						<strong>다양한 관점 요청:</strong> 특정 문제에 대한 여러 가지
						해결책이나 다른 접근 방식을 요청하여 더 나은 아이디어를 얻을 수
						있습니다. (예: "다른 방법은 없어?")
					</li>
					<li>
						<strong>피드백 제공:</strong> 어시스턴트의 답변이 도움이 되었거나
						그렇지 않았다면 피드백을 제공해주세요. 이는 어시스턴트의 성능 개선에
						기여합니다. (피드백 기능 지원 시)
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					어시스턴트와 에이전트의 시너지
				</h2>
				<p className="mb-4">
					VIBE 어시스턴트는{" "}
					<Link
						href="/docs/vibe-ai/vibe-agent"
						className="text-pink-400 hover:underline"
					>
						VIBE 에이전트
					</Link>
					와 함께 사용할 때 더욱 강력한 시너지를 발휘합니다. 어시스턴트와의
					대화를 통해 복잡한 작업을 구상하고 계획한 후, 에이전트에게 해당 작업의
					실행을 지시하여 개발 워크플로우를 혁신적으로 개선할 수 있습니다.
				</p>
				<p className="mb-4">
					예를 들어, 어시스턴트와 함께 새로운 API 엔드포인트 설계를 논의하고, 그
					결과를 바탕으로 "@agent 이 명세대로 CRUD API 만들어줘"라고
					에이전트에게 지시할 수 있습니다.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					개인 정보 보호 및 보안
				</h2>
				<p className="mb-4">
					VIBE 어시스턴트 사용 시 입력되는 코드와 대화 내용은 사용자의 명시적인
					동의 없이 외부로 공유되거나 다른 AI 모델 학습에 사용되지 않습니다.
					VIBE는 사용자의 데이터 프라이버시와 코드 보안을 매우 중요하게
					생각하며, 이를 보호하기 위한 기술적, 관리적 조치를 시행하고 있습니다.
					자세한 내용은{" "}
					<Link
						href="/privacy-policy"
						className="text-pink-400 hover:underline"
					>
						개인정보처리방침
					</Link>
					을 참고해주세요.
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다음 단계
				</h2>
				<p className="mb-4">
					VIBE 어시스턴트와 함께 더욱 스마트하고 효율적인 개발을 경험해보세요.
					VIBE AI의 다른 강력한 기능들도 살펴보시는 것을 추천합니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<Link
							href="/docs/vibe-ai/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE AI 개요
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-ai/vibe-agent"
							className="text-pink-400 hover:underline"
						>
							VIBE 에이전트
						</Link>
					</li>
					<li>
						<Link
							href="/docs/getting-started/quickstarts"
							className="text-pink-400 hover:underline"
						>
							VIBE 시작하기 퀵스타트
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};
export default VibeAssistantPage;
