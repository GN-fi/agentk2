---
sidebar_position: 2
---

# 유틸리티

AgentK2의 유용한 유틸리티 함수와 클래스를 소개합니다.

## 도구 생성 유틸리티

### createTool()

사용자 정의 도구를 쉽게 생성할 수 있는 유틸리티 함수입니다.

```javascript
createTool(options)
```

#### 매개변수

- `options` (Object): 도구 구성 옵션
  - `name` (string): 도구 이름
  - `description` (string): 도구 설명
  - `parameters` (Object, 선택 사항): 도구 매개변수 스키마
  - `execute` (Function): 도구 실행 함수
  - `validate` (Function, 선택 사항): 입력 검증 함수

#### 반환값

- `Tool`: 새로운 도구 인스턴스

#### 예제

```javascript
import { createTool } from 'agentk2/utils';

const calculatorTool = createTool({
  name: 'calculator',
  description: '수학 계산을 수행합니다',
  parameters: {
    expression: {
      type: 'string',
      description: '계산할 수학 표현식',
      required: true
    }
  },
  validate: (params) => {
    if (!params.expression) {
      return { valid: false, error: '표현식이 필요합니다' };
    }
    return { valid: true };
  },
  execute: async ({ expression }) => {
    try {
      const result = eval(expression);
      return { result };
    } catch (error) {
      return { error: '계산 오류: ' + error.message };
    }
  }
});
```

## 프롬프트 유틸리티

### PromptTemplate

동적 프롬프트 템플릿을 생성하고 관리하는 클래스입니다.

#### 생성자

```javascript
new PromptTemplate(template, options)
```

##### 매개변수

- `template` (string): 템플릿 문자열
- `options` (Object, 선택 사항): 템플릿 옵션
  - `delimiter` (Object, 선택 사항): 변수 구분자 설정
    - `start` (string): 시작 구분자 (기본값: '\{\{')
    - `end` (string): 종료 구분자 (기본값: '\}\}')
  - `defaultValues` (Object, 선택 사항): 기본 변수 값

##### 반환값

- `PromptTemplate`: 새로운 프롬프트 템플릿 인스턴스

##### 예제

```javascript
import { PromptTemplate } from 'agentk2/utils';

const template = new PromptTemplate(`
당신은 \{\{name\}\}이라는 이름의 도우미 에이전트입니다.
다음 작업을 수행해주세요: \{\{task\}\}
\{\{#if tools\}\}
사용 가능한 도구: \{\{tools\}\}
\{\{/if\}\}
`, {
  defaultValues: {
    name: 'Assistant',
    tools: ''
  }
});
```

#### 메서드

##### render()

템플릿을 렌더링합니다.

```javascript
render(variables)
```

###### 매개변수

- `variables` (Object): 템플릿 변수 값

###### 반환값

- `string`: 렌더링된 문자열

###### 예제

```javascript
const prompt = template.render({
  name: 'DataAnalyzer',
  task: '주어진 데이터셋을 분석하고 인사이트 제공',
  tools: 'calculator, chart-generator, data-processor'
});

console.log(prompt);
```

## 메모리 유틸리티

### MemoryManager

에이전트 메모리를 관리하는 클래스입니다.

#### 생성자

```javascript
new MemoryManager(options)
```

##### 매개변수

- `options` (Object): 메모리 관리자 옵션
  - `type` (string): 메모리 유형 ('short-term', 'long-term', 'hybrid')
  - `storage` (string, 선택 사항): 저장소 유형 ('in-memory', 'local', 'remote')
  - `capacity` (number, 선택 사항): 메모리 용량
  - `connection` (Object, 선택 사항): 원격 저장소 연결 정보

##### 반환값

- `MemoryManager`: 새로운 메모리 관리자 인스턴스

##### 예제

```javascript
import { MemoryManager } from 'agentk2/utils';

const memory = new MemoryManager({
  type: 'hybrid',
  storage: 'local',
  capacity: 1000
});
```

#### 메서드

##### store()

메모리에 정보를 저장합니다.

```javascript
async store(item, metadata)
```

###### 매개변수

- `item` (string | Object): 저장할 정보
- `metadata` (Object, 선택 사항): 관련 메타데이터

###### 반환값

- `Promise<string>`: 저장된 항목의 ID

###### 예제

```javascript
const itemId = await memory.store('중요한 정보', {
  category: 'user-data',
  timestamp: Date.now()
});
```

##### retrieve()

메모리에서 정보를 검색합니다.

```javascript
async retrieve(query, options)
```

###### 매개변수

- `query` (string | Object): 검색 쿼리
- `options` (Object, 선택 사항): 검색 옵션
  - `limit` (number, 선택 사항): 최대 결과 수
  - `threshold` (number, 선택 사항): 유사도 임계값

###### 반환값

- `Promise<Array>`: 검색 결과 배열

###### 예제

```javascript
const results = await memory.retrieve('사용자 데이터', {
  limit: 10,
  threshold: 0.7
});
```

## 기타 유틸리티

### formatResponse()

에이전트 응답을 형식화하는 유틸리티 함수입니다.

```javascript
formatResponse(response, format)
```

#### 매개변수

- `response` (Object): 원본 응답 데이터
- `format` (string): 형식 유형 ('text', 'json', 'markdown', 'html')

#### 반환값

- `string`: 형식화된 응답 문자열

#### 예제

```javascript
import { formatResponse } from 'agentk2/utils';

const rawResponse = {
  answer: '파리의 에펠탑 높이는 330m입니다.',
  confidence: 0.95,
  sources: ['https://example.com/eiffel-tower']
};

const markdownResponse = formatResponse(rawResponse, 'markdown');
console.log(markdownResponse);
```

### parseUserInput()

사용자 입력을 구조화된 형식으로 파싱하는 유틸리티 함수입니다.

```javascript
parseUserInput(input)
```

#### 매개변수

- `input` (string): 사용자 입력 문자열

#### 반환값

- `Object`: 파싱된 입력 객체

#### 예제

```javascript
import { parseUserInput } from 'agentk2/utils';

const input = '내일 서울의 날씨를 알려줘';
const parsed = parseUserInput(input);
console.log(parsed);
// { intent: 'weather-query', entities: { location: '서울', time: '내일' } }
```
