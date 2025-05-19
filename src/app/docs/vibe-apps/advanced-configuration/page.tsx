import Link from "next/link";

// 이 페이지를 동적으로 렌더링하도록 설정
export const dynamic = "force-dynamic";

const AdvancedConfigurationPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 앱: 고급 설정
			</h1>
			<p className="mb-8 text-lg">
				VIBE 앱은 기본적인 사용 외에도 다양한 고급 설정 옵션을 제공하여 사용자가
				자신의 앱을 보다 세밀하게 제어하고 최적화할 수 있도록 지원합니다. 이
				문서에서는 VIBE 앱의 고급 설정 기능들을 자세히 안내합니다.
			</p>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					환경 변수 관리
				</h2>
				<p className="mb-4">
					애플리케이션의 동작을 외부에서 제어하기 위해 환경 변수를 사용합니다.
					API 키, 데이터베이스 연결 정보, 외부 서비스 엔드포인트 등 민감하거나
					환경에 따라 변경되어야 하는 값들을 코드와 분리하여 관리할 수 있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>설정 방법:</strong> VIBE 앱 대시보드의 '설정' 탭 또는 VIBE
						CLI를 통해 환경 변수를 추가, 수정, 삭제할 수 있습니다.
					</li>
					<li>
						<strong>민감 정보 관리 (Secrets):</strong> API 토큰이나 비밀번호와
						같이 민감한 정보는 'Secret'으로 등록하여 안전하게 암호화되어 저장 및
						관리됩니다. 런타임 시에만 복호화되어 애플리케이션에 주입됩니다.
					</li>
					<li>
						<strong>예약된 환경 변수:</strong> VIBE 플랫폼에서 기본적으로
						제공하는 환경 변수들이 있을 수 있습니다 (예:{" "}
						<code className="rounded bg-gray-700 px-1">VIBE_APP_ID</code>,{" "}
						<code className="rounded bg-gray-700 px-1">VIBE_ENVIRONMENT</code>).
					</li>
				</ul>
				<div className="rounded-md bg-gray-800 p-4 shadow">
					<h4 className="mb-2 font-semibold text-purple-200">팁:</h4>
					<p className="text-sm">
						환경 변수 변경 후에는 앱을 재시작하거나 재배포해야 적용될 수
						있습니다. VIBE는 변경 사항을 감지하고 자동으로 재시작 옵션을 제공할
						수 있습니다.
					</p>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					사용자 정의 도메인 연결
				</h2>
				<p className="mb-4">
					VIBE 앱에 기본으로 제공되는 도메인 외에 사용자가 소유한 커스텀
					도메인을 연결하여 브랜드 이미지를 강화하고 사용자 접근성을 높일 수
					있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>연결 절차:</strong> VIBE 앱 대시보드에서 '도메인' 설정을
						통해 원하는 도메인을 추가하고, 안내에 따라 DNS 레코드(예: CNAME, A
						레코드)를 사용자의 도메인 등록기관에서 설정합니다.
					</li>
					<li>
						<strong>SSL/TLS 인증서:</strong> 사용자 정의 도메인 연결 시, VIBE는
						자동으로 무료 SSL/TLS 인증서(예: Let's Encrypt)를 발급하고 갱신하여
						HTTPS 보안 연결을 제공합니다.
					</li>
					<li>
						<strong>하위 도메인 및 와일드카드:</strong> 특정 하위 도메인(
						<code className="rounded bg-gray-700 px-1">blog.example.com</code>)
						뿐만 아니라 와일드카드 도메인(
						<code className="rounded bg-gray-700 px-1">*.example.com</code>)
						연결도 지원될 수 있습니다. (VIBE 플랜별 지원 여부 확인 필요)
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					리소스 관리 및 확장
				</h2>
				<p className="mb-4">
					애플리케이션의 트래픽 및 요구사항에 따라 할당된 컴퓨팅 리소스를 조정할
					수 있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>리소스 할당:</strong> 앱의 플랜 또는 설정을 통해 CPU,
						메모리, 스토리지 등의 할당량을 조절할 수 있습니다. 더 높은 성능이
						필요할 경우 스케일 업(Scale-up)이 가능합니다.
					</li>
					<li>
						<strong>자동 확장 (Auto-scaling):</strong> 트래픽 급증에 따라
						자동으로 인스턴스 수를 늘리거나 줄이는 자동 확장 기능을 설정하여
						안정적인 서비스를 유지하고 비용을 최적화할 수 있습니다. (VIBE 플랜별
						지원 여부 확인 필요)
					</li>
					<li>
						<strong>지역 (Region):</strong> 사용자와 가장 가까운 지역에 앱을
						배포하여 지연 시간을 최소화할 수 있습니다. VIBE가 지원하는 다양한
						배포 지역을 선택하거나 변경할 수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					네트워킹 및 보안
				</h2>
				<p className="mb-4">
					VIBE 앱의 네트워크 접근을 제어하고 보안을 강화하기 위한 다양한 설정을
					제공합니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>IP 접근 제어:</strong> 특정 IP 주소나 대역에서의 접근을
						허용하거나 차단하는 IP 화이트리스트/블랙리스트 기능을 설정할 수
						있습니다.
					</li>
					<li>
						<strong>VPC (Virtual Private Cloud):</strong> (고급 플랜) 기존
						클라우드 인프라의 VPC와 VIBE 앱을 안전하게 연결하여 내부 네트워크
						통신을 구성할 수 있습니다.
					</li>
					<li>
						<strong>보안 그룹 및 방화벽:</strong> 인바운드 및 아웃바운드
						트래픽에 대한 포트 및 프로토콜 기반의 세밀한 방화벽 규칙을 설정하여
						네트워크 보안을 강화합니다.
					</li>
					<li>
						<strong>역할 기반 접근 제어 (RBAC):</strong> 팀 멤버별로 VIBE 앱
						설정 및 관리에 대한 접근 권한을 차등적으로 부여하여 보안 및 운영
						효율성을 높입니다.{" "}
						<Link
							href="/docs/vibe-apps/collaboration"
							className="text-pink-400 hover:underline"
						>
							협업 기능
						</Link>
						에서 자세히 알아보세요.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					빌드 및 배포 설정
				</h2>
				<p className="mb-4">
					VIBE는 대부분의 경우 자동으로 최적의 빌드 및 배포 프로세스를
					제공하지만, 필요에 따라 사용자 정의 설정을 통해 유연성을 확보할 수
					있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>사용자 정의 빌드 스크립트:</strong> VIBE가 감지하는 기본
						빌드 명령어 외에 추가적인 빌드 단계나 명령어를 직접 정의하여 실행할
						수 있습니다. (예:{" "}
						<code className="rounded bg-gray-700 px-1">package.json</code>의
						스크립트 수정 또는 VIBE 설정 파일)
					</li>
					<li>
						<strong>배포 파이프라인 커스터마이징:</strong> (고급 기능) GitHub
						Actions, GitLab CI 등 외부 CI/CD 도구와 연동하여 VIBE 앱의 빌드 및
						배포 파이프라인을 직접 구성하고 관리할 수 있습니다.
					</li>
					<li>
						<strong>배포 전략:</strong> 블루/그린 배포, 카나리 배포 등 다양한
						배포 전략을 지원하여 다운타임 없는 안전한 업데이트를 수행할 수
						있습니다. (VIBE 플랜별 지원 여부 확인 필요)
					</li>
					<li>
						<strong>롤백 및 버전 관리:</strong> 이전 배포 버전으로 쉽게 롤백할
						수 있는 기능을 제공하며, 배포 히스토리를 통해 버전 관리가
						가능합니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					백업 및 복원
				</h2>
				<p className="mb-4">
					데이터 유실 방지 및 서비스 연속성을 위해 VIBE 앱의 데이터 및 설정을
					백업하고 필요시 복원할 수 있는 기능을 제공합니다. (앱의 종류 및 사용
					데이터베이스에 따라 지원 범위 상이)
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>자동 백업:</strong> 설정된 주기에 따라 (예: 매일, 매주) 앱의
						데이터베이스, 스토리지 등을 자동으로 백업합니다. 백업 보관 기간도
						설정할 수 있습니다.
					</li>
					<li>
						<strong>수동 백업:</strong> 중요한 변경 작업 전이나 필요에 따라
						언제든지 수동으로 백업을 실행할 수 있습니다.
					</li>
					<li>
						<strong>복원:</strong> 백업된 특정 시점으로 앱의 데이터를 복원할 수
						있습니다. 복원 과정은 몇 분에서 몇 시간이 소요될 수 있으며, 복원
						중에는 서비스 중단이 발생할 수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					모니터링 및 로깅
				</h2>
				<p className="mb-4">
					애플리케이션의 상태를 실시간으로 파악하고 문제를 신속하게 진단하기
					위해 다양한 모니터링 및 로깅 도구를 통합하거나 VIBE 자체 기능을 활용할
					수 있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>실시간 로그 스트리밍:</strong> VIBE 대시보드나 CLI를 통해
						애플리케이션의 실시간 로그를 확인할 수 있습니다.
					</li>
					<li>
						<strong>성능 모니터링 (APM):</strong> CPU, 메모리 사용량, 응답 시간,
						에러율 등 주요 성능 지표를 대시보드에서 확인할 수 있습니다. 외부 APM
						도구(예: Datadog, New Relic)와의 연동을 지원할 수 있습니다.
					</li>
					<li>
						<strong>로그 수집 및 분석:</strong> 외부 로그 관리 시스템(예:
						Elasticsearch, Splunk)으로 로그를 전달하여 장기 보관 및 고급 분석을
						수행할 수 있도록 설정할 수 있습니다.
					</li>
					<li>
						<strong>알림 설정:</strong> 특정 오류 발생, 성능 임계치 초과 등
						중요한 이벤트 발생 시 이메일, 슬랙 등으로 알림을 받도록 설정할 수
						있습니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					문제 해결 및 FAQ
				</h2>
				<p className="mb-4">
					고급 설정과 관련하여 자주 발생하는 문제나 궁금증에 대한 해결 방법을
					안내합니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>Q: 환경 변수를 변경했는데 적용되지 않아요.</strong>
						<br />
						A: 환경 변수 변경 후에는 앱을 재시작하거나 새로운 배포를 진행해야
						합니다. VIBE 대시보드에서 해당 옵션을 찾아 실행해주세요.
					</li>
					<li>
						<strong>
							Q: 사용자 정의 도메인 연결 후 SSL 인증서 발급에 실패해요.
						</strong>
						<br />
						A: DNS 설정이 올바르게 전파되었는지 확인해주세요. 일반적으로 DNS
						변경 사항이 전 세계로 전파되는 데에는 몇 시간에서 최대 48시간까지
						소요될 수 있습니다. 또한, CAA 레코드 설정이 Let's Encrypt와 같은
						인증 기관의 발급을 허용하는지 확인해보세요.
					</li>
					<li>
						<strong>Q: 리소스 사용량이 너무 높은데 어떻게 해야 하나요?</strong>
						<br />
						A: 먼저 앱의 코드를 최적화하여 불필요한 리소스 사용을 줄이는 것을
						권장합니다. 이후, VIBE 앱의 리소스 할당량을 늘리거나 자동 확장
						기능을 사용하는 것을 고려해보세요. 모니터링 도구를 통해 어떤
						부분에서 리소스 병목이 발생하는지 분석하는 것이 중요합니다.
					</li>
				</ul>
				<p>
					더 자세한 지원이 필요하시면,{" "}
					<Link
						href="/docs/getting-started/introduction#커뮤니티-및-지원"
						className="text-pink-400 hover:underline"
					>
						VIBE 커뮤니티 포럼이나 지원 채널
					</Link>
					을 이용해 문의해주세요.
				</p>
			</section>
		</div>
	);
};
export default AdvancedConfigurationPage;
