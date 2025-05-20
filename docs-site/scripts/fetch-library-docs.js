/**
 * 라이브러리 문서 자동 가져오기 스크립트
 * 
 * package.json의 의존성을 기반으로 라이브러리 문서를 자동으로 가져와
 * Docusaurus 사이트에 통합합니다.
 */

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

// 설정
const CONFIG = {
  // 프로젝트 루트 경로
  projectRoot: path.resolve(__dirname, '../../'),
  // 문서 저장 경로
  docsRoot: path.resolve(__dirname, '../docs/libraries'),
  // 버전 정보 파일 경로
  versionsFile: path.resolve(__dirname, '../versions.json'),
  // 지원하는 라이브러리 목록 (DevDocs 또는 TypeDoc으로 문서화 가능한 라이브러리)
  supportedLibraries: [
    'react',
    'react-dom',
    'golden-layout',
    '@docusaurus/core',
    '@docusaurus/preset-classic',
    'clsx',
    'prism-react-renderer'
  ]
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
 * package.json에서 의존성 정보 가져오기
 * @returns {Object} 의존성 정보 (라이브러리명: 버전)
 */
function getDependencies() {
  const packageJsonPath = path.join(CONFIG.projectRoot, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const dependencies = {
    ...(packageJson.dependencies || {}),
    ...(packageJson.devDependencies || {})
  };
  
  return dependencies;
}

/**
 * 버전 문자열에서 세마버 추출 (^2.6.0 -> 2.6.0)
 * @param {string} versionRange - 버전 범위 문자열
 * @returns {string} 세마버 문자열
 */
function extractSemver(versionRange) {
  return versionRange.replace(/^[^0-9]*/, '');
}

/**
 * DevDocs를 사용하여 라이브러리 문서 가져오기
 * @param {string} library - 라이브러리 이름
 * @param {string} version - 라이브러리 버전
 * @param {string} outputDir - 출력 디렉토리
 * @returns {boolean} 성공 여부
 */
function fetchWithDevDocs(library, version, outputDir) {
  try {
    console.log(`Fetching ${library}@${version} with DevDocs...`);
    
    // DevDocs로 문서 가져오기
    execSync(`npx -y devdocs fetch ${library}@${version}`, { 
      stdio: 'inherit',
      cwd: CONFIG.projectRoot
    });
    
    // 문서 빌드
    execSync(`npx -y devdocs build ${library}@${version} --output ${outputDir}`, {
      stdio: 'inherit',
      cwd: CONFIG.projectRoot
    });
    
    return true;
  } catch (error) {
    console.warn(`DevDocs failed for ${library}@${version}: ${error.message}`);
    return false;
  }
}

/**
 * TypeDoc을 사용하여 라이브러리 문서 생성
 * @param {string} library - 라이브러리 이름
 * @param {string} version - 라이브러리 버전
 * @param {string} outputDir - 출력 디렉토리
 * @returns {boolean} 성공 여부
 */
function generateWithTypeDoc(library, version, outputDir) {
  try {
    console.log(`Generating ${library}@${version} with TypeDoc...`);
    
    // 라이브러리 경로
    const libraryPath = path.join(CONFIG.projectRoot, 'node_modules', library);
    
    // TypeDoc으로 문서 생성
    execSync(`npx -y typedoc ${libraryPath} --out ${outputDir}`, {
      stdio: 'inherit',
      cwd: CONFIG.projectRoot
    });
    
    return true;
  } catch (error) {
    console.warn(`TypeDoc failed for ${library}@${version}: ${error.message}`);
    return false;
  }
}

/**
 * 라이브러리 문서 가져오기
 * @param {string} library - 라이브러리 이름
 * @param {string} version - 라이브러리 버전
 * @returns {boolean} 성공 여부
 */
function fetchLibraryDocs(library, version) {
  // 출력 디렉토리
  const outputDir = path.join(CONFIG.docsRoot, library, version);
  
  // 이미 문서가 존재하는지 확인
  if (fs.existsSync(outputDir)) {
    console.log(`Documentation for ${library}@${version} already exists.`);
    return true;
  }
  
  // 출력 디렉토리 생성
  ensureDirectoryExists(outputDir);
  
  // DevDocs로 시도
  if (fetchWithDevDocs(library, version, outputDir)) {
    return true;
  }
  
  // TypeDoc으로 시도
  if (generateWithTypeDoc(library, version, outputDir)) {
    return true;
  }
  
  console.error(`Failed to generate documentation for ${library}@${version}`);
  return false;
}

/**
 * Docusaurus 버전 스냅샷 생성
 * @param {string} version - 버전
 * @returns {boolean} 성공 여부
 */
function createVersionSnapshot(version) {
  try {
    console.log(`Creating Docusaurus version snapshot for ${version}...`);
    
    // 버전 정보 파일 확인
    let versions = [];
    if (fs.existsSync(CONFIG.versionsFile)) {
      versions = JSON.parse(fs.readFileSync(CONFIG.versionsFile, 'utf8'));
    }
    
    // 이미 버전이 존재하는지 확인
    if (versions.includes(version)) {
      console.log(`Version ${version} already exists in versions.json.`);
      return true;
    }
    
    // Docusaurus 버전 스냅샷 생성
    execSync(`npm run docusaurus docs:version ${version}`, {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '..')
    });
    
    return true;
  } catch (error) {
    console.warn(`Failed to create version snapshot for ${version}: ${error.message}`);
    return false;
  }
}

/**
 * 메인 실행 함수
 */
async function main() {
  // 문서 루트 디렉토리 생성
  ensureDirectoryExists(CONFIG.docsRoot);
  
  // 의존성 정보 가져오기
  const dependencies = getDependencies();
  
  // 지원하는 라이브러리에 대해서만 문서 가져오기
  for (const library of CONFIG.supportedLibraries) {
    if (dependencies[library]) {
      const version = extractSemver(dependencies[library]);
      console.log(`Processing ${library}@${version}...`);
      
      // 라이브러리 문서 가져오기
      if (fetchLibraryDocs(library, version)) {
        // 성공한 경우 버전 스냅샷 생성
        createVersionSnapshot(version);
      }
    }
  }
  
  console.log('Library documentation fetching completed!');
}

// 스크립트 실행
main().catch(error => {
  console.error('Error fetching library documentation:', error);
  process.exit(1);
});
