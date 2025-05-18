import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfServicePage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
			<Header />
			<main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-purple-400 mb-8">
					서비스 이용약관
				</h1>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-purple-300 mb-3">
						제1조 (목적)
					</h2>
					<p className="mb-2">
						본 약관은 VIBE (이하 "회사")가 제공하는 VIBE 플랫폼 및 관련 제반
						서비스(이하 "서비스")의 이용과 관련하여 회사와 회원과의 권리, 의무
						및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-purple-300 mb-3">
						제2조 (정의)
					</h2>
					<p className="mb-2">
						본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
					</p>
					<ul className="list-disc list-inside mb-2 pl-4">
						<li>
							"서비스"라 함은 구현되는 단말기(PC, 모바일, 태블릿 등의 각종
							유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 VIBE 플랫폼
							및 관련 제반 서비스를 의미합니다.
						</li>
						<li>
							"회원"이라 함은 회사의 "서비스"에 접속하여 본 약관에 따라 "회사"와
							이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을
							말합니다.
						</li>
						<li>
							"아이디(ID 또는 계정)"라 함은 "회원"의 식별과 "서비스" 이용을
							위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을
							의미합니다.
						</li>
						<li>
							"비밀번호"라 함은 "회원"이 부여 받은 "아이디"와 일치되는
							"회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는
							숫자의 조합을 의미합니다.
						</li>
						{/* 기타 필요한 용어 정의 추가 */}
					</ul>
				</section>

				{/* 추가 내용 필요 시 여기에 섹션 추가 */}
				<p className="mb-4">
					[본 서비스 이용약관은 법률 자문을 받은 최종본이 아니며, 서비스 정식
					출시 전 반드시 전문가의 검토를 거쳐 수정 및 보완되어야 합니다.]
				</p>

				<p className="mb-4">효력발생일: 2025년 05월 18일 (임시)</p>

				<div className="mt-8">
					<Link
						href="/"
						className="text-purple-400 hover:text-purple-300 transition-colors"
					>
						&larr; 홈으로 돌아가기
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default TermsOfServicePage;
