import { relations } from "drizzle-orm"; // Drizzle ORM의 관계 기능을 relations로 import
// src/lib/db/schema.ts
import {
	integer,
	pgTable,
	primaryKey,
	serial,
	text,
	timestamp,
	uniqueIndex,
	varchar,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";

export const users = pgTable("users", {
	id: text("id").primaryKey().notNull().default("cuid()"),
	name: varchar("name", { length: 255 }),
	email: varchar("email", { length: 255 }).unique(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
	hashedPassword: text("hashedPassword"),
	createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
});

export const accounts = pgTable(
	"account",
	{
		userId: text("userId")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		type: text("type").$type<AdapterAccount>().notNull(),
		provider: text("provider").notNull(),
		providerAccountId: text("providerAccountId").notNull(),
		refresh_token: text("refresh_token"),
		access_token: text("access_token"),
		expires_at: integer("expires_at"),
		token_type: text("token_type"),
		scope: text("scope"),
		id_token: text("id_token"),
		session_state: text("session_state"),
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId],
		}),
	}),
);

export const sessions = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
	"verificationToken",
	{
		identifier: text("identifier").notNull(),
		token: text("token").notNull(),
		expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(vt) => ({
		compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
	}),
);

export const posts = pgTable("posts", {
	id: text("id").primaryKey().notNull().default("cuid()"),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content"),
	createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
	authorId: text("authorId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});

// Post 테이블의 select 타입 정의 및 export
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

// 관계 정의
export const usersRelations = relations(users, ({ many }) => ({
	accounts: many(accounts),
	sessions: many(sessions),
	posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
	author: one(users, {
		fields: [posts.authorId],
		references: [users.id],
	}),
}));
