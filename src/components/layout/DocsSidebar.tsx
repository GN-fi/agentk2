import Link from "next/link";

const docSections = [
	{
		title: "시작하기",
		basePath: "/docs/getting-started",
		links: [
			{ href: "/introduction", text: "소개" },
			{ href: "/quickstarts", text: "빠른 시작" },
			{ href: "/vibe-core", text: "VIBE Core" },
		],
	},
	{
		title: "VIBE 앱",
		basePath: "/docs/vibe-apps",
		links: [
			{ href: "/overview", text: "개요" },
			{ href: "/collaboration", text: "협업" },
			{ href: "/visibility", text: "공개 범위" },
			{ href: "/advanced-configuration", text: "고급 설정" },
			{ href: "/app-embed", text: "앱 임베드" },
			{ href: "/templates", text: "템플릿" },
		],
	},
	{
		title: "VIBE AI",
		basePath: "/docs/vibe-ai",
		links: [
			{ href: "/overview", text: "개요" },
			{ href: "/vibe-agent", text: "VIBE 에이전트" },
			{ href: "/vibe-assistant", text: "VIBE 어시스턴트" },
			{ href: "/integrations", text: "통합" },
		],
	},
	{
		title: "VIBE 작업 공간",
		basePath: "/docs/vibe-workspace",
		links: [
			{ href: "/overview", text: "개요" },
			{ href: "/features", text: "주요 기능" },
			{ href: "/version-control", text: "버전 관리" },
			{ href: "/themes", text: "테마" },
		],
	},
	{
		title: "배포",
		basePath: "/docs/deployments",
		links: [
			{ href: "/overview", text: "개요" },
			{ href: "/deployment-types", text: "배포 유형" },
			{ href: "/advanced-configuration", text: "고급 설정" },
		],
	},
	{
		title: "스토리지 및 데이터베이스",
		basePath: "/docs/storage-and-databases",
		links: [
			{ href: "/overview", text: "개요" },
			{ href: "/database", text: "데이터베이스" },
			{ href: "/object-storage", text: "객체 스토리지" },
			{ href: "/key-value-store", text: "키-값 스토어" },
		],
	},
	{
		title: "플랫폼",
		basePath: "/docs/platforms",
		links: [
			{ href: "/mobile-app", text: "모바일 앱" },
			{ href: "/desktop-app", text: "데스크톱 앱" },
		],
	},
	{
		title: "추가 자료",
		basePath: "/docs/additional-resources",
		links: [
			{ href: "/vibe-badge", text: "VIBE 배지" },
			{ href: "/clui", text: "CLUI (그래픽 CLI)" },
			{ href: "/cheat-sheet", text: "치트 시트" },
		],
	},
	{
		title: "FAQ",
		basePath: "/docs/faq",
		links: [{ href: "/overview", text: "개요" }],
	},
];

const DocsSidebar = () => {
	return (
		<aside className="w-64 flex-shrink-0 bg-gray-800 p-4 rounded-lg shadow">
			<nav className="space-y-6">
				{docSections.map((section) => (
					<div key={section.title}>
						<h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">
							{section.title}
						</h3>
						<ul className="space-y-1">
							{section.links.map((link) => (
								<li key={link.href}>
									<Link
										href={`${section.basePath}${link.href}`}
										className="block px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
};

export default DocsSidebar;
