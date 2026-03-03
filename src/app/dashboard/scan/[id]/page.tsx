import { ResponsePreview } from "@/components/response-preview";
import { ScoreCard } from "@/components/score-card";
import { mockRecentResults } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "スキャン結果 - GEO Radar",
};

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
          キーワード: {result.keyword} /{" "}
          {new Date(result.scannedAt).toLocaleDateString("ja-JP")}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ScoreCard label="ChatGPT" score={result.scores.chatgpt} />
        <ScoreCard label="Gemini" score={result.scores.gemini} />
        <ScoreCard label="Perplexity" score={result.scores.perplexity} />
        <ScoreCard label="Claude" score={result.scores.claude} />
      </div>

      <ResponsePreview
        responses={result.responses}
        keyword={result.keyword}
      />
    </div>
  );
}
