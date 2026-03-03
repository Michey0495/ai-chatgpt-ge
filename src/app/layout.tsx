import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEO Radar - AI検索エンジン可視性モニタリング",
  description:
    "ChatGPT、Gemini、Perplexity、ClaudeでのブランドAI検索可視性を監視・分析。日本語完全対応のGEOモニタリングツール。",
  keywords: [
    "AI検索 対策",
    "GEO対策",
    "ChatGPT SEO",
    "AI検索エンジン 最適化",
    "Generative Engine Optimization",
  ],
  openGraph: {
    title: "GEO Radar - AI検索エンジン可視性モニタリング",
    description:
      "ChatGPT、Gemini、Perplexity、ClaudeでのブランドAI検索可視性を監視・分析。",
    url: "https://geo-radar.ezoai.jp",
    siteName: "GEO Radar",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Radar - AI検索エンジン可視性モニタリング",
    description:
      "ChatGPT、Gemini、Perplexity、ClaudeでのブランドAI検索可視性を監視・分析。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
