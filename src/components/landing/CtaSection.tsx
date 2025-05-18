import Link from "next/link";

const CtaSection = () => {
	return (
		<section className="py-20 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
					지금 바로 VIBE를 시작하세요
				</h2>
				<p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
					클릭 몇 번으로 웹사이트, 자동화, 내부 도구, 데이터 파이프라인 등을
					모든 프로그래밍 언어로 설정, 다운로드 또는 추가 도구 없이 배포하세요.
					AI가 내장된 단일 클라우드 작업 공간에서 모든 것이 가능합니다.
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
					<Link
						href="/signup"
						className="bg-white text-purple-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-purple-100 transition-colors shadow-lg transform hover:scale-105 duration-300 ease-in-out"
					>
						무료로 시작하기
					</Link>
					<Link
						href="/contact-sales"
						className="bg-transparent text-white font-semibold py-4 px-10 rounded-lg text-lg border-2 border-white hover:bg-white hover:text-purple-700 transition-colors duration-300 ease-in-out"
					>
						영업팀 문의
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
