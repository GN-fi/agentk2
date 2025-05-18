// test-redis-cache.ts
import dotenv from "dotenv";
dotenv.config(); // .env 파일을 로드하여 process.env에 설정
import { getOrSet } from "./src/lib/cache";

async function main() {
	console.log("Upstash Redis 캐시 테스트를 시작합니다...");

	const testKey = "test-cache-key";
	const initialValue = { message: "Hello from cache!", timestamp: Date.now() };
	const ttlSeconds = 5; // 5초 후 만료

	try {
		// 1. 캐시에 데이터가 없는 상태에서 getOrSet 호출 (데이터 생성 및 반환)
		console.log(`\n1. '${testKey}'로 첫 번째 getOrSet 호출 (캐시 미스 예상)`);
		const firstResult = await getOrSet(
			testKey,
			async () => {
				console.log("   (캐시 미스 - 실제 데이터 생성 로직 실행됨)");
				return initialValue;
			},
			ttlSeconds,
		);
		console.log("   첫 번째 결과:", firstResult);
		if (JSON.stringify(firstResult) !== JSON.stringify(initialValue)) {
			throw new Error("첫 번째 결과가 예상 값과 다릅니다.");
		}

		// 2. 캐시에 데이터가 있는 상태에서 getOrSet 호출 (캐시된 데이터 반환)
		console.log(`\n2. '${testKey}'로 두 번째 getOrSet 호출 (캐시 히트 예상)`);
		const secondResult = await getOrSet(
			testKey,
			async () => {
				console.log("   (캐시 미스 - 이 메시지는 보이면 안 됩니다!)");
				return {
					message: "This should not be returned",
					timestamp: Date.now(),
				};
			},
			ttlSeconds,
		);
		console.log("   두 번째 결과 (캐시된 값):", secondResult);
		if (JSON.stringify(secondResult) !== JSON.stringify(initialValue)) {
			throw new Error("두 번째 결과가 캐시된 초기 값과 다릅니다.");
		}

		// 3. TTL(만료 시간) 테스트
		console.log(`\n3. TTL 테스트 - ${ttlSeconds}초 대기...`);
		await new Promise((resolve) =>
			setTimeout(resolve, ttlSeconds * 1000 + 1000),
		); // TTL + 약간의 여유 시간

		console.log(
			`\n4. '${testKey}'로 TTL 만료 후 getOrSet 호출 (캐시 미스 예상)`,
		);
		const newValueAfterTTL = {
			message: "Hello again after TTL!",
			timestamp: Date.now(),
		};
		const thirdResult = await getOrSet(
			testKey,
			async () => {
				console.log(
					"   (캐시 미스 - TTL 만료 후 실제 데이터 생성 로직 실행됨)",
				);
				return newValueAfterTTL;
			},
			ttlSeconds,
		);
		console.log("   TTL 만료 후 결과:", thirdResult);
		if (JSON.stringify(thirdResult) !== JSON.stringify(newValueAfterTTL)) {
			throw new Error("TTL 만료 후 결과가 새로운 예상 값과 다릅니다.");
		}

		console.log("\nUpstash Redis 캐시 테스트가 성공적으로 완료되었습니다.");
	} catch (error) {
		console.error("Upstash Redis 캐시 테스트 중 오류 발생:", error);
	}
}

main();
