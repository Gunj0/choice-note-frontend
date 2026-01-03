import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  // Userオブジェクトの拡張
  interface User {
    token?: string; // バックエンドから受け取るJWT用
    expiration?: Date; // トークンの有効期限
  }

  // Sessionオブジェクトの拡張
  interface Session {
    accessToken?: string;
    user: {
      // 標準の user プロパティ（name, email 等）を維持しつつ拡張
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  // JWT トークンの拡張
  interface JWT {
    accessToken?: string; // バックエンドから受け取るJWT用
  }
}
