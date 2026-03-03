import { NextRequest, NextResponse } from "next/server";
import { mockDashboardData, mockKeywords } from "@/lib/mock-data";

const TOOLS = {
  geo_scan: {
    name: "geo_scan",
    description:
      "指定キーワードでAI検索エンジン（ChatGPT, Gemini, Perplexity, Claude）のブランド可視性をスキャンし、スコアを返します。",
    parameters: {
      type: "object",
      properties: {
        keyword: { type: "string", description: "検索キーワード" },
        brand: { type: "string", description: "監視対象ブランド名" },
        models: {
          type: "array",
          items: { type: "string" },
          description:
            "スキャン対象モデル（chatgpt, gemini, perplexity, claude）",
        },
      },
      required: ["keyword", "brand"],
    },
  },
  geo_report: {
    name: "geo_report",
    description:
      "ブランドの可視性レポートを生成します。全体スコア、トレンド、モデル別分析を含みます。",
    parameters: {
      type: "object",
      properties: {
        brand: { type: "string", description: "レポート対象ブランド名" },
        period: {
          type: "string",
          enum: ["7d", "30d", "90d"],
          description: "レポート期間",
        },
      },
      required: ["brand"],
    },
  },
  geo_keywords: {
    name: "geo_keywords",
    description: "監視中のキーワード一覧とその最新スコアを取得します。",
    parameters: {
      type: "object",
      properties: {
        brand: { type: "string", description: "フィルタ用ブランド名" },
      },
    },
  },
};

async function handleToolCall(tool: string, params: Record<string, unknown>) {
  switch (tool) {
    case "geo_scan": {
      const keyword = params.keyword as string;
      const brand = params.brand as string;
      return {
        keyword,
        brand,
        scores: {
          chatgpt: Math.floor(Math.random() * 40) + 40,
          gemini: Math.floor(Math.random() * 40) + 30,
          perplexity: Math.floor(Math.random() * 40) + 35,
          claude: Math.floor(Math.random() * 40) + 25,
        },
        summary: `「${keyword}」におけるブランド「${brand}」のAI検索可視性分析結果です。`,
        scannedAt: new Date().toISOString(),
      };
    }
    case "geo_report": {
      const data = mockDashboardData;
      return {
        brand: params.brand,
        period: params.period || "7d",
        overallScore: data.overallScore,
        trend: data.trend,
        modelBreakdown: Object.fromEntries(
          data.modelScores.map((s) => [s.model, s.score])
        ),
        totalScans: data.totalScans,
        generatedAt: new Date().toISOString(),
      };
    }
    case "geo_keywords": {
      const keywords = mockKeywords.map((kw) => ({
        keyword: kw.keyword,
        lastScore: kw.lastScore,
        trend: kw.trend,
        lastScannedAt: kw.lastScannedAt,
      }));
      return { keywords };
    }
    default:
      return { error: `Unknown tool: ${tool}` };
  }
}

export async function GET() {
  return NextResponse.json({
    name: "GEO Radar MCP Server",
    version: "1.0.0",
    description:
      "AI検索エンジンでのブランド可視性を監視・分析するMCPサーバー",
    tools: Object.values(TOOLS),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tool, params } = body;

    if (!tool || !TOOLS[tool as keyof typeof TOOLS]) {
      return NextResponse.json(
        {
          error: "Invalid tool",
          available_tools: Object.keys(TOOLS),
        },
        { status: 400 }
      );
    }

    const result = await handleToolCall(tool, params || {});
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
