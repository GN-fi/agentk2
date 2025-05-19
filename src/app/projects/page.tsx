// src/app/projects/page.tsx (프로젝트 관리 페이지)
// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

export default function ProjectsPage() {
	return (
		<div>
			<h1>프로젝트 관리</h1>
			<p>생성된 프로젝트 목록을 확인하고 관리할 수 있습니다.</p>
			{/*
        TODO: 프로젝트 목록 (ProjectList 컴포넌트)
        TODO: 프로젝트 생성 및 삭제 버튼 (CreateProjectButton, DeleteProjectButton 컴포넌트)
        TODO: 최근 작업 이력
      */}
		</div>
	);
}
