---
sidebar_position: 2
---

# 빠른 시작

AgentK2를 빠르게 시작하는 방법을 안내합니다.

## 기본 설정

AgentK2를 설치한 후, 프로젝트에서 다음과 같이 가져와 사용할 수 있습니다:

```javascript
// ESM
import { Agent } from 'agentk2';

// CommonJS
const { Agent } = require('agentk2');
```

## 첫 번째 에이전트 생성

다음은 기본 에이전트를 생성하는 간단한 예제입니다:

```javascript
import { Agent } from 'agentk2';

// 에이전트 인스턴스 생성
const agent = new Agent({
  name: 'MyFirstAgent',
  description: '기본 작업을 수행하는 간단한 에이전트',
  capabilities: ['text-processing', 'web-search']
});

// 에이전트 초기화
await agent.initialize();

// 에이전트에 작업 할당
const result = await agent.run('오늘의 날씨를 알려주세요');
console.log(result);
```

## 도구 통합

AgentK2는 다양한 도구와 통합할 수 있습니다:

```javascript
import { Agent, ToolRegistry } from 'agentk2';

// 도구 레지스트리 생성
const tools = new ToolRegistry();

// 사용자 정의 도구 추가
tools.register({
  name: 'calculator',
  description: '수학 계산을 수행합니다',
  execute: async (input) => {
    try {
      return { result: eval(input) };
    } catch (error) {
      return { error: '계산 오류' };
    }
  }
});

// 도구가 통합된 에이전트 생성
const agent = new Agent({
  name: 'CalculatorAgent',
  tools: tools
});

// 에이전트 사용
const result = await agent.run('2 + 2 계산해줘');
console.log(result); // { result: 4 }
```

## 고급 구성

더 복잡한 시나리오를 위한 고급 구성 예제:

```javascript
import { Agent, MemoryManager, PromptTemplate } from 'agentk2';

// 메모리 관리자 생성
const memory = new MemoryManager({
  type: 'persistent',
  storage: 'local'
});

// 사용자 정의 프롬프트 템플릿
const customPrompt = new PromptTemplate(`
당신은 ${name}이라는 이름의 도우미 에이전트입니다.
다음 작업을 수행해주세요: ${task}
사용 가능한 도구: ${tools}
`);

// 고급 에이전트 구성
const agent = new Agent({
  name: 'AdvancedAgent',
  memory: memory,
  promptTemplate: customPrompt,
  maxTokens: 2000,
  temperature: 0.7,
  verbose: true
});

// 에이전트 실행
const result = await agent.run('복잡한 데이터 분석 작업 수행');
```

## 다음 단계

기본 사용법을 익혔다면, 다음 문서를 참조하여 더 많은 기능을 살펴보세요:

- [주요 기능](../features/core-features) - AgentK2의 핵심 기능 알아보기
- [고급 기능](../features/advanced-features) - 고급 사용 사례 및 기능 탐색
- [API 참조](../api-reference/core-api) - 전체 API 문서 확인
