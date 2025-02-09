import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// すべてのルールを警告に変更
			"no-unused-vars": "warn",
			"no-explicit-any": "warn",
			"explicit-module-boundary-types": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/explicit-module-boundary-types": "warn",
			"@typescript-eslint/no-explicit-any": "warn",
			// 他のルールも必要に応じて追加
		},
	},
];

export default eslintConfig;
