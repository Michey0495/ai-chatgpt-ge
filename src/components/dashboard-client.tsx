"use client";

import { useState } from "react";
import { ScoreCard } from "@/components/score-card";
import { ModelChart } from "@/components/model-chart";
import { ResponsePreview } from "@/components/response-preview";
import { KeywordTable } from "@/components/keyword-table";
import { ScanForm } from "@/components/scan-form";
import type { DashboardData, ScanResult, BrandScore, AIModel } from "@/lib/types";

const AI_MODELS: AIModel[] = ["chatgpt", "gemini", "perplexity", "claude"];

export function DashboardClient({ initialData }: { initialData: DashboardData }) {
  const [data, setData] = useState(initialData);
  const [latestScan, setLatestScan] = useState<ScanResult | null>(null);

  const handleScanComplete = (result: ScanResult) => {
    setLatestScan(result);

    const newModelScores: BrandScore[] = AI_MODELS.map((model) => ({
      model,
      score: result.scores[model] ?? 0,
      mentions: data.modelScores.find((s) => s.model === model)?.mentions ?? 0,
      sentiment: (result.scores[model] ?? 0) > 60 ? "positive" as const : "neutral" as const,
    }));

    const overallScore = Math.round(
      AI_MODELS.reduce((sum, m) => sum + (result.scores[m] ?? 0), 0) / AI_MODELS.length
    );

    setData((prev) => ({
      ...prev,
      overallScore,
      totalScans: prev.totalScans + 1,
      modelScores: newModelScores,
      recentResults: [result, ...prev.recentResults].slice(0, 10),
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">ダッシュボード</h1>
        <p className="mt-1 text-sm text-white/50">
          ブランドのAI検索可視性をリアルタイムで監視
        </p>
      </div>

      <ScanForm onScanComplete={handleScanComplete} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <ScoreCard
          label="総合スコア"
          score={data.overallScore}
          trend={data.trend}
          subtitle="全AIモデル平均"
        />
        {data.modelScores.map((ms) => (
          <ScoreCard key={ms.model} label={ms.model === "chatgpt" ? "ChatGPT" : ms.model === "gemini" ? "Gemini" : ms.model === "perplexity" ? "Perplexity" : "Claude"} score={ms.score} trend={ms.score > 50 ? "up" : ms.score < 40 ? "down" : "stable"} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ModelChart scores={data.modelScores} />
        {(latestScan || data.recentResults[0]) && (
          <ResponsePreview
            responses={(latestScan || data.recentResults[0]).responses}
            keyword={(latestScan || data.recentResults[0]).keyword}
          />
        )}
      </div>

      <KeywordTable keywords={data.keywords} />

      {data.recentResults.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">最近のスキャン結果</h3>
          <div className="space-y-3">
            {data.recentResults.map((result) => (
              <a
                key={result.id}
                href={`/dashboard/scan/${result.id}`}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/10 hover:bg-white/5"
              >
                <div>
                  <p className="text-sm font-medium text-white">{result.keyword}</p>
                  <p className="text-xs text-white/40">
                    {new Date(result.scannedAt).toLocaleString("ja-JP")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {AI_MODELS.map((model) => (
                    <div key={model} className="text-center">
                      <p className="text-xs text-white/40">
                        {model === "chatgpt" ? "GPT" : model === "gemini" ? "Gem" : model === "perplexity" ? "Pplx" : "Cld"}
                      </p>
                      <p className="text-sm font-medium text-white">{result.scores[model]}</p>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
