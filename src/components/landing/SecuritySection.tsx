const securityFeatures = [
	{
		name: "SSO를 통한 안전한 접근",
		description: "기존 ID 공급자를 통해 전체 부서를 안전하게 온보딩하세요.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-8 h-8 text-green-400"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
				/>
			</svg>
		),
	},
	{
		name: "엔터프라이즈급 SOC 2",
		description:
			"VIBE는 SOC 2를 준수하며 엄격한 보안 표준을 충족하여 조직이 미션 크리티컬 애플리케이션을 개발할 수 있도록 지원합니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-8 h-8 text-blue-400"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
				/>
			</svg>
		),
	},
	{
		name: "비공개 배포로 혁신 보호",
		description:
			"내부 프로토타입을 안전하게 공유하고 테스트하세요. 승인된 팀원만 프로젝트에 액세스할 수 있도록 보장합니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-8 h-8 text-yellow-400"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
				/>
			</svg>
		),
	},
	{
		name: "역할 기반 접근 제어",
		description:
			"ID 프레임워크를 쉽게 매핑하고 개인 또는 그룹에 특정 역할을 할당하세요. SCIM으로 초대를 관리하고 애플리케이션 보기, 편집, 배포 권한을 제어합니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-8 h-8 text-red-400"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.408M14.25 9h0M14.25 9a2.25 2.25 0 012.25-2.25h0a2.25 2.25 0 012.25 2.25L13.5 16.5l-3-3L14.25 9zM5.25 12a2.25 2.25 0 00-2.25 2.25v0a2.25 2.25 0 002.25 2.25H9M12 18.75a9.094 9.094 0 01-3.741-.479 3 3 0 01-3.741-5.408M12 18.75L12 9.75M6.375 9.75A2.625 2.625 0 1111.625 9.75 2.625 2.625 0 016.375 9.75z"
				/>
			</svg>
		),
	},
];

const SecuritySection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4">
						신뢰할 수 있는{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400">
							강력한 보안
						</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						VIBE는 최첨단 보안 기능으로 여러분의 소중한 데이터를 안전하게
						보호합니다.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
					{securityFeatures.map((feature) => (
						<div
							key={feature.name}
							className="flex items-start space-x-6 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
						>
							<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gray-700 bg-opacity-70 rounded-full">
								{feature.icon}
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-white">
									{feature.name}
								</h3>
								<p className="text-gray-400 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SecuritySection;
