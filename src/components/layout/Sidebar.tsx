export default function Sidebar() {
	return (
		<aside
			style={{
				width: "250px",
				padding: "1rem",
				backgroundColor: "#e9e9e9",
				borderRight: "1px solid #ccc",
			}}
		>
			<h3>탐색기</h3>
			{/* TODO: 파일 트리 또는 다른 사이드바 컨텐츠 (FileExplorer 컴포넌트가 여기나 GoldenLayout 패널에 위치) */}
			<p>파일 및 폴더 목록이 여기에 표시됩니다.</p>
		</aside>
	);
}
