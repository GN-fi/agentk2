import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
	schema: "./src/lib/db/schema.ts",
	out: "./prisma/drizzle", // 마이그레이션 파일 출력 경로 (Prisma와 구분)
	dialect: "postgresql", // Neon은 PostgreSQL 호환
	dbCredentials: {
		url: process.env.NEON_HTTP_URL!,
	},
	// verbose: true, // 자세한 로그 출력 (선택 사항)
	// strict: true, // 엄격한 타입 체크 (선택 사항)
} satisfies Config;
