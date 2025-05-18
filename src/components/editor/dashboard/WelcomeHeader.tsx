"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { FiPlay } from "react-icons/fi";

const WelcomeHeader = () => {
	const { data: session } = useSession();
	const userName = session?.user?.name || "사용자";

	return (
		<div className="mb-8">
			<h1 className="text-4xl font-bold text-white mb-4">
				안녕하세요, {userName}님! 무엇을 만들고 싶으신가요?
			</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
				<textarea
					className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white resize-none"
					rows={3}
					placeholder="만들고 싶은 앱이나 사이트에 대해 설명해주세요..."
				/>
				<div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
					<button
						type="button"
						className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors mb-2 sm:mb-0"
					>
						앱 타입: 자동
						<ChevronDownIcon className="w-4 h-4 ml-2" />
					</button>
					<button
						type="button"
						className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors"
					>
						<FiPlay className="w-5 h-5 mr-2" />
						만들기 시작
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHeader;
