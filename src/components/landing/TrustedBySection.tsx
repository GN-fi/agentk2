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
		<section className="py-16 bg-gray-800 bg-opacity-30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-center text-xl font-semibold text-gray-400 mb-10">
					다양한 기업들이 VIBE와 함께하고 있습니다
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
					{logos.map((logo) => (
						<div key={logo.name} className="flex justify-center">
							<Image
								src={logo.src}
								alt={logo.alt}
								width={120}
								height={60}
								className="opacity-60 hover:opacity-100 transition-opacity duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBySection;
