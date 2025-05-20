---
sidebar_position: 2
---

# 문제 해결

AgentK2 사용 중 발생할 수 있는 일반적인 문제와 해결 방법을 안내합니다.

## 설치 문제

### 의존성 충돌

**문제**: 다른 패키지와의 의존성 충돌로 인한 설치 실패

**해결 방법**:

1. 패키지 매니저의 캐시를 정리합니다:

```bash
# npm 사용 시
npm cache clean --force

# yarn 사용 시
yarn cache clean
```

2. 호환되는 버전으로 설치합니다:

```bash
npm install agentk2@compatible-version
```

3. 패키지 잠금 파일을 삭제하고 다시 설치합니다:

```bash
rm package-lock.json
npm install
```

### 빌드 오류

**문제**: 네이티브 모듈 빌드 실패

**해결 방법**:

1. 필요한 빌드 도구가 설치되어 있는지 확인합니다:

```bash
# Windows
npm install --global --production windows-build-tools

# Linux
sudo apt-get install build-essential

# macOS
xcode-select --install
```

2. Node.js 버전이 호환되는지 확인합니다:

```bash
node -v
# 호환되는 버전으로 전환
nvm use 18
```

## 런타임 오류

### 메모리 부족

**문제**: 대규모 작업 실행 시 메모리 부족 오류 발생

**해결 방법**:

1. Node.js 메모리 한도를 늘립니다:

```bash
node --max-old-space-size=8192 your-script.js
```

2. 에이전트 구성에서 메모리 사용량을 최적화합니다:

```javascript
const agent = new Agent({
  memory: {
    optimizeFor: 'low-memory',
    pruningStrategy: 'least-recently-used'
  }
});
```

### 응답 시간 초과

**문제**: 복잡한 작업 실행 시 시간 초과 오류 발생

**해결 방법**:

1. 작업 실행 시 제한 시간을 늘립니다:

```javascript
const result = await agent.run('복잡한 작업', {
  timeout: 60000 // 60초로 설정
});
```

2. 작업을 더 작은 단위로 분할합니다:

```javascript
// 대신 여러 단계로 나누어 실행
const step1 = await agent.run('작업의 첫 번째 부분');
const step2 = await agent.run('작업의 두 번째 부분', {
  context: { previousResult: step1 }
});
```

## 도구 관련 문제

### 도구 실행 실패

**문제**: 에이전트가 도구를 실행하지 못하거나 오류 반환

**해결 방법**:

1. 도구 구현을 확인합니다:

```javascript
// 도구에 오류 처리 추가
const myTool = createTool({
  name: 'my-tool',
  execute: async (params) => {
    try {
      // 도구 로직
      return { result: 'success' };
    } catch (error) {
      console.error('도구 실행 오류:', error);
      return { error: error.message };
    }
  }
});
```

2. 도구 매개변수 검증을 추가합니다:

```javascript
const validatedTool = createTool({
  name: 'validated-tool',
  parameters: {
    input: { type: 'string', required: true }
  },
  validate: (params) => {
    if (!params.input || params.input.length < 3) {
      return { valid: false, error: '입력은 최소 3자 이상이어야 합니다' };
    }
    return { valid: true };
  },
  execute: async ({ input }) => {
    // 도구 로직
  }
});
```

### 도구 권한 문제

**문제**: 도구가 필요한 리소스에 접근할 수 없음

**해결 방법**:

1. 필요한 권한이 설정되어 있는지 확인합니다:

```javascript
// 보안 정책 설정
const agent = new Agent({
  securityPolicy: {
    allowedDomains: ['api.example.com', 'data.example.com'],
    fileSystemAccess: 'read-only',
    networkAccess: true
  }
});
```

2. 환경 변수나 구성 파일에서 필요한 인증 정보를 제공합니다:

```javascript
// .env 파일에서 API 키 로드
require('dotenv').config();

const apiTool = createTool({
  name: 'api-tool',
  execute: async (params) => {
    const apiKey = process.env.API_KEY;
    // API 호출 로직
  }
});
```

## 성능 최적화

### 느린 응답 시간

**문제**: 에이전트 응답 시간이 느림

**해결 방법**:

1. 캐싱을 활용합니다:

```javascript
import { createCache } from 'agentk2/utils';

// 결과 캐싱 설정
const cache = createCache({
  type: 'memory',
  ttl: 3600 // 1시간 캐시
});

// 캐시를 사용하는 도구 생성
const cachedTool = createTool({
  name: 'cached-tool',
  execute: async (params) => {
    const cacheKey = JSON.stringify(params);
    const cachedResult = await cache.get(cacheKey);
    
    if (cachedResult) {
      return cachedResult;
    }
    
    // 실제 실행 로직
    const result = { /* ... */ };
    
    await cache.set(cacheKey, result);
    return result;
  }
});
```

2. 병렬 처리를 활용합니다:

```javascript
// 여러 작업을 병렬로 실행
const [result1, result2, result3] = await Promise.all([
  agent.run('작업 1'),
  agent.run('작업 2'),
  agent.run('작업 3')
]);
```

### 메모리 사용량 최적화

**문제**: 장시간 실행 시 메모리 사용량 증가

**해결 방법**:

1. 주기적으로 메모리를 정리합니다:

```javascript
// 주기적인 메모리 정리 설정
const agent = new Agent({
  memory: {
    cleanupInterval: 3600000, // 1시간마다 정리
    maxSize: 1000 // 최대 1000개 항목 저장
  }
});
```

2. 스트리밍 처리를 활용합니다:

```javascript
// 대용량 데이터 스트리밍 처리
const streamProcessor = createTool({
  name: 'stream-processor',
  execute: async ({ dataSource }) => {
    return new Promise((resolve, reject) => {
      const results = [];
      
      dataSource.on('data', (chunk) => {
        // 청크 단위로 처리
        const processed = processChunk(chunk);
        results.push(processed);
      });
      
      dataSource.on('end', () => {
        resolve({ results });
      });
      
      dataSource.on('error', (err) => {
        reject(err);
      });
    });
  }
});
```

## 디버깅 팁

### 로깅 활성화

문제 진단을 위해 상세 로깅을 활성화합니다:

```javascript
const agent = new Agent({
  verbose: true,
  logLevel: 'debug',
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  }
});
```

### 단계별 실행

복잡한 작업을 단계별로 실행하여 문제를 격리합니다:

```javascript
// 디버그 모드로 단계별 실행
const agent = new Agent({
  debugMode: true,
  stepByStep: true
});

agent.on('step', (step) => {
  console.log(`단계 ${step.number}: ${step.description}`);
  console.log('입력:', step.input);
  console.log('출력:', step.output);
});

await agent.run('복잡한 작업');
```

### 에이전트 상태 검사

에이전트의 현재 상태를 검사합니다:

```javascript
// 에이전트 상태 덤프
const stateDump = agent.dumpState();
console.log(JSON.stringify(stateDump, null, 2));

// 특정 부분만 검사
console.log('메모리 상태:', stateDump.memory);
console.log('도구 상태:', stateDump.tools);
```

## 추가 도움말

더 많은 도움이 필요하면 다음 리소스를 참조하세요:

- [GitHub 이슈 트래커](https://github.com/GN-fi/agentk2/issues)
- [커뮤니티 포럼](https://community.agentk2.com)
- [API 문서](../api-reference/core-api)
