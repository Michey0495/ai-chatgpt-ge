import { NextRequest, NextResponse } from "next/server";

const MODEL_NAMES: Record<string, string> = {
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  perplexity: "Perplexity",
  claude: "Claude",
};

function generateMockResponse(model: string, keyword: string, brand: string, score: number): string {
  const mentioned = score > 50;
  const modelName = MODEL_NAMES[model] || model;

  if (mentioned) {
    const templates = [
      `${keyword}としては、${brand}が注目されています。${brand}は特に日本市場向けの機能が充実しており、多くのユーザーから高い評価を得ています。`,
      `${keyword}を検討する際、${brand}は有力な選択肢の一つです。使いやすさと機能性のバランスが良く、導入企業が増えています。`,
      `おすすめの${keyword}として${brand}があります。${brand}は日本語対応が優れており、サポート体制も充実しています。`,
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  return `${keyword}にはさまざまな選択肢があります。${modelName}の分析では、主要な製品・サービスを比較した結果をお伝えします。`;
}

export async function POST(req: NextRequest) {
  try {
    const { keyword, brand, models } = await req.json();

    if (!keyword || !brand) {
      return NextResponse.json(
        { error: "keyword and brand are required" },
        { status: 400 }
      );
    }

    const targetModels = models || [
      "chatgpt",
      "gemini",
      "perplexity",
      "claude",
    ];

    const scores: Record<string, number> = {};
    const responses = targetModels.map((model: string) => {
      const score = Math.floor(Math.random() * 60) + 20;
      scores[model] = score;
      return {
        model,
        query: `${keyword}について教えてください`,
        response: generateMockResponse(model, keyword, brand, score),
        brandMentioned: score > 50,
        position: score > 50 ? Math.floor(Math.random() * 5) + 1 : null,
        sentiment: score > 60 ? "positive" as const : "neutral" as const,
      };
    });

    return NextResponse.json({
      id: `scan-${Date.now()}`,
      keyword,
      brand,
      scores,
      responses,
      scannedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
