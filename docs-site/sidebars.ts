import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// 수동으로 사이드바 구성
	tutorialSidebar: [
		'intro',
		{
			type: 'category',
			label: '시작하기',
			items: [
				'getting-started/installation',
				'getting-started/quick-start',
			],
		},
		{
			type: 'category',
			label: '기능',
			items: [
				'features/core-features',
				'features/advanced-features',
			],
		},
		{
			type: 'category',
			label: 'API 참조',
			items: [
				'api-reference/core-api',
				'api-reference/utilities',
			],
		},
		{
			type: 'category',
			label: '가이드',
			items: [
				'guides/use-cases',
				'guides/troubleshooting',
			],
		},
	],
};

export default sidebars;
