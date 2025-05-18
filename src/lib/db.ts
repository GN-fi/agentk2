import { Pool } from "pg";
import Redis from "ioredis";

// PostgreSQL 연결 풀 설정
// process.env.DATABASE_URL이 설정되어 있지 않으면 Pool 생성 시 오류가 발생할 수 있으므로,
// 애플리케이션 시작 전에 환경 변수가 올바르게 로드되었는지 확인해야 합니다.
export const db = new Pool({
	connectionString: process.env.DATABASE_URL,
});

// Redis 클라이언트 설정
// process.env.REDIS_URL이 설정되어 있지 않으면 Redis 생성 시 오류가 발생할 수 있습니다.
// 실제 운영 환경에서는 연결 옵션 (예: 재시도 전략, 비밀번호 등)을 추가로 설정할 수 있습니다.
export const redis = new Redis(process.env.REDIS_URL as string); // ioredis는 URL을 string으로 받습니다.

// 간단한 연결 테스트 (선택 사항, 애플리케이션 로드 시 자동으로 실행되지 않도록 주의)
async function testConnections() {
	try {
		const pgClient = await db.connect();
		console.log("PostgreSQL에 성공적으로 연결되었습니다.");
		pgClient.release();
	} catch (error) {
		console.error("PostgreSQL 연결 실패:", error);
	}

	try {
		await redis.ping();
		console.log("Redis에 성공적으로 연결되었습니다.");
	} catch (error) {
		console.error("Redis 연결 실패:", error);
	}
}

// 개발 환경에서만 또는 특정 조건에서만 테스트 함수를 호출하도록 할 수 있습니다.
// 예를 들어, if (process.env.NODE_ENV === 'development') { testConnections(); }
// 여기서는 명시적으로 호출하지 않고, 필요시 다른 파일에서 import하여 사용할 수 있도록 합니다.
