import type { Monaco } from "@monaco-editor/react";

export const setupMonaco = (monaco: Monaco) => {
	monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ESNext,
		allowNonTsExtensions: true,
	});
};
