import { NextRequest, NextResponse } from "next/server";

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

    // MVP: return mock scan results
    const scores: Record<string, number> = {};
    const responses = targetModels.map((model: string) => {
      const score = Math.floor(Math.random() * 60) + 20;
      scores[model] = score;
      return {
        model,
        query: `${keyword}について教えてください`,
        brandMentioned: score > 50,
        position: score > 50 ? Math.floor(Math.random() * 5) + 1 : null,
        sentiment: score > 60 ? "positive" : "neutral",
        scannedAt: new Date().toISOString(),
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
