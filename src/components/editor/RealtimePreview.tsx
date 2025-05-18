"use client";

import React, { useState, useEffect } from "react";

export default function RealtimePreview() {
	// TODO: 실제로는 코드 변경에 따라 srcDoc을 업데이트하거나, 별도의 실행 환경과 통신하여 URL을 받아올 수 있습니다.
	const [previewSrcDoc, setPreviewSrcDoc] = useState(
		"<html><body><h1>실시간 미리보기</h1><p>코드가 변경되면 여기에 결과가 표시됩니다.</p></body></html>",
	);

	useEffect(() => {
		// TODO: 코드 변경 감지 및 미리보기 업데이트 로직 (예: debounce 사용)
		console.log("RealtimePreview 컴포넌트가 마운트되었습니다.");
	}, []);

	return (
		<div>
			<h4>실시간 미리보기</h4>
			<iframe
				srcDoc={previewSrcDoc}
				title="실시간 미리보기"
				sandbox="allow-scripts allow-same-origin" // 보안 설정
				style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
			/>
			{/* 
        TODO: IFrame을 사용하여 실시간으로 웹 애플리케이션 출력
        TODO: 코드 변경 시 자동 새로고침 (Debounce로 성능 최적화)
      */}
		</div>
	);
}
