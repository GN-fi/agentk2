import type React from "react";
// import MainArea from './MainArea'; // MainArea는 이제 사용하지 않으므로 임포트 제거
import RightPanel from "./RightPanel";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface EditorLayoutProps {
	children: React.ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
	return (
		<div className="flex h-screen flex-col bg-gray-800 text-white">
			<TopBar />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-y-auto bg-gray-900 p-4">
					{children}
				</main>
				<RightPanel />
			</div>
		</div>
	);
};

export default EditorLayout;
