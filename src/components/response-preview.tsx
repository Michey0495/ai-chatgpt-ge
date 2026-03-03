import { AIResponse } from "@/lib/types";
import { MODEL_NAMES } from "@/lib/mock-data";

interface ResponsePreviewProps {
  responses: AIResponse[];
  keyword: string;
}

export function ResponsePreview({ responses, keyword }: ResponsePreviewProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-1 text-lg font-semibold text-white">AI回答プレビュー</h3>
      <p className="mb-4 text-sm text-white/40">
        キーワード: {keyword}
      </p>
      <div className="space-y-3">
        {responses.map((res) => (
          <div
            key={res.model}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                {MODEL_NAMES[res.model]}
              </span>
              <div className="flex items-center gap-2">
                {res.brandMentioned ? (
                  <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-400">
                    言及あり {res.position !== null ? `#${res.position}` : ""}
                  </span>
                ) : (
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/40">
                    言及なし
                  </span>
                )}
                <span
                  className={`text-xs ${
                    res.sentiment === "positive"
                      ? "text-green-400"
                      : res.sentiment === "negative"
                        ? "text-red-400"
                        : "text-white/40"
                  }`}
                >
                  {res.sentiment === "positive"
                    ? "好意的"
                    : res.sentiment === "negative"
                      ? "否定的"
                      : "中立"}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {res.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
