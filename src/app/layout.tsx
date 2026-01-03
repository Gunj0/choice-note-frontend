import { SITE } from "@/const/Site";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Noto_Sans_JP } from "next/font/google";
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        <SessionProvider>
          <div className="min-h-screen">{children}</div>

          <footer className="w-full text-center p-4 mt-8 border-t">
            <p className="text-sm text-gray-500">
              &copy; {SITE.YEAR} {SITE.AUTHOR}. All rights reserved.
            </p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
