// 이 페이지는 미들웨어에 의해 /login 으로 리다이렉트됩니다.
// 미들웨어가 작동하지 않을 경우를 대비한 정적 페이지입니다.

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

const SignupPage = () => {
	// 리다이렉트 중에는 로딩 상태 표시

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
						로그인 페이지로 이동 중...
					</h2>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
