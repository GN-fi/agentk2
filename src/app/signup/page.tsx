"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";

const SignupPage = () => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/editor/~");
		}
	}, [status, router]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");

		if (!email) {
			setError("이메일 주소를 입력해주세요.");
			return;
		}
		if (!password) {
			setError("비밀번호를 입력해주세요.");
			return;
		}
		if (password.length < 8) {
			setError("비밀번호는 최소 8자 이상이어야 합니다.");
			return;
		}

		const existingUser = localStorage.getItem(email);
		if (existingUser) {
			setError("이미 가입된 이메일입니다. 다른 이메일을 사용해주세요.");
			return;
		}

		try {
			localStorage.setItem(email, JSON.stringify({ password }));
			alert("회원가입에 성공했습니다! 로그인 페이지로 이동합니다.");
			router.push("/login");
		} catch (e) {
			setError("회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
			console.error("localStorage 저장 오류:", e);
		}
	};

	if (status === "loading") {
		return (
			<div className="flex flex-col min-h-screen bg-gray-800 items-center justify-center">
				<p className="text-white text-xl">로그인 상태 확인 중...</p>
			</div>
		);
	}

	if (status === "authenticated") {
		return null;
	}

	return (
		<div className="flex flex-col min-h-screen bg-gray-800">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Link href="/" className="flex justify-center">
					<h1 className="text-4xl font-bold text-white">VIBE</h1>
				</Link>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
					새 계정 만들기
				</h2>
			</div>

			<main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
				<div className="bg-gray-900 p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md">
					<div className="text-center mb-8">
						<h1 className="text-3xl sm:text-4xl font-bold text-purple-400">
							VIBE 시작하기
						</h1>
						<p className="text-gray-400 mt-2">
							새로운 계정을 만들고 코딩 여정을 시작하세요.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-300"
							>
								이메일 주소
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-300"
							>
								비밀번호
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"
								placeholder="8자 이상 입력해주세요"
							/>
						</div>

						{error && <p className="text-sm text-red-400">{error}</p>}

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-colors"
							>
								계정 만들기
							</button>
						</div>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-700" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-gray-900 text-gray-500">
									또는 다음으로 계속하기
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-3 gap-3">
							<div>
								<button
									onClick={() => signIn("google", { callbackUrl: "/editor/~" })}
									className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors"
								>
									<span className="sr-only">Google 계정으로 가입</span>
									<FaGoogle className="w-5 h-5" />
								</button>
							</div>
							<div>
								<button className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
									<span className="sr-only">GitHub 계정으로 가입</span>
									<FaGithub className="w-5 h-5" />
								</button>
							</div>
							<div>
								<button className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
									<span className="sr-only">Twitter 계정으로 가입</span>
									<FaTwitter className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-sm text-gray-400">
							이미 계정이 있으신가요?{" "}
							<Link
								href="/login"
								className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
							>
								로그인하기
							</Link>
						</p>
					</div>
				</div>
			</main>

			<div className="mt-6 text-center text-xs text-gray-500">
				이 사이트는 reCAPTCHA 및 Google의 개인정보처리방침과 서비스 약관의
				보호를 받습니다.
			</div>
		</div>
	);
};

export default SignupPage;
