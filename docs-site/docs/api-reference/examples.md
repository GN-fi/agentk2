---
sidebar_position: 3
---

# 예제 코드

AgentK2를 활용한 다양한 예제 코드를 소개합니다.

## 기본 에이전트 생성 및 실행

가장 기본적인 에이전트를 생성하고 실행하는 예제입니다.

```javascript
import { Agent } from 'agentk2';

// 기본 에이전트 생성
const agent = new Agent({
  name: 'SimpleAgent',
  description: '간단한 작업을 수행하는 에이전트'
});

// 에이전트 초기화
await agent.initialize();

// 에이전트 실행
const result = await agent.run('안녕하세요, 오늘 날씨가 어떤가요?');
console.log(result);
```

## 도구 통합 예제

에이전트에 사용자 정의 도구를 추가하는 예제입니다.

```javascript
import { Agent, ToolRegistry } from 'agentk2';
import { createTool } from 'agentk2/utils';

// 날씨 조회 도구 생성
const weatherTool = createTool({
  name: 'weather',
  description: '특정 위치의 날씨 정보를 제공합니다',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 실제로는 날씨 API를 호출하는 로직이 들어갑니다
    return {
      temperature: 25,
      conditions: '맑음',
      humidity: 60,
      location
    };
  }
});

// 계산기 도구 생성
const calculatorTool = createTool({
  name: 'calculator',
  description: '수학 계산을 수행합니다',
  parameters: {
    expression: { type: 'string', required: true }
  },
  execute: async ({ expression }) => {
    try {
      // 주의: 실제 프로덕션 환경에서는 eval 사용을 피하세요
      const result = eval(expression);
      return { result };
    } catch (error) {
      return { error: '계산 오류: ' + error.message };
    }
  }
});

// 도구 레지스트리 생성 및 도구 등록
const tools = new ToolRegistry();
tools.register(weatherTool);
tools.register(calculatorTool);

// 도구가 통합된 에이전트 생성
const agent = new Agent({
  name: 'ToolAgent',
  description: '다양한 도구를 활용하는 에이전트',
  tools
});

// 에이전트 초기화
await agent.initialize();

// 날씨 도구 사용
const weatherResult = await agent.run('서울의 날씨가 어떤가요?');
console.log(weatherResult);

// 계산기 도구 사용
const calculationResult = await agent.run('123 * 456은 얼마인가요?');
console.log(calculationResult);
```

## 메모리 시스템 활용 예제

에이전트의 메모리 시스템을 활용하는 예제입니다.

```javascript
import { Agent, MemoryManager } from 'agentk2';

// 메모리 관리자 생성
const memory = new MemoryManager({
  type: 'hybrid', // 단기 및 장기 메모리 모두 사용
  storage: 'local', // 로컬 스토리지 사용
  capacity: 1000 // 최대 1000개 항목 저장
});

// 메모리 시스템이 통합된 에이전트 생성
const agent = new Agent({
  name: 'MemoryAgent',
  description: '메모리 시스템을 활용하는 에이전트',
  memory
});

// 에이전트 초기화
await agent.initialize();

// 중요 정보 저장
await agent.remember('사용자의 이름은 김철수입니다.');
await agent.remember('사용자는 야간 모드를 선호합니다.');
await agent.remember('사용자는 주로 모바일 기기에서 접속합니다.');

// 대화 진행
const response1 = await agent.run('안녕하세요, 저는 누구인가요?');
console.log(response1); // "안녕하세요, 김철수님! 무엇을 도와드릴까요?"

// 저장된 정보 활용
const response2 = await agent.run('내 설정을 알려줘');
console.log(response2); // "현재 야간 모드가 활성화되어 있으며, 주로 모바일 기기에서 접속하고 계십니다."
```

## 멀티 에이전트 협업 예제

여러 에이전트가 협력하여 작업을 수행하는 예제입니다.

```javascript
import { Agent, AgentTeam } from 'agentk2';

// 특화된 에이전트들 생성
const researchAgent = new Agent({
  name: 'Researcher',
  description: '정보 수집 및 조사를 담당하는 에이전트',
  specialization: 'information-gathering'
});

const analyzerAgent = new Agent({
  name: 'Analyzer',
  description: '데이터 분석을 담당하는 에이전트',
  specialization: 'data-analysis'
});

const writerAgent = new Agent({
  name: 'Writer',
  description: '콘텐츠 작성을 담당하는 에이전트',
  specialization: 'content-creation'
});

// 에이전트 팀 구성
const team = new AgentTeam({
  name: 'ResearchTeam',
  agents: [researchAgent, analyzerAgent, writerAgent],
  coordinator: 'auto' // 자동 조정 또는 특정 에이전트 지정
});

// 팀 초기화
await team.initialize();

// 팀에 작업 할당
const report = await team.run('인공지능의 최신 동향에 대한 보고서 작성');
console.log(report);

// 팀 작업 과정 모니터링
team.on('step', (step) => {
  console.log(`단계 ${step.number}: ${step.agent.name} - ${step.description}`);
});
```

## 고급 추론 엔진 활용 예제

고급 추론 엔진을 활용하는 예제입니다.

```javascript
import { Agent } from 'agentk2';

// 다단계 추론 엔진을 사용하는 에이전트
const multiStepAgent = new Agent({
  name: 'ReasoningAgent',
  description: '복잡한 문제를 단계적으로 해결하는 에이전트',
  reasoningEngine: 'multi-step',
  reasoningSteps: [
    'problem-definition',
    'information-gathering',
    'hypothesis-generation',
    'hypothesis-testing',
    'conclusion'
  ]
});

// 에이전트 초기화
await multiStepAgent.initialize();

// 복잡한 추론 작업 수행
const solution = await multiStepAgent.reason('왜 최근 몇 년간 자연어 처리 기술이 급속도로 발전했는가?');
console.log(solution);

// 사고 트리 생성 엔진을 사용하는 에이전트
const totAgent = new Agent({
  name: 'TreeOfThoughtAgent',
  description: '다양한 가능성을 탐색하는 에이전트',
  reasoningEngine: 'tree-of-thought',
  explorationDepth: 3,
  branchingFactor: 4
});

// 에이전트 초기화
await totAgent.initialize();

// 여러 가능성 탐색
const options = await totAgent.exploreOptions('새로운 제품 출시 전략');
console.log(options);
```

이 예제들을 참고하여 AgentK2를 다양한 상황에 맞게 활용해보세요.
