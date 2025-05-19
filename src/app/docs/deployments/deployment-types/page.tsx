import Link from "next/link";

const DeploymentTypesPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 애플리케이션 배포 유형 완벽 가이드
			</h1>
			<p className="mb-8 text-lg">
				VIBE는 현대 웹 애플리케이션의 다양한 아키텍처와 요구사항을 충족시키기
				위해 여러 가지 배포 유형을 지원합니다. 프로젝트의 특성, 성능 요구사항,
				확장성, 관리 편의성 등을 고려하여 최적의 배포 유형을 선택하는 것이
				중요합니다. VIBE에서 지원하는 주요 배포 유형과 각 유형별 특징 및
				고려사항을 자세히 살펴보겠습니다.
			</p>

			{/* 1. 정적 웹사이트 배포 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					1. 정적 웹사이트 배포 (Static Site Deployment)
				</h2>
				<p className="mb-4">
					정적 웹사이트는 HTML, CSS, JavaScript 파일 및 이미지와 같은 미리
					빌드된 파일들로 구성됩니다. 서버 측 로직 없이 클라이언트 측에서 모든
					콘텐츠가 렌더링되므로 매우 빠르고 안정적이며, 보안에도 유리합니다.
					VIBE는 Next.js, Gatsby, Hugo, Jekyll 등 다양한 정적 사이트
					생성기(SSG)로 빌드된 프로젝트를 손쉽게 배포할 수 있도록 지원합니다.
				</p>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							장점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>최고의 속도와 성능:</strong> CDN(Content Delivery
								Network)을 통해 전 세계 사용자에게 빠르게 콘텐츠를 제공할 수
								있습니다.
							</li>
							<li>
								<strong>높은 보안성:</strong> 서버 측 취약점이 거의 없어 보안
								위협에 강합니다.
							</li>
							<li>
								<strong>저렴한 호스팅 비용:</strong> 단순 파일 호스팅으로 운영
								가능하여 비용 효율적입니다.
							</li>
							<li>
								<strong>뛰어난 확장성:</strong> 트래픽 증가에 쉽게 대응할 수
								있습니다.
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							단점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>동적 콘텐츠 처리 한계:</strong> 실시간 데이터나 사용자별
								맞춤 콘텐츠 제공이 어렵습니다. (API 연동으로 일부 해결 가능)
							</li>
							<li>
								<strong>빌드 시간:</strong> 콘텐츠 변경 시 사이트 전체를 다시
								빌드해야 할 수 있습니다.
							</li>
						</ul>
					</div>
				</div>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					VIBE에서의 설정 및 고려사항:
				</h4>
				<ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
					<li>
						<strong>빌드 명령어 설정:</strong> 프로젝트의 정적 파일을 생성하는
						빌드 명령어를 정확히 지정해야 합니다. (예: `next build && next
						export`, `gatsby build`)
					</li>
					<li>
						<strong>출력 디렉토리 지정:</strong> 빌드 결과물(정적 파일)이
						저장되는 디렉토리(예: `out`, `public`, `_site`)를 배포 설정에
						명시합니다.
					</li>
					<li>
						<strong>CDN 연동:</strong> VIBE는 배포 시 자동으로 CDN 설정을
						최적화하여 성능을 극대화할 수 있습니다. (VIBE 호스팅 사용 시)
					</li>
					<li>
						<strong>라우팅 설정:</strong> 클라이언트 사이드 라우팅을 사용하는
						경우, 모든 경로 요청이 `index.html`로 연결되도록 서버 설정을
						조정해야 할 수 있습니다. (VIBE에서 자동 처리 가능성)
					</li>
				</ul>
				<p className="text-sm">
					<strong>적합한 사용 사례:</strong> 개인 블로그, 포트폴리오 웹사이트,
					제품 소개 페이지, 문서 사이트, 마케팅용 랜딩 페이지 등
				</p>
				{/* TODO: VIBE 정적 사이트 배포 설정 UI 스크린샷 */}
			</section>

			{/* 2. 서버 사이드 렌더링(SSR) 애플리케이션 배포 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					2. 서버 사이드 렌더링(SSR) 애플리케이션 배포
				</h2>
				<p className="mb-4">
					SSR 애플리케이션은 사용자가 페이지를 요청할 때마다 서버에서 HTML을
					생성하여 클라이언트에게 전송합니다. 초기 로딩 속도가 빠르고 SEO(검색
					엔진 최적화)에 유리하며, 사용자별 동적 콘텐츠 제공에 적합합니다.
					VIBE는 Next.js (SSR 모드), Nuxt.js 등 주요 SSR 프레임워크를
					지원합니다.
				</p>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							장점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>우수한 SEO 성능:</strong> 검색 엔진 크롤러가 완전한 HTML
								콘텐츠를 수집할 수 있습니다.
							</li>
							<li>
								<strong>빠른 초기 페이지 로드(TTFB):</strong> 사용자가 첫 화면을
								빠르게 볼 수 있습니다.
							</li>
							<li>
								<strong>동적 콘텐츠 제공 용이:</strong> 사용자 요청에 따라
								실시간으로 맞춤형 콘텐츠를 생성할 수 있습니다.
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							단점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>서버 부하 증가:</strong> 모든 요청을 서버에서 처리하므로
								서버 리소스 요구량이 높습니다.
							</li>
							<li>
								<strong>정적 사이트 대비 느린 응답 속도:</strong> 서버 처리
								시간이 추가됩니다.
							</li>
							<li>
								<strong>복잡한 아키텍처:</strong> 개발 및 운영 복잡도가
								상대적으로 높을 수 있습니다.
							</li>
						</ul>
					</div>
				</div>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					VIBE에서의 설정 및 고려사항:
				</h4>
				<ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
					<li>
						<strong>애플리케이션 실행 환경:</strong> Node.js 버전 등
						애플리케이션 실행에 필요한 서버 환경을 올바르게 설정해야 합니다.
					</li>
					<li>
						<strong>환경 변수 관리:</strong> API 키, 데이터베이스 연결 정보 등
						민감한 정보는 환경 변수를 통해 안전하게 관리합니다.
					</li>
					<li>
						<strong>빌드 및 시작 명령어:</strong> 애플리케이션을 빌드하고
						실행하는 명령어를 정확히 지정합니다. (예: `next build`, `next
						start`)
					</li>
					<li>
						<strong>헬스 체크 및 포트 설정:</strong> 애플리케이션이 정상적으로
						실행되고 있는지 확인할 수 있는 헬스 체크 경로와 사용할 포트를
						설정합니다.
					</li>
					<li>
						<strong>확장성 고려:</strong> 트래픽 증가에 대비한 오토
						스케일링(Auto Scaling) 설정을 고려할 수 있습니다. (VIBE 고급 기능
						또는 외부 클라우드 연동)
					</li>
				</ul>
				<p className="text-sm">
					<strong>적합한 사용 사례:</strong> 동적 콘텐츠 중심의 웹사이트, SEO가
					중요한 서비스, 사용자 맞춤형 경험을 제공하는 플랫폼, 대규모 커뮤니티
					사이트 등
				</p>
				{/* TODO: VIBE SSR 앱 배포 설정 UI 스크린샷 */}
			</section>

			{/* 3. 컨테이너 기반 애플리케이션 배포 (Docker) */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					3. 컨테이너 기반 애플리케이션 배포 (Docker)
				</h2>
				<p className="mb-4">
					Docker와 같은 컨테이너 기술은 애플리케이션과 그 종속성을 격리된 환경인
					컨테이너 이미지로 패키징합니다. 이를 통해 어떤 환경에서든 일관되게
					애플리케이션을 실행할 수 있으며, 개발, 테스트, 운영 환경 간의 차이로
					인한 문제를 최소화합니다. VIBE는 `Dockerfile`을 프로젝트에 포함하여
					컨테이너 이미지를 빌드하고 배포하는 기능을 지원합니다.
				</p>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							장점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>환경 일관성 보장:</strong> "내 컴퓨터에서는 됐는데..."
								문제를 해결합니다.
							</li>
							<li>
								<strong>높은 이식성:</strong> Docker가 설치된 곳이라면 어디든
								쉽게 배포하고 실행할 수 있습니다.
							</li>
							<li>
								<strong>빠른 배포 및 확장:</strong> 이미지를 기반으로 신속하게
								컨테이너를 생성하고 확장할 수 있습니다.
							</li>
							<li>
								<strong>마이크로서비스 아키텍처에 적합:</strong> 각 서비스를
								독립적인 컨테이너로 관리하기 용이합니다.
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							단점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>Docker 학습 곡선:</strong> Docker 및 컨테이너 개념에
								대한 이해가 필요합니다.
							</li>
							<li>
								<strong>이미지 크기 관리:</strong> 최적화되지 않은 이미지는
								크기가 커져 배포 시간이 오래 걸릴 수 있습니다.
							</li>
							<li>
								<strong>운영 복잡성 (특히 대규모):</strong> Kubernetes와 같은
								오케스트레이션 도구 없이 대규모 컨테이너를 관리하기 어려울 수
								있습니다.
							</li>
						</ul>
					</div>
				</div>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					VIBE에서의 설정 및 고려사항:
				</h4>
				<ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
					<li>
						<strong>`Dockerfile` 작성:</strong> 애플리케이션 실행 환경, 종속성
						설치, 실행 명령어 등을 정의하는 `Dockerfile`을 프로젝트 루트에
						작성해야 합니다.
					</li>
					<li>
						<strong>포트 매핑:</strong> 컨테이너 내부에서 실행되는
						애플리케이션의 포트와 외부에서 접근할 포트를 매핑해야 합니다.
					</li>
					<li>
						<strong>볼륨 마운트:</strong> 데이터베이스 파일이나 설정 파일 등
						영구적으로 보존해야 하는 데이터는 볼륨을 사용하여 컨테이너 외부와
						연결합니다.
					</li>
					<li>
						<strong>환경 변수 주입:</strong> Docker 컨테이너 실행 시 필요한 환경
						변수를 안전하게 주입합니다.
					</li>
					<li>
						<strong>Private Registry 지원:</strong> Docker Hub 외에 비공개
						컨테이너 레지스트리(예: AWS ECR, Google GCR) 사용을 지원할 수
						있습니다.
					</li>
				</ul>
				<p className="text-sm">
					<strong>적합한 사용 사례:</strong> 다양한 기술 스택을 사용하는
					마이크로서비스, 특정 실행 환경에 대한 강한 의존성을 가진 애플리케이션,
					개발-운영 환경 일관성이 중요한 프로젝트, CI/CD 파이프라인과의 긴밀한
					통합이 필요한 경우
				</p>
				{/* TODO: VIBE Docker 배포 설정 UI 스크린샷 */}
			</section>

			{/* 4. 서버리스 기능 배포 (Serverless Functions) */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					4. 서버리스 기능 배포 (Serverless Functions)
				</h2>
				<p className="mb-4">
					서버리스(Serverless) 아키텍처는 개발자가 서버 인프라를 직접 관리할
					필요 없이 특정 이벤트에 의해 트리거되는 짧은 실행 코드(함수)를
					작성하고 배포하는 방식입니다. 사용한 만큼만 비용을 지불하며, 자동 확장
					기능을 제공합니다. VIBE는 AWS Lambda, Google Cloud Functions, Azure
					Functions와 같은 서버리스 플랫폼으로의 함수 배포를 지원하거나 통합할
					수 있습니다.
				</p>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							장점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>운영 부담 감소:</strong> 서버 프로비저닝, 관리, 패치
								등이 필요 없습니다.
							</li>
							<li>
								<strong>비용 효율성 (Pay-as-you-go):</strong> 실제 함수 실행
								시간과 리소스 사용량에 대해서만 비용을 지불합니다.
							</li>
							<li>
								<strong>자동 확장성:</strong> 요청량에 따라 자동으로 확장 및
								축소됩니다.
							</li>
							<li>
								<strong>빠른 개발 및 배포:</strong> 작은 단위의 함수를 빠르게
								개발하고 배포할 수 있습니다.
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-2 text-lg font-semibold text-purple-200">
							단점:
						</h4>
						<ul className="list-disc space-y-1 pl-5 text-sm">
							<li>
								<strong>콜드 스타트(Cold Start):</strong> 함수가 처음 호출되거나
								오랜만에 호출될 때 실행 지연이 발생할 수 있습니다.
							</li>
							<li>
								<strong>실행 시간 및 리소스 제한:</strong> 개별 함수의 실행
								시간, 메모리 사용량 등에 제한이 있을 수 있습니다.
							</li>
							<li>
								<strong>상태 관리 어려움:</strong> 함수는 기본적으로
								무상태(stateless)이므로 상태 관리를 위해 외부 저장소(예:
								데이터베이스)가 필요합니다.
							</li>
							<li>
								<strong>로컬 테스트 및 디버깅 복잡성:</strong> 클라우드 환경과
								유사한 로컬 환경을 구성하기 어려울 수 있습니다.
							</li>
							<li>
								<strong>벤더 종속성:</strong> 특정 클라우드 제공업체의 서버리스
								플랫폼에 종속될 수 있습니다.
							</li>
						</ul>
					</div>
				</div>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					VIBE에서의 설정 및 고려사항:
				</h4>
				<ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
					<li>
						<strong>함수 핸들러 및 트리거 설정:</strong> 각 함수 코드의
						진입점(핸들러)과 함수를 실행시킬 이벤트 트리거(예: HTTP 요청,
						데이터베이스 변경, 메시지 큐)를 정의합니다.
					</li>
					<li>
						<strong>실행 환경 및 언어 선택:</strong> 함수 실행에 필요한
						런타임(예: Node.js, Python, Go)과 버전을 선택합니다.
					</li>
					<li>
						<strong>권한 및 보안 설정:</strong> 함수가 다른 클라우드 서비스(예:
						S3, DynamoDB)에 접근하기 위한 IAM 역할 및 권한을 설정합니다.
					</li>
					<li>
						<strong>의존성 관리:</strong> 함수의 외부 라이브러리 및 패키지를
						관리하고 배포 패키지에 포함시킵니다. (예: `package.json`,
						`requirements.txt`)
					</li>
					<li>
						<strong>API Gateway 연동:</strong> HTTP 요청을 통해 함수를
						실행하려면 API Gateway와 같은 서비스를 사용하여 HTTP 엔드포인트를
						생성하고 함수와 연결합니다.
					</li>
				</ul>
				<p className="text-sm">
					<strong>적합한 사용 사례:</strong> 이벤트 기반 작업 처리(예: 이미지
					썸네일 생성, 알림 발송), API 백엔드, 데이터 처리 파이프라인, 챗봇, IoT
					데이터 수집 및 처리 등
				</p>
				{/* TODO: VIBE 서버리스 함수 배포 설정 UI 스크린샷 */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					어떤 배포 유형을 선택해야 할까요?
				</h2>
				<p className="mb-4">
					최적의 배포 유형은 프로젝트의 요구사항, 팀의 기술 스택, 예상 트래픽,
					예산 등 다양한 요소를 종합적으로 고려하여 결정해야 합니다. VIBE는
					이러한 다양한 선택지를 제공함으로써 사용자가 자신의 상황에 가장 적합한
					방식으로 애플리케이션을 배포할 수 있도록 지원합니다. 필요하다면 여러
					배포 유형을 조합하여 사용하는 것도 가능합니다 (예: 프론트엔드는 정적
					사이트로, 백엔드 API는 서버리스 함수 또는 컨테이너로 배포).
				</p>
				<p className="mb-4">
					각 배포 유형에 대한 더 자세한 설정 방법이나 고급 기능은{" "}
					<Link
						href="/docs/deployments/advanced-configuration"
						className="text-pink-400 hover:underline"
					>
						고급 배포 설정
					</Link>{" "}
					문서를 참고해주시기 바랍니다. 궁금한 점이 있다면 언제든지 VIBE
					커뮤니티나 지원팀에 문의해주세요.
				</p>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					다음 단계
				</h2>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<Link
							href="/docs/deployments/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE 배포 개요 다시보기
						</Link>
					</li>
					<li>
						<Link
							href="/docs/getting-started/quickstarts"
							className="text-pink-400 hover:underline"
						>
							빠른 시작: 첫 VIBE 앱 배포해보기
						</Link>
					</li>
					<li>
						<Link
							href="/docs/deployments/advanced-configuration"
							className="text-pink-400 hover:underline"
						>
							고급 배포 설정 알아보기
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};
export default DeploymentTypesPage;
