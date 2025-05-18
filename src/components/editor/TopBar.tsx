"use client"; // 훅 사용을 위해 'use client' 추가

import {
	ChevronDownIcon,
	PlayIcon,
	StopIcon,
	CloudArrowUpIcon,
	UserPlusIcon,
	BellIcon,
	QuestionMarkCircleIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

// interface TopBarProps {
//   projectName: string;
// }

const TopBar = (/*{ projectName }: TopBarProps*/) => {
	const params = useParams();
	const projectName = params.projectName
		? decodeURIComponent(params.projectName as string)
		: "프로젝트";
	const displayProjectName = projectName === "~" ? "대시보드" : projectName;

	const { data: session, status } = useSession();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdownOpen(false);
			}
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				setMobileMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, mobileMenuRef]);

	return (
		<div className="flex items-center justify-between p-2 bg-gray-900 border-b border-gray-700 text-white">
			<div className="flex items-center space-x-4">
				<Link href="/" className="flex items-center flex-shrink-0">
					<Image
						src="/images/logo.svg"
						alt="VIBE 로고"
						width={28}
						height={28}
					/>
					<span className="ml-2 text-lg font-semibold">VIBE</span>
				</Link>
				<div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-700 p-1 rounded">
					<span className="text-sm font-medium">{displayProjectName}</span>
					<ChevronDownIcon className="w-4 h-4" />
				</div>
				{projectName !== "~" && ( // 대시보드에서는 실행 버튼 숨김
					<button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded text-sm font-medium">
						<PlayIcon className="w-5 h-5" />
						<span>실행</span>
					</button>
				)}
				{/* <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-sm font-medium">
          <StopIcon className="w-5 h-5" />
          <span>중지</span>
        </button> */}
			</div>

			{/* Desktop Menu */}
			<div className="hidden md:flex items-center space-x-3">
				<button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded text-sm font-medium">
					<CloudArrowUpIcon className="w-5 h-5" />
					<span>배포</span>
				</button>
				<button className="flex items-center space-x-2 border border-gray-600 hover:bg-gray-700 px-3 py-1.5 rounded text-sm font-medium">
					<UserPlusIcon className="w-5 h-5" />
					<span>초대</span>
				</button>
				<button className="p-1.5 hover:bg-gray-700 rounded">
					<BellIcon className="w-5 h-5" />
				</button>
				<button className="p-1.5 hover:bg-gray-700 rounded">
					<QuestionMarkCircleIcon className="w-5 h-5" />
				</button>

				{/* 사용자 인증 상태에 따른 UI */}
				{status === "loading" && (
					<p className="text-sm text-gray-400">로딩 중...</p>
				)}
				{status === "unauthenticated" && (
					<div className="space-x-2">
						<Link
							href="/login"
							className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-1.5 px-3 rounded-md transition-colors text-sm"
						>
							로그인
						</Link>
						<Link
							href="/signup"
							className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1.5 px-3 rounded-md transition-colors text-sm"
						>
							회원가입
						</Link>
					</div>
				)}
				{status === "authenticated" && session?.user && (
					<div className="relative" ref={dropdownRef}>
						<div>
							<button
								onClick={() => setDropdownOpen(!dropdownOpen)}
								type="button"
								className="flex items-center max-w-xs bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								id="user-menu-button"
								aria-expanded={dropdownOpen}
								aria-haspopup="true"
							>
								<span className="sr-only">사용자 메뉴 열기</span>
								{session.user.image ? (
									<Image
										className="h-7 w-7 rounded-full"
										src={session.user.image}
										alt="사용자 프로필 이미지"
										width={28}
										height={28}
									/>
								) : (
									<span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-purple-600">
										<span className="text-xs font-medium leading-none text-white">
											{session.user.name?.charAt(0)?.toUpperCase() ||
												session.user.email?.charAt(0)?.toUpperCase()}
										</span>
									</span>
								)}
								<ChevronDownIcon
									className={`ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-200 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180" : ""}`}
								/>
							</button>
						</div>
						{dropdownOpen && (
							<div
								className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabIndex={-1}
							>
								<div className="px-4 py-3 border-b border-gray-700">
									<p className="text-sm text-gray-300">로그인 계정:</p>
									<p className="text-sm font-medium text-purple-300 truncate">
										{session.user.name || session.user.email}
									</p>
								</div>
								<Link
									href="/settings"
									className="group flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
									tabIndex={-1}
									onClick={() => setDropdownOpen(false)}
								>
									<FiUser className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									프로필
								</Link>
								<Link
									href="/settings"
									className="group flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
									tabIndex={-1}
									onClick={() => setDropdownOpen(false)}
								>
									<FiSettings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									계정 설정
								</Link>
								<button
									onClick={() => {
										signOut();
										setDropdownOpen(false);
									}}
									className="group flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
									tabIndex={-1}
								>
									<FiLogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									로그아웃
								</button>
							</div>
						)}
					</div>
				)}
			</div>

			{/* Mobile Menu Button */}
			<div className="md:hidden flex items-center">
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="p-1.5 hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-menu"
				>
					<span className="sr-only">메인 메뉴 열기</span>
					{mobileMenuOpen ? (
						<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
					) : (
						<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
					)}
				</button>
			</div>

			{/* Mobile Menu Panel */}
			{mobileMenuOpen && (
				<div
					id="mobile-menu"
					ref={mobileMenuRef}
					className="md:hidden origin-top-right absolute right-0 top-12 mt-2 w-64 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
				>
					<div
						className="px-2 pt-2 pb-3 space-y-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="mobile-menu-button"
					>
						{status === "authenticated" && session?.user && (
							<>
								<div className="px-3 py-2 border-b border-gray-700 mb-2">
									<p className="text-sm text-gray-300">로그인 계정:</p>
									<p className="text-sm font-medium text-purple-300 truncate">
										{session.user.name || session.user.email}
									</p>
								</div>
								<Link
									href="/settings"
									onClick={() => setMobileMenuOpen(false)}
									className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
								>
									<FiUser className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									프로필
								</Link>
								<Link
									href="/settings"
									onClick={() => setMobileMenuOpen(false)}
									className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
								>
									<FiSettings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									계정 설정
								</Link>
							</>
						)}

						<button
							// TODO: 배포 기능 연결
							onClick={() => {
								alert("배포 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<CloudArrowUpIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							배포
						</button>
						<button
							// TODO: 초대 기능 연결
							onClick={() => {
								alert("초대 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<UserPlusIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							초대
						</button>
						<button
							// TODO: 알림 기능 연결
							onClick={() => {
								alert("알림 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<BellIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							알림
						</button>
						<button
							// TODO: 도움말 기능 연결
							onClick={() => {
								alert("도움말 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<QuestionMarkCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							도움말
						</button>

						{status === "unauthenticated" && (
							<>
								<Link
									href="/login"
									onClick={() => setMobileMenuOpen(false)}
									className="block w-full text-left bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-3 rounded-md transition-colors text-base mt-2"
									role="menuitem"
								>
									로그인
								</Link>
								<Link
									href="/signup"
									onClick={() => setMobileMenuOpen(false)}
									className="block w-full text-left bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded-md transition-colors text-base mt-2"
									role="menuitem"
								>
									회원가입
								</Link>
							</>
						)}
						{status === "authenticated" && (
							<button
								onClick={() => {
									signOut();
									setMobileMenuOpen(false);
								}}
								className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white mt-2 border-t border-gray-700 pt-3"
								role="menuitem"
							>
								<FiLogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
								로그아웃
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TopBar;
