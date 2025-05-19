"use client";

import { FiArrowRight } from "react-icons/fi";
import AppCard from "./AppCard";

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
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-white">최근 작업한 앱</h2>
				<button
					type="button"
					// TODO: 추후 실제 '모든 앱 보기' 페이지 이동 로직 구현
					className="flex items-center text-sm text-purple-400 transition-colors hover:text-purple-300"
				>
					모두 보기
					<FiArrowRight className="ml-1 h-4 w-4" />
				</button>
			</div>
			{recentAppsData.length > 0 ? (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{recentAppsData.map((app) => (
						<AppCard
							key={app.appName}
							appName={app.appName}
							lastUpdated={app.lastUpdated}
							isPublic={app.isPublic}
						/>
					))}
				</div>
			) : (
				<div className="rounded-lg bg-gray-800 py-8 text-center">
					<p className="text-gray-400">최근 작업한 앱이 없습니다.</p>
					<p className="mt-1 text-sm text-gray-500">
						새로운 프로젝트를 시작해보세요!
					</p>
				</div>
			)}
		</div>
	);
};

export default RecentAppsSection;
