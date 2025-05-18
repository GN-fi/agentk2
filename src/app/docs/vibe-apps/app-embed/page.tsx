import Link from "next/link";

const AppEmbedPage = () => {
	return (
		<div className="prose prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-6 text-purple-400">
				VIBE 앱: 앱 임베드
			</h1>
			<p className="text-lg mb-8">
				VIBE에서 제작한 애플리케이션을 기존 웹사이트나 다른 플랫폼에 손쉽게
				통합하여 사용자 경험을 확장하고 서비스의 가치를 높일 수 있습니다. 이
				문서에서는 VIBE 앱을 외부 웹사이트에 임베드하는 다양한 방법과 고려
				사항을 안내합니다.
			</p>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					앱 임베딩이란?
				</h2>
				<p className="mb-4">
					앱 임베딩은 하나의 웹 애플리케이션(VIBE 앱)의 전체 또는 특정 부분을
					다른 웹사이트 내에 마치 원래 그 사이트의 일부인 것처럼 표시하는
					기술입니다. 이를 통해 사용자는 별도의 사이트로 이동하지 않고도 VIBE
					앱의 기능을 편리하게 이용할 수 있습니다.
				</p>
				<h3 className="text-xl font-medium mb-2 text-purple-200">
					임베딩의 주요 이점
				</h3>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>향상된 사용자 경험:</strong> 사용자가 여러 서비스를 오가는
						번거로움을 줄여줍니다.
					</li>
					<li>
						<strong>기능 확장성:</strong> 기존 웹사이트에 VIBE 앱의 강력한
						기능을 손쉽게 추가할 수 있습니다.
					</li>
					<li>
						<strong>브랜드 일관성:</strong> 임베드된 앱의 스타일을 조절하여
						모(母)사이트의 디자인과 통일성을 유지할 수 있습니다.
					</li>
					<li>
						<strong>서비스 통합:</strong> 여러 서비스를 하나의 플랫폼에서
						제공하는 것처럼 보이게 하여 시너지를 창출합니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					임베드 방법
				</h2>
				<p className="mb-4">
					VIBE 앱을 임베드하는 주요 방법은 다음과 같으며, 각 방법은 사용 사례와
					요구 사항에 따라 선택할 수 있습니다.
				</p>

				<div className="mb-8 p-6 bg-gray-800 rounded-lg shadow">
					<h3 className="text-xl font-medium mb-3 text-purple-200">
						1. iframe을 이용한 임베드
					</h3>
					<p className="mb-4">
						가장 간단하고 널리 사용되는 방법입니다. HTML{" "}
						<code className="bg-gray-700 px-1 rounded">&lt;iframe&gt;</code>{" "}
						태그를 사용하여 VIBE 앱의 특정 URL을 지정하면 해당 영역에 앱이
						로드됩니다.
					</p>
					<h4 className="font-semibold text-purple-100 mb-2">장점:</h4>
					<ul className="list-disc list-inside text-sm mb-3 space-y-1">
						<li>구현이 매우 쉽고 빠릅니다.</li>
						<li>대부분의 브라우저에서 잘 지원됩니다.</li>
						<li>
							보안 측면에서 모(母)사이트와 임베드된 앱 간의 격리가 비교적
							명확합니다.
						</li>
					</ul>
					<h4 className="font-semibold text-purple-100 mb-2">단점:</h4>
					<ul className="list-disc list-inside text-sm mb-3 space-y-1">
						<li>
							모(母)사이트와 임베드된 앱 간의 직접적인 통신(데이터 교환, 이벤트
							호출 등)이 제한적입니다. (
							<code className="bg-gray-700 px-1 rounded">postMessage</code> API
							사용 필요)
						</li>
						<li>
							iframe 내부 콘텐츠의 높이에 따라 스크롤바가 생기거나 레이아웃
							문제가 발생할 수 있습니다.
						</li>
						<li>SEO(검색 엔진 최적화)에 불리할 수 있습니다.</li>
					</ul>
					<h4 className="font-semibold text-purple-100 mb-2">예시 코드:</h4>
					<pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto">
						<code>
							{`
              <iframe 
                src="https://your-vibe-app-url.vibeprojects.com/embedded-view" 
                width="100%" 
                height="600px" 
                frameBorder="0" 
                allowFullScreen
                title="My VIBE App Embed"
              ></iframe>
              `}
						</code>
					</pre>
					<p className="text-xs mt-2 text-gray-400">
						*{" "}
						<code className="bg-gray-700 px-1 rounded">
							your-vibe-app-url.vibeprojects.com/embedded-view
						</code>
						는 예시이며, 실제 VIBE 앱의 임베드 전용 URL 또는 일반 URL을
						사용합니다.
					</p>
				</div>

				<div className="p-6 bg-gray-800 rounded-lg shadow">
					<h3 className="text-xl font-medium mb-3 text-purple-200">
						2. JavaScript SDK 또는 API를 이용한 임베드 (VIBE 지원 시)
					</h3>
					<p className="mb-4">
						VIBE 플랫폼에서 전용 JavaScript SDK(Software Development Kit)나
						API를 제공하는 경우, 이를 활용하여 더욱 유연하고 강력한 임베딩이
						가능합니다. SDK는 모(母)사이트와 임베드된 VIBE 앱 간의 원활한 통신,
						UI 커스터마이징, 이벤트 처리 등을 지원할 수 있습니다.
					</p>
					<h4 className="font-semibold text-purple-100 mb-2">장점:</h4>
					<ul className="list-disc list-inside text-sm mb-3 space-y-1">
						<li>
							모(母)사이트와 임베드된 앱 간의 긴밀한 통합 및 상호작용이
							가능합니다.
						</li>
						<li>
							앱의 특정 기능만 선택적으로 임베드하거나, UI를 모(母)사이트에 맞게
							커스터마이징하기 용이합니다.
						</li>
						<li>동적인 콘텐츠 로딩 및 업데이트가 수월합니다.</li>
					</ul>
					<h4 className="font-semibold text-purple-100 mb-2">단점:</h4>
					<ul className="list-disc list-inside text-sm mb-3 space-y-1">
						<li>iframe 방식보다 구현 복잡도가 높을 수 있습니다.</li>
						<li>VIBE 플랫폼에서 SDK 또는 API를 제공해야 합니다.</li>
						<li>SDK의 학습 곡선이 있을 수 있습니다.</li>
					</ul>
					<h4 className="font-semibold text-purple-100 mb-2">예시 (개념적):</h4>
					<pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto">
						<code>
							{`
              <div id="vibe-app-container"></div>
              
              <script src="https://api.vibeprojects.com/v1/sdk.js"></script>
              <script>
                Vibe.init({ apiKey: 'YOUR_API_KEY' });
                const vibeApp = Vibe.embed(
                  '#vibe-app-container',
                  {
                    appId: 'YOUR_VIBE_APP_ID',
                    view: 'dashboard',
                    onEvent: (eventName, data) => {
                      console.log('VIBE App Event:', eventName, data);
                    }
                  }
                );
              </script>
              `}
						</code>
					</pre>
					<p className="text-xs mt-2 text-gray-400">
						* 위 코드는 VIBE SDK가 있다고 가정했을 때의 개념적인 예시입니다.
						실제 사용법은 VIBE 공식 문서를 참조해야 합니다.
					</p>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					보안 고려 사항
				</h2>
				<p className="mb-4">
					앱을 임베드할 때는 보안을 신중하게 고려해야 합니다. 다음은 주요 보안
					고려 사항입니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>X-Frame-Options 헤더:</strong> VIBE 앱 서버에서{" "}
						<code className="bg-gray-700 px-1 rounded">X-Frame-Options</code>{" "}
						HTTP 응답 헤더를 적절히 설정하여 클릭재킹(Clickjacking) 공격을
						방지해야 합니다. 특정 도메인에서의 임베드만 허용하도록 설정할 수
						있습니다. (예:{" "}
						<code className="bg-gray-700 px-1 rounded">
							ALLOW-FROM https://your-parent-site.com
						</code>
						)
					</li>
					<li>
						<strong>Content Security Policy (CSP):</strong> 모(母)사이트와 VIBE
						앱 모두 CSP를 사용하여 스크립트, 스타일, 프레임 등의 리소스 로드를
						제어하여 XSS(Cross-Site Scripting) 공격 위험을 줄일 수 있습니다.{" "}
						<code className="bg-gray-700 px-1 rounded">frame-ancestors</code>{" "}
						지시어를 사용하여 임베드를 허용할 출처를 명시할 수 있습니다.
					</li>
					<li>
						<strong>데이터 통신 보안:</strong> iframe을 사용할 경우{" "}
						<code className="bg-gray-700 px-1 rounded">
							window.postMessage()
						</code>{" "}
						API를 사용하여 모(母)사이트와 통신할 때, 메시지 출처(origin)를 항상
						확인하여 신뢰할 수 있는 소스와만 데이터를 교환해야 합니다.
					</li>
					<li>
						<strong>인증 및 권한 부여:</strong> 임베드된 앱이 사용자 데이터에
						접근해야 하는 경우, 안전한 인증 메커니즘(예: OAuth 2.0)을 사용하고
						최소 권한 원칙을 따라야 합니다.
					</li>
					<li>
						<strong>SDK/API 사용 시 보안:</strong> VIBE에서 제공하는 SDK나 API를
						사용할 경우, API 키와 같은 민감한 정보가 클라이언트 측 코드에
						노출되지 않도록 주의하고, 서버 측에서 인증 및 요청 유효성 검사를
						수행해야 합니다.
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					반응형 디자인 및 사용자 경험
				</h2>
				<p className="mb-4">
					임베드된 VIBE 앱은 다양한 화면 크기에서 올바르게 표시되고 사용하기
					편해야 합니다.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<strong>반응형 레이아웃:</strong> VIBE 앱 자체가 반응형으로
						디자인되어야 하며, 임베드될 때 컨테이너의 크기에 맞게 레이아웃이
						조정되어야 합니다.
					</li>
					<li>
						<strong>iframe 크기 조절:</strong> iframe의{" "}
						<code className="bg-gray-700 px-1 rounded">width</code>와{" "}
						<code className="bg-gray-700 px-1 rounded">height</code>를 퍼센트(%)
						값으로 설정하거나, JavaScript를 사용하여 동적으로 조절할 수
						있습니다.
					</li>
					<li>
						<strong>스크롤 관리:</strong> 불필요한 이중 스크롤바가 생기지 않도록
						주의하고, 필요한 경우 VIBE 앱 내부의 스크롤을 우선적으로 사용하도록
						합니다.
					</li>
					<li>
						<strong>로딩 시간:</strong> 임베드된 앱의 로딩 시간을 최소화하여
						사용자 이탈을 방지합니다. 코드 최적화, 리소스 압축 등을 고려합니다.
					</li>
					<li>
						<strong>접근성:</strong> 웹 접근성 표준(WCAG)을 준수하여 모든
						사용자가 임베드된 앱을 쉽게 이용할 수 있도록 합니다.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4 text-purple-300">
					다음 단계
				</h2>
				<p className="mb-4">
					VIBE 앱 임베드 기능에 대해 더 궁금한 점이 있거나 특정 사용 사례에 대한
					도움이 필요하시면 다음 자료를 참고하시거나 지원팀에 문의해주세요.
				</p>
				<ul className="list-disc pl-6 mb-4 space-y-2">
					<li>
						<Link
							href="/docs/vibe-apps/overview"
							className="text-pink-400 hover:underline"
						>
							VIBE 앱 개요
						</Link>
					</li>
					<li>
						<Link
							href="/docs/getting-started/introduction#커뮤니티-및-지원"
							className="text-pink-400 hover:underline"
						>
							VIBE 커뮤니티 및 지원 채널
						</Link>
					</li>
					{/* VIBE 앱 임베드 관련 상세 API/SDK 문서 링크 추가 (존재한다면) */}
				</ul>
				<p>
					성공적인 앱 임베드를 통해 여러분의 서비스가 더욱 강력해지기를
					바랍니다!
				</p>
			</section>
		</div>
	);
};
export default AppEmbedPage;
