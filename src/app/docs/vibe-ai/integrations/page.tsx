import Link from "next/link";

const IntegrationsPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-6 text-purple-400">
				VIBE AI 통합: 워크플로우 확장 및 자동화
			</h1>
			<p className="text-lg mb-8">
				VIBE AI는 독립적인 기능으로도 강력하지만, 다양한 외부 개발 도구 및
				서비스와 통합될 때 그 잠재력이 더욱 확장됩니다. 이를 통해 기존에
				사용하던 도구들과 VIBE AI 기능을 매끄럽게 연동하여 개발 워크플로우를
				최적화하고 자동화 수준을 한층 높일 수 있습니다.
			</p>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE AI 통합의 이점
				</h2>
				<ul className="list-disc pl-6 mb-6 space-y-3">
					<li>
						<strong>개발 생산성 극대화:</strong> 자주 사용하는 도구(예: GitHub,
						Jira, Slack) 내에서 VIBE AI의 코드 생성, 분석, 자동화 기능을 직접
						활용하여 컨텍스트 전환 비용을 줄이고 작업 흐름을 유지합니다.
					</li>
					<li>
						<strong>워크플로우 자동화 심화:</strong> VIBE 에이전트와 외부 CI/CD
						파이프라인(GitHub Actions, Jenkins 등)을 연동하여 코드 커밋부터
						테스트, 빌드, 배포에 이르는 전체 과정을 자동화합니다.
					</li>
					<li>
						<strong>데이터 기반 인사이트 확보:</strong> 프로젝트 관리 도구(Jira,
						Asana 등)의 데이터를 VIBE AI와 연동하여 프로젝트 진행 상황 분석,
						잠재적 위험 예측, 리소스 할당 최적화 등에 활용합니다. (향후 지원
						예정)
					</li>
					<li>
						<strong>협업 효율성 증진:</strong> 커뮤니케이션 도구(Slack,
						Microsoft Teams 등)와 통합하여 VIBE AI의 분석 결과, 코드 리뷰 요청,
						중요 알림 등을 팀 채널에 자동으로 공유하여 정보 투명성을 높이고 빠른
						의사결정을 지원합니다.
					</li>
					<li>
						<strong>맞춤형 개발 환경 구축:</strong> VIBE AI API (제공 예정)를
						활용하여 자체 개발 도구나 내부 시스템에 VIBE AI 기능을 통합, 기업
						특화된 맞춤형 개발 환경을 구축할 수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					주요 통합 시나리오 (예시)
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							1. GitHub / GitLab / Bitbucket
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> 코드 푸시 시 자동 코드 리뷰 및 개선 사항
							제안, PR 생성 시 관련 이슈 자동 연결 및 요약, 테스트 결과 코멘트,
							VIBE 에이전트를 통한 CI 실행 등.
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> 웹훅(Webhook), API, VIBE 에이전트 액션
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							2. Jira / Asana / Trello
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> 새로운 이슈 생성 시 관련 코드 스켈레톤 자동
							생성 제안, 코드 변경 사항에 따른 이슈 상태 자동 업데이트, VIBE
							어시스턴트/에이전트 작업 결과 이슈 코멘트로 기록 등.
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> API, 웹훅 (VIBE 또는 해당 도구에서
							제공)
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							3. Slack / Microsoft Teams
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> 중요한 빌드 실패 알림, 코드 리뷰 요청 알림,
							VIBE AI 분석 리포트 요약 공유, 특정 명령어 기반 VIBE 에이전트 작업
							실행 (예: /vibe-agent deploy staging).
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> 봇(Bot) 연동, API, 웹훅
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							4. CI/CD (Jenkins, GitHub Actions 등)
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> VIBE 에이전트를 CI/CD 파이프라인의 한
							단계로 포함하여 코드 분석, 테스트 자동화, 보안 취약점 점검 등을
							수행하고 결과를 리포팅.
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> VIBE 에이전트 CLI, API
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							5. 코드 품질 및 보안 분석 도구
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> SonarQube, Snyk 등 외부 분석 도구의 결과를
							VIBE AI가 종합하여 사용자에게 더 실행 가능한 형태로 요약 및 개선
							방안 제시.
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> API (각 도구에서 제공)
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							6. 자체 개발 도구 및 시스템 (API 활용)
						</h4>
						<p className="text-sm mb-2">
							<strong>기능:</strong> VIBE AI API (향후 제공 예정)를 통해 기업
							내부 시스템이나 자체 개발한 도구에 VIBE 어시스턴트, 코드 생성,
							분석 기능 등을 직접 통합.
						</p>
						<p className="text-xs text-gray-400">
							<strong>통합 방식:</strong> VIBE AI API (RESTful, gRPC 등)
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					통합 설정 방법 (일반적인 절차)
				</h2>
				<p className="mb-4">
					구체적인 통합 방법은 대상 서비스와 VIBE AI 기능에 따라 다를 수 있지만,
					일반적인 절차는 다음과 같습니다. VIBE는 다양한 주요 서비스와의 간편한
					통합을 위한 사전 빌드된 커넥터 또는 가이드를 제공할 예정입니다.
				</p>
				<ol className="list-decimal pl-6 mb-6 space-y-3">
					<li>
						<strong>VIBE 설정 메뉴 접근:</strong> VIBE IDE 또는 웹 대시보드의
						'설정' &gt; '통합' (또는 'Integrations') 메뉴로 이동합니다.
					</li>
					<li>
						<strong>통합할 서비스 선택:</strong> 지원되는 서비스 목록에서
						연동하고자 하는 서비스를 선택합니다.
					</li>
					<li>
						<strong>인증 및 권한 부여:</strong> 일반적으로 OAuth 2.0 인증 또는
						API 키/토큰 입력을 통해 VIBE AI가 해당 서비스에 접근할 수 있도록
						권한을 부여합니다. (최소 권한 원칙 준수)
					</li>
					<li>
						<strong>웹훅 설정 (필요시):</strong> 서비스에서 VIBE AI로 이벤트를
						보내야 하는 경우(예: GitHub에서 코드 푸시 이벤트), 해당 서비스에서
						VIBE가 제공하는 웹훅 URL을 등록합니다.
					</li>
					<li>
						<strong>통합 옵션 구성:</strong> 어떤 이벤트를 동기화할지, 어떤 AI
						기능을 사용할지 등 세부 통합 옵션을 설정합니다.
					</li>
					<li>
						<strong>테스트 및 활성화:</strong> 설정을 완료한 후 테스트를 통해
						정상적으로 연동되는지 확인하고 통합을 활성화합니다.
					</li>
				</ol>
				{/* TODO: VIBE 통합 설정 화면 예시 스크린샷 추가 */}
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE AI API (향후 계획)
				</h2>
				<p className="mb-4">
					VIBE는 개발자들이 자체 애플리케이션 및 서비스에 VIBE AI의 강력한
					기능을 직접 통합할 수 있도록 공개 API를 제공할 계획입니다. 이를 통해
					코드 생성, 분석, 번역, 요약 등 다양한 AI 기능을 프로그래밍 방식으로
					호출하여 활용 범위를 무한히 확장할 수 있습니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>제공 형태:</strong> RESTful API, gRPC 등 표준적인 인터페이스
						제공
					</li>
					<li>
						<strong>주요 기능 접근:</strong> VIBE 어시스턴트, 에이전트 핵심 기능
						API 노출
					</li>
					<li>
						<strong>SDK 제공:</strong> 다양한 프로그래밍 언어용 SDK 제공으로
						손쉬운 연동 지원
					</li>
					<li>
						<strong>문서 및 예제:</strong> 상세한 API 문서와 사용 예제 코드 제공
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					보안 및 데이터 관리
				</h2>
				<p className="mb-4">
					외부 서비스와의 통합 시 데이터 보안 및 개인 정보 보호는 매우
					중요합니다. VIBE는 다음 원칙을 준수합니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>최소 권한 원칙:</strong> 통합 시 필요한 최소한의 권한만을
						요청하고 사용합니다.
					</li>
					<li>
						<strong>데이터 암호화:</strong> 민감한 데이터(예: API 키, 토큰)는
						안전하게 암호화되어 저장 및 전송됩니다.
					</li>
					<li>
						<strong>투명한 데이터 사용:</strong> 어떤 데이터가 어떻게 사용되는지
						명확히 알리고, 사용자가 데이터 흐름을 제어할 수 있도록 지원합니다.
					</li>
					<li>
						<strong>감사 로그:</strong> 주요 통합 작업 및 데이터 접근에 대한
						로그를 기록하여 추적성을 확보합니다.
					</li>
				</ul>
				<p>
					자세한 내용은{" "}
					<Link
						href="/privacy-policy"
						className="text-pink-400 hover:underline"
					>
						개인정보처리방침
					</Link>{" "}
					및 각 통합 서비스의 보안 정책을 참고해주세요.
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다음 단계
				</h2>
				<p className="mb-4">
					VIBE AI 통합 기능을 통해 개발 환경을 더욱 강력하고 효율적으로
					만들어보세요. VIBE의 다른 기능들도 함께 살펴보시면 시너지를 경험할 수
					있습니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<Link
							href="/docs/vibe-ai/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE AI 개요
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-ai/vibe-agent"
							className="text-pink-400 hover:underline"
						>
							VIBE 에이전트
						</Link>{" "}
						(통합의 핵심 요소)
					</li>
					<li>
						<Link
							href="/docs/vibe-apps/advanced-configuration"
							className="text-pink-400 hover:underline"
						>
							VIBE 앱 고급 설정
						</Link>{" "}
						(웹훅 설정 등 관련 내용 포함 가능)
					</li>
				</ul>
			</section>
		</div>
	);
};
export default IntegrationsPage;
