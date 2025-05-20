---
sidebar_position: 1
---

# 주요 기능

AgentK2의 핵심 기능을 소개합니다.

## 지능형 에이전트

AgentK2의 핵심은 지능형 에이전트 시스템입니다. 이 에이전트는 다음과 같은 특징을 가지고 있습니다:

### 자율적 의사 결정

에이전트는 주어진 목표를 달성하기 위해 자율적으로 의사 결정을 수행합니다. 복잡한 작업을 여러 단계로 분해하고, 각 단계에 적합한 도구를 선택하여 실행합니다.

```javascript
const agent = new Agent({
  autonomyLevel: 'high',
  decisionModel: 'tree-of-thought'
});

// 복잡한 작업 실행
await agent.run('웹사이트에서 데이터를 수집하고 분석한 후 보고서 생성');
```

### 컨텍스트 인식

에이전트는 대화 및 작업 컨텍스트를 유지하고 이해합니다. 이전 상호작용을 기억하고 이를 바탕으로 더 정확한 응답을 제공합니다.

```javascript
// 컨텍스트 인식 에이전트 생성
const agent = new Agent({
  contextWindow: 10, // 최근 10개 상호작용 기억
  contextStrategy: 'recency-weighted'
});

// 연속적인 대화
await agent.run('한국의 수도는 어디야?');
await agent.run('그곳의 인구는 얼마야?'); // '서울'을 컨텍스트에서 이해
```

## 도구 통합 시스템

AgentK2는 강력한 도구 통합 시스템을 제공합니다:

### 플러그인 아키텍처

다양한 도구와 서비스를 플러그인 형태로 쉽게 통합할 수 있습니다:

```javascript
// 사용자 정의 도구 생성
const weatherTool = createTool({
  name: 'weather',
  description: '특정 위치의 날씨 정보를 제공합니다',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 날씨 API 호출 로직
    return { temperature: 25, conditions: '맑음' };
  }
});

// 에이전트에 도구 추가
agent.addTool(weatherTool);
```

### 도구 선택 최적화

에이전트는 작업에 가장 적합한 도구를 자동으로 선택합니다:

```javascript
const agent = new Agent({
  toolSelectionStrategy: 'relevance-based',
  tools: [searchTool, calculatorTool, weatherTool, translationTool]
});

// 에이전트가 자동으로 적절한 도구 선택
await agent.run('파리의 현재 온도를 섭씨에서 화씨로 변환해줘');
```

## 메모리 시스템

AgentK2는 다양한 유형의 메모리 시스템을 제공합니다:

### 단기 메모리

현재 세션 내에서의 대화 및 작업 기록을 유지합니다:

```javascript
const agent = new Agent({
  memory: {
    type: 'short-term',
    capacity: 100 // 최대 100개 항목 저장
  }
});
```

### 장기 메모리

지속적인 정보 저장 및 검색을 위한 장기 메모리 시스템:

```javascript
const agent = new Agent({
  memory: {
    type: 'long-term',
    storage: 'vector-database',
    connection: {
      url: 'mongodb://localhost:27017',
      collection: 'agent_memory'
    }
  }
});

// 중요 정보 저장
await agent.remember('사용자는 야간 모드를 선호합니다');

// 나중에 정보 검색
const preferences = await agent.recall('사용자 선호도');
```

## 다음 단계

주요 기능에 대해 알아보았다면, [고급 기능](advanced-features)을 확인하여 더 복잡한 사용 사례를 살펴보세요.
