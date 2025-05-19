import Link from "next/link";

// 이 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

const VibeAgentPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-6 text-purple-400">
				VIBE 에이전트: 개발 워크플로우 자동화
			</h1>
			<p className="text-lg mb-8">
				VIBE 에이전트는 반복적이고 시간 소모적인 개발 작업을 자동화하여 개발자가
				보다 창의적이고 중요한 문제 해결에 집중할 수 있도록 돕는 지능형 AI
				파트너입니다. VIBE 작업 공간과 긴밀하게 통합되어 프로젝트 관리, 코드
				생성, 테스트, 배포 등 다양한 개발 단계를 지원합니다.
			</p>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE 에이전트의 주요 기능
				</h2>
				<ul className="list-disc pl-6 mb-6 space-y-3">
					<li>
						<strong>지능형 작업 자동화:</strong> 단순 스크립트 실행을 넘어,
						문맥을 이해하고 사용자의 의도에 맞는 복잡한 작업을 수행합니다. 예를
						들어, "새로운 React 컴포넌트를 만들고, 기본 테스트 코드를
						작성해줘"와 같은 자연어 명령을 이해하고 처리할 수 있습니다.
					</li>
					<li>
						<strong>프로젝트 컨텍스트 인지:</strong> 현재 작업 중인 프로젝트의
						파일 구조, 사용된 기술 스택, 코드 스타일 등을 학습하여 맞춤형 지원을
						제공합니다.
					</li>
					<li>
						<strong>사용자 정의 에이전트 생성:</strong> 특정 프로젝트나 팀의
						워크플로우에 맞는 맞춤형 에이전트 작업을 정의하고 재사용할 수
						있습니다. (향후 지원 예정)
					</li>
					<li>
						<strong>백그라운드 작업 수행:</strong> 시간이 오래 걸리는 작업(예:
						대규모 테스트 실행, 프로덕션 빌드)을 백그라운드에서 처리하고 완료 시
						알림을 제공합니다.
					</li>
					<li>
						<strong>외부 도구 연동:</strong> GitHub, Jira, Slack 등 다양한 외부
						개발 도구 및 서비스와 연동하여 워크플로우를 확장하고 자동화할 수
						있습니다. (향후 지원 예정)
					</li>
					<li>
						<strong>학습 및 개선:</strong> 사용자와의 상호작용 및 피드백을 통해
						지속적으로 학습하고 성능을 개선하여 더욱 정확하고 효율적인 지원을
						제공합니다.
					</li>
				</ul>
				<div className="bg-gray-800 p-4 rounded-md shadow">
					<h4 className="font-semibold text-purple-200 mb-2">
						VIBE 에이전트의 목표:
					</h4>
					<p className="text-sm">
						단순 반복 작업을 줄여 개발자의 번아웃을 예방하고, 개발 과정의 병목
						현상을 해소하여 팀 전체의 생산성을 극대화하는 것입니다.
					</p>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE 에이전트 사용 방법
				</h2>
				<p className="mb-4">
					VIBE 에이전트는 VIBE IDE 내의 여러 인터페이스를 통해 접근하고 활용할
					수 있습니다.
				</p>
				<ol className="list-decimal pl-6 mb-6 space-y-3">
					<li>
						<strong>명령 팔레트 (Command Palette):</strong>{" "}
						<code className="bg-gray-700 px-1 rounded">Ctrl+Shift+P</code> (또는{" "}
						<code className="bg-gray-700 px-1 rounded">Cmd+Shift+P</code> on
						Mac)를 눌러 명령 팔레트를 열고, "VIBE Agent:" 또는 "에이전트:"로
						시작하는 명령을 검색하여 실행합니다.
					</li>
					<li>
						<strong>VIBE 어시스턴트 채팅:</strong>{" "}
						<Link
							href="/docs/vibe-ai/vibe-assistant"
							className="text-pink-400 hover:underline"
						>
							VIBE 어시스턴트
						</Link>
						와의 대화창에 자연어로 작업을 지시할 수 있습니다. 예를 들어, "@agent
						테스트 실행해줘" 또는 "@agent API 문서 초안 작성해줘" 와 같이
						에이전트를 호출하여 명령합니다.
					</li>
					<li>
						<strong>에이전트 패널:</strong> (향후 제공 예정) VIBE IDE 사이드바에
						전용 에이전트 패널이 추가되어, 사용 가능한 에이전트 목록 확인, 작업
						실행, 진행 상태 모니터링, 로그 확인 등을 직관적으로 수행할 수
						있습니다.
					</li>
					<li>
						<strong>파일 컨텍스트 메뉴:</strong> 파일 탐색기에서 특정 파일이나
						폴더를 마우스 오른쪽 버튼으로 클릭했을 때 나타나는 컨텍스트 메뉴를
						통해 관련 에이전트 작업을 바로 실행할 수 있습니다. (예: "이 파일에
						대한 단위 테스트 생성")
					</li>
				</ol>
				<div className="bg-gray-800 p-4 rounded-md shadow">
					<h4 className="font-semibold text-purple-200 mb-2">팁:</h4>
					<p className="text-sm">
						자주 사용하는 에이전트 작업은 단축키를 지정하거나 즐겨찾기에
						추가하여 더욱 빠르게 접근할 수 있도록 지원될 예정입니다.
					</p>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					주요 사용 사례
				</h2>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							코드 생성 및 리팩토링
						</h4>
						<p className="text-sm">
							새로운 기능 개발 시 보일러플레이트 코드 자동 생성, 기존 코드의
							가독성 및 성능 개선을 위한 리팩토링 제안 및 자동 적용, API
							클라이언트 코드 생성 등.
						</p>
					</li>
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							테스트 자동화
						</h4>
						<p className="text-sm">
							새로운 코드 변경 사항에 대한 단위 테스트, 통합 테스트 코드 자동
							생성 및 실행, 테스트 커버리지 리포트 생성, 테스트 실패 시 원인
							분석 및 수정 제안.
						</p>
					</li>
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							문서화 지원
						</h4>
						<p className="text-sm">
							코드 주석 기반으로 API 문서 초안 자동 생성, README 파일 업데이트,
							변경 사항에 대한 릴리스 노트 초안 작성.
						</p>
					</li>
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							프로젝트 관리 및 분석
						</h4>
						<p className="text-sm">
							코드 복잡도 분석 및 리포트 생성, 의존성 관리 및 업데이트 제안, Git
							브랜치 관리 전략에 따른 자동화 (예: 기능 브랜치 생성 및 PR 템플릿
							적용).
						</p>
					</li>
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							배포 자동화
						</h4>
						<p className="text-sm">
							개발, 스테이징, 프로덕션 환경별 빌드 및 배포 자동화, 배포 전후
							상태 점검, 롤백 절차 자동화.
						</p>
					</li>
					<li className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							오류 모니터링 및 알림
						</h4>
						<p className="text-sm">
							런타임 오류 발생 시 관련 정보 수집, 개발팀에 알림 전송, 유사 오류
							패턴 분석 및 재발 방지책 제안. (외부 모니터링 도구 연동 필요)
						</p>
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					에이전트 커스터마이징 (향후 계획)
				</h2>
				<p className="mb-4">
					VIBE는 사용자가 자신만의 에이전트 작업을 정의하고 공유할 수 있는
					강력한 커스터마이징 기능을 제공할 계획입니다. 이를 통해 특정 기술
					스택, 프로젝트 요구사항, 또는 팀의 독특한 워크플로우에 최적화된 자동화
					도구를 직접 만들 수 있게 됩니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>스크립트 기반 정의:</strong> Python, JavaScript 등 익숙한
						스크립트 언어를 사용하여 에이전트의 행동 로직을 직접 작성합니다.
					</li>
					<li>
						<strong>GUI 기반 설정:</strong> 코딩 없이도 간단한 작업들은 GUI
						인터페이스를 통해 조합하고 설정할 수 있도록 지원합니다.
					</li>
					<li>
						<strong>커뮤니티 공유:</strong> 사용자들이 만든 유용한 에이전트들을
						VIBE 마켓플레이스나 커뮤니티를 통해 공유하고 다운로드받아 사용할 수
						있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					제한 사항 및 고려 사항
				</h2>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>초기 학습 곡선:</strong> VIBE 에이전트의 모든 기능을
						효과적으로 활용하기 위해서는 약간의 학습 시간이 필요할 수 있습니다.
					</li>
					<li>
						<strong>AI의 한계:</strong> 에이전트는 강력한 AI를 기반으로 하지만,
						모든 상황을 완벽하게 이해하거나 항상 최적의 결과를 제공하지는 못할
						수 있습니다. 중요한 작업의 경우 항상 결과를 검토하고 필요시 수정해야
						합니다.
					</li>
					<li>
						<strong>보안 및 권한:</strong> 에이전트가 프로젝트 파일에 접근하고
						외부 서비스와 통신할 수 있으므로, 보안 설정과 권한 관리에 유의해야
						합니다. VIBE는 안전한 에이전트 실행 환경을 제공하기 위해 노력합니다.
					</li>
					<li>
						<strong>리소스 사용:</strong> 복잡한 에이전트 작업은 일시적으로
						시스템 리소스를 많이 사용할 수 있습니다. VIBE는 리소스 사용을
						최적화하고 사용자에게 관련 정보를 제공합니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다음 단계
				</h2>
				<p className="mb-4">
					VIBE 에이전트를 통해 개발 생산성을 한층 끌어올려 보세요. 다음 문서들을
					통해 VIBE AI의 다른 기능들도 확인해보세요.
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
							href="/docs/vibe-ai/vibe-assistant"
							className="text-pink-400 hover:underline"
						>
							VIBE 어시스턴트
						</Link>{" "}
						(VIBE 에이전트와 함께 사용하면 더욱 강력합니다)
					</li>
					<li>
						<Link
							href="/docs/getting-started/quickstarts"
							className="text-pink-400 hover:underline"
						>
							VIBE 시작하기 퀵스타트
						</Link>{" "}
						(VIBE 환경에 익숙해지기)
					</li>
				</ul>
				<p>
					VIBE 에이전트에 대한 질문이나 피드백이 있다면 언제든지{" "}
					<Link
						href="/docs/getting-started/introduction#커뮤니티-및-지원"
						className="text-pink-400 hover:underline"
					>
						커뮤니티 및 지원 채널
					</Link>
					을 이용해 주세요.
				</p>
			</section>
		</div>
	);
};
export default VibeAgentPage;
