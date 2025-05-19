import Link from "next/link";

const CtaSection = () => {
	return (
		<section className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 py-20">
			<div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
				<h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
					지금 바로 VIBE를 시작하세요
				</h2>
				<p className="mx-auto mb-10 max-w-2xl text-xl text-purple-200">
					클릭 몇 번으로 웹사이트, 자동화, 내부 도구, 데이터 파이프라인 등을
					모든 프로그래밍 언어로 설정, 다운로드 또는 추가 도구 없이 배포하세요.
					AI가 내장된 단일 클라우드 작업 공간에서 모든 것이 가능합니다.
				</p>
				<div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
					<Link
						href="/signup"
						className="transform rounded-lg bg-white px-10 py-4 text-lg font-bold text-purple-700 shadow-lg transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-purple-100"
					>
						무료로 시작하기
					</Link>
					<Link
						href="/contact-sales"
						className="rounded-lg border-2 border-white bg-transparent px-10 py-4 text-lg font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-purple-700"
					>
						영업팀 문의
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
