import dotenv from "dotenv";

// 환경 변수 로드 (.env 파일이 없어도 오류가 발생하지 않도록 수정)
try {
	dotenv.config();
} catch (error) {
	console.warn("Failed to load .env file:", error);
}

import { Redis } from "@upstash/redis"; // Edge 환경용 Redis 클라이언트

// CI 환경에서는 환경 변수가 없어도 빌드가 가능하도록 체크를 수정합니다.
const UPSTASH_REDIS_REST_URL =
	process.env.UPSTASH_REDIS_REST_URL || "https://dummy-redis-url.upstash.io";
const UPSTASH_REDIS_REST_TOKEN =
	process.env.UPSTASH_REDIS_REST_TOKEN || "dummy_token";

// 실제 환경에서는 경고만 출력하고 계속 진행합니다.
if (
	!process.env.UPSTASH_REDIS_REST_URL ||
	!process.env.UPSTASH_REDIS_REST_TOKEN
) {
	console.warn(
		"Upstash Redis 환경 변수(URL 또는 Token)가 설정되지 않았습니다. 더미 값을 사용합니다.",
	);
}

// Redis 클라이언트 생성 (CI 환경에서는 더미 값으로 생성됨)
export const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN,
});

/**
 * 캐시에서 데이터를 가져오거나, 없는 경우 콜백 함수를 실행하여 데이터를 가져온 후 캐시에 저장합니다.
 * @param key 캐시 키
 * @param callback 캐시된 데이터가 없을 경우 실행될 비동기 함수 (데이터를 반환해야 함)
 * @param ttl 캐시 만료 시간 (초 단위, 기본값: 1시간)
 * @returns 콜백 함수가 반환하는 타입의 데이터
 */
export async function getOrSet<T>(
	key: string,
	callback: () => Promise<T>,
	ttl = 3600, // 기본 TTL: 1시간
): Promise<T> {
	try {
		const cachedData = await redis.get<T>(key);

		if (cachedData) {
			console.log(`캐시 히트: ${key}`);
			return cachedData;
		}
	} catch (error) {
		console.error(`Redis GET 오류 (${key}):`, error);
		// Redis GET 오류 시에는 콜백을 직접 실행하여 반환 (캐시 미적용)
		// 또는 특정 기본값을 반환하거나 에러를 다시 throw 할 수 있음
	}

	console.log(`캐시 미스: ${key}`);
	const data = await callback();

	try {
		// Upstash Redis는 복잡한 객체를 저장할 때 JSON.stringify가 필요할 수 있습니다.
		// redis.get<T> 사용 시 자동으로 JSON.parse를 시도하므로 set 할 때도 맞춰줍니다.
		await redis.set(key, JSON.stringify(data), { ex: ttl });
		console.log(`캐시 저장: ${key}, TTL: ${ttl}s`);
	} catch (error) {
		console.error(`Redis SET 오류 (${key}):`, error);
		// Redis SET 오류는 데이터 반환에 영향을 주지 않도록 처리
	}

	return data;
}
