import Link from "next/link";

export const dynamic = "force-static";

const OverviewPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 작업 공간: 모든 개발 여정의 중심
			</h1>
			<p className="mb-8 text-lg">
				VIBE 작업 공간(Workspace)은 여러분의 모든 개발 프로젝트와 VIBE 앱, AI
				기능을 한 곳에서 통합적으로 관리하고 접근할 수 있는 중앙 허브입니다.
				단순한 파일 저장소를 넘어, 아이디어 구상부터 코드 작성, 테스트, 배포,
				협업에 이르기까지 개발의 전체 생명주기를 지원하도록 설계되었습니다.
			</p>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					VIBE 작업 공간이란?
				</h2>
				<p className="mb-4">
					VIBE 작업 공간은 클라우드 기반의 개인화된 개발 환경으로, 사용자의 모든
					프로젝트, 데이터, 설정, 그리고 VIBE의 다양한 도구들을 유기적으로
					연결합니다. 각 작업 공간은 독립적인 컨테이너 환경으로 분리되어
					프로젝트 간의 충돌을 방지하고, 안정적인 개발 환경을 제공합니다.
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>프로젝트 중심 구조:</strong> 모든 작업은 프로젝트 단위로
						구성되며, 각 프로젝트는 자체적인 파일 시스템, 터미널, 버전 관리,
						배포 설정을 가집니다.
					</li>
					<li>
						<strong>통합 개발 환경 (IDE):</strong> 강력한 웹 기반 IDE를 통해
						어디서든 코드를 작성하고, 디버깅하며, 애플리케이션을 실행할 수
						있습니다.
						<Link
							href="/docs/vibe-apps/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE 앱
						</Link>
						과 연동하여 실시간 미리보기 및 테스트가 가능합니다.
					</li>
					<li>
						<strong>AI 기반 지원:</strong>{" "}
						<Link
							href="/docs/vibe-ai/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE AI
						</Link>{" "}
						기능(어시스턴트, 에이전트)이 작업 공간 내에 통합되어 코드 생성,
						분석, 문제 해결 등 개발 전반에 걸쳐 지능적인 지원을 제공합니다.
					</li>
					<li>
						<strong>유연한 확장성:</strong> 다양한 프로그래밍 언어와
						프레임워크를 지원하며, 필요에 따라 리소스를 유연하게 확장하거나
						축소할 수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					주요 기능 및 이점
				</h2>
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							1. 통합 프로젝트 관리
						</h4>
						<p className="text-sm">
							여러 프로젝트를 한 곳에서 생성, 관리하고 손쉽게 전환하며 작업할 수
							있습니다. 각 프로젝트는 독립적인 환경을 유지합니다.
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							2. 강력한 웹 IDE
						</h4>
						<p className="text-sm">
							코드 편집, 터미널 접근, 디버깅, 실시간 미리보기 등 데스크톱 IDE
							수준의 기능을 웹 브라우저에서 제공합니다.
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							3. AI 기반 개발 지원
						</h4>
						<p className="text-sm">
							VIBE 어시스턴트 및 에이전트를 통해 코드 자동 생성, 오류 분석,
							리팩토링 제안 등 개발 생산성을 극대화합니다.
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							4. 간편한 협업
						</h4>
						<p className="text-sm">
							작업 공간 및 프로젝트를 팀원과 공유하고, 실시간으로 코드를 함께
							편집하며 아이디어를 나눌 수 있습니다. (자세한 내용은{" "}
							<Link
								href="/docs/vibe-apps/collaboration"
								className="text-pink-400 hover:underline"
							>
								협업 기능 문서
							</Link>{" "}
							참조)
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							5. 버전 관리 통합
						</h4>
						<p className="text-sm">
							Git 기반의 버전 관리를 기본으로 지원하며, GitHub, GitLab 등 외부
							저장소와의 연동이 용이합니다. (자세한 내용은{" "}
							<Link
								href="/docs/vibe-workspace/version-control"
								className="text-pink-400 hover:underline"
							>
								버전 관리 문서
							</Link>{" "}
							참조)
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							6. 원클릭 배포
						</h4>
						<p className="text-sm">
							개발한 애플리케이션을 VIBE 플랫폼 또는 다양한 클라우드 서비스로
							손쉽게 배포하고 관리할 수 있습니다. (자세한 내용은{" "}
							<Link
								href="/docs/deployments/overview"
								className="text-pink-400 hover:underline"
							>
								배포 개요 문서
							</Link>{" "}
							참조)
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							7. 사용자 정의 테마
						</h4>
						<p className="text-sm">
							작업 공간의 UI 테마를 사용자의 취향에 맞게 변경하여 더욱 편안한
							개발 환경을 조성할 수 있습니다. (자세한 내용은{" "}
							<Link
								href="/docs/vibe-workspace/themes"
								prefetch={false}
								className="text-pink-400 hover:underline"
							>
								테마 설정 문서
							</Link>{" "}
							참조)
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							8. 다양한 기능 접근
						</h4>
						<p className="text-sm">
							환경 설정, 파일 관리, 확장 기능 설치 등 작업 공간 내에서 다양한
							부가 기능을 편리하게 이용할 수 있습니다. (자세한 내용은{" "}
							<Link
								href="/docs/vibe-workspace/features"
								className="text-pink-400 hover:underline"
							>
								주요 기능 문서
							</Link>{" "}
							참조)
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					VIBE 작업 공간 시작하기
				</h2>
				<p className="mb-4">
					VIBE 작업 공간을 사용하는 것은 매우 간단합니다. VIBE에 로그인하면 기본
					작업 공간이 제공되며, 필요에 따라 새로운 작업 공간을 생성하거나 기존
					작업 공간에 참여할 수 있습니다.
				</p>
				<ol className="mb-6 list-decimal space-y-3 pl-6">
					<li>
						<strong>로그인 및 대시보드 접근:</strong> VIBE 계정으로 로그인하여
						대시보드에 접속합니다.
					</li>
					<li>
						<strong>프로젝트 생성 또는 선택:</strong> 새 프로젝트를 시작하거나
						기존 프로젝트를 작업 공간으로 가져옵니다. 템플릿을 활용하여 빠르게
						시작할 수도 있습니다.
					</li>
					<li>
						<strong>개발 환경 설정:</strong> 필요한 언어, 프레임워크,
						라이브러리를 선택하고 환경 변수를 설정합니다.
					</li>
					<li>
						<strong>코딩 시작:</strong> 웹 IDE를 열고 코드를 작성하거나, Git
						저장소를 클론하여 작업을 시작합니다.
					</li>
					<li>
						<strong>AI 지원 활용:</strong> VIBE 어시스턴트에게 질문하거나, VIBE
						에이전트를 통해 반복적인 작업을 자동화합니다.
					</li>
				</ol>
				{/* TODO: VIBE 작업 공간 대시보드 또는 프로젝트 생성 화면 스크린샷 추가 */}
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					다음 단계
				</h2>
				<p className="mb-4">
					VIBE 작업 공간은 VIBE 생태계의 핵심입니다. 다음 문서들을 통해 작업
					공간의 다양한 기능과 활용법을 더 자세히 알아보세요.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
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
							href="/docs/vibe-workspace/features"
							className="text-pink-400 hover:underline"
						>
							작업 공간 주요 기능
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-workspace/version-control"
							className="text-pink-400 hover:underline"
						>
							버전 관리
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-workspace/themes"
							prefetch={false}
							className="text-pink-400 hover:underline"
						>
							테마 및 사용자 정의
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-apps/collaboration"
							className="text-pink-400 hover:underline"
						>
							팀 협업 기능
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};
export default OverviewPage;
