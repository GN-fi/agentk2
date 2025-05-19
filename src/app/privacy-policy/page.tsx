import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";

const PrivacyPolicyPage = () => {
	return (
		<div className="flex min-h-screen flex-col bg-gray-900 text-gray-300">
			<Header />
			<main className="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
				<h1 className="mb-8 text-4xl font-bold text-purple-400">
					개인정보처리방침
				</h1>

				<section className="mb-6">
					<h2 className="mb-3 text-2xl font-semibold text-purple-300">
						1. 총칙
					</h2>
					<p className="mb-2">
						VIBE (이하 "회사")는 귀하의 개인정보를 매우 중요하게 생각하며,
						「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및
						「개인정보보호법」 등 관련 법규를 준수하고 있습니다.
					</p>
					<p className="mb-2">
						회사는 본 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가
						어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
						조치가 취해지고 있는지 알려드립니다.
					</p>
					<p className="mb-2">
						본 개인정보처리방침은 법령 및 정부지침의 변경과 내부 운영방침의
						변경에 따라 내용이 변경될 수 있으며, 변경 시에는 웹사이트
						공지사항(또는 개별공지)을 통하여 공지할 것입니다.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="mb-3 text-2xl font-semibold text-purple-300">
						2. 수집하는 개인정보 항목 및 수집방법
					</h2>
					<p className="mb-2">
						회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공 등을 위해
						아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.
					</p>
					<ul className="mb-2 list-inside list-disc pl-4">
						<li>
							필수항목: 이메일 주소, 비밀번호 (소셜 로그인 시 해당
							프로바이더로부터 제공받는 정보)
						</li>
						<li>선택항목: (서비스 이용 과정에서 추가 정보 수집 시 명시)</li>
					</ul>
					<p className="mb-2">
						개인정보 수집방법: 홈페이지(회원가입, 게시판 등), 서면양식, 팩스,
						전화, 상담 게시판, 이메일, 이벤트 응모, 배송요청, 협력회사로부터의
						제공, 생성정보 수집 툴을 통한 수집
					</p>
				</section>

				{/* 추가 내용 필요 시 여기에 섹션 추가 */}
				<p className="mb-4">
					[본 개인정보처리방침은 법률 자문을 받은 최종본이 아니며, 서비스 정식
					출시 전 반드시 전문가의 검토를 거쳐 수정 및 보완되어야 합니다.]
				</p>

				<p className="mb-4">시행일자: 2025년 05월 18일 (임시)</p>

				<div className="mt-8">
					<Link
						href="/"
						className="text-purple-400 transition-colors hover:text-purple-300"
					>
						&larr; 홈으로 돌아가기
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default PrivacyPolicyPage;
