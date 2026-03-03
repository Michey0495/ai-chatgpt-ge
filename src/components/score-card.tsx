interface ScoreCardProps {
  label: string;
  score: number;
  trend?: "up" | "down" | "stable";
  subtitle?: string;
}

export function ScoreCard({ label, score, trend, subtitle }: ScoreCardProps) {
  const trendColor =
    trend === "up"
      ? "text-green-400"
      : trend === "down"
        ? "text-red-400"
        : "text-white/50";
  const trendArrow =
    trend === "up" ? "+" : trend === "down" ? "-" : "";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-white/20">
      <p className="text-sm text-white/50">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-4xl font-bold text-white">{score}</span>
        <span className="mb-1 text-lg text-white/50">/100</span>
        {trend && (
          <span className={`mb-1 text-sm font-medium ${trendColor}`}>
            {trendArrow}{trend === "up" ? "5.2" : trend === "down" ? "3.1" : "0.0"}%
          </span>
        )}
      </div>
      {subtitle && <p className="mt-1 text-sm text-white/40">{subtitle}</p>}
    </div>
  );
}
