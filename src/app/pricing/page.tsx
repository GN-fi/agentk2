import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";

const pricingTiers = [
	{
		name: "무료",
		price: "₩0",
		frequency: "/월",
		description: "기본 기능을 체험하고 VIBE를 시작하세요.",
		features: [
			"AI 코드 생성 (월 100회)",
			"기본 템플릿 액세스",
			"1개 프로젝트",
			"커뮤니티 지원",
		],
		cta: "플랜 시작하기",
		href: "/signup?plan=free",
		mostPopular: false,
	},
	{
		name: "프로",
		price: "₩25,000",
		frequency: "/월",
		description: "개인 및 소규모 팀을 위한 모든 기능.",
		features: [
			"AI 코드 생성 (무제한)",
			"모든 템플릿 액세스",
			"최대 10개 프로젝트",
			"우선 기술 지원",
			"사용자 정의 도메인",
		],
		cta: "프로 플랜 시작하기",
		href: "/signup?plan=pro",
		mostPopular: true,
	},
	{
		name: "엔터프라이즈",
		price: "맞춤형",
		frequency: "",
		description: "대규모 조직을 위한 맞춤형 솔루션.",
		features: [
			"프로 플랜의 모든 기능",
			"전담 계정 관리자",
			"SAML SSO",
			"온프레미스 배포 옵션",
			"맞춤형 SLA",
		],
		cta: "영업팀 문의",
		href: "/contact-sales",
		mostPopular: false,
	},
];

export default function PricingPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
			<Header />
			<main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6">
						당신에게 맞는{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
							VIBE 플랜
						</span>
						을 선택하세요
					</h1>
					<p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
						개인 프로젝트부터 대규모 엔터프라이즈 솔루션까지, VIBE는 모든 규모의
						요구사항을 충족하는 다양한 플랜을 제공합니다.
					</p>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{pricingTiers.map((tier) => (
							<div
								key={tier.name}
								className={`relative flex flex-col p-8 rounded-xl shadow-2xl bg-gray-800 bg-opacity-60 ${tier.mostPopular ? "border-2 border-pink-500" : "border border-gray-700"}`}
							>
								{tier.mostPopular && (
									<div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
										<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-semibold tracking-wide bg-pink-500 text-white">
											가장 인기있는 플랜
										</span>
									</div>
								)}
								<h2 className="text-3xl font-semibold mb-2">{tier.name}</h2>
								<p className="text-gray-400 mb-6 h-12">{tier.description}</p>

								<div className="mb-6">
									<span className="text-5xl font-extrabold">{tier.price}</span>
									{tier.frequency && (
										<span className="text-gray-400 ml-1">{tier.frequency}</span>
									)}
								</div>

								<ul className="space-y-3 text-gray-300 mb-8 flex-grow">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-center">
											<svg
												className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<title>체크 아이콘</title>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											{feature}
										</li>
									))}
								</ul>

								<Link
									href={tier.href}
									className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors text-lg ${tier.mostPopular ? "bg-pink-600 hover:bg-pink-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"}`}
								>
									{tier.cta}
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
