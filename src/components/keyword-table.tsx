import { Keyword } from "@/lib/types";

interface KeywordTableProps {
  keywords: Keyword[];
}

export function KeywordTable({ keywords }: KeywordTableProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        監視キーワード
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-3 text-left text-sm font-medium text-white/50">
                キーワード
              </th>
              <th className="pb-3 text-right text-sm font-medium text-white/50">
                スコア
              </th>
              <th className="pb-3 text-right text-sm font-medium text-white/50">
                トレンド
              </th>
              <th className="pb-3 text-right text-sm font-medium text-white/50">
                最終スキャン
              </th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((kw) => (
              <tr
                key={kw.id}
                className="border-b border-white/5 transition-all duration-200 hover:bg-white/5"
              >
                <td className="py-3 text-sm text-white">{kw.keyword}</td>
                <td className="py-3 text-right text-sm font-medium text-white">
                  {kw.lastScore}
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`text-sm ${
                      kw.trend === "up"
                        ? "text-green-400"
                        : kw.trend === "down"
                          ? "text-red-400"
                          : "text-white/40"
                    }`}
                  >
                    {kw.trend === "up"
                      ? "上昇"
                      : kw.trend === "down"
                        ? "下降"
                        : "横ばい"}
                  </span>
                </td>
                <td className="py-3 text-right text-sm text-white/40">
                  {new Date(kw.lastScannedAt).toLocaleDateString("ja-JP")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
