import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="py-20 md:py-32 text-center px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
					<span className="block">당신의 아이디어를</span>
					<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
						앱으로 현실화하세요
					</span>
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
					VIBE는 자연어만으로 누구나 손쉽게 소프트웨어를 만들 수 있도록
					지원합니다. 개인용 앱부터 비즈니스 솔루션까지, 상상을 현실로 만드는
					가장 빠른 방법입니다.
				</p>
				<div className="max-w-2xl mx-auto mb-12">
					<div className="relative">
						<input
							type="text"
							placeholder="예: 사용자를 위한 할 일 목록 앱 만들기..."
							className="w-full py-4 px-6 rounded-lg text-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-500 text-white"
						/>
						<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg">
							AI로 시작하기
						</button>
					</div>
				</div>
				<div className="flex justify-center space-x-4">
					<Link
						href="/getting-started"
						className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
					>
						무료로 시작하기
					</Link>
					<Link
						href="/contact-sales"
						className="bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-lg border border-gray-600 hover:border-gray-500 text-lg transition-colors"
					>
						영업팀 문의
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
