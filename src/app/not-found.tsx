import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";

// 이 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

export default function NotFound() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
			<Header />
			<main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
				<div className="max-w-md">
					<h1 className="text-6xl md:text-9xl font-extrabold text-pink-500 mb-4">
						404
					</h1>
					<h2 className="text-3xl md:text-4xl font-semibold mb-6">
						페이지를 찾을 수 없습니다.
					</h2>
					<p className="text-xl text-gray-300 mb-10">
						요청하신 페이지가 존재하지 않거나, 다른 주소로 변경되었을 수
						있습니다. 입력하신 주소가 정확한지 다시 한번 확인해주세요.
					</p>
					<Link
						href="/"
						className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
					>
						홈으로 돌아가기
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
