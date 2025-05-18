import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
	{
		ignores: [".next/**"],
	},
	{
		plugins: {
			"@next/next": nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
		},
	},
	eslintConfigPrettier,
];

export default eslintConfig;
