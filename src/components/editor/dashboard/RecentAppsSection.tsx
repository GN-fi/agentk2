"use client";

import AppCard from "./AppCard";
import { FiArrowRight } from "react-icons/fi";

// 임시 데이터 - 추후 API 또는 상태 관리에서 가져올 데이터입니다.
const recentAppsData = [
	{
		appName: "나의 멋진 웹사이트",
		lastUpdated: "2시간 전",
		isPublic: true,
	},
	{
		appName: "AI 기반 이미지 생성기",
		lastUpdated: "1일 전",
		isPublic: false,
	},
	{
		appName: "데이터 분석 대시보드",
		lastUpdated: "3일 전",
		isPublic: true,
	},
	{
		appName: "간단한 할 일 목록 앱",
		lastUpdated: "5일 전",
		isPublic: false,
	},
];

const RecentAppsSection = () => {
	return (
		<div className="mb-8">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-2xl font-semibold text-white">최근 작업한 앱</h2>
				<a
					href="#" // 추후 실제 '모든 앱 보기' 페이지 링크로 변경
					className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
				>
					모두 보기
					<FiArrowRight className="w-4 h-4 ml-1" />
				</a>
			</div>
			{recentAppsData.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{recentAppsData.map((app, index) => (
						<AppCard
							key={index}
							appName={app.appName}
							lastUpdated={app.lastUpdated}
							isPublic={app.isPublic}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-8 bg-gray-800 rounded-lg">
					<p className="text-gray-400">최근 작업한 앱이 없습니다.</p>
					<p className="text-gray-500 text-sm mt-1">
						새로운 프로젝트를 시작해보세요!
					</p>
				</div>
			)}
		</div>
	);
};

export default RecentAppsSection;
