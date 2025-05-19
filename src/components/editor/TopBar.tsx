"use client"; // 훅 사용을 위해 'use client' 추가

import {
	Bars3Icon,
	BellIcon,
	ChevronDownIcon,
	CloudArrowUpIcon,
	PlayIcon,
	QuestionMarkCircleIcon,
	StopIcon,
	UserPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";

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

	// biome-ignore lint/correctness/useExhaustiveDependencies: ref는 일반적으로 의존성 배열에 필요 없지만, 이 경우 handleClickOutside가 ref를 직접 사용합니다.
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
		<div className="flex items-center justify-between border-b border-gray-700 bg-gray-900 p-2 text-white">
			<div className="flex items-center space-x-4">
				<Link href="/" className="flex flex-shrink-0 items-center">
					<Image
						src="/images/logo.svg"
						alt="VIBE 로고"
						width={28}
						height={28}
					/>
					<span className="ml-2 text-lg font-semibold">VIBE</span>
				</Link>
				<div className="flex cursor-pointer items-center space-x-1 rounded p-1 hover:bg-gray-700">
					<span className="text-sm font-medium">{displayProjectName}</span>
					<ChevronDownIcon className="h-4 w-4" />
				</div>
				{projectName !== "~" && ( // 대시보드에서는 실행 버튼 숨김
					<button
						type="button"
						className="flex items-center space-x-2 rounded bg-green-500 px-3 py-1.5 text-sm font-medium hover:bg-green-600"
					>
						<PlayIcon className="h-5 w-5" />
						<span>실행</span>
					</button>
				)}
				{/* <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-sm font-medium">
          <StopIcon className="w-5 h-5" />
          <span>중지</span>
        </button> */}
			</div>

			{/* Desktop Menu */}
			<div className="hidden items-center space-x-3 md:flex">
				<button
					type="button"
					className="flex items-center space-x-2 rounded bg-blue-500 px-3 py-1.5 text-sm font-medium hover:bg-blue-600"
				>
					<CloudArrowUpIcon className="h-5 w-5" />
					<span>배포</span>
				</button>
				<button
					type="button"
					className="flex items-center space-x-2 rounded border border-gray-600 px-3 py-1.5 text-sm font-medium hover:bg-gray-700"
				>
					<UserPlusIcon className="h-5 w-5" />
					<span>초대</span>
				</button>
				<button type="button" className="rounded p-1.5 hover:bg-gray-700">
					<BellIcon className="h-5 w-5" />
				</button>
				<button type="button" className="rounded p-1.5 hover:bg-gray-700">
					<QuestionMarkCircleIcon className="h-5 w-5" />
				</button>

				{/* 사용자 인증 상태에 따른 UI */}
				{status === "loading" && (
					<p className="text-sm text-gray-400">로딩 중...</p>
				)}
				{status === "unauthenticated" && (
					<div className="space-x-2">
						<Link
							href="/login"
							className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
						>
							로그인
						</Link>
						<Link
							href="/signup"
							className="rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
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
								className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
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
									<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-600">
										<span className="text-xs leading-none font-medium text-white">
											{session.user.name?.charAt(0)?.toUpperCase() ||
												session.user.email?.charAt(0)?.toUpperCase()}
										</span>
									</span>
								)}
								<ChevronDownIcon
									className={`ml-1 h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:text-gray-200 ${dropdownOpen ? "rotate-180 transform" : ""}`}
								/>
							</button>
						</div>
						{dropdownOpen && (
							<div
								className="ring-opacity-5 absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabIndex={-1}
							>
								<div className="border-b border-gray-700 px-4 py-3">
									<p className="text-sm text-gray-300">로그인 계정:</p>
									<p className="truncate text-sm font-medium text-purple-300">
										{session.user.name || session.user.email}
									</p>
								</div>
								<Link
									href="/settings"
									className="group flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
									tabIndex={-1}
									onClick={() => setDropdownOpen(false)}
								>
									<FiUser className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									프로필
								</Link>
								<Link
									href="/settings"
									className="group flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
									tabIndex={-1}
									onClick={() => setDropdownOpen(false)}
								>
									<FiSettings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									계정 설정
								</Link>
								<button
									type="button"
									onClick={() => {
										signOut();
										setDropdownOpen(false);
									}}
									className="group flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
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
			<div className="flex items-center md:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="rounded-md p-1.5 hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
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
					className="ring-opacity-5 absolute top-12 right-0 z-50 mt-2 w-64 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black focus:outline-none md:hidden"
				>
					<div
						className="space-y-1 px-2 pt-2 pb-3"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="mobile-menu-button"
					>
						{status === "authenticated" && session?.user && (
							<>
								<div className="mb-2 border-b border-gray-700 px-3 py-2">
									<p className="text-sm text-gray-300">로그인 계정:</p>
									<p className="truncate text-sm font-medium text-purple-300">
										{session.user.name || session.user.email}
									</p>
								</div>
								<Link
									href="/settings"
									onClick={() => setMobileMenuOpen(false)}
									className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
								>
									<FiUser className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									프로필
								</Link>
								<Link
									href="/settings"
									onClick={() => setMobileMenuOpen(false)}
									className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									role="menuitem"
								>
									<FiSettings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
									계정 설정
								</Link>
							</>
						)}

						<button
							type="button"
							// TODO: 배포 기능 연결
							onClick={() => {
								alert("배포 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<CloudArrowUpIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							배포
						</button>
						<button
							type="button"
							// TODO: 초대 기능 연결
							onClick={() => {
								alert("초대 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<UserPlusIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							초대
						</button>
						<button
							type="button"
							// TODO: 알림 기능 연결
							onClick={() => {
								alert("알림 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							role="menuitem"
						>
							<BellIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />{" "}
							알림
						</button>
						<button
							type="button"
							// TODO: 도움말 기능 연결
							onClick={() => {
								alert("도움말 기능이 구현될 예정입니다.");
								setMobileMenuOpen(false);
							}}
							className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
									className="mt-2 block w-full rounded-md bg-pink-600 px-3 py-2 text-left text-base font-semibold text-white transition-colors hover:bg-pink-700"
									role="menuitem"
								>
									로그인
								</Link>
								<Link
									href="/signup"
									onClick={() => setMobileMenuOpen(false)}
									className="mt-2 block w-full rounded-md bg-purple-600 px-3 py-2 text-left text-base font-semibold text-white transition-colors hover:bg-purple-700"
									role="menuitem"
								>
									회원가입
								</Link>
							</>
						)}
						{status === "authenticated" && (
							<button
								type="button"
								onClick={() => {
									signOut();
									setMobileMenuOpen(false);
								}}
								className="group mt-2 flex w-full items-center rounded-md border-t border-gray-700 px-3 py-2 pt-3 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
