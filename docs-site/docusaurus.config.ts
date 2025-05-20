import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "AgentK2 Documentation",
	tagline: "강력한 AI 에이전트 프레임워크",
	favicon: "img/agentk2-favicon.svg",

	// Set the production url of your site here
	url: "https://gn-fi.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/agentk2/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "GN-fi", // Usually your GitHub org/user name.
	projectName: "agentk2", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// 다국어 지원 설정
	i18n: {
		defaultLocale: "ko",
		locales: ["ko", "en"],
		localeConfigs: {
			ko: {
				label: '한국어',
				direction: 'ltr',
				htmlLang: 'ko-KR',
			},
			en: {
				label: 'English',
				direction: 'ltr',
				htmlLang: 'en-US',
			},
		},
	},

	// 플러그인 설정
	plugins: [
		// 리디렉션 설정
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/',
						to: '/docs/intro',
					},
				],
			},
		],
		// 콘텐츠 블로그 플러그인
		[
			'@docusaurus/plugin-content-blog',
			{
				path: 'blog',
				routeBasePath: 'blog',
				blogTitle: 'AgentK2 Blog',
				blogDescription: 'AgentK2 개발 소식 및 업데이트',
				blogSidebarTitle: '최근 게시물',
				blogSidebarCount: 5,
				postsPerPage: 10,
				showReadingTime: true,
			},
		],
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// 편집 링크 설정
					editUrl: "https://github.com/GN-fi/agentk2/tree/main/docs-site/",
					// 버전 관리 설정
					lastVersion: 'current',
					versions: {
						current: {
							label: '1.0.0',
							path: '',
						},
					},
					// 문서 태그 설정
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",

		// Algolia DocSearch 설정
		algolia: {
			// 실제 사용 시 Algolia에서 발급받은 값으로 대체해야 합니다
			appId: 'YOUR_APP_ID',
			apiKey: 'YOUR_API_KEY',
			indexName: 'agentk2',
			contextualSearch: true,
			searchParameters: {},
		},
		navbar: {
			title: "AgentK2 Docs",
			logo: {
				alt: "AgentK2 Logo",
				src: "img/agentk2-logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorial",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/GN-fi/agentk2",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "X",
							href: "https://x.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/GN-fi/agentk2",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} AgentK2 Project. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
