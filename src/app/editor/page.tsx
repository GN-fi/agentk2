"use client"; // GoldenLayout과 같은 클라이언트 사이드 라이브러리 사용을 위해

import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { initLayout } from '@/components/GoldenLayout'; // 경로 수정 가능성 있음

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

export default function EditorPage() {
	const router = useRouter();

	useEffect(() => {
		// 기본 에디터 페이지에서 프로젝트 선택 페이지로 리다이렉트
		router.replace("/editor/~");
	}, [router]);

	// 리다이렉트 중에는 로딩 상태 표시
	return (
		<div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<p>프로젝트 선택 페이지로 이동 중...</p>
		</div>
	);
}
