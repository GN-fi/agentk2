import { XMarkIcon } from "@heroicons/react/24/solid";

const MainArea = () => {
	// 임시 탭 데이터
	const tabs = [
		{ id: 1, name: "README.md", isActive: false },
		{ id: 2, name: "app.tsx", isActive: true }, // 현재 활성화된 탭
		{ id: 3, name: "index.css", isActive: false },
	];

	const activeTab = tabs.find((tab) => tab.isActive);

	return (
		<div className="flex-1 flex flex-col bg-gray-800">
			{/* 탭 바 */}
			<div className="flex border-b border-gray-700 bg-gray-900">
				{tabs.map((tab) => (
					<div
						key={tab.id}
						className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer 
                        ${tab.isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-700"}`}
					>
						<span>{tab.name}</span>
						<button
							type="button"
							className="ml-2 p-0.5 rounded hover:bg-gray-600"
						>
							<XMarkIcon className="w-3 h-3" />
						</button>
					</div>
				))}
			</div>

			{/* 에디터, 터미널, 웹뷰 영역 */}
			<div className="flex-1 p-4 overflow-auto">
				{activeTab && (
					<div>
						<h2 className="text-lg font-semibold mb-2">{activeTab.name}</h2>
						{/* 실제 코드 에디터 라이브러리(예: Monaco Editor) 연동 전 임시 textarea */}
						<textarea
							className="w-full h-96 bg-gray-900 text-gray-300 p-2 rounded border border-gray-700 focus:outline-none focus:border-pink-500 font-mono text-sm"
							defaultValue={`// ${activeTab.name} 파일 내용입니다.
// 여기에 코드를 작성하세요...

function greet() {
  console.log("Hello, from ${activeTab.name}!");
}
`}
						/>
					</div>
				)}
				{!activeTab && (
					<div className="flex items-center justify-center h-full text-gray-500">
						파일을 선택해주세요.
					</div>
				)}
			</div>
			{/* 터미널/콘솔/웹뷰 등 추가될 영역 */}
			{/* 예시: <div className="h-1/3 bg-gray-900 p-2 border-t border-gray-700">Terminal/Console Output</div> */}
		</div>
	);
};

export default MainArea;
