import {
	FolderIcon,
	DocumentIcon,
	CogIcon,
	CubeIcon,
	BeakerIcon,
	CircleStackIcon,
	CommandLineIcon,
	LifebuoyIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
	const files = [
		{ name: "README.md", type: "file", icon: DocumentIcon },
		{
			name: "src",
			type: "folder",
			icon: FolderIcon,
			children: [
				{ name: "app.tsx", type: "file", icon: DocumentIcon },
				{ name: "index.css", type: "file", icon: DocumentIcon },
			],
		},
		{ name: "package.json", type: "file", icon: DocumentIcon },
	];

	const tools = [
		{ name: "Files", icon: FolderIcon, current: true }, // 현재 선택된 탭 표시 예시
		{ name: "Database", icon: CircleStackIcon },
		{ name: "Shell", icon: CommandLineIcon },
		{ name: "Console", icon: CommandLineIcon }, // 아이콘 재활용 또는 적절한 아이콘으로 변경
		{ name: "Packages", icon: CubeIcon },
		{ name: "Settings", icon: CogIcon },
		{ name: "Tools", icon: BeakerIcon },
	];

	// 간단한 파일/폴더 렌더링 함수 (재귀적으로)
	const renderFileTree = (items: any[], level = 0) => {
		return (
			<ul className={`ml-${level * 2}`}>
				{items.map((item) => (
					<li
						key={item.name}
						className="flex items-center space-x-2 p-1 hover:bg-gray-700 rounded cursor-pointer text-sm"
					>
						<item.icon className="w-4 h-4 text-gray-400" />
						<span>{item.name}</span>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="flex h-full">
			{/* 아이콘 기반 툴바 (VIBE의 왼쪽 세로 툴바와 유사) */}
			<div className="w-14 bg-gray-900 p-2 flex flex-col items-center space-y-3 border-r border-gray-700">
				{tools.map((tool) => (
					<button
						key={tool.name}
						title={tool.name}
						className={`p-2 rounded hover:bg-gray-700 ${tool.current ? "bg-gray-700 text-white" : "text-gray-400"}`}
					>
						<tool.icon className="w-6 h-6" />
					</button>
				))}
				<div className="mt-auto flex flex-col items-center space-y-3">
					<button
						title="Help"
						className="p-2 rounded hover:bg-gray-700 text-gray-400"
					>
						<LifebuoyIcon className="w-6 h-6" />
					</button>
					<button
						title="Account"
						className="p-2 rounded hover:bg-gray-700 text-gray-400"
					>
						<UserCircleIcon className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* 파일 탐색기 및 기타 도구 패널 */}
			<div className="w-64 bg-gray-800 p-3 space-y-4 overflow-y-auto">
				<div>
					<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
						Files
					</h3>
					{renderFileTree(files)}
				</div>
				{/* 다른 도구 선택 시 해당 내용 표시 (예: Database, Shell 등) */}
			</div>
		</div>
	);
};

export default Sidebar;
