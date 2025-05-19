"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, Suspense, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";

// useSearchParams를 사용하는 컴포넌트를 별도로 분리
function LoginForm() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/editor/~";

	const { data: session, status } = useSession();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (status === "authenticated") {
			router.push(callbackUrl);
		}
	}, [status, router, callbackUrl]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");
		setLoading(true);

		if (!email) {
			setError("이메일 주소를 입력해주세요.");
			setLoading(false);
			return;
		}
		if (!password) {
			setError("비밀번호를 입력해주세요.");
			setLoading(false);
			return;
		}

		try {
			const result = await signIn("credentials", {
				redirect: false,
				email,
				password,
			});

			if (result?.error) {
				setError("이메일 또는 비밀번호가 일치하지 않습니다.");
				console.error("Login failed:", result.error);
			} else if (result?.ok) {
			} else {
				setError("로그인에 실패했습니다. 다시 시도해주세요.");
			}
		} catch (e) {
			setError("로그인 처리 중 오류가 발생했습니다.");
			console.error("Login submit error:", e);
		}
		setLoading(false);
	};

	if (status === "loading" && !loading) {
		return (
			<div className="flex flex-col min-h-screen bg-gray-800 items-center justify-center">
				<p className="text-white text-xl">세션 확인 중...</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen bg-gray-800">
			<div className="sm:mx-auto sm:w-full sm:max-w-md pt-10">
				<Link href="/" className="flex justify-center">
					<h1 className="text-4xl font-bold text-white ml-2">VIBE</h1>
				</Link>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
					계정에 로그인하세요
				</h2>
			</div>

			<main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
				<div className="bg-gray-900 p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md">
					<div className="text-center mb-8">
						<h1 className="text-3xl sm:text-4xl font-bold text-purple-400">
							VIBE에 다시 오신 것을 환영합니다
						</h1>
						<p className="text-gray-400 mt-2">계정에 로그인하여 계속하세요.</p>
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
								disabled={loading}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white disabled:opacity-50"
								placeholder="user@example.com"
							/>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-300"
								>
									비밀번호
								</label>
								<div className="text-sm">
									<button
										type="button"
										onClick={() =>
											alert("비밀번호 찾기 기능은 현재 준비 중입니다.")
										}
										className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
									>
										비밀번호를 잊으셨나요?
									</button>
								</div>
							</div>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								disabled={loading}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white disabled:opacity-50"
								placeholder="password123"
							/>
						</div>

						{error && (
							<p className="text-sm text-red-400 text-center">{error}</p>
						)}

						<div>
							<button
								type="submit"
								disabled={loading}
								className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{loading ? "로그인 중..." : "로그인"}
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

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
							<div className="sm:col-span-3">
								<button
									type="button"
									onClick={() => !loading && signIn("google", { callbackUrl })}
									disabled={loading}
									className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors disabled:opacity-50"
								>
									<FaGoogle className="w-5 h-5 mr-2" />
									Google 계정으로 로그인
								</button>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-sm text-gray-400">
							계정이 없으신가요?{" "}
							<Link
								href="/signup"
								className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
							>
								새 계정 만들기
							</Link>
						</p>
					</div>
				</div>
			</main>

			<footer className="py-8 text-center text-xs text-gray-500">
				&copy; {new Date().getFullYear()} VIBE. 모든 권리 보유.
			</footer>
		</div>
	);
}

// 메인 컴포넌트에서 Suspense로 감싸기
const LoginPage = () => {
	return (
		<Suspense
			fallback={
				<div className="flex flex-col min-h-screen bg-gray-800 items-center justify-center">
					<p className="text-white text-xl">로딩 중...</p>
				</div>
			}
		>
			<LoginForm />
		</Suspense>
	);
};

export default LoginPage;
