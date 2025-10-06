import { PATH } from "@/const/Path";
import { SITE } from "@/const/Site";
import { NotebookPen } from "lucide-react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"], // latinだけを指定して軽量化
  weight: ["400", "500", "700"], // 通常、Medium、Bold
  display: "swap", // 初期表示を別フォントで行う
  preload: true, // 事前にフォントを読み込む
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: SITE.TITLE + " | " + SITE.DESCRIPTION,
  description: SITE.DESCRIPTION,
  openGraph: {
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {/* ヘッダー */}
        <header className=" mt-4 ml-4 md:ml-6 lg:ml-8">
          <h1 className="text-lg font-bold text-foreground mb-2 text-balance">
            <NotebookPen className="inline mb-1 mr-1" size={24} />
            <Link href={PATH.HOME}>{SITE.TITLE}</Link>
          </h1>
        </header>

        {/* メイン */}
        {children}

        {/* フッター */}
        <footer className="w-full text-center p-4 mt-8 border-t">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE.AUTHOR}. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
