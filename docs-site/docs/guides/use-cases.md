---
sidebar_position: 1
---

# 사용 사례

AgentK2를 활용한 다양한 사용 사례를 소개합니다.

## 개발 지원 에이전트

AgentK2를 사용하여 개발자를 지원하는 지능형 에이전트를 구축할 수 있습니다.

### 코드 생성 및 리팩토링

개발자가 코드를 작성하거나 리팩토링하는 데 도움을 주는 에이전트:

```javascript
import { Agent } from 'agentk2';
import { createTool } from 'agentk2/utils';

// 코드 분석 도구 생성
const codeAnalysisTool = createTool({
  name: 'code-analyzer',
  description: '코드를 분석하고 개선 사항을 제안합니다',
  parameters: {
    code: { type: 'string', required: true },
    language: { type: 'string', required: true }
  },
  execute: async ({ code, language }) => {
    // 코드 분석 로직
    return {
      complexity: 'medium',
      suggestions: [
        '변수 이름을 더 명확하게 지정하세요',
        '중복 코드를 함수로 추출하세요'
      ]
    };
  }
});

// 코드 생성 도구 생성
const codeGeneratorTool = createTool({
  name: 'code-generator',
  description: '요구 사항에 따라 코드를 생성합니다',
  parameters: {
    requirements: { type: 'string', required: true },
    language: { type: 'string', required: true }
  },
  execute: async ({ requirements, language }) => {
    // 코드 생성 로직
    return {
      code: '// 생성된 코드\nfunction example() { ... }',
      explanation: '이 코드는 요구 사항에 따라 ...'
    };
  }
});

// 개발 지원 에이전트 생성
const devAgent = new Agent({
  name: 'DevAssistant',
  description: '개발자를 지원하는 에이전트',
  tools: [codeAnalysisTool, codeGeneratorTool]
});

// 에이전트 사용
const result = await devAgent.run('React 컴포넌트에서 사용자 입력을 처리하는 코드를 생성해주세요');
console.log(result.code);
```

### 디버깅 지원

코드 디버깅을 지원하는 에이전트:

```javascript
// 에러 분석 도구 생성
const errorAnalyzerTool = createTool({
  name: 'error-analyzer',
  description: '에러 메시지를 분석하고 해결책을 제안합니다',
  parameters: {
    errorMessage: { type: 'string', required: true },
    context: { type: 'string', required: false }
  },
  execute: async ({ errorMessage, context }) => {
    // 에러 분석 로직
    return {
      errorType: 'TypeError',
      possibleCauses: ['변수가 정의되지 않음', '잘못된 타입 사용'],
      suggestedFixes: ['변수를 초기화하세요', '타입 변환을 추가하세요']
    };
  }
});

// 디버깅 에이전트 생성
const debugAgent = new Agent({
  name: 'DebugAssistant',
  tools: [errorAnalyzerTool, codeAnalysisTool]
});

// 에이전트 사용
const solution = await debugAgent.run('TypeError: Cannot read property \'length\' of undefined');
```

## 데이터 분석 에이전트

AgentK2를 사용하여 데이터 분석을 수행하는 에이전트를 구축할 수 있습니다.

### 데이터 처리 및 시각화

데이터를 처리하고 시각화하는 에이전트:

```javascript
// 데이터 처리 도구 생성
const dataProcessorTool = createTool({
  name: 'data-processor',
  description: '데이터를 처리하고 분석합니다',
  parameters: {
    data: { type: 'array', required: true },
    operation: { type: 'string', required: true }
  },
  execute: async ({ data, operation }) => {
    // 데이터 처리 로직
    let result;
    switch (operation) {
      case 'average':
        result = data.reduce((sum, val) => sum + val, 0) / data.length;
        break;
      case 'max':
        result = Math.max(...data);
        break;
      // 기타 연산...
      default:
        result = data;
    }
    return { result };
  }
});

// 차트 생성 도구 생성
const chartGeneratorTool = createTool({
  name: 'chart-generator',
  description: '데이터를 시각화하는 차트를 생성합니다',
  parameters: {
    data: { type: 'array', required: true },
    chartType: { type: 'string', required: true }
  },
  execute: async ({ data, chartType }) => {
    // 차트 생성 로직
    return {
      chartUrl: 'https://example.com/chart/123',
      chartData: { type: chartType, data }
    };
  }
});

// 데이터 분석 에이전트 생성
const dataAnalysisAgent = new Agent({
  name: 'DataAnalyst',
  tools: [dataProcessorTool, chartGeneratorTool]
});

// 에이전트 사용
const analysisResult = await dataAnalysisAgent.run('이 데이터셋의 평균을 계산하고 막대 차트로 시각화해주세요', {
  context: {
    dataset: [12, 45, 33, 67, 89, 23, 45]
  }
});
```

## 고객 지원 에이전트

AgentK2를 사용하여 고객 지원을 제공하는 에이전트를 구축할 수 있습니다.

### 질문 응답 및 문제 해결

고객 질문에 답변하고 문제를 해결하는 에이전트:

```javascript
// 지식 베이스 검색 도구 생성
const knowledgeBaseTool = createTool({
  name: 'knowledge-base',
  description: '지식 베이스에서 정보를 검색합니다',
  parameters: {
    query: { type: 'string', required: true }
  },
  execute: async ({ query }) => {
    // 지식 베이스 검색 로직
    return {
      articles: [
        { title: '계정 설정 방법', content: '...' },
        { title: '비밀번호 재설정', content: '...' }
      ]
    };
  }
});

// 티켓 생성 도구 생성
const ticketCreatorTool = createTool({
  name: 'ticket-creator',
  description: '고객 지원 티켓을 생성합니다',
  parameters: {
    issue: { type: 'string', required: true },
    priority: { type: 'string', required: true },
    customerInfo: { type: 'object', required: true }
  },
  execute: async ({ issue, priority, customerInfo }) => {
    // 티켓 생성 로직
    return {
      ticketId: 'T-12345',
      status: 'created',
      estimatedResponse: '24시간 이내'
    };
  }
});

// 고객 지원 에이전트 생성
const supportAgent = new Agent({
  name: 'CustomerSupport',
  tools: [knowledgeBaseTool, ticketCreatorTool]
});

// 에이전트 사용
const response = await supportAgent.run('비밀번호를 잊어버렸어요. 어떻게 재설정하나요?');
```

## 다음 단계

다양한 사용 사례에 대해 알아보았다면, [문제 해결 가이드](troubleshooting)를 확인하여 일반적인 문제 해결 방법을 살펴보세요.
