"use client"; // 클라이언트 컴포넌트로 변경

import { signIn, useSession } from "next-auth/react"; // useSession, signIn 임포트
import { useParams, usePathname } from "next/navigation"; // usePathname, useParams 임포트 (useParams는 이미 사용 중일 수 있으므로 확인)
import { useEffect } from "react"; // useEffect 임포트

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

import EditorLayout from "../../../components/editor/EditorLayout";
import QuickStartButtons from "../../../components/editor/dashboard/QuickStartButtons";
import RecentAppsSection from "../../../components/editor/dashboard/RecentAppsSection";
import WelcomeHeader from "../../../components/editor/dashboard/WelcomeHeader";

// EditorPageProps 인터페이스는 params를 사용하므로 그대로 두거나, useParams를 사용한다면 제거 가능
// interface EditorPageProps {
//   params: {
//     projectName: string;
//   };
// }

const EditorPage = (/* { params }: EditorPageProps */) => {
	// props 제거 또는 useParams 사용 준비
	const { data: session, status } = useSession();
	const pathname = usePathname();
	const params = useParams(); // params를 props 대신 useParams로 가져옴
	const projectName = params.projectName as string; // 타입 단언

	useEffect(() => {
		if (status === "loading") return; // 로딩 중에는 아무것도 하지 않음
		if (!session) {
			// 로그인되지 않았으면 로그인 페이지로 리다이렉션
			// callbackUrl을 현재 경로로 설정하여 로그인 후 돌아올 수 있도록 함
			signIn(undefined, { callbackUrl: pathname });
		}
	}, [session, status, pathname]);

	if (status === "loading" || !session) {
		// 로딩 중이거나 세션이 없으면 (리다이렉션 전까지) 로딩 메시지 또는 빈 화면 표시
		return (
			<EditorLayout>
				<div className="flex flex-grow flex-col items-center justify-center bg-gray-800 text-white">
					<p>세션 정보를 확인 중입니다...</p>
					{/* 또는 로딩 스피너 컴포넌트 */}
				</div>
			</EditorLayout>
		);
	}

	// 이하 기존 로직 (세션이 있는 경우에만 실행됨)
	if (projectName === "~") {
		return (
			<EditorLayout>
				<div className="p-4 sm:p-6 lg:p-8">
					<WelcomeHeader />
					<QuickStartButtons />
					<RecentAppsSection />
				</div>
			</EditorLayout>
		);
	}

	// 기존 에디터 UI (projectName이 '~'가 아닐 때)
	return (
		<EditorLayout>
			{/* 기존 MainArea 내용 또는 에디터 관련 컴포넌트들 */}
			<div className="flex flex-grow flex-col items-center justify-center bg-gray-800 text-white">
				<h1 className="mb-4 text-3xl font-bold">
					프로젝트: {decodeURIComponent(projectName)}
				</h1>
				<p>
					이곳에 '{decodeURIComponent(projectName)}' 프로젝트의 에디터가
					표시됩니다.
				</p>
				<textarea
					className="mt-4 h-1/2 w-3/4 resize-none rounded-md border border-gray-700 bg-gray-900 p-4 text-sm"
					defaultValue={`// ${decodeURIComponent(projectName)} 프로젝트의 코드...
function hello() {
  console.log("Hello, ${decodeURIComponent(projectName)}!");
}
hello();`}
				/>
			</div>
		</EditorLayout>
	);
};

export default EditorPage;
