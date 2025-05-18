"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	return (
		<header className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-opacity-80 backdrop-blur-md border-b border-gray-700">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src="/images/logo.svg"
						alt="VIBE 로고"
						width={40}
						height={40}
					/>
					<span className="text-2xl font-bold text-white">VIBE</span>
				</Link>
				<nav className="hidden md:flex space-x-6 items-center">
					<Link
						href="/#features"
						className="text-gray-300 hover:text-white transition-colors"
					>
						주요 기능
					</Link>
					<Link
						href="/#solutions"
						className="text-gray-300 hover:text-white transition-colors"
					>
						솔루션
					</Link>
					<Link
						href="/pricing"
						className="text-gray-300 hover:text-white transition-colors"
					>
						가격
					</Link>
					<Link
						href="/docs"
						className="text-gray-300 hover:text-white transition-colors"
					>
						문서
					</Link>

					{loading ? (
						<div className="h-8 w-20 animate-pulse bg-gray-600 rounded-lg" />
					) : session ? (
						<>
							{session.user?.image && (
								<Image
									src={session.user.image}
									alt={session.user.name || "사용자 프로필 이미지"}
									width={32}
									height={32}
									className="rounded-full"
								/>
							)}
							<button
								type="button"
								onClick={() => signOut({ callbackUrl: "/" })}
								className="text-gray-300 hover:text-white transition-colors"
							>
								로그아웃
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								onClick={() => signIn()}
								className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
							>
								로그인
							</button>
							<Link
								href="/signup"
								className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
							>
								회원가입
							</Link>
						</>
					)}
				</nav>
				<button
					type="button"
					className="md:hidden text-gray-300 hover:text-white focus:outline-none"
				>
					{/* 모바일 메뉴 아이콘 (추후 SVG로 교체 및 기능 구현) */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<title>모바일 메뉴 열기</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
