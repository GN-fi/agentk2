"use client"; // Monaco Editor는 클라이언트 사이드에서 실행됩니다.

import React, { useRef, useEffect } from "react";
// import Editor, { Monaco } from "@monaco-editor/react"; // Monaco Editor 임포트
// import { setupMonaco } from './EditorConfig'; // EditorConfig.tsx에서 설정 가져오기

export default function CodeEditor() {
	const editorRef = useRef(null);

	/*
  // Monaco 인스턴스 로드 후 설정 적용 예시
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    // setupMonaco(monaco); // 컴파일러 옵션 등 설정
    console.log("Monaco Editor가 마운트되고 설정되었습니다.");
  }
  */

	useEffect(() => {
		// TODO: 실제 Monaco Editor 통합 로직
		// <Editor ... onMount={handleEditorDidMount} /> 컴포넌트를 여기에 렌더링
		console.log(
			"CodeEditor 컴포넌트가 마운트되었습니다. Monaco Editor 통합 필요.",
		);
	}, []);

	return (
		<div>
			<h4>코드 편집기</h4>
			<p>Monaco Editor 기반의 코드 편집기가 여기에 표시됩니다.</p>
			{/* 
        <Editor
          height="calc(100% - 30px)" // 부모 높이에 맞게 조절
          defaultLanguage="javascript"
          defaultValue="// 여기에 코드를 작성하세요"
          onMount={handleEditorDidMount}
          // theme="vs-dark" // 테마 설정 가능
        />
        TODO: 언어 감지 및 구문 강조
        TODO: 코드 자동 완성 기능
        TODO: 실시간 협업 편집 (Y.js 사용 예정)
        TODO: 파일 저장 버튼
      */}
			<div
				ref={editorRef}
				style={{ height: "400px", border: "1px solid #ccc" }}
			>
				{/* Monaco Editor가 이 div에 마운트될 수 있습니다. 또는 @monaco-editor/react의 Editor 컴포넌트 사용 */}
			</div>
		</div>
	);
}
