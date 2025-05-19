import Image from "next/image"; // 이미지를 사용한다면 추가
import Link from "next/link";
import {
	FiArrowRight,
	FiBookOpen,
	FiCpu,
	FiDatabase,
	FiGlobe,
	FiLayers,
	FiLayout,
	FiPlusSquare,
	FiZap,
} from "react-icons/fi";

export const dynamic = "force-dynamic";

const TemplatesPage = () => {
	return (
		<article className="prose prose-invert prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300 max-w-none">
			<h1 id="vibe-templates-title">
				VIBE 앱 템플릿: 개발 속도를 높이는 시작점
			</h1>
			<p className="lead">
				VIBE 템플릿은 특정 유형의 애플리케이션 개발을 즉시 시작할 수 있도록 미리
				구성된 프로젝트입니다. 반복적인 초기 설정 작업을 줄이고, 핵심 로직
				개발에 집중하여 아이디어를 빠르게 현실로 만들 수 있도록 도와줍니다.
			</p>

			<h2 id="what-are-templates">VIBE 템플릿이란?</h2>
			<p>
				VIBE 템플릿은 단순히 빈 프로젝트가 아닙니다. 선택한 애플리케이션 유형에
				필요한 기본 구조, 폴더, 주요 파일, 필요한 라이브러리 및 설정, 그리고
				때로는 간단한 예제 코드까지 포함하고 있어, 개발자가 복잡한 초기 설정에
				시간을 쏟지 않고 바로 프로젝트의 핵심 기능 개발에 착수할 수 있게 합니다.
				이를 통해 생산성을 크게 향상시키고, 다양한 기술 스택을 쉽게 경험해볼 수
				있는 기회를 제공합니다.
			</p>
			<div className="not-prose my-6 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h3 className="mb-3 flex items-center text-xl font-semibold text-purple-300">
					<FiZap className="mr-2 h-6 w-6" />
					템플릿 사용의 이점
				</h3>
				<ul className="list-inside list-disc space-y-2 text-gray-300">
					<li>
						<strong>개발 시간 단축:</strong> 프로젝트 초기 설정 및 구성 시간을
						대폭 줄여줍니다.
					</li>
					<li>
						<strong>모범 사례 적용:</strong> 잘 구조화된 프로젝트 템플릿을 통해
						자연스럽게 좋은 개발 습관을 익힐 수 있습니다.
					</li>
					<li>
						<strong>빠른 학습 곡선:</strong> 새로운 기술이나 프레임워크를 배울
						때, 작동하는 예제를 통해 빠르게 이해하고 적응할 수 있습니다.
					</li>
					<li>
						<strong>일관성 유지:</strong> 팀 프로젝트 시 모든 팀원이 동일한
						기반에서 시작하여 개발 환경의 일관성을 유지할 수 있습니다.
					</li>
				</ul>
			</div>

			<h2 id="how-to-use-templates">템플릿 사용 방법</h2>
			<p>
				VIBE에서 새 프로젝트를 시작할 때 간편하게 템플릿을 선택할 수 있습니다.
				대시보드에서 '새 앱 만들기' 또는 '프로젝트 생성' 버튼을 클릭하면 다양한
				템플릿 목록이 나타납니다. 원하는 템플릿을 선택하고 앱 이름을 지정하면,
				몇 초 안에 해당 템플릿 기반의 작업 공간이 준비됩니다.
			</p>
			{/* TODO: 템플릿 선택 과정 스크린샷 또는 GIF 이미지 추가 (예: /images/docs/template-selection.png) */}
			{/* <div className="my-6 border border-gray-700 rounded-md overflow-hidden">
        <Image src="/images/docs/template-selection.png" alt="VIBE 템플릿 선택 과정 예시" width={1200} height={675} layout="responsive" />
        <p className="text-center text-sm text-gray-500 p-2 bg-gray-800">그림 1: 새 프로젝트 생성 시 템플릿 선택 화면</p>
      </div> */}
			<p className="my-4 text-center text-gray-500 italic">
				{" "}
				(템플릿 선택 과정을 보여주는 이미지/설명이 여기에 들어갑니다.)
			</p>

			<h2 id="featured-templates">주요 VIBE 템플릿 소개</h2>
			<p>
				VIBE는 다양한 개발 요구사항을 만족시키기 위해 지속적으로 새로운 템플릿을
				추가하고 업데이트하고 있습니다. 현재 제공되는 주요 템플릿들은 다음과
				같습니다:
			</p>
			<div className="not-prose my-8 grid gap-6 md:grid-cols-2">
				<div className="rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-purple-500/30">
					<h3 className="mb-2 flex items-center text-xl font-semibold text-purple-300">
						<FiGlobe className="mr-2 h-6 w-6" />
						React 웹 앱 (Next.js)
					</h3>
					<p className="mb-3 text-sm text-gray-300">
						최신 React 기능을 활용한 동적 웹 애플리케이션을 빠르게 구축합니다.
						서버 사이드 렌더링, 라우팅 등이 미리 설정되어 있습니다.
					</p>
					<span className="rounded-full bg-purple-500/30 px-2 py-1 text-xs text-purple-300">
						#React #NextJS #WebApp
					</span>
				</div>
				<div className="rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-purple-500/30">
					<h3 className="mb-2 flex items-center text-xl font-semibold text-purple-300">
						<FiLayers className="mr-2 h-6 w-6" />
						Node.js API 서버 (Express)
					</h3>
					<p className="mb-3 text-sm text-gray-300">
						확장 가능하고 효율적인 RESTful API 서버를 구축하기 위한 Express.js
						기반 템플릿입니다. 기본 라우팅 및 미들웨어 설정이 포함됩니다.
					</p>
					<span className="rounded-full bg-purple-500/30 px-2 py-1 text-xs text-purple-300">
						#NodeJS #Express #API
					</span>
				</div>
				<div className="rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-purple-500/30">
					<h3 className="mb-2 flex items-center text-xl font-semibold text-purple-300">
						<FiDatabase className="mr-2 h-6 w-6" />
						Python 데이터 분석
					</h3>
					<p className="mb-3 text-sm text-gray-300">
						Jupyter Notebook 환경과 Pandas, NumPy 등 필수 라이브러리가 설치되어
						있어 데이터 분석 및 시각화 작업을 바로 시작할 수 있습니다.
					</p>
					<span className="rounded-full bg-purple-500/30 px-2 py-1 text-xs text-purple-300">
						#Python #DataAnalysis #Jupyter
					</span>
				</div>
				<div className="rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-purple-500/30">
					<h3 className="mb-2 flex items-center text-xl font-semibold text-purple-300">
						<FiCpu className="mr-2 h-6 w-6" />
						AI 챗봇 (기본 프레임워크)
					</h3>
					<p className="mb-3 text-sm text-gray-300">
						VIBE AI 와 연동하거나 자체 로직을 구현하여 대화형 AI 챗봇을 만들 수
						있는 기본 구조를 제공합니다.
					</p>
					<span className="rounded-full bg-purple-500/30 px-2 py-1 text-xs text-purple-300">
						#AI #Chatbot #VIBE-AI
					</span>
				</div>
				<div className="rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-purple-500/30">
					<h3 className="mb-2 flex items-center text-xl font-semibold text-purple-300">
						<FiLayout className="mr-2 h-6 w-6" />
						정적 웹사이트 (HTML/CSS/JS)
					</h3>
					<p className="mb-3 text-sm text-gray-300">
						간단한 포트폴리오, 랜딩 페이지 등 정적 웹사이트를 빠르게 제작하고
						VIBE를 통해 쉽게 호스팅할 수 있습니다.
					</p>
					<span className="rounded-full bg-purple-500/30 px-2 py-1 text-xs text-purple-300">
						#HTML #CSS #StaticSite
					</span>
				</div>
				<div className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-center shadow-md transition-shadow hover:shadow-purple-500/30">
					<FiPlusSquare className="mb-3 h-10 w-10 text-purple-400" />
					<h3 className="mb-2 text-xl font-semibold text-purple-300">
						더 많은 템플릿
					</h3>
					<p className="text-sm text-gray-300">
						VIBE는 계속해서 유용한 템플릿을 추가하고 있습니다. '새 앱
						만들기'에서 전체 목록을 확인하세요!
					</p>
				</div>
			</div>

			<h2 id="custom-templates">나만의 템플릿 만들기 (향후 지원 예정)</h2>
			<p>
				현재 VIBE는 사전 정의된 공식 템플릿들을 제공하고 있습니다. 향후에는
				사용자가 직접 만든 프로젝트를 템플릿으로 저장하여 개인 또는 팀 내에서
				재사용할 수 있는 기능을 지원할 계획입니다. 이를 통해 반복적인 작업을
				더욱 줄이고, 조직의 개발 표준을 효과적으로 관리할 수 있게 될 것입니다.
			</p>

			<h2 id="template-tips">템플릿 활용 팁</h2>
			<ul className="my-4 list-inside list-disc space-y-2 pl-4">
				<li>
					<strong>템플릿 코드 이해하기:</strong> 템플릿을 선택한 후, 먼저 전체
					폴더 구조와 주요 파일들의 역할을 파악해보세요. 이는 프로젝트 이해도를
					높이는 데 도움이 됩니다.
				</li>
				<li>
					<strong>필요 없는 부분은 과감히 제거:</strong> 템플릿에는 일반적인
					사용 사례를 위한 기능들이 포함되어 있을 수 있습니다. 프로젝트에 필요
					없는 부분은 정리하여 앱을 가볍게 유지하세요.
				</li>
				<li>
					<strong>문서와 함께 활용:</strong> 각 템플릿과 관련된 VIBE 문서나 해당
					기술 스택의 공식 문서를 함께 참고하면 더욱 효과적으로 학습하고 개발할
					수 있습니다.
				</li>
				<li>
					<strong>실험하고 수정하기:</strong> 템플릿은 시작점일 뿐입니다.
					자유롭게 코드를 수정하고, 새로운 기능을 추가하며 여러분의 아이디어를
					구체화하세요.
				</li>
			</ul>

			<div className="mt-10 rounded-xl bg-gray-800/70 p-6 shadow-xl">
				<h3 className="mb-3 flex items-center text-xl font-semibold text-purple-300">
					<FiBookOpen className="mr-2 h-6 w-6" /> 관련 문서 및 다음 단계
				</h3>
				<p className="mb-4 text-gray-300">
					템플릿을 활용하여 VIBE 앱 개발을 시작해보세요. 더 궁금한 점이 있다면
					다음 문서들을 참고하세요.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/docs/getting-started/quickstarts"
						prefetch={false}
						className="group inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-700"
					>
						빠른 시작 가이드로 앱 만들기
						<FiArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs/vibe-apps/collaboration"
						className="group inline-flex items-center rounded-md border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-300 shadow-md transition-colors hover:bg-purple-500/20"
					>
						VIBE 앱 협업 기능 알아보기
						<FiArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs/vibe-workspace/overview"
						className="group inline-flex items-center rounded-md border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-300 shadow-md transition-colors hover:bg-purple-500/20"
					>
						작업 공간 사용법
						<FiArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default TemplatesPage;
