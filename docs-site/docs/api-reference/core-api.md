---
sidebar_position: 1
---

# 핵심 API

AgentK2의 핵심 API를 소개합니다.

## Agent 클래스

`Agent` 클래스는 AgentK2의 핵심 클래스로, 지능형 에이전트를 생성하고 관리합니다.

### 생성자

```javascript
new Agent(options)
```

#### 매개변수

- `options` (Object): 에이전트 구성 옵션
  - `name` (string): 에이전트 이름
  - `description` (string, 선택 사항): 에이전트 설명
  - `capabilities` (string[], 선택 사항): 에이전트 기능 목록
  - `tools` (ToolRegistry | Tool[], 선택 사항): 에이전트가 사용할 도구
  - `memory` (MemoryOptions, 선택 사항): 메모리 구성
  - `reasoningEngine` (string, 선택 사항): 추론 엔진 유형 ('default', 'multi-step', 'tree-of-thought')
  - `maxTokens` (number, 선택 사항): 최대 토큰 수
  - `temperature` (number, 선택 사항): 온도 설정 (0.0 ~ 1.0)
  - `verbose` (boolean, 선택 사항): 상세 로깅 활성화 여부

#### 반환값

- `Agent`: 새로운 에이전트 인스턴스

#### 예제

```javascript
const agent = new Agent({
  name: 'AssistantAgent',
  description: '사용자 질문에 답변하는 도우미 에이전트',
  capabilities: ['text-processing', 'web-search'],
  tools: [searchTool, calculatorTool],
  memory: { type: 'short-term', capacity: 50 },
  reasoningEngine: 'multi-step',
  maxTokens: 2000,
  temperature: 0.7,
  verbose: true
});
```

### 메서드

#### initialize()

에이전트를 초기화합니다.

```javascript
async initialize()
```

##### 반환값

- `Promise<void>`: 초기화 완료 시 해결되는 Promise

##### 예제

```javascript
await agent.initialize();
```

#### run()

에이전트에 작업을 실행합니다.

```javascript
async run(task, options)
```

##### 매개변수

- `task` (string): 실행할 작업 설명
- `options` (RunOptions, 선택 사항): 실행 옵션
  - `timeout` (number, 선택 사항): 제한 시간(밀리초)
  - `maxSteps` (number, 선택 사항): 최대 실행 단계 수
  - `context` (Object, 선택 사항): 추가 컨텍스트 정보

##### 반환값

- `Promise<RunResult>`: 작업 실행 결과

##### 예제

```javascript
const result = await agent.run('서울의 오늘 날씨를 알려주세요', {
  timeout: 10000,
  maxSteps: 5
});
console.log(result);
```

#### addTool()

에이전트에 도구를 추가합니다.

```javascript
addTool(tool)
```

##### 매개변수

- `tool` (Tool): 추가할 도구 인스턴스

##### 반환값

- `Agent`: 메서드 체이닝을 위한 에이전트 인스턴스

##### 예제

```javascript
const weatherTool = createTool({
  name: 'weather',
  description: '날씨 정보 조회',
  execute: async (params) => {
    // 날씨 API 호출 로직
    return { temperature: 25, conditions: '맑음' };
  }
});

agent.addTool(weatherTool);
```

#### remember()

에이전트 메모리에 정보를 저장합니다.

```javascript
async remember(information, metadata)
```

##### 매개변수

- `information` (string): 저장할 정보
- `metadata` (Object, 선택 사항): 관련 메타데이터

##### 반환값

- `Promise<void>`: 저장 완료 시 해결되는 Promise

##### 예제

```javascript
await agent.remember('사용자는 영어보다 한국어를 선호합니다', {
  category: 'user-preference',
  importance: 'high'
});
```

#### recall()

에이전트 메모리에서 정보를 검색합니다.

```javascript
async recall(query, options)
```

##### 매개변수

- `query` (string): 검색 쿼리
- `options` (RecallOptions, 선택 사항): 검색 옵션
  - `limit` (number, 선택 사항): 반환할 최대 결과 수
  - `threshold` (number, 선택 사항): 유사도 임계값 (0.0 ~ 1.0)

##### 반환값

- `Promise<RecallResult[]>`: 검색 결과 배열

##### 예제

```javascript
const memories = await agent.recall('사용자 선호도', {
  limit: 5,
  threshold: 0.7
});
console.log(memories);
```

## ToolRegistry 클래스

`ToolRegistry` 클래스는 에이전트가 사용할 도구를 관리합니다.

### 생성자

```javascript
new ToolRegistry(tools)
```

#### 매개변수

- `tools` (Tool[], 선택 사항): 초기 도구 목록

#### 반환값

- `ToolRegistry`: 새로운 도구 레지스트리 인스턴스

#### 예제

```javascript
const registry = new ToolRegistry([searchTool, calculatorTool]);
```

### 메서드

#### register()

도구 레지스트리에 도구를 등록합니다.

```javascript
register(tool)
```

##### 매개변수

- `tool` (Tool): 등록할 도구 인스턴스

##### 반환값

- `ToolRegistry`: 메서드 체이닝을 위한 레지스트리 인스턴스

##### 예제

```javascript
registry.register({
  name: 'translator',
  description: '텍스트 번역',
  execute: async ({ text, targetLanguage }) => {
    // 번역 로직
    return { translatedText: '번역된 텍스트' };
  }
});
```

## 다음 단계

핵심 API에 대해 알아보았다면, [유틸리티 API](utilities)를 확인하여 추가 유틸리티 함수를 살펴보세요.
