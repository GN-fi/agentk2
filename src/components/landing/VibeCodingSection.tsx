import Image from "next/image";

const VibeCodingSection = () => {
	return (
		<section className="bg-opacity-40 bg-gray-900 py-20">
			<div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:flex-row lg:px-8">
				<div className="mb-10 text-center md:mb-0 md:w-1/2 md:pr-10 md:text-left">
					<h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
						가장 안전한{" "}
						<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
							VIBE 코딩
						</span>{" "}
						공간
					</h2>
					<p className="mb-8 text-xl leading-relaxed text-gray-300">
						VIBE 코딩은 자연어를 통해 모든 사람이 소프트웨어 제작에 접근할 수
						있도록 합니다. 자신과 가족을 위한 개인 소프트웨어, 새로운 비즈니스의
						시작, 직장 내 내부 도구 등 누구에게나 VIBE는 최고의 개발 환경을
						제공합니다.
					</p>
					<a
						href="#learn-more-vibe-coding"
						className="inline-block rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-purple-700"
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
						className="mx-auto rounded-lg shadow-2xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default VibeCodingSection;
