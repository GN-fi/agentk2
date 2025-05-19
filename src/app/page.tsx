import CtaSection from "@/components/landing/CtaSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import SecuritySection from "@/components/landing/SecuritySection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import VibeCodingSection from "@/components/landing/VibeCodingSection";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default function LandingPage() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
			<main className="flex-grow">
				<HeroSection />
				<TrustedBySection />
				<FeaturesSection />
				<section id="solutions" className="bg-purple-700 py-16 sm:py-24">
					<div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
						<h2 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
							VIBE 솔루션
						</h2>
						<p className="mx-auto mb-12 max-w-3xl text-lg text-purple-200 sm:text-xl">
							VIBE는 개인 개발자부터 대규모 팀까지, 다양한 사용자에게 최적화된
							솔루션을 제공합니다. 클라우드 기반의 강력한 개발 환경과 AI 기능을
							통해 생산성을 극대화하세요.
						</p>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
							<div className="rounded-lg bg-purple-600 p-8 shadow-xl">
								<h3 className="mb-4 text-2xl font-semibold text-white">
									개인 개발자
								</h3>
								<p className="text-purple-200">
									빠르게 프로토타입을 만들고 아이디어를 실험하세요. 복잡한 설정
									없이 즉시 코딩을 시작할 수 있습니다.
								</p>
							</div>
							<div className="rounded-lg bg-purple-600 p-8 shadow-xl">
								<h3 className="mb-4 text-2xl font-semibold text-white">
									스타트업
								</h3>
								<p className="text-purple-200">
									팀원들과 실시간으로 협업하고, 빠르게 제품을 빌드하여 시장에
									출시하세요. 유연한 확장성을 제공합니다.
								</p>
							</div>
							<div className="rounded-lg bg-purple-600 p-8 shadow-xl">
								<h3 className="mb-4 text-2xl font-semibold text-white">
									교육 기관
								</h3>
								<p className="text-purple-200">
									학생들에게 최신 개발 도구를 제공하고, 코딩 교육의 효율성을
									높이세요. 관리 및 평가 기능을 지원합니다.
								</p>
							</div>
						</div>
					</div>
				</section>
				<VibeCodingSection />
				<SecuritySection />
				<CtaSection />
			</main>
			<Footer />
		</div>
	);
}
