"use client";

import React, { useEffect, useRef, useState } from "react";
// import { Terminal as XtermTerminal } from 'xterm'; // Xterm.js 임포트
// import 'xterm/css/xterm.css'; // Xterm.js CSS
// import { FitAddon } from 'xterm-addon-fit'; // FitAddon для автоматического изменения размера

export default function TerminalComponent() {
	const terminalRef = useRef<HTMLDivElement>(null);
	// const xtermRef = useRef<XtermTerminal | null>(null);
	// const fitAddonRef = useRef<FitAddon | null>(null);

	// const [input, setInput] = useState(''); // 사용자 입력 상태 (선택적)

	useEffect(() => {
		// if (terminalRef.current && !xtermRef.current) {
		//   const xterm = new XtermTerminal({
		//     cursorBlink: true,
		//     // 기타 Xterm.js 옵션들...
		//   });
		//   const fitAddon = new FitAddon();

		//   xtermRef.current = xterm;
		//   fitAddonRef.current = fitAddon;

		//   xterm.loadAddon(fitAddon);
		//   xterm.open(terminalRef.current);
		//   fitAddon.fit();

		//   xterm.writeln('Agent IDE 터미널에 오신 것을 환영합니다!');
		//   xterm.writeln('# 여기에 명령어를 입력하세요.');

		//   // 사용자 입력 처리 예시 (실제로는 WebSocket 등을 통해 서버와 통신)
		//   xterm.onData(data => {
		//     // 서버로 데이터 전송 (data)
		//     // 예시: xterm.write(data); // 단순 에코백
		//     if (data === '\r') { // Enter 키
		//       // 명령어 실행 로직 (현재 input 상태 또는 xterm 버퍼에서 가져오기)
		//       // xterm.writeln(`\r\n명령어 실행: ${input}`);
		//       // setInput('');
		//     } else if (data === '\x7f') { // Backspace
		//       // xterm.write('\b \b');
		//       // setInput(prev => prev.slice(0, -1));
		//     } else {
		//       // xterm.write(data);
		//       // setInput(prev => prev + data);
		//     }
		//   });

		//   window.addEventListener('resize', () => fitAddon.fit());
		//   console.log("Xterm.js 터미널이 초기화되었습니다.");
		// }

		// return () => {
		//   if (xtermRef.current) {
		//     xtermRef.current.dispose();
		//     xtermRef.current = null;
		//   }
		//   // window.removeEventListener('resize', () => fitAddonRef.current?.fit());
		// };
		console.log("TerminalComponent가 마운트되었습니다. Xterm.js 통합 필요.");
	}, []);

	return (
		<div>
			<h4>터미널</h4>
			<div
				ref={terminalRef}
				style={{
					height: "300px",
					backgroundColor: "#000",
					color: "#fff",
					padding: "10px",
				}}
			/>
			{/* 
        TODO: Xterm.js 기반 터미널 UI 구현
        TODO: 명령어 실행 (WebSocket으로 서버와 연결)
        TODO: 실시간 터미널 로그 출력
        TODO: 상태 관리 (Zustand 사용 예정)
      */}
		</div>
	);
}
