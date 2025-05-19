import {
	BeakerIcon,
	CircleStackIcon,
	CogIcon,
	CommandLineIcon,
	CubeIcon,
	DocumentIcon,
	FolderIcon,
	LifebuoyIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

interface FileItem {
	name: string;
	type: "file" | "folder";
	icon: React.ElementType; // Heroicon들은 React.ElementType으로 타입 지정 가능
	children?: FileItem[]; // 폴더인 경우에만 존재
}

const Sidebar = () => {
	const files: FileItem[] = [
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
	const renderFileTree = (items: FileItem[], level = 0) => {
		return (
			<ul className={`ml-${level * 2}`}>
				{items.map((item) => (
					<li
						key={item.name}
						className="flex cursor-pointer items-center space-x-2 rounded p-1 text-sm hover:bg-gray-700"
					>
						<item.icon className="h-4 w-4 text-gray-400" />
						<span>{item.name}</span>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="flex h-full">
			{/* 아이콘 기반 툴바 (VIBE의 왼쪽 세로 툴바와 유사) */}
			<div className="flex w-14 flex-col items-center space-y-3 border-r border-gray-700 bg-gray-900 p-2">
				{tools.map((tool) => (
					<button
						type="button"
						key={tool.name}
						title={tool.name}
						className={`rounded p-2 hover:bg-gray-700 ${tool.current ? "bg-gray-700 text-white" : "text-gray-400"}`}
					>
						<tool.icon className="h-6 w-6" />
					</button>
				))}
				<div className="mt-auto flex flex-col items-center space-y-3">
					<button
						type="button"
						title="Help"
						className="rounded p-2 text-gray-400 hover:bg-gray-700"
					>
						<LifebuoyIcon className="h-6 w-6" />
					</button>
					<button
						type="button"
						title="Account"
						className="rounded p-2 text-gray-400 hover:bg-gray-700"
					>
						<UserCircleIcon className="h-6 w-6" />
					</button>
				</div>
			</div>

			{/* 파일 탐색기 및 기타 도구 패널 */}
			<div className="w-64 space-y-4 overflow-y-auto bg-gray-800 p-3">
				<div>
					<h3 className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
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
