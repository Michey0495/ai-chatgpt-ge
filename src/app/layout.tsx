import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { StructuredData } from "@/components/structured-data";
import { FeedbackWidget } from "@/components/feedback-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GEO Radar - AI検索エンジンでのブランド可視性を監視・スコア化",
    template: "%s | GEO Radar",
  },
  description:
    "ChatGPT・Gemini・Perplexity・Claudeがあなたのブランドをどう紹介しているかを0-100でスコア化。AI検索の可視性を測定・追跡する日本初のGEOモニタリングツール。無料プランあり。",
  keywords: [
    "GEO対策",
    "AI検索対策",
    "ChatGPT SEO",
    "Generative Engine Optimization",
    "AI検索エンジン最適化",
    "ブランド可視性モニタリング",
    "AI検索モニタリング",
    "GEOモニタリング",
    "ChatGPT ブランド",
    "Gemini SEO",
    "Perplexity 対策",
    "Claude 検索",
    "AI マーケティング",
    "GEO Radar",
    "AI visibility monitoring",
    "generative search optimization",
  ],
  metadataBase: new URL("https://geo-radar.ezoai.jp"),
  openGraph: {
    title: "GEO Radar - AI検索でのブランド可視性をスコア化",
    description:
      "ChatGPT・Gemini・Perplexity・Claudeでの自社ブランドの言及・引用状況を0-100でスコア化して追跡。日本初のGEOモニタリングツール。",
    url: "https://geo-radar.ezoai.jp",
    siteName: "GEO Radar",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Radar - AI検索でのブランド可視性をスコア化",
    description:
      "ChatGPT・Gemini・Perplexity・Claudeでのブランド言及をスコア化して追跡。日本初のGEOモニタリングツール。無料プランあり。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://geo-radar.ezoai.jp",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <FeedbackWidget repoName="ai-chatgpt-ge" />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
