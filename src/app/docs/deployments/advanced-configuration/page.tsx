import Link from "next/link";

const DeploymentsAdvancedConfigPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 배포 고급 설정: 전문가처럼 배포 환경 제어하기
			</h1>
			<p className="mb-8 text-lg">
				VIBE는 기본적인 배포 기능을 넘어, 사용자가 자신의 애플리케이션
				요구사항에 맞게 배포 환경을 세밀하게 제어할 수 있도록 다양한 고급 설정
				옵션을 제공합니다. 환경 변수 관리부터 사용자 정의 도메인 연결, 빌드
				최적화, 보안 강화, 모니터링 및 로깅 설정에 이르기까지, VIBE의 고급 배포
				설정을 통해 애플리케이션의 성능, 안정성, 보안을 한층 더 끌어올릴 수
				있습니다.
			</p>

			{/* 1. 환경 변수 관리 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					1. 환경 변수 (Environment Variables)
				</h2>
				<p className="mb-4">
					애플리케이션의 동작을 제어하는 중요한 설정값들(예: API 키,
					데이터베이스 접속 정보, 외부 서비스 URL, 모드 설정 등)은 코드에 직접
					하드코딩하는 대신 환경 변수를 통해 관리하는 것이 안전하고
					효율적입니다. VIBE는 개발, 스테이징, 운영 등 각 배포 환경별로 서로
					다른 환경 변수 값을 설정하고 관리할 수 있는 직관적인 인터페이스를
					제공합니다.
				</p>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					주요 기능 및 설정 방법:
				</h4>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>환경별 변수 설정:</strong> VIBE 대시보드 또는 설정
						파일(`vibe.config.js` 또는 유사 파일)을 통해 각 배포 환경(예:
						`development`, `staging`, `production`)에 맞는 환경 변수 값을 지정할
						수 있습니다.
					</li>
					<li>
						<strong>보안 변수 (Secrets):</strong> API 토큰이나 비밀번호와 같이
						민감한 정보는 암호화되어 안전하게 저장되며, 빌드 시점이나 런타임에만
						애플리케이션에 주입됩니다.
					</li>
					<li>
						<strong>UI를 통한 손쉬운 추가/수정/삭제:</strong> VIBE 배포 설정
						화면에서 GUI를 통해 환경 변수를 편리하게 관리할 수 있습니다.
						{/* TODO: VIBE 환경 변수 설정 UI 스크린샷 */}
					</li>
					<li>
						<strong>파일 기반 설정 지원 (예정):</strong> `.env` 파일 또는 특정
						설정 파일을 프로젝트에 포함하여 환경 변수를 정의하고, VIBE가 이를
						자동으로 인식하여 적용하는 기능을 지원할 수 있습니다.
					</li>
					<li>
						<strong>빌드 시점과 런타임 변수:</strong> 빌드 과정에서만 사용되는
						변수(예: `NEXT_PUBLIC_*` for Next.js)와 애플리케이션 실행 중에
						사용되는 변수를 구분하여 관리할 수 있습니다.
					</li>
				</ul>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">팁:</h4>
				<ul className="list-disc space-y-1 pl-5 text-sm">
					<li>
						민감한 정보는 절대 코드에 직접 작성하지 말고 환경 변수(특히 보안
						변수)를 사용하세요.
					</li>
					<li>
						환경 변수 이름은 일관된 규칙(예: 대문자와 언더스코어 사용)으로
						명명하여 가독성을 높이세요.
					</li>
				</ul>
			</section>

			{/* 2. 사용자 정의 도메인 (Custom Domains) */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					2. 사용자 정의 도메인 (Custom Domains)
				</h2>
				<p className="mb-4">
					VIBE를 통해 배포된 애플리케이션에 기본으로 제공되는 `*.vibe.app` (또는
					유사) 형태의 도메인 대신, 사용자 소유의 고유한 도메인(예:
					`www.mydomain.com`)을 연결하여 브랜드 이미지를 강화하고 전문성을 높일
					수 있습니다. VIBE는 사용자 정의 도메인 설정 및 SSL/TLS 인증서 자동
					발급/갱신 기능을 간편하게 제공합니다.
				</p>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					설정 절차:
				</h4>
				<ol className="mb-4 list-decimal space-y-2 pl-5 text-sm">
					<li>
						<strong>VIBE에 도메인 추가:</strong> VIBE 배포 설정에서 사용하고자
						하는 사용자 정의 도메인을 입력합니다.
					</li>
					<li>
						<strong>DNS 레코드 설정:</strong> 도메인 등록기관(예: GoDaddy,
						Namecheap, Cloudflare 등)의 DNS 관리 페이지에서 VIBE가 안내하는
						CNAME 또는 A 레코드를 설정하여 도메인이 VIBE 서버를 가리키도록
						합니다.
					</li>
					<li>
						<strong>VIBE에서의 확인 및 활성화:</strong> DNS 변경 사항이 전파된
						후(몇 분에서 최대 48시간 소요 가능), VIBE가 도메인 소유권을 확인하고
						자동으로 SSL 인증서를 발급하여 HTTPS를 활성화합니다.
						{/* TODO: VIBE 사용자 정의 도메인 설정 및 DNS 레코드 안내 UI 스크린샷 */}
					</li>
					<li>
						<strong>루트 도메인 및 서브도메인 지원:</strong> `mydomain.com`과
						같은 루트 도메인과 `blog.mydomain.com`과 같은 서브도메인 모두 연결
						가능합니다.
					</li>
					<li>
						<strong>와일드카드 도메인 (향후 지원 가능성):</strong>{" "}
						`*.mydomain.com` 형태의 와일드카드 도메인 지원을 통해 유연한
						서브도메인 관리가 가능해질 수 있습니다.
					</li>
				</ol>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					SSL/TLS 인증서:
				</h4>
				<p className="mb-2 text-sm">
					VIBE는 Let's Encrypt와 같은 인증 기관을 통해 사용자 정의 도메인에 대한
					SSL/TLS 인증서를 <strong>무료로 자동 발급하고 주기적으로 갱신</strong>
					해줍니다. 이를 통해 모든 트래픽이 HTTPS로 암호화되어 보안이 강화되며,
					사용자는 복잡한 인증서 관리 부담에서 벗어날 수 있습니다.
				</p>
			</section>

			{/* 3. 빌드 설정 커스터마이징 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					3. 빌드 설정 커스터마이징
				</h2>
				<p className="mb-4">
					VIBE는 일반적인 프레임워크와 프로젝트 구조에 대해 자동으로 최적의 빌드
					설정을 감지하지만, 때로는 프로젝트의 특정 요구에 맞춰 빌드 명령어나
					환경을 직접 지정해야 할 필요가 있습니다.
				</p>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					주요 설정 항목:
				</h4>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>프레임워크 프리셋:</strong> Next.js, React (Create React
						App), Vue, Angular, Svelte, Gatsby, Hugo 등 다양한 프레임워크에 대한
						사전 설정된 빌드 환경을 제공하여 초기 설정을 간소화합니다.
					</li>
					<li>
						<strong>루트 디렉토리:</strong> 프로젝트의 소스 코드가 위치한 루트
						디렉토리를 지정합니다. (모노레포의 경우 특정 패키지 폴더 지정 가능)
					</li>
					<li>
						<strong>빌드 명령어:</strong> 애플리케이션을 빌드하기 위해 실행해야
						하는 셸 명령어를 직접 입력합니다. (예: `npm run build`, `yarn
						build`, `hugo`)
					</li>
					<li>
						<strong>출력 디렉토리:</strong> 빌드 결과물(배포될 정적 파일 또는
						서버 빌드 파일)이 생성되는 디렉토리 경로를 지정합니다. (예: `dist`,
						`build`, `public`, `.next`)
					</li>
					<li>
						<strong>설치 명령어:</strong> 빌드 전에 프로젝트 의존성을 설치하기
						위한 명령어를 지정합니다. (예: `npm install`, `yarn install`)
					</li>
					<li>
						<strong>Node.js 버전 선택:</strong> 애플리케이션 빌드 및 실행에
						필요한 특정 Node.js 버전을 선택할 수 있습니다.
					</li>
					<li>
						<strong>빌드 캐싱:</strong> 이전 빌드의 결과물을 캐싱하여 다음 빌드
						시간을 단축시키는 기능을 제공할 수 있습니다.
					</li>
				</ul>
				{/* TODO: VIBE 빌드 설정 커스터마이징 UI 스크린샷 */}
			</section>

			{/* 4. 리소스 할당 및 확장 설정 (Scaling) */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					4. 리소스 할당 및 확장 설정 (Scaling)
				</h2>
				<p className="mb-4">
					SSR 애플리케이션이나 컨테이너 기반 배포의 경우, 애플리케이션의 성능과
					안정성을 위해 적절한 컴퓨팅 리소스(CPU, 메모리)를 할당하고, 트래픽
					변화에 유연하게 대응할 수 있는 확장 전략이 중요합니다. VIBE는 사용량
					기반 또는 설정 기반의 리소스 할당 및 오토 스케일링 옵션을 제공할 수
					있습니다 (플랜 또는 배포 대상에 따라 다름).
				</p>
				<h4 className="mb-2 text-lg font-semibold text-purple-200">
					주요 고려사항:
				</h4>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>리소스 플랜 선택:</strong> 애플리케이션의 예상 트래픽과
						리소스 요구량에 맞는 적절한 컴퓨팅 인스턴스 유형 또는 리소스 플랜을
						선택합니다.
					</li>
					<li>
						<strong>수동 스케일링:</strong> 필요한 인스턴스(컨테이너) 수를 직접
						지정하여 고정된 리소스를 할당합니다.
					</li>
					<li>
						<strong>자동 스케일링 (Auto Scaling):</strong> CPU 사용률, 메모리
						사용량, 동시 요청 수 등의 지표를 기준으로 인스턴스 수를 자동으로
						늘리거나 줄여 트래픽 변동에 대응하고 비용을 최적화합니다. (VIBE 자체
						호스팅 또는 외부 클라우드 플랫폼 기능 연동)
					</li>
					<li>
						<strong>최소/최대 인스턴스 수 설정:</strong> 오토 스케일링 시 유지할
						최소 인스턴스 수와 확장될 수 있는 최대 인스턴스 수를 지정합니다.
					</li>
					<li>
						<strong>지역(Region) 선택:</strong> 주요 사용자층과 가까운 지역에
						애플리케이션을 배포하여 지연 시간을 줄이고 응답 속도를 개선할 수
						있습니다.
					</li>
				</ul>
				{/* TODO: VIBE 리소스 및 스케일링 설정 UI 스크린샷 */}
			</section>

			{/* 5. 보안 설정 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					5. 보안 설정
				</h2>
				<p className="mb-4">
					애플리케이션과 사용자 데이터를 보호하기 위한 강력한 보안 설정은
					필수적입니다. VIBE는 다양한 보안 기능을 통해 안전한 배포 환경을
					구축하도록 돕습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>자동 HTTPS (SSL/TLS):</strong> 앞서 언급된 바와 같이, 사용자
						정의 도메인에 대해 무료 SSL/TLS 인증서를 자동으로 발급하고 관리하여
						모든 통신을 암호화합니다.
					</li>
					<li>
						<strong>DDoS 방어:</strong> 기본적인 DDoS(분산 서비스 거부) 공격
						방어 기능을 제공하여 서비스 안정성을 높입니다. (VIBE 호스팅 또는
						연동된 CDN/클라우드 서비스 통해 제공)
					</li>
					<li>
						<strong>웹 방화벽 (WAF) (향후 지원 가능성):</strong> SQL 인젝션,
						XSS(크로스 사이트 스크립팅) 등 일반적인 웹 공격을 차단하는 웹 방화벽
						기능을 제공할 수 있습니다.
					</li>
					<li>
						<strong>IP 기반 접근 제어:</strong> 특정 IP 주소 또는 대역에서의
						접근을 허용하거나 차단하는 기능을 설정할 수 있습니다.
					</li>
					<li>
						<strong>HTTP 헤더 설정:</strong> 보안 관련 HTTP 헤더(예:
						`Content-Security-Policy`, `Strict-Transport-Security`)를 사용자
						정의하여 웹 취약점을 완화할 수 있습니다.
					</li>
					<li>
						<strong>비밀번호 보호 (Staging/Preview):</strong> 개발 중이거나 내부
						테스트용 배포 환경에 간단한 비밀번호를 설정하여 무단 접근을 방지할
						수 있습니다.
					</li>
				</ul>
			</section>

			{/* 6. 모니터링 및 로깅 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					6. 모니터링 및 로깅
				</h2>
				<p className="mb-4">
					배포된 애플리케이션의 상태를 지속적으로 모니터링하고 발생하는 로그를
					효과적으로 관리하는 것은 문제 해결과 성능 최적화에 매우 중요합니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>실시간 배포 로그:</strong> VIBE 대시보드에서 빌드 및 배포
						과정의 실시간 로그를 확인할 수 있어 문제 발생 시 원인을 빠르게
						파악할 수 있습니다.
					</li>
					<li>
						<strong>애플리케이션 런타임 로그:</strong> 실행 중인
						애플리케이션에서 발생하는 로그(stdout, stderr)를 수집하고 조회할 수
						있는 기능을 제공합니다. 로그 검색 및 필터링 기능도 지원될 수
						있습니다.
						{/* TODO: VIBE 런타임 로그 조회 UI 스크린샷 */}
					</li>
					<li>
						<strong>성능 모니터링 (APM) (향후 통합 가능성):</strong> 응답 시간,
						처리량, 오류율 등 주요 성능 지표를 시각화하고, 병목 지점을 식별하는
						APM(Application Performance Monitoring) 도구와의 통합을 지원할 수
						있습니다.
					</li>
					<li>
						<strong>알림 설정:</strong> 특정 오류 발생 또는 성능 임계치 초과 시
						이메일, Slack 등으로 알림을 받아 신속하게 대응할 수 있는 기능을
						제공할 수 있습니다.
					</li>
				</ul>
			</section>

			{/* 7. 백업 및 롤백 전략 */}
			<section className="mb-12 rounded-lg bg-gray-800 p-6 shadow-lg">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					7. 백업 및 롤백 전략
				</h2>
				<p className="mb-4">
					만일의 사태에 대비하여 애플리케이션 데이터와 설정을 정기적으로
					백업하고, 문제 발생 시 이전의 안정적인 상태로 빠르게 복구(롤백)할 수
					있는 전략이 필요합니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
					<li>
						<strong>자동 배포 이력 관리:</strong> VIBE는 이전 배포 버전들을
						자동으로 기록하고 관리하여, 클릭 한 번으로 특정 이전 버전으로 쉽게
						롤백할 수 있는 기능을 제공합니다.
					</li>
					<li>
						<strong>데이터베이스 백업 (외부 서비스 연동):</strong>{" "}
						애플리케이션이 데이터베이스를 사용하는 경우, 해당 데이터베이스
						서비스 제공업체(예: AWS RDS, MongoDB Atlas)의 백업 기능을
						활용하거나, VIBE가 스크립트 실행 등을 통해 백업을 지원할 수
						있습니다.
					</li>
					<li>
						<strong>구성 백업:</strong> 배포 설정, 환경 변수 등 중요한 구성
						정보는 VIBE 플랫폼 내에 안전하게 백업됩니다.
					</li>
					<li>
						<strong>수동 스냅샷 (향후 지원 가능성):</strong> 특정 시점의
						애플리케이션 상태(코드, 데이터, 설정 포함)를 스냅샷으로 저장하고
						필요시 복원하는 기능을 제공할 수 있습니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					결론: VIBE로 배포 전문가 되기
				</h2>
				<p className="mb-4">
					VIBE의 고급 배포 설정은 단순한 배포를 넘어, 애플리케이션의 특성과
					비즈니스 요구에 최적화된 강력하고 안정적인 운영 환경을 구축할 수
					있도록 지원합니다. 이러한 기능들을 적극적으로 활용하여 배포 과정을
					완벽하게 제어하고, 사용자에게 최상의 애플리케이션 경험을 제공해보세요.
				</p>
				<p>
					더 자세한 정보나 특정 기능에 대한 도움이 필요하시면 언제든지{" "}
					<Link
						href="/docs/deployments/overview"
						className="text-pink-400 hover:underline"
					>
						VIBE 배포 개요
					</Link>
					나
					<Link
						href="/docs/deployments/deployment-types"
						className="text-pink-400 hover:underline"
					>
						배포 유형
					</Link>{" "}
					문서를 다시 확인하시거나 VIBE 커뮤니티에 문의해주시기 바랍니다.
				</p>
			</section>
		</div>
	);
};
export default DeploymentsAdvancedConfigPage;
