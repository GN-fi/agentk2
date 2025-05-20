/**
 * 사이드바 자동 업데이트 스크립트
 * 
 * 라이브러리 문서 디렉토리를 스캔하여 사이드바 설정을 자동으로 업데이트합니다.
 */

const fs = require('node:fs');
const path = require('node:path');

// 설정
const CONFIG = {
  // 라이브러리 문서 경로
  librariesDir: path.resolve(__dirname, '../docs/libraries'),
  // 사이드바 설정 파일 경로
  sidebarFile: path.resolve(__dirname, '../sidebars.ts'),
  // 버전 정렬 함수 (최신 버전이 먼저 오도록)
  compareVersions: (a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aVal = aParts[i] || 0;
      const bVal = bParts[i] || 0;
      
      if (aVal !== bVal) {
        return bVal - aVal; // 내림차순 (최신 버전 먼저)
      }
    }
    
    return 0;
  }
};

/**
 * 라이브러리 문서 디렉토리 스캔
 * @returns {Object} 라이브러리별 버전 목록
 */
function scanLibraryDocs() {
  const libraries = {};
  
  // 라이브러리 문서 디렉토리가 존재하는지 확인
  if (!fs.existsSync(CONFIG.librariesDir)) {
    console.warn(`Libraries directory not found: ${CONFIG.librariesDir}`);
    return libraries;
  }
  
  // 라이브러리 디렉토리 스캔
  const libraryDirs = fs.readdirSync(CONFIG.librariesDir);
  
  for (const library of libraryDirs) {
    const libraryPath = path.join(CONFIG.librariesDir, library);
    
    // 디렉토리인지 확인
    if (fs.statSync(libraryPath).isDirectory()) {
      // 버전 디렉토리 스캔
      const versionDirs = fs.readdirSync(libraryPath);
      
      // 버전 정렬
      const versions = versionDirs
        .filter(dir => fs.statSync(path.join(libraryPath, dir)).isDirectory())
        .sort(CONFIG.compareVersions);
      
      if (versions.length > 0) {
        libraries[library] = versions;
      }
    }
  }
  
  return libraries;
}

/**
 * 사이드바 설정 생성
 * @param {Object} libraries - 라이브러리별 버전 목록
 * @returns {Object} 사이드바 설정
 */
function generateSidebarConfig(libraries) {
  // 기존 사이드바 설정 가져오기
  let existingSidebar = {};
  try {
    const sidebarContent = fs.readFileSync(CONFIG.sidebarFile, 'utf8');
    // TypeScript 파일에서 객체 부분만 추출
    const match = sidebarContent.match(/const\s+sidebars\s*:\s*SidebarsConfig\s*=\s*({[\s\S]*?});/);
    if (match && match[1]) {
      // 주의: 실제 환경에서는 eval 사용을 피해야 합니다. 여기서는 간단한 예시로만 사용합니다.
      // 실제로는 JSON.parse나 더 안전한 방법을 사용해야 합니다.
      try {
        existingSidebar = eval(`(${match[1]})`);
      } catch (e) {
        console.warn('Failed to parse existing sidebar config:', e);
      }
    }
  } catch (error) {
    console.warn(`Failed to read existing sidebar config: ${error.message}`);
  }
  
  // 라이브러리 문서 사이드바 항목 생성
  const librariesItems = [];
  
  for (const [library, versions] of Object.entries(libraries)) {
    const versionItems = versions.map(version => ({
      type: 'doc',
      label: `${version}`,
      id: `libraries/${library}/${version}/index`
    }));
    
    librariesItems.push({
      type: 'category',
      label: library,
      items: versionItems
    });
  }
  
  // 라이브러리 카테고리가 있으면 추가, 없으면 새로 생성
  let tutorialSidebar = existingSidebar.tutorialSidebar || [];
  
  // 배열이 아니면 배열로 변환
  if (!Array.isArray(tutorialSidebar)) {
    tutorialSidebar = [];
  }
  
  // 기존 라이브러리 카테고리 찾기
  const librariesCategoryIndex = tutorialSidebar.findIndex(
    item => item.type === 'category' && item.label === '라이브러리'
  );
  
  if (librariesCategoryIndex !== -1) {
    // 기존 카테고리 업데이트
    tutorialSidebar[librariesCategoryIndex] = {
      type: 'category',
      label: '라이브러리',
      items: librariesItems
    };
  } else {
    // 새 카테고리 추가
    tutorialSidebar.push({
      type: 'category',
      label: '라이브러리',
      items: librariesItems
    });
  }
  
  // 최종 사이드바 설정
  return {
    ...existingSidebar,
    tutorialSidebar
  };
}

/**
 * 사이드바 설정 파일 업데이트
 * @param {Object} sidebarConfig - 사이드바 설정
 */
function updateSidebarFile(sidebarConfig) {
  // TypeScript 형식으로 사이드바 설정 파일 생성
  const sidebarContent = `import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// 자동 생성된 사이드바 설정 - 수정하지 마세요
const sidebars: SidebarsConfig = ${JSON.stringify(sidebarConfig, null, 2)};

export default sidebars;
`;
  
  // 파일 쓰기
  fs.writeFileSync(CONFIG.sidebarFile, sidebarContent);
  console.log(`Updated sidebar config: ${CONFIG.sidebarFile}`);
}

/**
 * 메인 실행 함수
 */
function main() {
  // 라이브러리 문서 스캔
  const libraries = scanLibraryDocs();
  console.log('Scanned libraries:', Object.keys(libraries));
  
  // 사이드바 설정 생성
  const sidebarConfig = generateSidebarConfig(libraries);
  
  // 사이드바 설정 파일 업데이트
  updateSidebarFile(sidebarConfig);
  
  console.log('Sidebar update completed!');
}

// 스크립트 실행
main();
