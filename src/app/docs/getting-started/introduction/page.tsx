import Link from "next/link";
import {
	FiArrowRight,
	FiZap,
	FiUsers,
	FiUploadCloud,
	FiCpu,
	FiBook,
} from "react-icons/fi";

const IntroductionPage = () => {
	return (
		<article className="prose prose-invert max-w-none prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300">
			<h1 id="vibe-소개">VIBE에 오신 것을 환영합니다!</h1>
			<p className="lead">
				VIBE는 여러분의 아이디어를 현실로 가장 빠르게 옮길 수 있도록 설계된
				최첨단 AI 기반 통합 개발 환경(IDE)입니다. 단순한 코드 편집기를 넘어,
				VIBE는 프로토타이핑, 학습, 실시간 협업, 그리고 손쉬운 배포까지 개발의
				모든 과정을 지원합니다.
			</p>

			<h2 id="vibe란-무엇인가">VIBE란 무엇인가?</h2>
			<p>
				VIBE는 클라우드 기반으로 작동하여 별도의 설치 과정 없이 웹
				브라우저만으로 즉시 개발을 시작할 수 있게 해줍니다. 파이썬, JavaScript,
				Java, C++ 등 다양한 프로그래밍 언어와 React, Next.js, Django, Flask와
				같은 인기 프레임워크를 지원하여 여러분의 프로젝트에 맞는 최적의 환경을
				제공합니다. VIBE와 함께라면, 복잡한 설정에 시간을 낭비하지 않고 오롯이
				창작에만 집중할 수 있습니다.
			</p>

			<h2 id="vibe의-주요-특징">VIBE의 주요 특징</h2>
			<ul className="space-y-4">
				<li className="flex items-start">
					<FiCpu className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
					<div>
						<strong>AI 기반 코딩 지원:</strong> 코드 자동 완성, 실시간 코드
						생성, 스마트 디버깅, AI 채팅 도우미 등 VIBE의 지능형 AI가 코딩
						과정을 혁신적으로 개선합니다.
					</div>
				</li>
				<li className="flex items-start">
					<FiUsers className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
					<div>
						<strong>실시간 협업:</strong> 동료들과 함께 실시간으로 코드를
						편집하고, 아이디어를 공유하며 프로젝트를 진행할 수 있습니다. 마치 한
						공간에 있는 것처럼 원활한 팀워크를 경험하세요.
					</div>
				</li>
				<li className="flex items-start">
					<FiUploadCloud className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
					<div>
						<strong>원클릭 배포:</strong> 복잡한 배포 과정은 이제 그만!
						VIBE에서는 단 몇 번의 클릭만으로 여러분의 웹 앱, API, 봇 등을 전
						세계에 공개할 수 있습니다.
					</div>
				</li>
				<li className="flex items-start">
					<FiZap className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
					<div>
						<strong>다양한 템플릿:</strong> 웹사이트, 챗봇, 게임 등 다양한
						종류의 프로젝트 템플릿을 활용하여 개발을 빠르게 시작하고 시간을
						절약하세요.
					</div>
				</li>
				<li className="flex items-start">
					<FiBook className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
					<div>
						<strong>학습 및 커뮤니티 (출시 예정):</strong> VIBE는 단순한 개발
						도구를 넘어, 함께 배우고 성장하는 개발자 커뮤니티를 지향합니다.
						다양한 학습 자료와 튜토리얼을 기대해주세요!
					</div>
				</li>
			</ul>

			<h2 id="이-문서의-목적">이 문서의 목적</h2>
			<p>
				이 문서는 VIBE를 처음 사용하는 분들이 플랫폼의 기본적인 기능과 사용법을
				익히고, 자신의 프로젝트에 VIBE를 효과적으로 활용할 수 있도록 돕기 위해
				작성되었습니다. 각 섹션에서는 VIBE의 다양한 측면을 상세히 설명하고, 실제
				사용 예시를 통해 이해를 돕고자 합니다.
			</p>

			<div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold text-purple-300 mb-3">
					다음 단계
				</h3>
				<p className="text-gray-300 mb-4">
					VIBE의 세계에 첫발을 내디딘 것을 환영합니다! 이제 다음 가이드를 통해
					VIBE를 직접 경험해보세요.
				</p>
				<Link
					href="/docs/getting-started/quickstarts"
					className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transition-colors group"
				>
					빠른 시작 가이드로 이동
					<FiArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
				</Link>
			</div>
		</article>
	);
};

export default IntroductionPage;
