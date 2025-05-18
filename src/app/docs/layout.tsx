import DocsLayout from "@/components/layout/DocsLayout";

export default function DocsPageLayout({
	children,
}: { children: React.ReactNode }) {
	return <DocsLayout>{children}</DocsLayout>;
}
