import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "../components/ClientProviders";
import AuthSessionProvider from "@/components/layout/AuthSessionProvider";
import Header from "@/components/layout/Header";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "VIBE - 코딩, 그 이상의 경험",
	description:
		"VIBE와 함께 아이디어를 현실로 만드세요. 강력한 AI 기반 개발 환경을 제공합니다.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
			>
				<AuthSessionProvider>
					<Header />
					<ClientProviders>{children}</ClientProviders>
					<Analytics />
				</AuthSessionProvider>
			</body>
		</html>
	);
}
