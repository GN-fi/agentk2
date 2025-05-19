import Link from "next/link";

const ThemesPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="mb-6 text-3xl font-bold text-purple-400">
				VIBE 작업 공간 테마: 나만의 개발 환경 꾸미기
			</h1>
			<p className="mb-8 text-lg">
				VIBE 작업 공간은 개발자 여러분이 장시간 집중하여 작업하는 공간입니다.
				VIBE는 다양한 테마 옵션을 제공하여 사용자가 자신의 취향과 작업 환경에
				맞게 IDE의 시각적 스타일을 자유롭게 변경할 수 있도록 지원합니다. 이를
				통해 눈의 피로도를 줄이고, 개인화된 환경에서 더욱 즐겁고 생산적으로
				코딩할 수 있습니다.
			</p>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					왜 테마 설정이 중요한가요?
				</h2>
				<ul className="mb-6 list-disc space-y-3 pl-6">
					<li>
						<strong>시각적 편안함 증대:</strong> 개인의 선호도와 작업 환경(예:
						밝은 곳, 어두운 곳)에 맞는 테마를 선택하여 눈의 피로를 줄이고
						가독성을 높일 수 있습니다.
					</li>
					<li>
						<strong>집중력 향상:</strong> 마음에 드는 시각적 환경은 작업의
						몰입도를 높여 집중력 향상에 도움을 줄 수 있습니다.
					</li>
					<li>
						<strong>개인화된 경험:</strong> 자신만의 스타일로 작업 공간을
						꾸미면서 개발 환경에 대한 애착을 높이고, 보다 즐겁게 코딩할 수
						있습니다.
					</li>
					<li>
						<strong>코드 가독성 개선:</strong> 특정 테마는 코드의 구문
						강조(Syntax Highlighting)를 더욱 명확하게 하여 코드 구조를 쉽게
						파악하도록 도와줍니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					테마 변경 방법
				</h2>
				<p className="mb-4">
					VIBE 작업 공간의 테마는 몇 번의 클릭만으로 쉽게 변경할 수 있습니다.
					일반적으로 다음과 같은 방법으로 접근할 수 있습니다:
				</p>
				<ol className="mb-6 list-decimal space-y-3 pl-6">
					<li>
						<strong>설정 메뉴 접근:</strong> VIBE 작업 공간 우측 상단 또는 좌측
						하단의 사용자 프로필 아이콘이나 설정(톱니바퀴 모양) 아이콘을
						클릭합니다.
					</li>
					<li>
						<strong>'테마' 또는 '모양(Appearance)' 설정 선택:</strong> 설정
						메뉴에서 '테마', '모양', '화면 스타일' 등과 같은 항목을 찾습니다.
					</li>
					<li>
						<strong>원하는 테마 선택:</strong> 제공되는 테마 목록(예: 라이트,
						다크, 특정 색상 테마)에서 마음에 드는 테마를 선택합니다.
					</li>
					<li>
						<strong>실시간 적용 확인:</strong> 테마를 선택하면 작업 공간의 UI가
						즉시 변경되어 새로운 스타일을 바로 확인할 수 있습니다.
					</li>
				</ol>
				{/* TODO: VIBE 테마 설정 화면 스크린샷 추가 (설정 메뉴 > 테마 선택 과정) */}
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					기본 제공 테마
				</h2>
				<p className="mb-4">
					VIBE는 시작부터 다양한 사용자의 취향을 만족시킬 수 있도록 여러 가지
					사전 정의된 테마를 제공합니다. 일반적으로 다음과 같은 종류의 테마가
					포함될 수 있습니다 (실제 제공되는 테마는 업데이트될 수 있습니다):
				</p>
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							라이트 테마 (VIBE Light)
						</h4>
						<p className="text-sm">
							밝고 깨끗한 인터페이스를 선호하는 사용자를 위한 기본 라이트
							테마입니다. 전통적인 IDE 스타일에 익숙한 사용자에게 적합합니다.
						</p>
						{/* TODO: 라이트 테마 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							다크 테마 (VIBE Dark)
						</h4>
						<p className="text-sm">
							눈의 피로를 줄여주고 어두운 환경에서 작업하기 좋은 인기 있는 다크
							테마입니다. 현대적인 개발자들이 선호하는 스타일입니다.
						</p>
						{/* TODO: 다크 테마 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							고대비 테마 (High Contrast)
						</h4>
						<p className="text-sm">
							텍스트와 배경의 대비를 극대화하여 시인성을 높인 테마입니다. 저시력
							사용자나 명확한 구분을 선호하는 사용자에게 유용합니다.
						</p>
						{/* TODO: 고대비 테마 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							솔라라이즈드 (Solarized Light/Dark)
						</h4>
						<p className="text-sm">
							정교하게 설계된 색상 팔레트를 사용하여 눈의 피로를 최소화하고
							가독성을 높인 테마입니다. 라이트와 다크 버전 모두 제공될 수
							있습니다.
						</p>
						{/* TODO: 솔라라이즈드 테마 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							모노카이 (Monokai)
						</h4>
						<p className="text-sm">
							많은 개발자들에게 사랑받는 특유의 색상 조합을 가진 다크
							테마입니다. 코드 편집기에서 널리 사용되는 인기 테마 중 하나입니다.
						</p>
						{/* TODO: 모노카이 테마 스크린샷 */}
					</div>
					<div className="rounded-lg bg-gray-800 p-6 shadow">
						<h4 className="mb-2 text-lg font-semibold text-purple-300">
							더 많은 테마...
						</h4>
						<p className="text-sm">
							VIBE는 지속적으로 새로운 테마를 추가하거나 사용자가 직접 테마를
							커뮤니티에 공유할 수 있는 기능을 제공할 수 있습니다.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					사용자 정의 테마 (향후 계획)
				</h2>
				<p className="mb-4">
					VIBE는 향후 사용자가 직접 작업 공간의 테마를 세밀하게
					커스터마이징하거나, 자신만의 테마를 만들어 다른 사용자와 공유할 수
					있는 기능을 제공하는 것을 목표로 하고 있습니다.
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>테마 편집기:</strong> 색상, 폰트, 아이콘 스타일 등을 직접
						수정할 수 있는 비주얼 편집기 또는 설정 파일(JSON, CSS 등)을 통한
						커스터마이징을 지원할 수 있습니다.
					</li>
					<li>
						<strong>테마 마켓플레이스:</strong> 사용자들이 자신이 만든 테마를
						업로드하고 공유하며, 다른 사용자의 테마를 다운로드하여 사용할 수
						있는 공간을 제공할 수 있습니다.
					</li>
					<li>
						<strong>VS Code 테마 호환성:</strong> 인기 있는 VS Code 테마들을
						VIBE 작업 공간에서도 사용할 수 있도록 호환성을 제공하는 방안도
						고려될 수 있습니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="mb-4 text-2xl font-semibold text-purple-300">
					팁 및 권장 사항
				</h2>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>작업 환경 고려:</strong> 주변 밝기나 개인적인 시각 민감도에
						따라 적절한 테마를 선택하세요.
					</li>
					<li>
						<strong>주기적인 변경:</strong> 가끔 테마를 변경해보는 것도 작업
						환경에 새로운 활력을 불어넣는 좋은 방법이 될 수 있습니다.
					</li>
					<li>
						<strong>커뮤니티 의견 참고:</strong> 다른 VIBE 사용자들이 어떤
						테마를 선호하고 추천하는지 커뮤니티 포럼이나 리뷰를 참고해보세요.
					</li>
				</ul>
				<p>
					VIBE 작업 공간의 테마 기능을 활용하여 개발 환경을 더욱 쾌적하고
					개인에게 최적화된 공간으로 만들어보세요. 더 궁금한 점이 있다면{" "}
					<Link
						href="/docs/vibe-workspace/overview"
						className="text-pink-400 hover:underline"
					>
						VIBE 작업 공간 개요
					</Link>{" "}
					문서를 다시 한번 확인해보시는 것을 추천합니다.
				</p>
			</section>
		</div>
	);
};
export default ThemesPage;
