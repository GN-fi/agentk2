import DocsLayout from "@/components/layout/DocsLayout";

// 모든 문서 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

export default function DocsPageLayout({
	children,
}: { children: React.ReactNode }) {
	return <DocsLayout>{children}</DocsLayout>;
}
