import Link from "next/link";
import {
	FiArrowRight,
	FiBox,
	FiDatabase,
	FiGrid,
	FiLayers,
	FiTerminal,
	FiUploadCloud,
	FiUsers,
	FiZap,
} from "react-icons/fi";

const AppsOverviewPage = () => {
	return (
		<article className="prose prose-invert max-w-none prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300">
			<h1 id="vibe-apps-overview-title">VIBE 앱 개요: 아이디어를 현실로</h1>
			<p className="lead">
				VIBE 앱은 여러분의 창의적인 아이디어를 실제 작동하는 애플리케이션으로
				구현하는 핵심 단위입니다. 웹사이트, API 서버, 데이터 분석 스크립트, AI
				챗봇, 게임 등 상상하는 모든 것을 VIBE 앱으로 만들 수 있습니다. VIBE는
				개발의 시작부터 배포, 관리에 이르기까지 모든 과정을 지원하는 강력한 통합
				환경을 제공합니다.
			</p>

			<h2 id="vibe-app-definition">VIBE 앱이란 무엇인가요?</h2>
			<p>
				간단히 말해, VIBE에서 생성하고 관리하는 모든 프로젝트가 바로 'VIBE
				앱'입니다. VIBE 앱은 코드 파일, 라이브러리, 설정, 실행 환경, 그리고
				필요에 따라 데이터베이스나 스토리지까지 포함하는 완전한 개발 단위입니다.
				VIBE의 클라우드 기반 환경 덕분에, 여러분은 언제 어디서든 웹 브라우저를
				통해 VIBE 앱에 접근하여 작업을 이어갈 수 있습니다.
			</p>

			<h2 id="what-can-you-do-with-vibe-apps">
				VIBE 앱으로 무엇을 할 수 있나요?
			</h2>
			<div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<FiZap className="w-8 h-8 text-purple-400 mb-3" />
					<h3 className="text-xl font-semibold text-purple-300 mb-2">
						신속한 프로토타이핑
					</h3>
					<p className="text-gray-300 text-sm">
						VIBE AI의 도움과 다양한 프로젝트 템플릿을 활용하여 아이디어를 빠르게
						시제품으로 만들어보고 검증할 수 있습니다.
					</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<FiLayers className="w-8 h-8 text-purple-400 mb-3" />
					<h3 className="text-xl font-semibold text-purple-300 mb-2">
						풀스택 애플리케이션 개발
					</h3>
					<p className="text-gray-300 text-sm">
						프론트엔드 UI부터 백엔드 로직, 데이터베이스 연동까지, 복잡한 풀스택
						애플리케이션 개발에 필요한 모든 것을 VIBE에서 해결하세요.
					</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<FiUsers className="w-8 h-8 text-purple-400 mb-3" />
					<h3 className="text-xl font-semibold text-purple-300 mb-2">
						실시간 공동 작업
					</h3>
					<p className="text-gray-300 text-sm">
						팀원들과 함께 실시간으로 코드를 작성하고, 의견을 나누며 프로젝트를
						효율적으로 진행할 수 있습니다. 페어 프로그래밍도 문제없습니다.
					</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<FiUploadCloud className="w-8 h-8 text-purple-400 mb-3" />
					<h3 className="text-xl font-semibold text-purple-300 mb-2">
						간편한 배포 및 공유
					</h3>
					<p className="text-gray-300 text-sm">
						단 몇 번의 클릭만으로 여러분의 VIBE 앱을 전 세계에 공개하거나, 특정
						사용자와 안전하게 공유할 수 있습니다.
					</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg shadow-md">
					<FiGrid className="w-8 h-8 text-purple-400 mb-3" />
					<h3 className="text-xl font-semibold text-purple-300 mb-2">
						다양한 기술 실험 및 학습
					</h3>
					<p className="text-gray-300 text-sm">
						새로운 프로그래밍 언어, 프레임워크, 라이브러리를 VIBE의 격리된
						환경에서 부담 없이 실험하고 학습하는 데 최적의 공간입니다.
					</p>
				</div>
			</div>

			<h2 id="vibe-app-components">VIBE 앱의 주요 구성 요소</h2>
			<p>
				모든 VIBE 앱은 일반적으로 다음과 같은 주요 구성 요소들을 포함합니다
				(프로젝트 유형에 따라 다를 수 있습니다):
			</p>
			<ul className="list-disc list-inside my-4 space-y-2 pl-4">
				<li>
					<strong className="text-purple-300">작업 공간 (Workspace):</strong>{" "}
					코드를 작성하고 파일을 관리하는 공간입니다. 파일 탐색기, 코드 에디터,
					버전 관리 도구 등이 포함됩니다.
				</li>
				<li>
					<strong className="text-purple-300">실행 환경 (Runtime):</strong> 앱을
					실행하는 데 필요한 소프트웨어 환경입니다. 선택한 언어(Python, Node.js
					등) 및 프레임워크에 맞춰 구성됩니다.
				</li>
				<li>
					<strong className="text-purple-300">콘솔 및 터미널:</strong> 앱의
					로그를 확인하고, 명령어를 실행하며, 패키지를 관리하는
					인터페이스입니다.
				</li>
				<li>
					<strong className="text-purple-300">
						데이터베이스 및 스토리지 (선택 사항):
					</strong>{" "}
					앱의 데이터를 영구적으로 저장하기 위한 VIBE 데이터베이스 또는 외부
					스토리지 서비스 연동 기능입니다.
				</li>
				<li>
					<strong className="text-purple-300">배포 서비스:</strong> 앱을
					인터넷에 공개하고 사용자들이 접근할 수 있도록 하는 VIBE의 호스팅 및
					배포 관련 기능입니다.
				</li>
			</ul>

			<h2 id="what-this-section-covers">이 섹션에서 다룰 내용</h2>
			<p>
				"VIBE 앱" 문서 섹션에서는 VIBE 앱을 만들고, 관리하고, 다른 사람들과
				협업하며, 최종적으로 배포하는 전 과정에 대해 자세히 알아봅니다. 템플릿
				활용법부터 고급 설정, 앱 임베딩까지 VIBE 앱을 최대한 활용하는 데 필요한
				모든 정보를 제공할 것입니다.
			</p>

			<div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold text-purple-300 mb-3">
					다음으로 이동
				</h3>
				<p className="text-gray-300 mb-4">
					VIBE 앱의 기본 개념을 이해하셨다면, 이제 직접 앱을 만들어보거나 다른
					기능들을 살펴보세요.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/docs/vibe-apps/templates" // 템플릿 페이지 경로 (추후 생성)
						className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transition-colors group"
					>
						템플릿으로 앱 만들기
						<FiArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs/vibe-apps/collaboration"
						className="inline-flex items-center px-6 py-3 border border-purple-500 hover:bg-purple-500/20 text-purple-300 font-semibold rounded-md shadow-md transition-colors group"
					>
						협업 기능 알아보기
						<FiArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default AppsOverviewPage;
