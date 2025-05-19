import Link from "next/link";

// 이 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

const DeploymentsOverviewPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-6 text-purple-400">
				VIBE 배포: 아이디어를 세상에 선보이는 가장 빠른 길
			</h1>
			<p className="text-lg mb-8">
				훌륭한 애플리케이션을 개발하는 것만큼 중요한 것은 사용자들이 실제로
				경험할 수 있도록 안정적이고 효율적으로 배포하는 것입니다. VIBE는 복잡한
				배포 과정을 단순화하고 자동화하여, 개발자 여러분이 코드 작성에 더욱
				집중하고 완성된 프로젝트를 손쉽게 세상에 선보일 수 있도록 지원합니다.
				VIBE를 통한 배포의 모든 것을 알아보세요.
			</p>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					배포란 무엇이며 왜 중요한가요?
				</h2>
				<p className="mb-4">
					배포(Deployment)는 개발된 소프트웨어나 애플리케이션을 사용자가
					접근하여 사용할 수 있는 실제 운영 환경(서버, 클라우드 플랫폼 등)으로
					옮기고 실행시키는 과정을 의미합니다. 효과적인 배포 전략은 다음과 같은
					이점을 제공합니다:
				</p>
				<ul className="list-disc pl-6 mb-6 space-y-3">
					<li>
						<strong>빠른 시장 출시:</strong> 자동화되고 간소화된 배포 프로세스는
						새로운 기능이나 업데이트를 사용자에게 신속하게 전달할 수 있게
						합니다.
					</li>
					<li>
						<strong>안정적인 서비스 운영:</strong> 체계적인 배포 파이프라인은
						배포 중 발생할 수 있는 오류를 최소화하고, 문제 발생 시 빠른 롤백을
						가능하게 하여 서비스 안정성을 높입니다.
					</li>
					<li>
						<strong>효율적인 리소스 활용:</strong> 배포 대상 환경에 맞게
						애플리케이션을 최적화하여 서버 리소스를 효율적으로 사용하고 비용을
						절감할 수 있습니다.
					</li>
					<li>
						<strong>개발 생산성 향상:</strong> 반복적이고 수동적인 배포 작업을
						자동화함으로써 개발자는 핵심적인 개발 업무에 더 많은 시간을 할애할
						수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					VIBE를 통한 배포의 이점
				</h2>
				<p className="mb-4">
					VIBE 작업 공간과 통합된 배포 기능은 개발부터 배포까지의 과정을
					매끄럽게 연결하여 사용자에게 다음과 같은 특별한 이점을 제공합니다:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							1. 원클릭 배포
						</h4>
						<p className="text-sm">
							VIBE 작업 공간 내에서 몇 번의 클릭만으로 개발된 애플리케이션을
							VIBE 자체 호스팅 플랫폼 또는 연결된 외부 클라우드 서비스로 즉시
							배포할 수 있습니다.
						</p>
						{/* TODO: VIBE 원클릭 배포 UI 스크린샷 */}
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							2. 다양한 배포 대상 지원 (예정 포함)
						</h4>
						<p className="text-sm">
							VIBE 호스팅, AWS, Google Cloud, Azure 등 주요 클라우드 플랫폼 및
							Docker, Kubernetes와 같은 컨테이너 환경으로의 배포를 지원하거나
							지원할 예정입니다.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							3. 자동화된 CI/CD 파이프라인
						</h4>
						<p className="text-sm">
							VIBE 에이전트와 Git 연동을 통해 코드 커밋 시 자동으로 빌드,
							테스트, 배포가 이루어지는 CI/CD(지속적 통합/지속적 배포)
							파이프라인 구축을 지원합니다.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							4. 환경 구성 및 관리 용이성
						</h4>
						<p className="text-sm">
							배포 환경별(개발, 스테이징, 운영) 설정 관리가 용이하며, 환경 변수,
							도메인 설정 등을 VIBE 내에서 통합적으로 관리할 수 있습니다.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							5. 배포 모니터링 및 로그 확인
						</h4>
						<p className="text-sm">
							배포 상태를 실시간으로 모니터링하고, 배포 과정 및 애플리케이션
							실행 로그를 VIBE 대시보드에서 쉽게 확인할 수 있습니다.
						</p>
						{/* TODO: VIBE 배포 대시보드 및 로그 확인 화면 스크린샷 */}
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow">
						<h4 className="font-semibold text-lg text-purple-300 mb-2">
							6. 간편한 롤백 기능
						</h4>
						<p className="text-sm">
							배포 후 문제가 발생했을 경우, 이전의 안정적인 버전으로 쉽게 롤백할
							수 있는 기능을 제공하여 서비스 중단을 최소화합니다.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					일반적인 배포 프로세스 in VIBE
				</h2>
				<p className="mb-4">
					VIBE에서 애플리케이션을 배포하는 일반적인 과정은 다음과 같습니다
					(선택한 배포 대상 및 설정에 따라 일부 차이가 있을 수 있습니다):
				</p>
				<ol className="list-decimal pl-6 mb-6 space-y-3">
					<li>
						<strong>개발 완료 및 테스트:</strong> VIBE 작업 공간에서
						애플리케이션 개발을 완료하고, 로컬 환경 또는 VIBE 앱 미리보기를 통해
						충분히 테스트합니다.
					</li>
					<li>
						<strong>배포 설정 구성:</strong>
						<ul className="list-disc pl-6 mt-2 space-y-1">
							<li>배포 대상 선택 (예: VIBE 호스팅, AWS S3, Docker Hub 등)</li>
							<li>빌드 명령어 및 환경 변수 설정</li>
							<li>도메인 및 SSL 인증서 설정 (필요시)</li>
							<li>리소스 할당 및 지역 선택 (해당되는 경우)</li>
						</ul>
						(자세한 내용은{" "}
						<Link
							href="/docs/deployments/advanced-configuration"
							className="text-pink-400 hover:underline"
						>
							고급 배포 설정 문서
						</Link>
						를 참고하세요)
					</li>
					<li>
						<strong>배포 실행:</strong> VIBE 작업 공간의 배포 메뉴 또는 VIBE
						CLI를 통해 배포 명령을 실행합니다. CI/CD가 설정된 경우 Git push를
						통해 자동으로 실행될 수도 있습니다.
					</li>
					<li>
						<strong>빌드 및 패키징:</strong> VIBE가 애플리케이션 소스 코드를
						가져와 빌드하고, 배포 대상 환경에 적합한 형태로 패키징합니다.
					</li>
					<li>
						<strong>배포 및 실행:</strong> 패키징된 애플리케이션을 지정된 배포
						대상으로 전송하고 실행시킵니다.
					</li>
					<li>
						<strong>상태 확인 및 모니터링:</strong> 배포가 성공적으로
						완료되었는지 확인하고, VIBE 대시보드를 통해 애플리케이션 상태와
						로그를 모니터링합니다.
					</li>
				</ol>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다양한 배포 유형 지원
				</h2>
				<p className="mb-4">
					VIBE는 프로젝트의 특성과 요구사항에 맞는 다양한 배포 유형을 지원하는
					것을 목표로 합니다. 자세한 내용은{" "}
					<Link
						href="/docs/deployments/deployment-types"
						className="text-pink-400 hover:underline"
					>
						배포 유형 문서
					</Link>
					에서 확인할 수 있습니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>정적 웹사이트 배포 (Static Site Deployment)</li>
					<li>서버 사이드 렌더링(SSR) 애플리케이션 배포</li>
					<li>컨테이너 기반 애플리케이션 배포 (Docker)</li>
					<li>서버리스 기능 배포 (Serverless Functions)</li>
					<li>데이터베이스 및 백엔드 서비스 배포 (향후 지원 예정)</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다음 단계: 배포 시작하기
				</h2>
				<p className="mb-4">
					VIBE와 함께라면 복잡했던 배포 과정이 한결 쉬워집니다. 지금 바로
					여러분의 프로젝트를 세상에 선보이세요!
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<Link
							href="/docs/getting-started/quickstarts"
							className="text-pink-400 hover:underline"
						>
							빠른 시작 가이드: 첫 프로젝트 배포하기
						</Link>
					</li>
					<li>
						<Link
							href="/docs/deployments/deployment-types"
							className="text-pink-400 hover:underline"
						>
							다양한 배포 유형 알아보기
						</Link>
					</li>
					<li>
						<Link
							href="/docs/deployments/advanced-configuration"
							className="text-pink-400 hover:underline"
						>
							고급 배포 설정 마스터하기
						</Link>
					</li>
					<li>
						<Link
							href="/docs/vibe-ai/vibe-agent#배포-자동화"
							className="text-pink-400 hover:underline"
						>
							VIBE 에이전트를 활용한 CI/CD 구축
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};
export default DeploymentsOverviewPage;
