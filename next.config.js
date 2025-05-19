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
	// API 라우트와의 호환성 문제로 정적 내보내기 비활성화
	output: "standalone", // 정적 내보내기 대신 standalone 모드 사용
	// 이미지 최적화 설정
	images: { domains: ["lh3.googleusercontent.com"] },
	// 빌드 중 URL 오류 해결을 위한 설정
	experimental: {
		// 빌드 중 URL 검증 비활성화
		urlImports: false,
		// 정적 페이지 생성 비활성화
		disableStaticGeneration: true,
	},
	// 모든 페이지를 동적으로 렌더링하도록 설정
	staticPageGenerationTimeout: 1000,
	// 정적 내보내기 비활성화
	trailingSlash: true,
	// 모든 페이지를 서버 사이드 렌더링으로 처리
	distDir: '.next',
	// 모든 페이지를 서버 사이드 렌더링으로 처리
	exportPathMap: null,
};

module.exports = nextConfig;
