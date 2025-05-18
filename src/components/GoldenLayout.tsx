import ActualGoldenLayout from "golden-layout"; // 타입 이름과의 혼동을 피하기 위해 이름 변경
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css"; // 또는 다른 테마

// GoldenLayout.Container 타입이 불안정할 경우를 대비한 최소한의 컨테이너 인터페이스
interface MyGLContainer {
	getElement: () => HTMLElement;
	// 필요에 따라 on, off, setTitle 등의 다른 메서드를 추가할 수 있습니다.
}

export function initLayout() {
	// 타입 오류를 피하기 위해 HTMLElement 또는 null을 명시적으로 캐스팅합니다.
	const layoutContainer = document.getElementById(
		"layoutContainer",
	) as HTMLElement | null;

	if (layoutContainer) {
		const config = {
			settings: {
				showPopoutIcon: false, // 팝아웃 아이콘 비활성화 예시
				// 다른 필요한 설정들을 여기에 추가할 수 있습니다.
			},
			content: [
				{
					type: "row",
					content: [
						{
							type: "component",
							componentName: "Editor",
							title: "코드 에디터",
						},
						{
							type: "component",
							componentName: "Preview",
							title: "실시간 미리보기",
						},
					],
				},
			],
		};

		// 'golden-layout' 라이브러리는 기본 export가 클래스인 UMD 모듈일 수 있습니다.
		// 또는 기본 export가 있는 ES 모듈일 수도 있습니다.
		// 타입이 일치하지 않을 경우 엄격한 생성자 타입 검사를 우회하기 위해 'as any'를 사용합니다.
		const GoldenLayoutConstructor = ActualGoldenLayout as any;
		const layout = new GoldenLayoutConstructor(config, layoutContainer);

		// @types/golden-layout의 Container 타입 관련 잠재적 문제를 피하기 위해 MyGLContainer 또는 'any'를 사용합니다.
		layout.registerComponent(
			"Editor",
			(container: MyGLContainer, componentState: any) => {
				const element = document.createElement("div");
				element.innerHTML =
					"<h2>에디터 컴포넌트</h2><p>여기에 Monaco 에디터가 표시됩니다.</p>";
				// container.getElement()가 실제로 HTMLElement를 반환하는지 확인합니다.
				const glElement = container.getElement();
				if (glElement instanceof HTMLElement) {
					glElement.appendChild(element);
				} else {
					console.error(
						"'Editor' 컴포넌트의 GoldenLayout 컨테이너 요소가 유효한 HTMLElement가 아닙니다.",
					);
				}
			},
		);

		layout.registerComponent(
			"Preview",
			(container: MyGLContainer, componentState: any) => {
				const element = document.createElement("div");
				element.innerHTML =
					"<h2>미리보기 컴포넌트</h2><p>여기에 웹 애플리케이션 미리보기가 표시됩니다.</p>";
				const glElement = container.getElement();
				if (glElement instanceof HTMLElement) {
					glElement.appendChild(element);
				} else {
					console.error(
						"'Preview' 컴포넌트의 GoldenLayout 컨테이너 요소가 유효한 HTMLElement가 아닙니다.",
					);
				}
			},
		);

		layout.init();

		// 선택 사항: 창 크기 변경 시 레이아웃 업데이트
		window.addEventListener("resize", () => {
			if (layout && layout.updateSize) {
				// layout 객체와 updateSize 메소드 존재 확인
				layout.updateSize();
			}
		});
	} else {
		console.error(
			"Golden Layout 컨테이너 'layoutContainer'를 찾을 수 없습니다.",
		);
	}
}
