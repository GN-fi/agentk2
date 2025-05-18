"use client";

import React, { useState, useEffect, useRef } from "react";
// import io from 'socket.io-client'; // Socket.IO 클라이언트

// const socket = io('http://localhost:3001'); // server.ts에서 설정한 포트

interface Message {
	user: string;
	text: string;
	timestamp: number;
}

export default function Chat() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// socket.on('connect', () => {
		//   console.log('채팅 서버에 연결되었습니다.');
		// });

		// socket.on('chat_message', (msg: Message) => {
		//   setMessages((prevMessages) => [...prevMessages, msg]);
		// });

		// return () => {
		//   socket.off('connect');
		//   socket.off('chat_message');
		// };
		console.log("Chat 컴포넌트가 마운트되었습니다. Socket.IO 통합 필요.");
	}, []);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	const sendMessage = () => {
		if (newMessage.trim() === "") return;
		const messageData: Message = {
			user: "CurrentUser", // TODO: 실제 사용자 정보로 대체
			text: newMessage,
			timestamp: Date.now(),
		};
		// socket.emit('chat_message', messageData);
		setMessages((prevMessages) => [...prevMessages, messageData]); // 임시로 클라이언트에서만 추가 (실제로는 서버에서 받아옴)
		setNewMessage("");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				border: "1px solid #ccc",
			}}
		>
			<h4>실시간 채팅</h4>
			<div
				style={{
					flexGrow: 1,
					overflowY: "auto",
					padding: "10px",
					borderBottom: "1px solid #ccc",
				}}
			>
				{messages.map((msg) => (
					<div key={msg.timestamp} style={{ marginBottom: "10px" }}>
						<strong>{msg.user}: </strong>
						{msg.text}
						<span
							style={{ fontSize: "0.8em", marginLeft: "10px", color: "gray" }}
						>
							{new Date(msg.timestamp).toLocaleTimeString()}
						</span>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>
			<div style={{ display: "flex", padding: "10px" }}>
				<input
					type="text"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					onKeyPress={(e) => e.key === "Enter" && sendMessage()}
					style={{ flexGrow: 1, marginRight: "10px", padding: "5px" }}
					placeholder="메시지를 입력하세요..."
				/>
				<button
					type="button"
					onClick={sendMessage}
					style={{ padding: "5px 10px" }}
				>
					전송
				</button>
			</div>
			{/* 
        TODO: WebSocket 사용 (Socket.IO 기반)
        TODO: 채팅 기록 저장 (서버 측 또는 로컬 스토리지)
        TODO: 파일 공유 (코드 스니펫 전송 등)
      */}
		</div>
	);
}
