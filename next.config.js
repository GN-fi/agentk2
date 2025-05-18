/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["lh3.googleusercontent.com"],
	},
	// experimental: {
	//   appDir: true,
	// },
	webpack: (config) => {
		config.experiments = { asyncWebAssembly: true, layers: true };
		return config;
	},
};

module.exports = nextConfig;
