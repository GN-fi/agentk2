import Image from "next/image";

const logos = [
	{
		name: "Company A",
		src: "/images/placeholder-logo.svg",
		alt: "회사 A 로고",
	},
	{
		name: "Company B",
		src: "/images/placeholder-logo.svg",
		alt: "회사 B 로고",
	},
	{
		name: "Company C",
		src: "/images/placeholder-logo.svg",
		alt: "회사 C 로고",
	},
	{
		name: "Company D",
		src: "/images/placeholder-logo.svg",
		alt: "회사 D 로고",
	},
	{
		name: "Company E",
		src: "/images/placeholder-logo.svg",
		alt: "회사 E 로고",
	},
	{
		name: "Company F",
		src: "/images/placeholder-logo.svg",
		alt: "회사 F 로고",
	},
];

const TrustedBySection = () => {
	return (
		<section className="bg-opacity-30 bg-gray-800 py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="mb-10 text-center text-xl font-semibold text-gray-400">
					다양한 기업들이 VIBE와 함께하고 있습니다
				</h2>
				<div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
					{logos.map((logo) => (
						<div key={logo.name} className="flex justify-center">
							<Image
								src={logo.src}
								alt={logo.alt}
								width={120}
								height={60}
								className="opacity-60 transition-opacity duration-300 hover:opacity-100"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBySection;
