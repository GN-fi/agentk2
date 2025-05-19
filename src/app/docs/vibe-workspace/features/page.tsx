import Link from "next/link";

export const dynamic = "force-dynamic";

const FeaturesPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 작업 공간: 생산성을 극대화하는 주요 기능
			</h1>
			<p className="mb-8 text-lg">
				VIBE 작업 공간은 개발자 여러분의 창의적인 아이디어를 현실로 만들 수
				있도록 강력하고 다양한 기능들을 제공합니다. 단순한 코드 편집기를 넘어,
				개발의 모든 단계를 지원하는 통합 환경을 경험해보세요. VIBE 작업 공간의
				핵심 기능들을 자세히 살펴보겠습니다.
			</p>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					1. 차세대 웹 기반 코드 에디터
				</h2>
				<p className="mb-4">
					VIBE의 핵심에는 고성능 웹 기반 코드 에디터가 자리 잡고 있습니다.
					데스크톱 IDE와 견주어도 손색없는 풍부한 기능을 제공하여 어디서든
					편리하게 코드를 작성하고 수정할 수 있습니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>다양한 언어 지원:</strong> JavaScript, TypeScript, Python,
						Java, C++, Go 등 주요 프로그래밍 언어에 대한 구문 강조, 자동 완성,
						인텔리센스 기능을 지원합니다.
					</li>
					<li>
						<strong>스마트 코드 완성 및 제안:</strong> 문맥을 이해하는 AI 기반
						코드 완성 기능으로 오타를 줄이고 개발 속도를 높여줍니다.
					</li>
					<li>
						<strong>코드 탐색 및 리팩토링:</strong> 심볼 정의로 이동, 참조 찾기,
						이름 변경 등 강력한 코드 탐색 및 리팩토링 도구를 제공합니다.
					</li>
					<li>
						<strong>통합 터미널:</strong> 에디터 내에서 바로 터미널 명령을
						실행하고 결과를 확인할 수 있어 컨텍스트 전환 없이 작업을 이어갈 수
						있습니다.
					</li>
					<li>
						<strong>멀티 커서 및 다중 선택:</strong> 여러 위치를 동시에 편집할
						수 있는 멀티 커서 기능으로 반복적인 수정을 효율적으로 처리합니다.
					</li>
					<li>
						<strong>단축키 및 사용자 설정:</strong> 다양한 단축키를 지원하며,
						사용자 정의 설정을 통해 개인에게 최적화된 편집 환경을 구성할 수
						있습니다.
					</li>
				</ul>
				{/* TODO: 코드 에디터 주요 기능 (자동 완성, 구문 강조 등) 스크린샷 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					2. 내장 터미널 및 명령줄 인터페이스
				</h2>
				<p className="mb-4">
					VIBE 작업 공간에는 완전한 기능을 갖춘 내장 터미널이 포함되어 있어,
					별도의 터미널 프로그램을 열 필요 없이 IDE 내에서 직접 명령을 실행할 수
					있습니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>다중 터미널 인스턴스:</strong> 여러 개의 터미널 세션을
						동시에 열고 관리할 수 있어 병렬 작업에 유용합니다.
					</li>
					<li>
						<strong>셸 선택 가능:</strong> Bash, Zsh, PowerShell 등 사용자가
						선호하는 셸 환경을 선택하여 사용할 수 있습니다 (지원 범위는 지속
						확대 예정).
					</li>
					<li>
						<strong>명령 히스토리 및 자동 완성:</strong> 이전 사용 명령어
						히스토리 접근 및 기본적인 자동 완성 기능을 지원합니다.
					</li>
					<li>
						<strong>VIBE CLI 통합:</strong> VIBE 자체 CLI 도구와 완벽하게
						통합되어 프로젝트 생성, 빌드, 배포, VIBE 에이전트 제어 등 다양한
						작업을 터미널에서 직접 수행할 수 있습니다.
					</li>
				</ul>
				{/* TODO: 내장 터미널 사용 예시 (여러 탭, 명령어 실행) 스크린샷 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					3. 직관적인 파일 관리 시스템
				</h2>
				<p className="mb-4">
					드래그 앤 드롭을 지원하는 직관적인 파일 탐색기를 통해 프로젝트 내
					파일과 폴더를 쉽게 생성, 수정, 삭제하고 관리할 수 있습니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>트리 뷰 탐색기:</strong> 익숙한 트리 구조로 프로젝트 파일을
						한눈에 파악하고 빠르게 접근할 수 있습니다.
					</li>
					<li>
						<strong>파일 및 폴더 작업:</strong> 생성, 이름 변경, 복사, 붙여넣기,
						이동, 삭제 등 기본적인 파일 시스템 작업을 지원합니다.
					</li>
					<li>
						<strong>검색 기능:</strong> 프로젝트 전체 또는 특정 폴더 내에서
						파일명 또는 내용으로 파일을 빠르게 검색합니다.
					</li>
					<li>
						<strong>업로드 및 다운로드:</strong> 로컬 파일을 작업 공간으로 쉽게
						업로드하거나, 작업 공간의 파일을 로컬로 다운로드할 수 있습니다.
					</li>
					<li>
						<strong>대용량 파일 지원:</strong> 효율적인 파일 처리 메커니즘을
						통해 대용량 파일도 안정적으로 관리합니다.
					</li>
				</ul>
				{/* TODO: 파일 탐색기 및 파일 작업 (검색, 업로드 등) 스크린샷 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					4. Git 기반 버전 관리 통합
				</h2>
				<p className="mb-4">
					VIBE는 Git 버전 관리를 작업 공간에 깊숙이 통합하여 코드 변경 사항을
					추적하고, 브랜치를 관리하며, 원격 저장소와 손쉽게 동기화할 수 있도록
					지원합니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>직관적인 Git 인터페이스:</strong> UI를 통해 스테이징, 커밋,
						푸시, 풀, 브랜치 변경, 병합 등 주요 Git 작업을 쉽게 수행할 수
						있습니다.
					</li>
					<li>
						<strong>변경 사항 시각화:</strong> 코드 변경 사항(diff)을 시각적으로
						명확하게 보여주어 커밋 전에 리뷰하기 용이합니다.
					</li>
					<li>
						<strong>브랜치 관리:</strong> 새로운 브랜치를 생성하고, 브랜치 간
						전환하며, 병합 및 충돌 해결을 지원합니다.
					</li>
					<li>
						<strong>원격 저장소 연동:</strong> GitHub, GitLab, Bitbucket 등 주요
						Git 호스팅 서비스와 쉽게 연동하여 프로젝트를 관리합니다.
					</li>
				</ul>
				<p>
					더 자세한 내용은{" "}
					<Link
						href="/docs/vibe-workspace/version-control"
						className="text-pink-400 hover:underline"
					>
						버전 관리 기능 문서
					</Link>
					를 참고하세요.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					5. VIBE AI: 지능형 개발 동반자
				</h2>
				<p className="mb-4">
					VIBE 작업 공간은{" "}
					<Link
						href="/docs/vibe-ai/overview"
						className="text-pink-400 hover:underline"
					>
						VIBE AI
					</Link>
					의 강력한 기능들을 바로 사용할 수 있도록 통합되어 있습니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>VIBE 어시스턴트:</strong> 코드 관련 질문, 오류 해결, 새로운
						기술 학습 등 개발 중 궁금한 점을 언제든지 물어보고 즉각적인 답변과
						가이드를 받을 수 있습니다. (자세히:{" "}
						<Link
							href="/docs/vibe-ai/vibe-assistant"
							className="text-pink-400 hover:underline"
						>
							VIBE 어시스턴트
						</Link>
						)
					</li>
					<li>
						<strong>VIBE 에이전트:</strong> 반복적인 작업, 코드 생성, 테스트
						자동화, 배포 프로세스 관리 등 복잡한 작업을 AI 에이전트에게 위임하여
						개발 효율성을 극대화합니다. (자세히:{" "}
						<Link
							href="/docs/vibe-ai/vibe-agent"
							className="text-pink-400 hover:underline"
						>
							VIBE 에이전트
						</Link>
						)
					</li>
					<li>
						<strong>AI 기반 코드 분석 및 제안:</strong> 코드 품질, 잠재적 버그,
						성능 최적화 방안 등을 AI가 분석하고 개선안을 제안합니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					6. 실시간 협업 및 공유
				</h2>
				<p className="mb-4">
					VIBE 작업 공간은 팀 단위 개발을 위한 강력한 협업 기능을 제공합니다.
					프로젝트와 파일을 팀원과 공유하고 실시간으로 함께 작업하세요.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>실시간 공동 편집:</strong> 여러 사용자가 동시에 같은 파일을
						열고 편집하며, 각자의 커서 위치와 변경 사항을 실시간으로 확인할 수
						있습니다.
					</li>
					<li>
						<strong>프로젝트 공유 및 권한 관리:</strong> 작업 공간 또는 개별
						프로젝트를 팀원에게 공유하고, 읽기 전용, 편집 가능 등 세분화된 접근
						권한을 설정할 수 있습니다.
					</li>
					<li>
						<strong>코드 리뷰 및 주석:</strong> 코드 변경 사항에 대해 팀원들과
						의견을 나누고, 특정 코드 라인에 직접 주석을 달아 피드백을 주고받을
						수 있습니다.
					</li>
					<li>
						<strong>채팅 및 알림:</strong> 작업 공간 내에서 팀원들과 실시간으로
						소통하고 중요한 업데이트나 알림을 받을 수 있습니다. (향후 지원 예정)
					</li>
				</ul>
				<p>
					더 자세한 내용은{" "}
					<Link
						href="/docs/vibe-apps/collaboration"
						className="text-pink-400 hover:underline"
					>
						협업 기능 문서
					</Link>
					를 참고하세요.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					7. 실시간 미리보기 및 디버깅
				</h2>
				<p className="mb-4">
					웹 애플리케이션 개발 시 변경 사항을 즉시 확인하고 문제를 빠르게 해결할
					수 있도록 실시간 미리보기와 강력한 디버깅 도구를 제공합니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>통합 웹 서버 및 미리보기:</strong> 코드 수정 시 자동으로
						변경 사항을 감지하고 빌드하여 작업 공간 내에서 바로 웹
						애플리케이션의 실시간 미리보기를 제공합니다.
					</li>
					<li>
						<strong>브라우저 개발자 도구 연동:</strong> 브라우저의 개발자
						도구(Console, Network, Elements 등)와 긴밀하게 연동되어 프론트엔드
						디버깅이 용이합니다.
					</li>
					<li>
						<strong>중단점(Breakpoints) 설정 및 단계별 실행:</strong> 서버
						사이드 및 클라이언트 사이드 코드에 중단점을 설정하고, 코드 실행을
						단계별로 추적하며 변수 값을 확인할 수 있습니다.
					</li>
					<li>
						<strong>로그 및 오류 모니터링:</strong> 애플리케이션 로그 및 오류
						메시지를 작업 공간 내에서 실시간으로 확인하고 분석할 수 있습니다.
					</li>
				</ul>
				{/* TODO: 실시간 미리보기 및 디버깅 도구 사용 화면 스크린샷 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					8. 유연한 환경 설정 및 커스터마이징
				</h2>
				<p className="mb-4">
					개발자의 작업 스타일과 프로젝트 요구사항에 맞춰 작업 공간 환경을
					유연하게 설정하고 커스터마이징할 수 있습니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>환경 변수 관리:</strong> API 키, 데이터베이스 연결 정보 등
						민감한 정보를 안전하게 관리하고 애플리케이션에 주입할 수 있습니다.
					</li>
					<li>
						<strong>테마 변경:</strong> 다양한 라이트/다크 테마를 제공하며,
						사용자가 선호하는 테마를 선택하여 시각적 편안함을 높일 수 있습니다.
						(자세히:{" "}
						<Link
							href="/docs/vibe-workspace/themes"
							prefetch={false}
							className="text-pink-400 hover:underline"
						>
							테마 설정
						</Link>
						)
					</li>
					<li>
						<strong>확장 프로그램 지원 (향후 계획):</strong> VIBE 마켓플레이스를
						통해 다양한 확장 프로그램을 설치하여 작업 공간의 기능을 더욱 확장할
						수 있도록 지원할 예정입니다. (예: Linter, Formatter, 특정 프레임워크
						지원 도구 등)
					</li>
					<li>
						<strong>리소스 할당:</strong> 프로젝트의 규모와 복잡도에 따라 CPU,
						메모리 등 할당된 리소스를 조정할 수 있는 옵션을 제공할 계획입니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					지속적인 발전
				</h2>
				<p className="mb-4">
					VIBE 작업 공간은 사용자 여러분의 피드백을 바탕으로 끊임없이 발전하고
					있습니다. 더욱 강력하고 편리한 개발 환경을 제공하기 위해 새로운 기능
					추가와 기존 기능 개선에 최선을 다할 것입니다. VIBE와 함께 더욱
					스마트하고 효율적인 개발을 경험해보세요!
				</p>
				<p>
					VIBE 작업 공간에 대한 더 자세한 사용법이나 궁금한 점은{" "}
					<Link
						href="/docs/getting-started/introduction"
						className="text-pink-400 hover:underline"
					>
						VIBE 시작하기
					</Link>{" "}
					문서를 참고하거나, 커뮤니티를 통해 문의해주시기 바랍니다.
				</p>
			</section>
		</div>
	);
};
export default FeaturesPage;
