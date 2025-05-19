"use client"; // GoldenLayout과 같은 클라이언트 사이드 라이브러리 사용을 위해

import { useEffect } from "react";
// import { initLayout } from '@/components/GoldenLayout'; // 경로 수정 가능성 있음

// 이 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

export default function EditorPage() {
	useEffect(() => {
		// GoldenLayout 초기화 로직은 클라이언트 사이드에서만 실행되어야 합니다.
		if (typeof window !== "undefined") {
			// TODO: initLayout(); 호출. GoldenLayout 컴포넌트가 준비되면 활성화합니다.
			// 예시: initLayout() 함수를 @/components/GoldenLayout.tsx에서 가져와 사용합니다.
			// 현재는 해당 파일/함수가 없으므로 주석 처리합니다.
			// 실제 구현 시에는 GoldenLayout 컨테이너 div가 DOM에 마운트된 후 호출해야 합니다.
			console.log(
				"에디터 페이지가 마운트되었습니다. GoldenLayout 초기화가 필요합니다.",
			);
		}
	}, []);

	return (
		<div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
			<h1>에디터 페이지</h1>
			<p>
				이곳에서 코드 편집, 파일 탐색, 터미널, 미리보기, 채팅 등의 기능을
				제공합니다.
			</p>
			{/* Golden Layout을 위한 컨테이너 */}
			<div
				id="layoutContainer"
				style={{ width: "100%", height: "calc(100vh - 50px)" }}
			>
				{/* GoldenLayout이 이 div를 채울 것입니다. */}
			</div>
			{/*
        TODO: 파일 탐색기 (FileExplorer 컴포넌트)
        TODO: 코드 편집기 (CodeEditor 컴포넌트 - Monaco Editor 기반)
        TODO: 터미널 (Terminal 컴포넌트)
        TODO: 실시간 프리뷰 (RealtimePreview 컴포넌트)
        TODO: 채팅 (Chat 컴포넌트)
      */}
		</div>
	);
}
