"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	return (
		<header className="bg-opacity-80 sticky top-0 z-50 border-b border-gray-700 px-4 py-6 backdrop-blur-md sm:px-6 lg:px-8">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src="/images/logo.svg"
						alt="VIBE 로고"
						width={40}
						height={40}
					/>
					<span className="text-2xl font-bold text-white">VIBE</span>
				</Link>
				<nav className="hidden items-center space-x-6 md:flex">
					<Link
						href="/#features"
						className="text-gray-300 transition-colors hover:text-white"
					>
						주요 기능
					</Link>
					<Link
						href="/#solutions"
						className="text-gray-300 transition-colors hover:text-white"
					>
						솔루션
					</Link>
					<Link
						href="/pricing"
						className="text-gray-300 transition-colors hover:text-white"
					>
						가격
					</Link>
					<Link
						href="/docs"
						className="text-gray-300 transition-colors hover:text-white"
					>
						문서
					</Link>

					{loading ? (
						<div className="h-8 w-20 animate-pulse rounded-lg bg-gray-600" />
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
								className="text-gray-300 transition-colors hover:text-white"
							>
								로그아웃
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								onClick={() => signIn()}
								className="rounded-lg bg-pink-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-pink-700"
							>
								로그인
							</button>
							<Link
								href="/signup"
								className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-700"
							>
								회원가입
							</Link>
						</>
					)}
				</nav>
				<button
					type="button"
					className="text-gray-300 hover:text-white focus:outline-none md:hidden"
				>
					{/* 모바일 메뉴 아이콘 (추후 SVG로 교체 및 기능 구현) */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
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
