import Link from "next/link";
import {
	FiBookOpen,
	FiBox,
	FiCpu,
	FiGitBranch,
	FiPlayCircle,
	FiUploadCloud,
} from "react-icons/fi";

const docSections = [
	{
		title: "VIBE 시작하기",
		description:
			"VIBE 플랫폼 소개, 계정 설정, 첫 프로젝트 생성 등 기본 사용법을 알아보세요.",
		href: "/docs/getting-started/introduction",
		icon: <FiPlayCircle className="mb-3 h-8 w-8 text-purple-400" />,
	},
	{
		title: "VIBE 앱",
		description:
			"VIBE에서 앱을 만들고, 템플릿을 사용하고, 다른 사용자와 협업하는 방법을 배워보세요.",
		href: "/docs/vibe-apps/overview",
		icon: <FiBox className="mb-3 h-8 w-8 text-purple-400" />,
	},
	{
		title: "VIBE AI",
		description:
			"코드 생성, 디버깅, AI 챗봇 등 VIBE의 강력한 AI 기능들을 활용해보세요.",
		href: "/docs/vibe-ai/overview",
		icon: <FiCpu className="mb-3 h-8 w-8 text-purple-400" />,
	},
	{
		title: "VIBE 작업 공간",
		description:
			"파일 관리, 버전 제어, 테마 설정 등 VIBE 작업 환경에 대해 알아보세요.",
		href: "/docs/vibe-workspace/overview",
		icon: <FiGitBranch className="mb-3 h-8 w-8 text-purple-400" />,
	},
	{
		title: "배포하기",
		description:
			"VIBE를 사용하여 웹 앱, 봇 등을 손쉽게 배포하고 관리하는 방법을 안내합니다.",
		href: "/docs/deployments/overview",
		icon: <FiUploadCloud className="mb-3 h-8 w-8 text-purple-400" />,
	},
	// 추가적인 섹션 (예: API 문서, 커뮤니티 등)도 필요에 따라 여기에 추가할 수 있습니다.
];

const DocsPage = () => {
	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<div className="mb-12 text-center">
				<FiBookOpen className="mx-auto mb-4 h-16 w-16 text-purple-500" />
				<h1 className="text-5xl font-bold text-white">VIBE 문서 센터</h1>
				<p className="mt-4 text-lg text-gray-400">
					VIBE의 모든 기능을 마스터하고, 아이디어를 현실로 만들어보세요!
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{docSections.map((section) => (
					<Link
						key={section.title}
						href={section.href}
						prefetch={false}
						className="block transform rounded-xl bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-purple-500/30"
					>
						<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
							{section.icon}
							<h2 className="mb-2 text-2xl font-semibold text-purple-300">
								{section.title}
							</h2>
							<p className="text-sm leading-relaxed text-gray-300">
								{section.description}
							</p>
						</div>
					</Link>
				))}
			</div>

			<div className="mt-16 text-center">
				<p className="text-gray-500">
					찾으시는 내용이 없나요? 왼쪽 사이드바에서 더 자세한 주제를 탐색하거나,
					언제든지 문의해주세요.
				</p>
			</div>
		</div>
	);
};

export default DocsPage;
