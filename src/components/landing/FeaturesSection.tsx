const features = [
	{
		name: "준비된 데이터베이스",
		description:
			"모든 프로젝트에는 사전 구성된 프로덕션 등급 데이터베이스가 포함되어 즉시 사용할 수 있습니다. 별도의 설정이나 설치가 필요 없습니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-8 w-8 text-purple-400"
			>
				<title>데이터베이스 아이콘</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
				/>
			</svg>
		),
	},
	{
		name: "간편한 사용자 인증",
		description:
			"내장된 VIBE Auth를 사용하여 몇 분 만에 안전한 사용자 인증을 앱에 추가하세요. 복잡한 구현 없이 강력한 고객 관리가 가능합니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-8 w-8 text-pink-400"
			>
				<title>사용자 인증 아이콘</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		),
	},
	{
		name: "안전한 통합",
		description:
			"Stripe, OpenAI 등과 같은 서비스에 쉽게 연결하세요. 여러분의 키는 안전하게 유지되며 통합은 원활하게 이루어집니다.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-8 w-8 text-indigo-400"
			>
				<title>보안 통합 아이콘</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
				/>
			</svg>
		),
	},
];

const FeaturesSection = () => {
	return (
		<section id="features" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
						앱 개발,{" "}
						<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
							VIBE
						</span>
						와 함께라면 쉬워집니다
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-300">
						VIBE는 강력하고 사용하기 쉬운 기능들로 여러분의 아이디어 실현을
						돕습니다.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.name}
							className="bg-opacity-50 rounded-xl bg-gray-800 p-8 shadow-xl transition-shadow duration-300 hover:shadow-purple-500/30"
						>
							<div className="bg-opacity-70 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-700">
								{feature.icon}
							</div>
							<h3 className="mb-3 text-2xl font-semibold text-white">
								{feature.name}
							</h3>
							<p className="leading-relaxed text-gray-400">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
