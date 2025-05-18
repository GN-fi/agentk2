import NextAuth, {
	type AuthOptions,
	type User,
	type Account,
	type Profile,
	type Session,
} from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";

if (!process.env.GOOGLE_CLIENT_ID) {
	throw new Error("Missing GOOGLE_CLIENT_ID in .env.local");
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error("Missing GOOGLE_CLIENT_SECRET in .env.local");
}

const authOptions: AuthOptions = {
	// 어댑터를 사용하지 않으면 JWT 세션이 기본값입니다.
	// 데이터베이스에 세션을 저장하려면 어댑터를 설정해야 합니다.
	// 예: import { PrismaAdapter } from "@next-auth/prisma-adapter"
	// adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			// authorization: {
			//   params: {
			//     prompt: "consent",
			//     access_type: "offline",
			//     response_type: "code"
			//   }
			// } // 필요한 경우 추가 권한 범위 요청
		}),
		// 다른 프로바이더 추가 가능 (예: GitHub, Kakao 등)
		CredentialsProvider({
			id: "credentials",
			type: "credentials",
			// 로그인 폼에 표시될 이름 (예: "Sign in with Credentials")
			// Credentials Provider를 직접 사용할 것이므로 UI에 표시될 필요는 없을 수 있습니다.
			name: "이메일/비밀번호",
			// `credentials`는 로그인 페이지에서 제출할 것으로 예상되는 필드를 정의합니다.
			// 예: credentials: { username: { label: "Username", type: "text", placeholder: "jsmith" }, password: { label: "Password", type: "password" } }
			// 여기서는 커스텀 로그인 페이지를 사용하므로, NextAuth.js가 자동으로 폼을 생성하지는 않습니다.
			// 하지만 authorize 함수에서 credentials 객체를 통해 값을 받을 수 있습니다.
			credentials: {
				email: {
					label: "이메일",
					type: "email",
					placeholder: "email@example.com",
				},
				password: { label: "비밀번호", type: "password" },
			},
			async authorize(credentials, req): Promise<User | null> {
				// 여기에 사용자 인증 로직을 추가합니다.
				// 예를 들어, 데이터베이스에서 사용자를 조회합니다.
				// credentials 객체에는 로그인 페이지에서 제출된 값이 들어있습니다.
				// (주의: credentials 객체는 null일 수 있으므로, 사용 전에 확인해야 합니다.)

				if (!credentials || !credentials.email || !credentials.password) {
					return null;
				}

				// 임시 사용자 정보 (실제 환경에서는 DB 조회)
				const users = [
					{
						id: "1",
						email: "user@example.com",
						password: "password123",
						name: "테스트 사용자",
					},
					{
						id: "2",
						email: "testuser@example.com",
						password: "testpassword",
						name: "수동가입 테스트",
					},
				];

				const user = users.find((u) => u.email === credentials.email);

				if (user && user.password === credentials.password) {
					// 인증 성공 시 사용자 객체를 반환합니다.
					// 반환되는 객체는 세션에 저장될 수 있는 정보만 포함해야 합니다. (비밀번호 제외)
					return { id: user.id, name: user.name, email: user.email };
				}
				// 인증 실패 시 null 또는 에러를 반환합니다.
				// throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
				return null; // null을 반환하면 NextAuth.js 기본 에러 페이지로 리다이렉션 됩니다.
			},
		}),
	],
	// secret: process.env.NEXTAUTH_SECRET, // NEXTAUTH_SECRET은 자동으로 로드됩니다.
	// session: {
	//   strategy: 'jwt', // 기본값
	// },
	pages: {
		// 커스텀 로그인 페이지 설정
		signIn: "/login",
		// signOut: '/auth/signout', // 필요시 커스텀 로그아웃 페이지도 설정 가능
		// error: '/auth/error', // 커스텀 에러 페이지
		// verifyRequest: '/auth/verify-request', // 이메일 인증 시 사용
		// newUser: null, // 신규 사용자 리다이렉션 없음
	},
	callbacks: {
		// 세션 및 JWT에 추가 정보 포함 (선택 사항)
		async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
			// signOut에서 callbackUrl이 주어지면 해당 url을 사용합니다.
			// signIn 후 리다이렉션 등 다른 경우에도 이 콜백이 호출될 수 있으므로,
			// 현재는 단순하게 url이 baseUrl로 시작하면 url을 반환하고, 아니면 baseUrl을 반환합니다.
			// signOut({ callbackUrl: '/' })의 경우 url은 `${baseUrl}/` 형태가 됩니다.
			if (url.startsWith(baseUrl)) {
				return url;
			}
			// 만약 url이 상대 경로로만 주어진 경우 (예: '/dashboard')
			if (url.startsWith("/")) {
				return `${baseUrl}${url}`;
			}
			return baseUrl;
		},
		// JWT 콜백은 JWT가 생성되거나 업데이트될 때마다 호출됩니다.
		// 세션 콜백에서 사용자 정보를 접근하려면 JWT에 해당 정보를 미리 담아두어야 합니다.
		async jwt({
			token,
			user,
			account,
			profile,
		}: {
			token: JWT;
			user?: User;
			account?: Account | null;
			profile?: Profile | GoogleProfile;
		}): Promise<JWT> {
			// 초기 로그인 시 user 객체가 전달됩니다.
			if (user?.id) {
				token.id = user.id;
			}
			return token;
		},
		// 세션 콜백은 클라이언트에서 useSession() 또는 getSession()을 통해 세션 정보를 조회할 때마다 호출됩니다.
		async session({
			session,
			token,
			user: sessionUser,
		}: { session: Session; token: JWT; user: User }): Promise<Session> {
			// token에서 id를 가져와 session.user에 할당합니다.
			if (token.id && session.user) {
				session.user.id = token.id;
			}
			return session;
		},
	},
	// debug: process.env.NODE_ENV === 'development', // 개발 환경에서 디버그 메시지 활성화
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
