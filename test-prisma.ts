// Prisma Client test script will be written here
import { PrismaClient } from "@prisma/client"; // PrismaClient 타입을 위해 import
import prisma from "./src/lib/prisma"; // 실제 prisma 인스턴스 import (default export)

async function main() {
	console.log("Prisma 테스트를 시작합니다...");

	try {
		// 1. 사용자 생성 (Create)
		console.log("\n1. 사용자 생성 테스트");
		const newUser = await prisma.user.create({
			data: {
				email: `testuser-${Date.now()}@example.com`,
				name: "Test User",
				// 필요한 경우 다른 필수 필드 추가 (예: passwordHash 등)
				// 현재 스키마에는 email, name 외 다른 필수 필드가 없어 보입니다.
			},
		});
		console.log("생성된 사용자:", newUser);

		// 2. 모든 사용자 조회 (Read)
		console.log("\n2. 모든 사용자 조회 테스트");
		const allUsers = await prisma.user.findMany();
		console.log("모든 사용자:", allUsers);

		// 3. 특정 사용자 조회 (Read by ID)
		console.log("\n3. 특정 사용자 조회 테스트");
		const foundUser = await prisma.user.findUnique({
			where: { id: newUser.id },
		});
		console.log("조회된 사용자 (ID 기준):", foundUser);

		// 4. 사용자 정보 수정 (Update)
		console.log("\n4. 사용자 정보 수정 테스트");
		const updatedUser = await prisma.user.update({
			where: { id: newUser.id },
			data: {
				name: "Test User Updated",
			},
		});
		console.log("수정된 사용자 정보:", updatedUser);

		// 5. 사용자 삭제 (Delete)
		console.log("\n5. 사용자 삭제 테스트");
		const deletedUser = await prisma.user.delete({
			where: { id: newUser.id },
		});
		console.log("삭제된 사용자:", deletedUser);

		// 6. 삭제 후 모든 사용자 조회 (확인)
		console.log("\n6. 삭제 후 모든 사용자 조회 테스트");
		const usersAfterDelete = await prisma.user.findMany();
		console.log("삭제 후 모든 사용자:", usersAfterDelete);

		console.log("\nPrisma 테스트가 성공적으로 완료되었습니다.");
	} catch (error) {
		console.error("Prisma 테스트 중 오류 발생:", error);
	} finally {
		await prisma.$disconnect(); // 테스트 완료 후 Prisma Client 연결 종료
		console.log("Prisma Client 연결이 종료되었습니다.");
	}
}

main();
