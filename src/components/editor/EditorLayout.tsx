import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
// import MainArea from './MainArea'; // MainArea는 이제 사용하지 않으므로 임포트 제거
import RightPanel from "./RightPanel";
import React from "react";

interface EditorLayoutProps {
	children: React.ReactNode;
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
	return (
		<div className="flex flex-col h-screen bg-gray-800 text-white">
			<TopBar />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<main className="flex-1 p-4 overflow-y-auto bg-gray-900">
					{children}
				</main>
				<RightPanel />
			</div>
		</div>
	);
};

export default EditorLayout;
