// 이 페이지는 미들웨어에 의해 /editor/~ 로 리다이렉트됩니다.
// 미들웨어가 작동하지 않을 경우를 대비한 정적 페이지입니다.

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

export default function EditorPage() {
	return (
		<div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<p>프로젝트 선택 페이지로 이동 중...</p>
		</div>
	);
}
