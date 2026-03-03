import { ScoreCard } from "@/components/score-card";
import { ModelChart } from "@/components/model-chart";
import { ResponsePreview } from "@/components/response-preview";
import { KeywordTable } from "@/components/keyword-table";
import { mockDashboardData } from "@/lib/mock-data";

export const metadata = {
  title: "ダッシュボード - GEO Radar",
};

export default function DashboardPage() {
  const data = mockDashboardData;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">ダッシュボード</h1>
        <p className="mt-1 text-sm text-white/50">
          ブランドのAI検索可視性をリアルタイムで監視
        </p>
      </div>

      {/* Score Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ScoreCard
          label="総合スコア"
          score={data.overallScore}
          trend={data.trend}
          subtitle="全AIモデル平均"
        />
        <ScoreCard
          label="ChatGPT"
          score={data.modelScores[0].score}
          trend="up"
        />
        <ScoreCard
          label="Gemini"
          score={data.modelScores[1].score}
          trend="stable"
        />
        <ScoreCard
          label="Perplexity"
          score={data.modelScores[2].score}
          trend="up"
        />
      </div>

      {/* Charts & Preview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ModelChart scores={data.modelScores} />
        {data.recentResults[0] && (
          <ResponsePreview
            responses={data.recentResults[0].responses}
            keyword={data.recentResults[0].keyword}
          />
        )}
      </div>

      {/* Keywords */}
      <KeywordTable keywords={data.keywords} />
    </div>
  );
}
