"use client";

import { useState } from "react";

export function FeedbackWidget({ repoName }: { repoName: string }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"bug" | "feature" | "other">("bug");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async () => {
    if (!message.trim()) return;
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, message, repo: repoName }),
      });
      setSent(true);
      setTimeout(() => {
        setOpen(false);
        setSent(false);
        setMessage("");
      }, 2000);
    } catch {
      alert("送信に失敗しました");
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
      >
        フィードバック
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 rounded-xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-white">フィードバック</h3>
        <button
          onClick={() => setOpen(false)}
          className="cursor-pointer text-white/40 transition-all duration-200 hover:text-white/60"
        >
          &times;
        </button>
      </div>
      {sent ? (
        <p className="py-4 text-center text-sm text-cyan-400">
          送信しました！ありがとうございます
        </p>
      ) : (
        <>
          <div className="mb-3 flex gap-2">
            {(["bug", "feature", "other"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs transition-all duration-200 ${
                  type === t
                    ? "bg-cyan-400 text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {t === "bug" ? "不具合" : t === "feature" ? "要望" : "その他"}
              </button>
            ))}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ご意見をお聞かせください..."
            className="mb-3 h-24 w-full resize-none rounded-lg border border-white/10 bg-white/5 p-2 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
          />
          <button
            onClick={submit}
            disabled={!message.trim()}
            className="w-full cursor-pointer rounded-lg bg-cyan-400 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            送信
          </button>
        </>
      )}
    </div>
  );
}
