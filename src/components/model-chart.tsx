import { BrandScore } from "@/lib/types";
import { MODEL_NAMES } from "@/lib/mock-data";

interface ModelChartProps {
  scores: BrandScore[];
}

export function ModelChart({ scores }: ModelChartProps) {
  const maxScore = 100;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        AIモデル別 可視性スコア
      </h3>
      <div className="space-y-4">
        {scores.map((item) => (
          <div key={item.model}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-white/70">
                {MODEL_NAMES[item.model]}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/40">
                  {item.mentions}回言及
                </span>
                <span className="text-sm font-medium text-white">
                  {item.score}
                </span>
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                style={{ width: `${(item.score / maxScore) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
