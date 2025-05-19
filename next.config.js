/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// experimental: {
	//   appDir: true,
	// },
	// webpack: (config) => {
	// 	config.experiments = { asyncWebAssembly: true, layers: true };
	// 	return config;
	// },
	turbopack: {
		// 예시: 별칭 및 확장자 추가
		resolveAlias: {
			underscore: "lodash",
		},
		resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
	},
	// CI 환경에서 빌드 오류를 방지하기 위한 설정
	output: process.env.CI ? "export" : undefined,
	// 이미지 최적화 설정
	images: process.env.CI
		? { unoptimized: true, domains: ["lh3.googleusercontent.com"] }
		: { domains: ["lh3.googleusercontent.com"] },
};

module.exports = nextConfig;
