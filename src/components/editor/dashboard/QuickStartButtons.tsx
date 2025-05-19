"use client";

import {
	FiArrowRight,
	FiBriefcase,
	FiMessageCircle,
	FiTrendingUp,
} from "react-icons/fi";

const quickStartItems = [
	{
		name: "대기자 명단 웹사이트",
		icon: <FiBriefcase className="mr-2 h-5 w-5" />,
		href: "#",
	},
	{
		name: "AI 챗봇",
		icon: <FiMessageCircle className="mr-2 h-5 w-5" />,
		href: "#",
	},
	{
		name: "주식 분석",
		icon: <FiTrendingUp className="mr-2 h-5 w-5" />,
		href: "#",
	},
];

const QuickStartButtons = () => {
	return (
		<div className="mb-8">
			<h2 className="mb-3 text-xl font-semibold text-gray-300">빠른 시작</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{quickStartItems.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="flex items-center rounded-lg bg-gray-800 p-4 shadow-md transition-colors hover:bg-gray-700"
					>
						{item.icon}
						<span className="text-white">{item.name}</span>
						<FiArrowRight className="ml-auto h-5 w-5 text-gray-500" />
					</a>
				))}
			</div>
		</div>
	);
};

export default QuickStartButtons;
