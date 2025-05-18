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
		<div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
			<div className="flex items-center mb-3">
				{/* 임시 아이콘, 추후 썸네일 또는 프로젝트 타입 아이콘으로 대체 가능 */}
				<div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center mr-3">
					<FiFileText className="w-6 h-6 text-white" />
				</div>
				<h3
					className="text-lg font-semibold text-white truncate"
					title={appName}
				>
					{appName}
				</h3>
				<button
					type="button"
					className="ml-auto text-gray-400 hover:text-white"
				>
					<FiMoreVertical className="w-5 h-5" />
				</button>
			</div>
			<p className="text-xs text-gray-400 mb-1">
				마지막 업데이트: {lastUpdated}
			</p>
			<div className="flex items-center text-xs text-gray-400">
				{isPublic ? (
					<FiGlobe className="w-3.5 h-3.5 mr-1.5 text-green-400" />
				) : (
					<FiLock className="w-3.5 h-3.5 mr-1.5 text-yellow-400" />
				)}
				<span>{isPublic ? "공개" : "비공개"}</span>
			</div>
		</div>
	);
};

export default AppCard;
