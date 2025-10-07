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
  variable: "--font-noto-sans-jp", // CSS変数として使用可能にする
  // display: "swap", // デフォルトなので不要
  // preload: true, // デフォルトなので不要
  // adjustFontFallback: true, // デフォルトなので不要
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: SITE.TITLE + " | " + SITE.DESCRIPTION,
  description: SITE.DESCRIPTION,
  openGraph: {
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: SITE.URL,
    siteName: SITE.TITLE,
    images: [
      {
        url: SITE.OGP,
        width: 1200,
        height: 630,
        alt: SITE.TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
        <header className=" mt-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-foreground mb-2 text-balance">
            <NotebookPen className="inline mb-1 mr-1" size={24} aria-hidden />
            <Link href={PATH.HOME}>{SITE.TITLE}</Link>
          </h1>
        </header>

        {/* メイン */}
        {children}

        {/* フッター */}
        <footer className="w-full text-center p-4 mt-8 border-t">
          <p className="text-sm text-gray-500">
            &copy; {SITE.YEAR} {SITE.AUTHOR}. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
