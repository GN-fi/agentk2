"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { FiPlay } from "react-icons/fi";

const WelcomeHeader = () => {
	const { data: session } = useSession();
	const userName = session?.user?.name || "사용자";

	return (
		<div className="mb-8">
			<h1 className="mb-4 text-4xl font-bold text-white">
				안녕하세요, {userName}님! 무엇을 만들고 싶으신가요?
			</h1>
			<div className="rounded-lg bg-gray-800 p-6 shadow-lg">
				<textarea
					className="w-full resize-none rounded-md border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none sm:text-sm"
					rows={3}
					placeholder="만들고 싶은 앱이나 사이트에 대해 설명해주세요..."
				/>
				<div className="mt-4 flex flex-col items-center justify-between sm:flex-row">
					<button
						type="button"
						className="mb-2 flex items-center rounded-md bg-gray-700 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-600 sm:mb-0"
					>
						앱 타입: 자동
						<ChevronDownIcon className="ml-2 h-4 w-4" />
					</button>
					<button
						type="button"
						className="flex items-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
					>
						<FiPlay className="mr-2 h-5 w-5" />
						만들기 시작
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHeader;
