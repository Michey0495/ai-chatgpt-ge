import { ResponsePreview } from "@/components/response-preview";
import { ScoreCard } from "@/components/score-card";
import { ModelChart } from "@/components/model-chart";
import { mockRecentResults } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { AIModel } from "@/lib/types";

export const metadata = {
  title: "スキャン結果 - GEO Radar",
};

const AI_MODELS: AIModel[] = ["chatgpt", "gemini", "perplexity", "claude"];

export default async function ScanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = mockRecentResults.find((r) => r.id === id);

  if (!result) {
    notFound();
  }

  const avgScore = Math.round(
    AI_MODELS.reduce((sum, m) => sum + result.scores[m], 0) / AI_MODELS.length
  );
  const mentionedCount = result.responses.filter((r) => r.brandMentioned).length;

  const modelScores = AI_MODELS.map((model) => ({
    model,
    score: result.scores[model],
    mentions: result.responses.filter((r) => r.model === model && r.brandMentioned).length,
    sentiment: result.responses.find((r) => r.model === model)?.sentiment || ("neutral" as const),
  }));

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard"
          className="mb-4 inline-block text-sm text-white/40 transition-all duration-200 hover:text-white/60"
        >
          ← ダッシュボードに戻る
        </Link>
        <h1 className="text-2xl font-bold text-white">スキャン結果</h1>
        <p className="mt-1 text-sm text-white/50">
          キーワード: {result.keyword} / ブランド: {result.brand} /{" "}
          {new Date(result.scannedAt).toLocaleDateString("ja-JP")}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-white/50">総合スコア</p>
            <p className="mt-1 text-3xl font-bold text-white">
              {avgScore}<span className="text-lg text-white/40">/100</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-white/50">ブランド言及</p>
            <p className="mt-1 text-3xl font-bold text-white">
              {mentionedCount}<span className="text-lg text-white/40">/4 モデル</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-white/50">最高スコア</p>
            <p className="mt-1 text-3xl font-bold text-white">
              {Math.max(...AI_MODELS.map((m) => result.scores[m]))}
              <span className="text-lg text-white/40">/100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {AI_MODELS.map((model) => (
          <ScoreCard
            key={model}
            label={model === "chatgpt" ? "ChatGPT" : model === "gemini" ? "Gemini" : model === "perplexity" ? "Perplexity" : "Claude"}
            score={result.scores[model]}
          />
        ))}
      </div>

      <ModelChart scores={modelScores} />

      <ResponsePreview
        responses={result.responses}
        keyword={result.keyword}
      />
    </div>
  );
}
