import Link from "next/link";
import {
	FiArrowRight,
	FiBookOpen,
	FiEye,
	FiEyeOff,
	FiSettings,
	FiShield,
	FiUsers,
} from "react-icons/fi";

export const dynamic = "force-static";

const VisibilityPage = () => {
	return (
		<article className="prose prose-invert max-w-none prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300">
			<h1 id="visibility-title">VIBE 앱 공개 범위 설정: 누구와 공유할까요?</h1>
			<p className="lead">
				VIBE 앱의 공개 범위 설정을 통해 여러분의 프로젝트를 누가 보고, 사용하고,
				복제(fork)할 수 있는지 정밀하게 제어할 수 있습니다. 프로젝트의 성격과
				목적에 맞춰 적절한 공개 범위를 선택하는 것은 매우 중요합니다.
			</p>

			<h2 id="what-is-app-visibility">VIBE 앱 공개 범위란?</h2>
			<p>
				VIBE 앱의 공개 범위는 여러분의 코드, 실행 중인 앱, 그리고 프로젝트 관련
				정보에 대한 접근 권한을 정의합니다. VIBE는 기본적으로 유연한 공개 범위
				옵션을 제공하여, 개인적인 실험부터 대규모 오픈소스 프로젝트까지 다양한
				시나리오를 지원합니다.
			</p>

			<h2 id="visibility-options">공개 범위 옵션</h2>
			<div className="not-prose my-6 space-y-6">
				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<div className="flex items-center mb-3">
						<FiEyeOff className="w-8 h-8 text-red-400 mr-3 flex-shrink-0" />
						<h3 className="text-2xl font-semibold text-red-300">
							비공개 (Private)
						</h3>
					</div>
					<p className="text-gray-300 mb-2">
						비공개로 설정된 VIBE 앱은 앱 소유자와 명시적으로{" "}
						<Link href="/docs/vibe-apps/collaboration">초대받은 협업자</Link>
						만이 접근할 수 있습니다. 앱의 코드, 실행 모습, 관련 정보 모두
						외부에는 노출되지 않습니다.
					</p>
					<strong className="text-purple-300">적합한 경우:</strong>
					<ul className="list-disc list-inside mt-2 ml-4 text-gray-400 text-sm space-y-1">
						<li>개인적인 학습 및 실험 프로젝트</li>
						<li>아직 개발 초기 단계로 외부에 공개하고 싶지 않은 앱</li>
						<li>회사 내부용 도구나 프로토타입</li>
						<li>민감한 정보를 다루는 애플리케이션</li>
					</ul>
					<p className="text-xs text-gray-500 mt-3">
						* VIBE의 특정 플랜에 따라 비공개 앱 생성 개수에 제한이 있을 수
						있습니다. (가격 정책 확인 필요)
					</p>
				</div>

				<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
					<div className="flex items-center mb-3">
						<FiEye className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" />
						<h3 className="text-2xl font-semibold text-green-300">
							공개 (Public)
						</h3>
					</div>
					<p className="text-gray-300 mb-2">
						공개로 설정된 VIBE 앱은 VIBE 플랫폼 사용자뿐만 아니라 인터넷을
						사용하는 모든 사람이 앱의 코드, 실행 결과(만약 웹 앱이라면),
						프로젝트 설명 등을 볼 수 있습니다. 일반적으로 다른 사용자가 앱을
						자신의 계정으로 복제(fork)하여 수정하거나 확장하는 것도 허용됩니다.
					</p>
					<strong className="text-purple-300">적합한 경우:</strong>
					<ul className="list-disc list-inside mt-2 ml-4 text-gray-400 text-sm space-y-1">
						<li>오픈소스 프로젝트</li>
						<li>자신의 작업물을 공유하고 싶은 개발자 포트폴리오</li>
						<li>커뮤니티와 지식을 공유하고 기여를 받고 싶은 프로젝트</li>
						<li>교육적인 목적으로 예제 코드를 제공하는 경우</li>
					</ul>
				</div>

				{/* 향후 팀 또는 그룹 공유 기능이 생긴다면 아래와 같이 추가 가능 */}
				{/*
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <FiUsers className="w-8 h-8 text-blue-400 mr-3 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-blue-300">팀 전용 (Team-Only) / 그룹 공유 (Group Sharing)</h3>
          </div>
          <p className="text-gray-300 mb-2">
            (이 기능은 현재 VIBE에서 지원 예정이거나 특정 플랜에서 제공될 수 있습니다.)
            특정 VIBE 팀 또는 사용자 그룹의 멤버에게만 앱 접근 권한을 부여합니다.
            회사 내 특정 부서나 스터디 그룹 등 제한된 범위의 사용자들과 프로젝트를 공유하고 협업할 때 유용합니다.
          </p>
        </div>
        */}
			</div>

			<h2 id="how-to-set-visibility">공개 범위 설정 방법</h2>
			<p>
				VIBE 앱의 공개 범위는 앱 작업 공간 내의 설정 메뉴 또는 VIBE 대시보드에서
				프로젝트별로 쉽게 변경할 수 있습니다.
			</p>
			<ol className="list-decimal list-inside my-4 space-y-2 pl-4 marker:text-purple-400 marker:font-semibold">
				<li>VIBE 앱 작업 공간으로 이동합니다.</li>
				<li>
					상단 바 또는 사이드바 메뉴에서{" "}
					<FiSettings className="inline w-5 h-5 mr-1" />
					"설정" 또는 "프로젝트 설정"을 찾습니다.
				</li>
				<li>
					"공개 범위" 또는 "Visibility" 섹션에서 원하는 옵션(비공개 또는 공개)을
					선택합니다.
				</li>
				<li>변경 사항을 저장합니다.</li>
			</ol>
			{/* 여기에 공개 범위 설정 UI 예시 이미지 추가 가능 */}

			<h2 id="considerations-when-changing-visibility">
				공개 범위 변경 시 고려사항
			</h2>
			<ul className="list-disc list-inside my-4 space-y-2 pl-4 text-gray-300">
				<li>
					<strong>비공개에서 공개로 변경 시:</strong>
					앱을 공개하기 전에 코드 내에 API 키, 비밀번호, 개인 식별 정보 등
					민감한 데이터가 포함되어 있지 않은지 반드시 확인하세요. 주석이나
					히스토리에도 민감 정보가 남아있지 않도록 주의해야 합니다.
				</li>
				<li>
					<strong>공개에서 비공개로 변경 시:</strong>
					이미 앱이 공개되어 다른 사용자가 코드를 보거나 복제했을 수 있습니다.
					비공개로 전환하더라도 이전에 접근했던 사용자들의 로컬 복사본까지
					제어할 수는 없습니다.
				</li>
				<li>
					<strong className="flex items-center">
						<FiBookOpen className="inline w-5 h-5 mr-2 text-purple-300" />
						라이선스 (공개 앱의 경우):
					</strong>
					앱을 공개할 경우, 다른 사람들이 여러분의 코드를 어떻게 사용, 수정,
					배포할 수 있는지 명시하는 오픈소스 라이선스(예: MIT, Apache 2.0,
					GPL)를 포함하는 것이 좋습니다. 프로젝트 루트에 <code>LICENSE</code>{" "}
					파일을 추가하여 명시할 수 있습니다.
				</li>
			</ul>

			<div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold text-purple-300 mb-3">
					다음으로 알아볼 내용
				</h3>
				<p className="text-gray-300 mb-4">
					앱의 공개 범위를 설정했다면, 이제 더 고급 설정이나 앱을 외부로
					공유하는 방법을 살펴보세요.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/docs/vibe-apps/advanced-configuration" // 고급 설정 페이지 경로 (추후 생성)
						className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transition-colors group"
					>
						고급 설정 살펴보기
						<FiArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs/vibe-apps/app-embed" // 앱 임베드 페이지 경로 (추후 생성)
						className="inline-flex items-center px-6 py-3 border border-purple-500 hover:bg-purple-500/20 text-purple-300 font-semibold rounded-md shadow-md transition-colors group"
					>
						웹사이트에 앱 임베드하기
						<FiArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default VisibilityPage;
