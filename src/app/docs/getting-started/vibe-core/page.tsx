import Link from "next/link";
import {
	FiCpu,
	FiUsers,
	FiTerminal,
	FiCloud,
	FiGitMerge,
	FiPlayCircle,
	FiBookOpen,
	FiArrowRight,
	FiZap,
	FiTool,
} from "react-icons/fi";

const VibeCorePage = () => {
	return (
		<article className="prose prose-invert max-w-none prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300">
			<h1 id="vibe-core-소개">VIBE Core: 강력한 개발 엔진</h1>
			<p className="lead">
				VIBE Core는 VIBE 플랫폼의 심장부로, 개발자가 아이디어를 현실로 빠르고
				효율적으로 만들 수 있도록 설계된 핵심 엔진입니다. 최신 기술과 직관적인
				인터페이스를 결합하여 원활한 개발 경험을 제공합니다.
			</p>

			<h2 id="주요-기능-및-특징">주요 기능 및 특징</h2>
			<div className="grid md:grid-cols-2 gap-6 my-8">
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiUsers className="w-6 h-6 mr-2" />
						실시간 협업
					</h3>
					<p className="text-gray-400">
						팀원들과 동시에 코드를 편집하고, 변경 사항을 즉시 확인하며
						아이디어를 공유하세요. 마치 한 공간에 있는 것처럼 원활한 협업이
						가능합니다.
					</p>
				</div>
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiCpu className="w-6 h-6 mr-2" />
						AI 기반 코드 어시스턴트
					</h3>
					<p className="text-gray-400">
						VIBE AI의 강력한 지원을 받아 코드 생성, 디버깅, 설명, 리팩토링 등
						개발의 모든 단계에서 생산성을 극대화하세요.
					</p>
				</div>
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiTerminal className="w-6 h-6 mr-2" />
						내장 터미널 및 실행 환경
					</h3>
					<p className="text-gray-400">
						별도의 설정 없이 즉시 코드를 실행하고 결과를 확인할 수 있는 완전한
						개발 환경을 제공합니다. 다양한 언어와 프레임워크를 지원합니다.
					</p>
				</div>
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiZap className="w-6 h-6 mr-2" />
						다양한 프로젝트 템플릿
					</h3>
					<p className="text-gray-400">
						웹사이트, 백엔드 API, 머신러닝 모델 등 다양한 종류의 프로젝트를 위한
						템플릿을 제공하여 빠르게 개발을 시작할 수 있습니다.
					</p>
				</div>
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiCloud className="w-6 h-6 mr-2" />
						원클릭 배포
					</h3>
					<p className="text-gray-400">
						복잡한 과정 없이 클릭 몇 번으로 애플리케이션을 클라우드에 배포하고
						전 세계 사용자와 공유하세요.
					</p>
				</div>
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<h3 className="flex items-center text-xl font-semibold text-purple-300 mb-2">
						<FiGitMerge className="w-6 h-6 mr-2" />
						통합된 버전 관리
					</h3>
					<p className="text-gray-400">
						Git을 기본으로 지원하여 코드 변경 사항을 손쉽게 추적하고, 브랜치를
						관리하며, 팀원들과 효율적으로 협업할 수 있습니다.
					</p>
				</div>
			</div>

			<h2 id="vibe-core-시작하기">VIBE Core 시작하기</h2>
			<p>
				VIBE Core를 경험하는 가장 좋은 방법은 직접 사용해보는 것입니다.
				<Link href="/docs/getting-started/quickstarts">빠른 시작 가이드</Link>를
				따라 첫 번째 VIBE 앱을 만들어보세요. VIBE Core의 강력함과 편리함을 즉시
				느낄 수 있을 것입니다. 새 프로젝트를 생성하고, 몇 줄의 코드를 작성한 후
				'실행' 버튼을 누르기만 하면 아이디어가 현실이 되는 마법을 경험할 수
				있습니다.
			</p>
			<div className="my-6 p-4 border border-gray-700 rounded-lg bg-gray-800/50 text-center">
				<Link
					href="/editor/~"
					className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transition-colors group text-lg"
				>
					<FiPlayCircle className="w-5 h-5 mr-2" />
					지금 바로 VIBE 앱 만들기
				</Link>
			</div>

			<h2 id="핵심-구성-요소">핵심 구성 요소</h2>
			<p>
				VIBE Core는 다음과 같은 핵심 구성 요소들을 통해 강력한 개발 환경을
				제공합니다:
			</p>
			<ul className="list-disc list-inside my-4 space-y-2 pl-4">
				<li>
					<strong>스마트 에디터:</strong> 자동 완성, 구문 강조, AI 기반 코드
					제안 등으로 코딩 효율을 높여줍니다.
				</li>
				<li>
					<strong>통합 개발 환경 (IDE):</strong> 파일 관리, 코드 편집, 빌드,
					실행, 디버깅 등 개발에 필요한 모든 도구를 한 곳에서 제공합니다.
				</li>
				<li>
					<strong>애플리케이션 호스팅:</strong> 개발한 애플리케이션을 손쉽게
					배포하고 운영할 수 있는 인프라를 제공합니다.
				</li>
				<li>
					<strong>확장성:</strong> 다양한 플러그인과 통합 기능을 통해 VIBE
					Core의 기능을 확장할 수 있습니다.
				</li>
			</ul>

			<div className="mt-12 p-8 bg-gray-800/70 rounded-xl shadow-xl">
				<h3 className="flex items-center text-2xl font-semibold text-purple-300 mb-6">
					<FiBookOpen className="w-7 h-7 mr-3" />
					다음으로 무엇을 배울까요?
				</h3>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					<Link
						href="/docs/vibe-workspace/overview"
						className="block p-6 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/30"
					>
						<h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center">
							<FiTool className="w-5 h-5 mr-2" /> VIBE 작업 공간
						</h4>
						<p className="text-sm text-gray-400">
							파일 관리, 설정 등 VIBE 작업 환경을 자세히 알아보세요.
						</p>
					</Link>
					<Link
						href="/docs/vibe-ai/overview"
						className="block p-6 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/30"
					>
						<h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center">
							<FiCpu className="w-5 h-5 mr-2" /> VIBE AI 기능
						</h4>
						<p className="text-sm text-gray-400">
							코드 생성, 디버깅 등 AI 기반의 모든 기능을 살펴보세요.
						</p>
					</Link>
					<Link
						href="/docs/deployments/overview"
						className="block p-6 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/30"
					>
						<h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center">
							<FiCloud className="w-5 h-5 mr-2" /> 앱 배포하기
						</h4>
						<p className="text-sm text-gray-400">
							만든 애플리케이션을 세상에 공개하는 방법을 알아보세요.
						</p>
					</Link>
					<Link
						href="/docs"
						className="block p-6 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/30"
					>
						<h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center">
							<FiBookOpen className="w-5 h-5 mr-2" /> 모든 문서 보기
						</h4>
						<p className="text-sm text-gray-400">
							VIBE의 모든 기능과 가이드를 확인하세요.
						</p>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default VibeCorePage;
