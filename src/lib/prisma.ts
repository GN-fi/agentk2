import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";

// PrismaClient 인스턴스를 생성하고 Accelerate 확장 기능을 적용합니다.
// const prisma = new PrismaClient().$extends(withAccelerate());
const prisma = new PrismaClient();

export default prisma;
