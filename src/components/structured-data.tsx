export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GEO Radar",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI検索エンジン（ChatGPT、Gemini、Perplexity、Claude）でのブランド可視性を監視・分析するダッシュボード。日本語完全対応のGEOモニタリングツール。",
    url: "https://geo-radar.ezoai.jp",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "JPY",
        description: "1ブランド、5キーワード、週1回スキャン",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "980",
        priceCurrency: "JPY",
        description: "3ブランド、50キーワード、日次スキャン、競合比較分析",
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "2980",
        priceCurrency: "JPY",
        description: "無制限ブランド・キーワード、リアルタイム監視、APIアクセス",
      },
    ],
    featureList: [
      "ChatGPT可視性スキャン",
      "Gemini可視性スキャン",
      "Perplexity可視性スキャン",
      "Claude可視性スキャン",
      "ブランド言及トラッキング",
      "センチメント分析",
      "トレンドレポート",
      "MCP/A2A API対応",
    ],
    inLanguage: "ja",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GEO Radar",
    url: "https://geo-radar.ezoai.jp",
    description: "AI検索エンジン可視性モニタリングサービス",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </>
  );
}
