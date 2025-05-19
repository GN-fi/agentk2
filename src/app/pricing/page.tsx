import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";

export const dynamic = "force-dynamic";

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
		<div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
			<Header />
			<main className="flex-grow px-4 py-20 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
						당신에게 맞는{" "}
						<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
							VIBE 플랜
						</span>
						을 선택하세요
					</h1>
					<p className="mx-auto mb-16 max-w-2xl text-xl text-gray-300">
						개인 프로젝트부터 대규모 엔터프라이즈 솔루션까지, VIBE는 모든 규모의
						요구사항을 충족하는 다양한 플랜을 제공합니다.
					</p>

					<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
						{pricingTiers.map((tier) => (
							<div
								key={tier.name}
								className={`bg-opacity-60 relative flex flex-col rounded-xl bg-gray-800 p-8 shadow-2xl ${tier.mostPopular ? "border-2 border-pink-500" : "border border-gray-700"}`}
							>
								{tier.mostPopular && (
									<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
										<span className="inline-flex items-center rounded-full bg-pink-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white">
											가장 인기있는 플랜
										</span>
									</div>
								)}
								<h2 className="mb-2 text-3xl font-semibold">{tier.name}</h2>
								<p className="mb-6 h-12 text-gray-400">{tier.description}</p>

								<div className="mb-6">
									<span className="text-5xl font-extrabold">{tier.price}</span>
									{tier.frequency && (
										<span className="ml-1 text-gray-400">{tier.frequency}</span>
									)}
								</div>

								<ul className="mb-8 flex-grow space-y-3 text-gray-300">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-center">
											<svg
												className="mr-2 h-5 w-5 flex-shrink-0 text-green-400"
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
									className={`w-full rounded-lg px-6 py-3 text-center text-lg font-semibold transition-colors ${tier.mostPopular ? "bg-pink-600 text-white hover:bg-pink-700" : "bg-purple-600 text-white hover:bg-purple-700"}`}
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
