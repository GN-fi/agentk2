/**
 * API 문서 자동 생성 스크립트
 *
 * 이 스크립트는 소스 코드에서 JSDoc 주석을 추출하여 Markdown 문서를 생성합니다.
 */

const fs = require('node:fs');
const path = require('node:path');
const jsdoc2md = require('jsdoc-to-markdown');
const glob = require('glob');

// 설정
const CONFIG = {
  // 소스 코드 경로
  sourcePath: path.resolve(__dirname, '../../src'),
  // 출력 경로
  outputPath: path.resolve(__dirname, '../docs/api-reference/generated'),
  // 문서화할 파일 패턴
  patterns: ['**/*.js', '**/*.ts', '**/*.tsx'],
  // 제외할 파일 패턴
  exclude: ['**/*.test.js', '**/*.test.ts', '**/*.d.ts', '**/node_modules/**'],
  // 카테고리별 그룹화 설정
  categories: {
    'core': ['Agent', 'AgentTeam', 'ToolRegistry'],
    'utils': ['MemoryManager', 'PromptTemplate', 'createTool'],
    'plugins': ['Plugin', 'PluginManager'],
  }
};

/**
 * 디렉토리가 존재하지 않으면 생성
 * @param {string} dirPath - 생성할 디렉토리 경로
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * 파일 목록 가져오기
 * @returns {string[]} 파일 경로 목록
 */
function getSourceFiles() {
  const files = [];

  for (const pattern of CONFIG.patterns) {
    const matches = glob.sync(pattern, {
      cwd: CONFIG.sourcePath,
      ignore: CONFIG.exclude,
      absolute: true
    });
    files.push(...matches);
  }

  return files;
}

/**
 * 카테고리별로 파일 그룹화
 * @param {string[]} files - 파일 경로 목록
 * @returns {Object} 카테고리별 파일 그룹
 */
function groupFilesByCategory(files) {
  const groups = {
    'other': [] // 기본 그룹
  };

  // 카테고리 초기화
  for (const category of Object.keys(CONFIG.categories)) {
    groups[category] = [];
  }

  // 파일 분류
  for (const file of files) {
    const fileName = path.basename(file, path.extname(file));
    let assigned = false;

    // 카테고리에 할당
    for (const [category, patterns] of Object.entries(CONFIG.categories)) {
      if (patterns.some(pattern => {
        if (typeof pattern === 'string') {
          return fileName === pattern;
        }
        if (pattern instanceof RegExp) {
          return pattern.test(fileName);
        }
        return false;
      })) {
        groups[category].push(file);
        assigned = true;
        break;
      }
    }

    // 할당되지 않은 파일은 기타 그룹에 추가
    if (!assigned) {
      groups.other.push(file);
    }
  }

  return groups;
}

/**
 * JSDoc에서 Markdown 문서 생성
 * @param {string[]} files - 파일 경로 목록
 * @param {string} outputFile - 출력 파일 경로
 */
async function generateMarkdown(files, outputFile) {
  try {
    const output = await jsdoc2md.render({ files });

    if (output.trim()) {
      fs.writeFileSync(outputFile, output);
      console.log(`Generated: ${outputFile}`);
    } else {
      console.log(`No documentation found for: ${files.join(', ')}`);
    }
  } catch (error) {
    console.error(`Error generating documentation for ${outputFile}:`, error);
  }
}

/**
 * 인덱스 파일 생성
 * @param {Object} groups - 카테고리별 파일 그룹
 */
function generateIndex(groups) {
  const indexPath = path.join(CONFIG.outputPath, 'index.md');
  let content = `---
sidebar_position: 1
---

# API 문서

자동 생성된 API 문서입니다.

`;

  // 카테고리별 링크 추가
  for (const category of Object.keys(groups)) {
    if (groups[category].length > 0) {
      const displayName = category.charAt(0).toUpperCase() + category.slice(1);
      content += `## ${displayName}\n\n`;

      const categoryFiles = groups[category];
      for (const file of categoryFiles) {
        const fileName = path.basename(file, path.extname(file));
        content += `- [${fileName}](./${category}/${fileName}.md)\n`;
      }

      content += '\n';
    }
  }

  fs.writeFileSync(indexPath, content);
  console.log(`Generated index: ${indexPath}`);
}

/**
 * 메인 실행 함수
 */
async function main() {
  // 출력 디렉토리 생성
  ensureDirectoryExists(CONFIG.outputPath);

  // 소스 파일 가져오기
  const files = getSourceFiles();
  console.log(`Found ${files.length} source files`);

  // 카테고리별 그룹화
  const groups = groupFilesByCategory(files);

  // 카테고리별 문서 생성
  for (const [category, categoryFiles] of Object.entries(groups)) {
    if (categoryFiles.length > 0) {
      const categoryDir = path.join(CONFIG.outputPath, category);
      ensureDirectoryExists(categoryDir);

      // 파일별 문서 생성
      for (const file of categoryFiles) {
        const fileName = path.basename(file, path.extname(file));
        const outputFile = path.join(categoryDir, `${fileName}.md`);
        await generateMarkdown([file], outputFile);
      }
    }
  }

  // 인덱스 파일 생성
  generateIndex(groups);

  console.log('API documentation generation complete!');
}

// 스크립트 실행
main().catch(error => {
  console.error('Error generating API documentation:', error);
  process.exit(1);
});
