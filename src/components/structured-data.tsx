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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "GEO（Generative Engine Optimization）とは何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEOはAI検索エンジン（ChatGPT、Gemini、Perplexity、Claude等）の回答に自社ブランドが表示されるよう最適化する手法です。従来のSEOがGoogle検索を対象とするのに対し、GEOはAIの生成回答におけるブランドの言及・推薦・引用を対象とします。",
        },
      },
      {
        "@type": "Question",
        name: "GEO Radarで何ができますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO Radarは4大AI検索エンジン（ChatGPT、Gemini、Perplexity、Claude）でのブランド可視性を0-100でスコア化し、トレンド推移を追跡します。各AIモデルの実際の回答内容をプレビューし、ブランドの言及箇所やセンチメントを分析できます。",
        },
      },
      {
        "@type": "Question",
        name: "無料プランはありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。無料プランでは1ブランド、5キーワードまで、週1回のスキャンが可能です。クレジットカード不要で今すぐ始められます。",
        },
      },
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GEO Radar",
    url: "https://geo-radar.ezoai.jp",
    description:
      "AI検索エンジンでのブランド可視性を監視・スコア化するGEOモニタリングツール",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
    </>
  );
}
