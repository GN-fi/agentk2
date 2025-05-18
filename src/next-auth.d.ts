import NextAuth, { type DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			id?: string | null;
		} & DefaultSession["user"];
	}

	// User 인터페이스에도 id를 명시적으로 포함 (CredentialsProvider의 authorize 반환 타입과 일치시키기 위함)
	interface User {
		id?: string | null;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		id?: string | null;
	}
}
