import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

// 런타임 환경에서는 Prisma Accelerate URL을 사용합니다.
const prismaClientOptions = {};

// PrismaClient 인스턴스를 생성합니다.
const prisma = new PrismaClient(prismaClientOptions);

// 런타임 환경에서 Accelerate URL이 있으면 확장 기능을 적용합니다.
const prismaWithExtensions = process.env.PRISMA_ACCELERATE_URL
	? prisma.$extends(withAccelerate())
	: prisma;

export default prismaWithExtensions;
