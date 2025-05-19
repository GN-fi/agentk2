import Link from "next/link";
import {
	FiArrowRight,
	FiCheckCircle,
	FiEye,
	FiGitMerge,
	FiMessageSquare,
	FiShare2,
	FiUserPlus,
	FiUsers,
} from "react-icons/fi";

export const dynamic = "force-static";

const CollaborationPage = () => {
	return (
		<article className="prose prose-invert prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300 max-w-none">
			<h1 id="collaboration-title">VIBE 앱에서 협업하기: 함께 만드는 즐거움</h1>
			<p className="lead">
				VIBE는 혼자만의 개발 도구를 넘어, 팀원들과 함께 아이디어를 현실로 만들
				수 있는 강력한 협업 플랫폼입니다. 실시간 코드 편집, 내장 채팅, 손쉬운
				프로젝트 공유 기능을 통해 지리적 제약 없이 원활한 팀워크를 경험하고 개발
				효율성을 극대화하세요.
			</p>

			<h2 id="why-collaborate-on-vibe">왜 VIBE에서 협업해야 할까요?</h2>
			<p>
				VIBE의 협업 기능은 개발 과정을 더욱 유연하고 생산적으로 만들어줍니다. 더
				이상 코드를 주고받거나, 버전 충돌로 시간을 허비하거나, 소통의 어려움을
				겪을 필요가 없습니다. 모든 것이 하나의 통합된 환경에서 실시간으로
				이루어집니다.
			</p>
			<ul className="not-prose my-6 list-none space-y-4">
				<li className="flex items-start rounded-lg bg-gray-800 p-4 shadow">
					<FiUsers className="mt-1 mr-4 h-10 w-10 flex-shrink-0 text-purple-400" />
					<div>
						<h3 className="text-lg font-semibold text-purple-300">
							실시간 동시 편집 (Multiplayer)
						</h3>
						<p className="text-sm text-gray-300">
							여러 명이 동시에 같은 파일을 열고 코드를 수정하세요. 각자의 커서와
							변경 사항이 실시간으로 반영되어 마치 한 공간에서 작업하는 듯한
							경험을 제공합니다. 페어 프로그래밍이나 코드 리뷰에 이상적입니다.
						</p>
					</div>
				</li>
				<li className="flex items-start rounded-lg bg-gray-800 p-4 shadow">
					<FiShare2 className="mt-1 mr-4 h-10 w-10 flex-shrink-0 text-purple-400" />
					<div>
						<h3 className="text-lg font-semibold text-purple-300">
							간편한 프로젝트 공유 및 초대
						</h3>
						<p className="text-sm text-gray-300">
							이메일 주소나 VIBE 사용자 이름만으로 팀원을 프로젝트에 쉽게 초대할
							수 있습니다. 읽기 전용 또는 편집 가능 등 세밀한 권한 설정도
							가능하여 프로젝트 접근을 안전하게 관리할 수 있습니다.
						</p>
					</div>
				</li>
				<li className="flex items-start rounded-lg bg-gray-800 p-4 shadow">
					<FiMessageSquare className="mt-1 mr-4 h-10 w-10 flex-shrink-0 text-purple-400" />
					<div>
						<h3 className="text-lg font-semibold text-purple-300">
							내장된 실시간 채팅
						</h3>
						<p className="text-sm text-gray-300">
							VIBE 작업 공간 내에서 팀원들과 즉시 소통하세요. 코드에 대한 질문,
							아이디어 논의, 작업 조율 등을 별도의 메신저 없이 바로 해결할 수
							있어 집중력을 유지하고 효율성을 높입니다.
						</p>
					</div>
				</li>
				<li className="flex items-start rounded-lg bg-gray-800 p-4 shadow">
					<FiGitMerge className="mt-1 mr-4 h-10 w-10 flex-shrink-0 text-purple-400" />
					<div>
						<h3 className="text-lg font-semibold text-purple-300">
							통합된 버전 관리 (Git)
						</h3>
						<p className="text-sm text-gray-300">
							VIBE는 Git을 기반으로 한 강력한 버전 관리 기능을 제공합니다.
							팀원들의 변경 사항을 체계적으로 추적하고, 브랜치를 활용하여
							안전하게 기능을 개발하며, 필요시 이전 버전으로 쉽게 되돌릴 수
							있습니다. (자세한 내용은{" "}
							<Link href="/docs/vibe-workspace/version-control">
								버전 관리 문서
							</Link>{" "}
							참고)
						</p>
					</div>
				</li>
			</ul>

			<h2 id="how-to-start-collaboration">협업 시작하기: 단계별 가이드</h2>
			<p>VIBE에서 팀원들과 협업을 시작하는 방법은 매우 간단합니다.</p>
			<ol className="my-4 list-inside list-decimal space-y-3 pl-4 marker:font-semibold marker:text-purple-400">
				<li>
					<strong>프로젝트 소유자가 협업자 초대:</strong>
					<ul className="mt-1 ml-4 list-inside list-disc space-y-1 text-sm text-gray-300">
						<li>
							VIBE 작업 공간 상단에 있는{" "}
							<FiUserPlus className="mr-1 inline h-4 w-4" /> "초대" 버튼을
							클릭합니다.
						</li>
						<li>
							초대하고 싶은 팀원의 VIBE 이메일 주소 또는 사용자 이름을
							입력합니다.
						</li>
						<li>
							해당 팀원에게 부여할 권한(예: "편집 가능" 또는 "보기 가능")을
							선택합니다.
						</li>
						<li>"초대 보내기" 버튼을 클릭합니다.</li>
					</ul>
				</li>
				<li>
					<strong>초대받은 사용자가 프로젝트 접근:</strong>
					<ul className="mt-1 ml-4 list-inside list-disc space-y-1 text-sm text-gray-300">
						<li>
							초대받은 팀원은 VIBE 내 알림 또는 이메일을 통해 초대 사실을
							확인합니다.
						</li>
						<li>
							초대 링크를 클릭하거나 VIBE 대시보드에서 공유된 프로젝트를
							확인하여 작업 공간에 접속합니다.
						</li>
					</ul>
				</li>
				<li>
					<strong>실시간으로 함께 작업 시작:</strong>
					<ul className="mt-1 ml-4 list-inside list-disc space-y-1 text-sm text-gray-300">
						<li>
							이제 모든 팀원이 동일한 작업 공간에서 실시간으로 파일을 편집하고,
							변경 사항을 확인하며, 내장 채팅으로 소통할 수 있습니다.
						</li>
					</ul>
				</li>
			</ol>
			{/* 여기에 협업 초대 및 작업 화면 예시 이미지 추가 가능 */}

			<h2 id="tips-for-successful-collaboration">성공적인 협업을 위한 팁</h2>
			<ul className="my-4 list-inside list-disc space-y-2 pl-4 text-gray-300">
				<li>
					<FiCheckCircle className="mr-2 inline h-5 w-5 text-green-400" />
					<strong>명확한 역할 분담과 주기적인 소통:</strong> 누가 어떤 부분을
					담당하는지 명확히 하고, 정기적으로 진행 상황을 공유하여 오해를 줄이고
					효율성을 높입니다.
				</li>
				<li>
					<FiCheckCircle className="mr-2 inline h-5 w-5 text-green-400" />
					<strong>Git 브랜치 전략 적극 활용:</strong> 여러 기능을 동시에
					개발하거나 실험적인 작업을 할 때는 Git 브랜치를 사용하여 메인
					코드베이스를 안정적으로 유지합니다.
				</li>
				<li>
					<FiCheckCircle className="mr-2 inline h-5 w-5 text-green-400" />
					<strong>코드 리뷰 생활화:</strong> 팀원들이 작성한 코드를 서로
					검토하고 피드백을 주고받음으로써 코드의 질을 높이고 잠재적인 버그를
					사전에 방지할 수 있습니다.
				</li>
				<li>
					<FiCheckCircle className="mr-2 inline h-5 w-5 text-green-400" />
					<strong>VIBE의 모든 협업 기능 활용:</strong> 동시 편집뿐만 아니라
					채팅, 파일 공유, 버전 관리 등 VIBE가 제공하는 다양한 협업 도구를
					적극적으로 사용해보세요.
				</li>
			</ul>

			<div className="mt-10 rounded-lg bg-gray-800 p-6 shadow-md">
				<h3 className="mb-3 text-xl font-semibold text-purple-300">
					다음 단계
				</h3>
				<p className="mb-4 text-gray-300">
					VIBE의 강력한 협업 기능을 통해 팀 프로젝트를 한 단계
					업그레이드해보세요. 다음 문서들을 통해 VIBE 앱 관리에 대해 더 자세히
					알아보세요.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/docs/vibe-apps/visibility" // 공개 범위 설정 페이지 경로 (추후 생성)
						className="group inline-flex items-center rounded-md bg-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-purple-700"
					>
						앱 공개 범위 설정하기
						<FiArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs/vibe-workspace/version-control"
						className="group inline-flex items-center rounded-md border border-purple-500 px-6 py-3 font-semibold text-purple-300 shadow-md transition-colors hover:bg-purple-500/20"
					>
						Git으로 버전 관리하기
						<FiArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default CollaborationPage;
