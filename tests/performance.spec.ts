import {
	type Browser,
	type Page,
	chromium,
	expect,
	test,
} from "@playwright/test";
import { playAudit } from "playwright-lighthouse";
// import lighthouseDesktopConfig from 'lighthouse/lighthouse-core/config/lr-desktop-config.js'; // 이 줄을 주석 처리하거나 삭제합니다.

const TARGET_URL = "http://localhost:3000"; // 테스트할 실제 웹사이트 URL로 변경해주세요.
const LH_PORT = 9222;

test.describe("Lighthouse Performance Audit", () => {
	let browser: Browser; // browser 변수 선언은 유지
	let page: Page;

	test.beforeAll(async () => {
		browser = await chromium.launch({
			args: [`--remote-debugging-port=${LH_PORT}`],
			headless: true, // CI 환경에서는 true, 로컬 디버깅 시 false로 변경 가능
		});
	});

	test.beforeEach(async ({ browser: contextBrowser }) => {
		// 파라미터 이름을 contextBrowser로 변경하여 상위 스코프의 browser와 구분
		page = await contextBrowser.newPage(); // contextBrowser 사용
		await page.goto(TARGET_URL, { waitUntil: "networkidle" });
	});

	test.afterEach(async () => {
		await page.close();
	});

	test.afterAll(async () => {
		await browser.close(); // 여기서 browser는 beforeAll에서 생성된 browser 인스턴스입니다.
	});

	test("메인 페이지 Lighthouse 감사", async () => {
		test.setTimeout(60000); // 제한 시간을 60000ms (60초)로 늘림
		// Playwright-Lighthouse 설정
		const thresholds = {
			performance: 50, // Lighthouse 성능 점수 최소 기준
			accessibility: 80, // 접근성 점수
			"best-practices": 80, // 베스트 프랙티스 점수
			seo: 80, // SEO 점수
			pwa: 30, // PWA 점수 (필요에 따라 조정)
		};

		await playAudit({
			page: page,
			port: LH_PORT,
			thresholds: thresholds,
			// config: lighthouseDesktopConfig, // lighthouseDesktopConfig를 사용하지 않음
			reports: {
				formats: {
					html: true, // HTML 보고서 생성
					json: true, // JSON 보고서 생성 (선택 사항)
				},
				name: `lighthouse-report-${new Date().toISOString().replace(/[:.]/g, "-")}`,
				directory: "lighthouse-reports",
			},
			// 추가적인 Lighthouse 옵션 설정 가능
			// 참고: https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
			// opts: {
			//   onlyCategories: ['performance', 'accessibility'],
			//   formFactor: 'desktop',
			//   screenEmulation: { mobile: false, width: 1920, height: 1080, deviceScaleFactor: 1, disabled: false }
			// }
		});

		// 여기에 추가적인 expect 구문을 사용하여 특정 지표를 확인할 수도 있습니다.
		// 예: const performanceScore = result.lhr.categories.performance.score * 100;
		// expect(performanceScore).toBeGreaterThanOrEqual(thresholds.performance);
	}); // 제한 시간을 60000ms (60초)로 늘림 -> 이 줄은 삭제하거나, 위 setTimeout 호출로 대체되었으므로 주석처리합니다.
});
