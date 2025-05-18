import { PaperAirplaneIcon, SparklesIcon } from "@heroicons/react/24/outline";

const RightPanel = () => {
	// 임시 채팅 메시지 데이터
	const messages = [
		{
			id: 1,
			user: "AI",
			text: '안녕하세요! 무엇을 도와드릴까요? 예를 들어, "React 컴포넌트 만들어줘" 라고 입력해보세요.',
		},
		{
			id: 2,
			user: "User",
			text: "VIBE 랜딩 페이지에 들어갈 CTA 버튼 만들어줘.",
		},
		{
			id: 3,
			user: "AI",
			text: "네, 알겠습니다. 어떤 스타일의 CTA 버튼을 원하시나요?",
		},
	];

	return (
		<div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
			{/* 오른쪽 패널 헤더 (예: AI Chat) */}
			<div className="p-3 border-b border-gray-700 flex items-center space-x-2 bg-gray-900">
				<SparklesIcon className="w-5 h-5 text-purple-400" />
				<h3 className="text-sm font-semibold">VIBE AI 도우미</h3>
			</div>

			{/* 채팅 메시지 표시 영역 */}
			<div className="flex-1 p-3 space-y-3 overflow-y-auto">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={`flex ${msg.user === "AI" ? "justify-start" : "justify-end"}`}
					>
						<div
							className={`max-w-xs lg:max-w-sm px-3 py-2 rounded-lg ${msg.user === "AI" ? "bg-gray-700 text-gray-300" : "bg-purple-600 text-white"}`}
						>
							<p className="text-sm">{msg.text}</p>
						</div>
					</div>
				))}
			</div>

			{/* 채팅 입력 영역 */}
			<div className="p-3 border-t border-gray-700 bg-gray-900">
				<div className="relative flex items-center">
					<textarea
						rows={2}
						className="w-full bg-gray-700 text-gray-300 p-2 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
						placeholder="AI에게 메시지 보내기..."
					/>
					<button className="absolute right-2 bottom-2 p-1 text-purple-400 hover:text-purple-300">
						<PaperAirplaneIcon className="w-5 h-5" />
					</button>
				</div>
				<p className="text-xs text-gray-500 mt-1 text-center">
					VIBE AI는 실수를 할 수 있습니다. 중요한 정보는 다시 확인해주세요.
				</p>
			</div>
		</div>
	);
};

export default RightPanel;
