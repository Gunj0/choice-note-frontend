import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

// APIレスポンス
type AuthResponse = {
  email: string;
  token: string; // C#バックエンドが発行するJWTを格納するプロパティ
  expiration: number;
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  // デフォルト: JWT
  session: {},

  providers: [
    // Googleプロバイダー
    Google,

    // メール・パスワードプロバイダー
    Credentials({
      name: "Email/Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // C#バックエンドのLogin APIを呼び出し
        const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "X-Client-Secret": process.env.BACKEND_CLIENT_SECRET!, // APIキー
          },
          body: JSON.stringify(credentials),
        });
        // レスポンスからユーザー情報を取得
        const user: AuthResponse = await res.json();
        // 認証成功時にユーザーオブジェクトを返す
        if (res.ok && user) {
          // 返却されたJWT(Token)をAuth.jsのユーザーオブジェクトに含める
          return {
            id: user.email,
            email: user.email,
            token: user.token,
          };
        }
        return null;
      },
    }),
  ],

  // 追加処理
  callbacks: {
    // ログイン時
    async signIn({ user, account }) {
      // Googleログイン
      if (account?.provider === "google") {
        try {
          // バックエンドにユーザー登録
          const res = await fetch(
            `${process.env.BACKEND_API_URL}/auth/external-login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // "X-Client-Secret": process.env.BACKEND_CLIENT_SECRET!, // APIキー
              },
              body: JSON.stringify({
                email: user.email,
                name: user.name,
                provider: "google",
                providerKey: user.id,
              }),
            }
          );
          if (!res.ok) throw new Error(res.statusText);
          // レスポンスをUserに保持
          const data: AuthResponse = await res.json();
          user.token = data.token;
          user.expiration = new Date(data.expiration);
        } catch (error) {
          console.error("Google login error:", error);
          // TODO: カスタムエラーページにリダイレクトさせる 例: return '/login-error'
          return false;
        }
      }
      // ログイン成功
      return true;
    },

    // ログイン・ログアウト等のリダイレクト時
    async redirect({ baseUrl }) {
      return baseUrl;
    },

    // JWTトークン生成・更新時
    async jwt({ token, user }) {
      // Userオブジェクトが存在する場合、つまりログイン時にトークンを更新
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },

    // セッションチェック時
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
