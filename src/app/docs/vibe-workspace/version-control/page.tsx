import Link from "next/link";

export const dynamic = "force-dynamic";

const VersionControlPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 작업 공간: Git으로 스마트하게 버전 관리하기
			</h1>
			<p className="mb-8 text-lg">
				소프트웨어 개발에서 버전 관리는 프로젝트의 변경 이력을 체계적으로
				추적하고, 여러 개발자가 협업하며 발생할 수 있는 코드 충돌을 효과적으로
				관리하기 위한 필수적인 과정입니다. VIBE 작업 공간은 강력한 분산 버전
				관리 시스템인 Git을 핵심 기능으로 통합하여, 개발자 여러분이 코드의 모든
				버전을 안전하게 관리하고 효율적으로 협업할 수 있도록 지원합니다.
			</p>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					버전 관리, 왜 중요할까요?
				</h2>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>변경 이력 추적:</strong> 코드의 모든 변경 사항을 기록하여
						언제든지 특정 시점의 코드로 돌아가거나 변경 내용을 확인할 수
						있습니다.
					</li>
					<li>
						<strong>협업 효율성 증대:</strong> 여러 개발자가 동시에 작업하더라도
						각자의 변경 사항을 독립적으로 관리하고, 나중에 이를 병합(merge)하여
						충돌을 최소화할 수 있습니다.
					</li>
					<li>
						<strong>안정적인 릴리스 관리:</strong> 개발 버전, 테스트 버전, 운영
						버전 등 다양한 상태의 코드를 브랜치(branch)를 통해 효과적으로
						관리하고 안정적인 릴리스를 보장합니다.
					</li>
					<li>
						<strong>문제 해결 용이:</strong> 특정 기능 추가나 버그 수정이
						잘못되었을 경우, 이전 버전으로 쉽게 되돌리거나(revert) 문제의 원인이
						된 변경 사항을 빠르게 찾아낼 수 있습니다.
					</li>
					<li>
						<strong>코드 백업 및 복구:</strong> 원격 저장소(remote repository)를
						활용하여 코드를 안전하게 백업하고, 예기치 않은 상황 발생 시 쉽게
						복구할 수 있습니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					VIBE 작업 공간의 Git 통합 기능
				</h2>
				<p className="mb-4">
					VIBE는 Git의 강력한 기능들을 직관적인 사용자 인터페이스(UI)와 통합하여
					제공함으로써, Git 명령어에 익숙하지 않은 사용자도 쉽게 버전 관리를
					시작할 수 있도록 돕습니다. 물론, 숙련된 사용자는 내장 터미널을 통해
					모든 Git 명령어를 직접 사용할 수도 있습니다.
				</p>
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							1. 직관적인 Git UI
						</h4>
						<p className="text-sm">
							파일 변경 상태 확인, 스테이징(staging), 커밋(commit), 푸시(push),
							풀(pull), 브랜치 생성 및 전환, 병합(merge) 등 주요 Git 작업을 몇
							번의 클릭만으로 수행할 수 있습니다.
						</p>
						{/* TODO: VIBE Git UI 스크린샷 (변경사항, 스테이징, 커밋 버튼 등) */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							2. 변경 사항 시각화 (Diff View)
						</h4>
						<p className="text-sm">
							코드 변경 전후를 나란히 또는 한 줄씩 비교하여 보여주는 시각적인
							Diff 뷰를 제공하여, 커밋 전에 변경 내용을 명확하게 검토할 수
							있습니다.
						</p>
						{/* TODO: VIBE Diff View 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							3. 손쉬운 브랜치 관리
						</h4>
						<p className="text-sm">
							새로운 기능 개발, 버그 수정 등을 위한 브랜치를 쉽게 생성하고,
							브랜치 간을 자유롭게 이동하며, 작업 완료 후 안전하게 병합할 수
							있습니다. 충돌 발생 시 해결 도구도 지원합니다.
						</p>
						{/* TODO: VIBE 브랜치 관리 UI 스크린샷 (브랜치 목록, 생성, 병합 등) */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							4. 원격 저장소 연동
						</h4>
						<p className="text-sm">
							GitHub, GitLab, Bitbucket 등 주요 Git 호스팅 서비스와 쉽게 연동할
							수 있습니다. 기존 저장소를 클론(clone)하거나, VIBE에서 생성한
							프로젝트를 원격 저장소로 푸시할 수 있습니다.
						</p>
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							5. 커밋 히스토리 조회
						</h4>
						<p className="text-sm">
							프로젝트의 모든 커밋 이력을 시간순으로 확인하고, 각 커밋의 상세
							변경 내용 및 작성자, 메시지 등을 쉽게 조회할 수 있습니다.
						</p>
						{/* TODO: VIBE 커밋 히스토리 뷰 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							6. 내장 터미널을 통한 고급 Git 명령어 사용
						</h4>
						<p className="text-sm">
							UI에서 지원하지 않는 복잡하거나 세부적인 Git 작업은 작업 공간 내{" "}
							<Link
								href="/docs/vibe-workspace/features#내장-터미널-및-명령줄-인터페이스"
								className="text-pink-400 hover:underline"
							>
								내장 터미널
							</Link>
							을 통해 직접 Git 명령어를 입력하여 수행할 수 있습니다.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					VIBE에서 버전 관리 시작하기
				</h2>
				<ol className="mb-6 list-decimal space-y-3 pl-6">
					<li>
						<strong>새 프로젝트에서 Git 초기화:</strong> VIBE에서 새 프로젝트를
						생성하면 자동으로 Git 저장소가 초기화됩니다. 또는 기존 프로젝트
						폴더에서 `git init` 명령을 터미널에서 실행할 수 있습니다.
					</li>
					<li>
						<strong>원격 저장소 클론:</strong> GitHub 등에서 기존 프로젝트를
						가져오려면, 해당 저장소의 URL을 사용하여 VIBE 작업 공간으로
						클론합니다. (예: <code>git clone &lt;repository_url&gt;</code>)
					</li>
					<li>
						<strong>파일 변경 및 스테이징:</strong> 코드를 작성하거나 수정한 후,
						변경된 파일을 스테이징 영역에 추가합니다. (Git UI 또는{" "}
						<code>git add &lt;file&gt;</code>)
					</li>
					<li>
						<strong>커밋:</strong> 스테이징된 변경 사항에 의미 있는 메시지를
						작성하여 로컬 저장소에 커밋합니다. (Git UI 또는{" "}
						<code>git commit -m "커밋 메시지"</code>)
					</li>
					<li>
						<strong>원격 저장소에 푸시:</strong> 로컬 커밋을 원격 저장소(예:
						GitHub)에 푸시하여 팀원과 공유하고 백업합니다. (Git UI 또는{" "}
						<code>git push origin &lt;branch_name&gt;</code>)
					</li>
					<li>
						<strong>브랜치 활용:</strong> 새로운 기능 추가나 실험적인 작업은
						별도의 브랜치를 생성하여 진행하고, 완료 후 메인 브랜치(예: `main`
						또는 `master`)에 병합합니다.
					</li>
				</ol>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					일반적인 브랜치 전략 (예시)
				</h2>
				<p className="mb-4">
					효율적인 협업과 안정적인 릴리스를 위해 다음과 같은 브랜치 전략을
					고려해볼 수 있습니다 (프로젝트 규모와 팀 특성에 맞게 조정 가능):
				</p>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>`main` (또는 `master`):</strong> 항상 안정적이고 배포 가능한
						상태를 유지하는 메인 브랜치입니다. 직접적인 커밋은 지양하고,
						`develop` 또는 기능 브랜치에서 병합합니다.
					</li>
					<li>
						<strong>`develop`:</strong> 다음 릴리스를 위한 개발이 진행되는 통합
						브랜치입니다. 새로운 기능들이 이곳으로 병합됩니다.
					</li>
					<li>
						<strong>기능 브랜치 (Feature branches):</strong> (예:
						`feature/user-authentication`, `feature/payment-gateway`)
						<br />
						새로운 기능을 개발할 때 `develop` 브랜치에서 분기하여 생성합니다.
						기능 개발이 완료되면 `develop` 브랜치로 다시 병합합니다.
					</li>
					<li>
						<strong>릴리스 브랜치 (Release branches):</strong> (예:
						`release/v1.0.0`)
						<br />
						`develop` 브랜치에서 특정 버전을 릴리스하기 위해 생성합니다. 이
						브랜치에서는 버그 수정, 문서 작업 등 릴리스 준비 작업만 수행합니다.
						릴리스 후 `main`과 `develop` 브랜치에 병합합니다.
					</li>
					<li>
						<strong>핫픽스 브랜치 (Hotfix branches):</strong> (예:
						`hotfix/critical-bug-123`)
						<br />
						운영 중인 `main` 브랜치에서 발생한 긴급한 버그를 수정하기 위해
						생성합니다. 수정 완료 후 `main`과 `develop` (그리고 현재 진행 중인
						릴리스 브랜치)에 병합합니다.
					</li>
				</ul>
				<p className="text-sm text-gray-400">
					이 외에도 Gitflow, GitHub Flow 등 다양한 브랜치 전략이 있으며, VIBE는
					특정 전략을 강요하지 않고 유연하게 사용할 수 있도록 지원합니다.
				</p>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					팁 및 추가 정보
				</h2>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>커밋 메시지 명확하게 작성:</strong> 변경 사항을 쉽게 이해할
						수 있도록 명확하고 일관된 형식으로 커밋 메시지를 작성하는 것이
						중요합니다.
					</li>
					<li>
						<strong>작은 단위로 자주 커밋:</strong> 관련된 변경 사항들을 작은
						단위로 묶어 자주 커밋하면 문제 발생 시 원인을 찾고 되돌리기
						쉽습니다.
					</li>
					<li>
						<strong>`.gitignore` 파일 활용:</strong> 컴파일된 파일, 로그 파일,
						의존성 폴더(`node_modules` 등)와 같이 버전 관리할 필요 없는 파일들은
						`.gitignore` 파일에 등록하여 제외합니다.
					</li>
					<li>
						<strong>정기적인 풀(Pull) 및 푸시(Push):</strong> 팀원들과의 코드
						충돌을 최소화하고 최신 상태를 유지하기 위해 작업 시작 전에는 풀하고,
						작업 후에는 푸시하는 습관을 들입니다.
					</li>
					<li>
						VIBE의{" "}
						<Link
							href="/docs/vibe-apps/collaboration"
							className="text-pink-400 hover:underline"
						>
							협업 기능
						</Link>
						과 함께 사용하면 버전 관리가 더욱 강력해집니다.
					</li>
				</ul>
				<p>
					VIBE 작업 공간의 통합 Git 기능을 통해 프로젝트의 안정성을 높이고 개발
					효율성을 극대화해보세요! 더 궁금한 점은{" "}
					<Link
						href="/docs/vibe-workspace/features"
						className="text-pink-400 hover:underline"
					>
						VIBE 작업 공간 주요 기능
					</Link>{" "}
					문서를 참고하세요.
				</p>
			</section>
		</div>
	);
};
export default VersionControlPage;
