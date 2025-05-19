"use client";

import { FiFileText, FiGlobe, FiLock, FiMoreVertical } from "react-icons/fi";

interface AppCardProps {
	appName: string;
	lastUpdated: string;
	isPublic: boolean;
	// thumbnailUrl?: string; // 추후 썸네일 이미지 URL 추가 가능
}

const AppCard = ({ appName, lastUpdated, isPublic }: AppCardProps) => {
	return (
		<div className="rounded-lg bg-gray-800 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
			<div className="mb-3 flex items-center">
				{/* 임시 아이콘, 추후 썸네일 또는 프로젝트 타입 아이콘으로 대체 가능 */}
				<div className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-purple-600">
					<FiFileText className="h-6 w-6 text-white" />
				</div>
				<h3
					className="truncate text-lg font-semibold text-white"
					title={appName}
				>
					{appName}
				</h3>
				<button
					type="button"
					className="ml-auto text-gray-400 hover:text-white"
				>
					<FiMoreVertical className="h-5 w-5" />
				</button>
			</div>
			<p className="mb-1 text-xs text-gray-400">
				마지막 업데이트: {lastUpdated}
			</p>
			<div className="flex items-center text-xs text-gray-400">
				{isPublic ? (
					<FiGlobe className="mr-1.5 h-3.5 w-3.5 text-green-400" />
				) : (
					<FiLock className="mr-1.5 h-3.5 w-3.5 text-yellow-400" />
				)}
				<span>{isPublic ? "공개" : "비공개"}</span>
			</div>
		</div>
	);
};

export default AppCard;
