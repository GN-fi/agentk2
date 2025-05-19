import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const linkGroups = [
		{
			title: "VIBE",
			links: [
				{ name: "모바일 앱", href: "#" },
				{ name: "데스크톱 앱", href: "#" },
				{ name: "블로그", href: "#blog" },
				{ name: "채용", href: "#" },
				{ name: "회사 소개", href: "#about" },
				{ name: "가격 정책", href: "/pricing" },
			],
		},
		{
			title: "주요 기능",
			links: [
				{ name: "VIBE 에이전트", href: "#" },
				{ name: "협업 기능", href: "#" },
				{ name: "배포", href: "#" },
				{ name: "팀 기능", href: "#" },
			],
		},
		{
			title: "법적 고지",
			links: [
				{ name: "서비스 약관", href: "/terms-of-service" },
				{ name: "팀 계약", href: "#" },
				{ name: "개인정보 보호정책", href: "/privacy-policy" },
				{ name: "Subprocessors", href: "#" },
				{ name: "DPA", href: "#" },
				{ name: "악용 사례 신고", href: "#" },
			],
		},
		{
			title: "연결하기",
			links: [
				{ name: "X / Twitter", href: "#" },
				{ name: "Tiktok", href: "#" },
				{ name: "Facebook", href: "#" },
				{ name: "Instagram", href: "#" },
				{ name: "Linkedin", href: "#" },
			],
		},
	];

	return (
		<footer className="bg-gray-900 px-4 py-16 text-gray-400 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
					<div className="col-span-2 mb-8 md:col-span-4 lg:col-span-1 lg:mb-0">
						<Link href="/" className="mb-4 flex items-center space-x-2">
							<Image
								src="/images/logo.svg"
								alt="VIBE 로고"
								width={32}
								height={32}
							/>
							<span className="text-xl font-bold text-white">VIBE</span>
						</Link>
						<p className="text-sm">아이디어를 현실로 만드는 가장 빠른 방법.</p>
					</div>
					{linkGroups.map((group) => (
						<div key={group.title}>
							<h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
								{group.title}
							</h3>
							<ul className="space-y-3">
								{group.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-sm transition-colors hover:text-white"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-between border-t border-gray-700 pt-8 text-sm sm:flex-row">
					<p>&copy; {currentYear} VIBE Technologies Inc. 모든 권리 보유.</p>
					{/* 소셜 미디어 아이콘 등 추가 가능 */}
					<div className="mt-4 flex space-x-4 sm:mt-0">
						{/* 예시: <Link href="#" className="hover:text-white"><IconComponent /></Link> */}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
