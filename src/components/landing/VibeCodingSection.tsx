import Image from "next/image";

const VibeCodingSection = () => {
	return (
		<section className="py-20 bg-gray-900 bg-opacity-40">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-6">
						가장 안전한{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
							VIBE 코딩
						</span>{" "}
						공간
					</h2>
					<p className="text-xl text-gray-300 mb-8 leading-relaxed">
						VIBE 코딩은 자연어를 통해 모든 사람이 소프트웨어 제작에 접근할 수
						있도록 합니다. 자신과 가족을 위한 개인 소프트웨어, 새로운 비즈니스의
						시작, 직장 내 내부 도구 등 누구에게나 VIBE는 최고의 개발 환경을
						제공합니다.
					</p>
					<a
						href="#learn-more-vibe-coding"
						className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
					>
						VIBE 코딩 더 알아보기
					</a>
				</div>
				<div className="md:w-1/2">
					{/* 여기에 VIBE 코딩을 나타내는 이미지나 일러스트레이션을 추가할 수 있습니다. */}
					{/* 예시로 플레이스홀더 이미지를 사용합니다. */}
					<Image
						src="/images/vibe-coding-illustration.svg" // 이 이미지는 아직 없습니다.
						alt="VIBE 코딩 일러스트레이션"
						width={500}
						height={400}
						className="rounded-lg shadow-2xl mx-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default VibeCodingSection;
