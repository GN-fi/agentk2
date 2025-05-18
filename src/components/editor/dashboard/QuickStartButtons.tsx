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
		icon: <FiBriefcase className="w-5 h-5 mr-2" />,
		href: "#",
	},
	{
		name: "AI 챗봇",
		icon: <FiMessageCircle className="w-5 h-5 mr-2" />,
		href: "#",
	},
	{
		name: "주식 분석",
		icon: <FiTrendingUp className="w-5 h-5 mr-2" />,
		href: "#",
	},
];

const QuickStartButtons = () => {
	return (
		<div className="mb-8">
			<h2 className="text-xl font-semibold text-gray-300 mb-3">빠른 시작</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{quickStartItems.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-colors"
					>
						{item.icon}
						<span className="text-white">{item.name}</span>
						<FiArrowRight className="w-5 h-5 ml-auto text-gray-500" />
					</a>
				))}
			</div>
		</div>
	);
};

export default QuickStartButtons;
