import Image from "next/image";
import Link from "next/link";
import {
	FiArrowRight,
	FiCode,
	FiCpu,
	FiEye,
	FiMousePointer,
	FiPlay,
	FiTerminal,
} from "react-icons/fi";

// 이 페이지를 정적으로 렌더링하도록 설정
export const dynamic = "force-static";

const QuickstartsPage = () => {
	return (
		<article className="prose prose-invert prose-headings:text-purple-400 prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-strong:text-purple-300 max-w-none">
			<h1 id="빠른-시작-가이드">빠른 시작: 첫 VIBE 앱 만들기</h1>
			<p className="lead">
				이 가이드를 따라 몇 분 안에 VIBE를 사용하여 첫 번째 웹 애플리케이션을
				만들고 실행하는 방법을 배워보세요. VIBE의 강력하고 직관적인 환경을
				경험할 준비가 되셨나요?
			</p>

			<h2 id="1단계-새-프로젝트-시작하기">1단계: 새 프로젝트 시작하기</h2>
			<div className="my-6 rounded-lg border border-gray-700 bg-gray-800/50 p-4">
				<p className="flex items-center">
					<FiMousePointer className="mr-2 h-5 w-5 text-purple-400" />
					VIBE에 로그인한 후, <Link href="/editor/~">대시보드</Link>로
					이동합니다.
				</p>
				<p className="mt-2">
					"안녕하세요, [사용자이름]님! 무엇을 만들고 싶으신가요?" 섹션에서
					만들고 싶은 앱에 대한 설명을 입력하거나, 특정 템플릿을 선택할 수
					있습니다. 여기서는 간단한 웹사이트를 만들기 위해 "HTML, CSS, JS"
					템플릿을 선택한다고 가정하겠습니다 (또는 "앱 타입" 드롭다운에서 선택).
				</p>
				<p className="mt-2">
					프로젝트 이름을 입력하고 (예: "나의-첫-VIBE-앱"), "만들기 시작" 버튼을
					클릭하세요.
				</p>
				{/* 여기에 대시보드에서 프로젝트 생성하는 예시 이미지 추가 가능 */}
				{/* <Image src="/images/docs/quickstart-create-project.png" alt="VIBE 프로젝트 생성" width={700} height={400} className="rounded-md shadow-lg my-4" /> */}
			</div>

			<h2 id="2단계-작업-공간-둘러보기">2단계: 작업 공간 둘러보기</h2>
			<p>
				프로젝트가 생성되면 VIBE 작업 공간으로 이동합니다. 익숙해져야 할 몇 가지
				주요 영역이 있습니다:
			</p>
			<ul className="my-4 list-inside list-disc space-y-2 pl-4">
				<li>
					<strong>파일 탐색기 (왼쪽):</strong> 프로젝트의 모든 파일과 폴더를
					보여줍니다. 새 파일을 만들거나 기존 파일을 열 수 있습니다.
				</li>
				<li>
					<strong>코드 에디터 (중앙):</strong> 선택한 파일의 내용을 편집하는
					곳입니다. VIBE의 스마트한 코드 완성 및 AI 기능을 활용할 수 있습니다.
				</li>
				<li>
					<strong>콘솔/터미널 (하단 또는 오른쪽):</strong> 코드 실행 결과, 로그
					메시지, 오류 등을 확인하거나, 명령어를 직접 실행할 수 있습니다.
				</li>
				<li>
					<strong>미리보기/웹뷰 (오른쪽 또는 새 탭):</strong> 웹 프로젝트의 경우
					실시간으로 변경 사항을 확인할 수 있는 미리보기 창입니다.
				</li>
			</ul>
			{/* 여기에 작업 공간 UI 이미지 추가 가능 */}
			{/* <Image src="/images/docs/quickstart-workspace.png" alt="VIBE 작업 공간" width={700} height={400} className="rounded-md shadow-lg my-4" /> */}

			<h2 id="3단계-간단한-코드-작성하기">3단계: 간단한 코드 작성하기</h2>
			<p className="flex items-center">
				<FiCode className="mr-2 h-5 w-5 text-purple-400" />
				파일 탐색기에서 <code>index.html</code> 파일을 클릭하여 엽니다. (없다면
				새로 만듭니다.)
			</p>
			<p className="mt-2">
				다음과 같이 간단한 HTML 코드를 입력하거나 수정해보세요:
			</p>
			<pre className="my-4 overflow-x-auto rounded-md bg-gray-800 p-4 text-sm">
				<code className="language-html">
					{`<!DOCTYPE html>
<html>
<head>
  <title>나의 첫 VIBE 앱</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>안녕하세요, VIBE!</h1>
  <p>VIBE로 첫 웹사이트 만들기에 성공했습니다!</p>
  <script src="script.js"></script>
</body>
</html>`}
				</code>
			</pre>
			<p className="mt-2">
				<code>style.css</code> 파일에는 간단한 스타일을, <code>script.js</code>{" "}
				파일에는 동적인 기능을 추가할 수 있습니다 (선택 사항).
			</p>

			<h2 id="4단계-앱-실행-및-확인하기">4단계: 앱 실행 및 확인하기</h2>
			<p className="flex items-center">
				<FiPlay className="mr-2 h-5 w-5 text-purple-400" />
				상단 바에 있는 초록색 "실행" 버튼을 클릭하세요.
			</p>
			<p className="mt-2 flex items-center">
				<FiEye className="mr-2 h-5 w-5 text-purple-400" />
				작업 공간의 미리보기 창(웹뷰)에 "안녕하세요, VIBE!" 메시지가 나타나는
				것을 확인할 수 있습니다. 만약 Node.js 프로젝트라면 콘솔에 로그가 출력될
				것입니다.
			</p>

			<h2 id="5단계-선택-ai-도우미-사용해보기">
				5단계 (선택): AI 도우미 사용해보기
			</h2>
			<p className="flex items-center">
				<FiCpu className="mr-2 h-5 w-5 text-purple-400" />
				VIBE의 강력한 AI 기능을 살짝 경험해보세요! 코드 에디터에서 특정 코드
				라인을 선택하거나, AI 채팅 패널을 열어 다음과 같이 요청해보세요:
			</p>
			<blockquote className="my-4 border-l-4 border-purple-500 pl-4 text-gray-300 italic">
				<p>
					"현재 날짜와 시간을 페이지에 표시하는 JavaScript 함수를 만들어줘."
				</p>
			</blockquote>
			<p className="mt-2">
				AI가 생성해주는 코드를 확인하고, 프로젝트에 적용해보세요!
			</p>

			<h2 id="축하합니다">축하합니다!</h2>
			<p>
				여러분은 VIBE를 사용하여 첫 번째 애플리케이션을 성공적으로 만들고
				실행했습니다! 이것은 VIBE가 제공하는 무한한 가능성의 시작일 뿐입니다.
				계속해서 VIBE의 다양한 기능들을 탐색하고, 여러분의 멋진 아이디어를
				현실로 만들어보세요.
			</p>

			<div className="mt-10 rounded-lg bg-gray-800 p-6 shadow-md">
				<h3 className="mb-3 text-xl font-semibold text-purple-300">
					다음으로 무엇을 배울까요?
				</h3>
				<ul className="mb-4 list-inside list-disc space-y-2 text-gray-300">
					<li>
						<Link href="/docs/vibe-workspace/overview">
							VIBE 작업 공간 더 자세히 알아보기
						</Link>
					</li>
					<li>
						<Link href="/docs/vibe-ai/overview">
							VIBE AI의 모든 기능 살펴보기
						</Link>
					</li>
					<li>
						<Link href="/docs/deployments/overview">
							만든 앱을 세상에 배포하기
						</Link>
					</li>
				</ul>
				<Link
					href="/docs"
					className="group inline-flex items-center rounded-md bg-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-purple-700"
				>
					모든 문서 보기
					<FiArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
				</Link>
			</div>
		</article>
	);
};

export default QuickstartsPage;
