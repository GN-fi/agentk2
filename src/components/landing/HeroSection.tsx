import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="px-4 py-20 text-center sm:px-6 md:py-32 lg:px-8">
			<div className="container mx-auto">
				<h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-7xl">
					<span className="block">당신의 아이디어를</span>
					<span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
						앱으로 현실화하세요
					</span>
				</h1>
				<p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300 md:text-2xl">
					VIBE는 자연어만으로 누구나 손쉽게 소프트웨어를 만들 수 있도록
					지원합니다. 개인용 앱부터 비즈니스 솔루션까지, 상상을 현실로 만드는
					가장 빠른 방법입니다.
				</p>
				<div className="mx-auto mb-12 max-w-2xl">
					<div className="relative">
						<input
							type="text"
							placeholder="예: 사용자를 위한 할 일 목록 앱 만들기..."
							className="bg-opacity-50 w-full rounded-lg border border-gray-700 bg-gray-800 px-6 py-4 text-lg text-white placeholder-gray-500 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
						/>
						<button
							type="button"
							className="absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-purple-700"
						>
							AI로 시작하기
						</button>
					</div>
				</div>
				<div className="flex justify-center space-x-4">
					<Link
						href="/getting-started"
						className="rounded-lg bg-pink-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-pink-700"
					>
						무료로 시작하기
					</Link>
					<Link
						href="/contact-sales"
						className="rounded-lg border border-gray-600 bg-transparent px-8 py-4 text-lg font-bold text-gray-300 transition-colors hover:border-gray-500 hover:bg-gray-700 hover:text-white"
					>
						영업팀 문의
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
