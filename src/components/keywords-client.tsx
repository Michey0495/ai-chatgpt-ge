"use client";

import { useState } from "react";
import type { Keyword } from "@/lib/types";

interface KeywordsClientProps {
  initialKeywords: Keyword[];
}

export function KeywordsClient({ initialKeywords }: KeywordsClientProps) {
  const [keywords, setKeywords] = useState<Keyword[]>(initialKeywords);
  const [showForm, setShowForm] = useState(false);
  const [newKeyword, setNewKeyword] = useState("");
  const [newBrand, setNewBrand] = useState("MyBrand");
  const [scanning, setScanning] = useState<string | null>(null);

  const addKeyword = () => {
    if (!newKeyword.trim()) return;

    const kw: Keyword = {
      id: `kw-${Date.now()}`,
      keyword: newKeyword.trim(),
      brand: newBrand.trim() || "MyBrand",
      lastScore: 0,
      trend: "stable",
      lastScannedAt: new Date().toISOString(),
    };

    setKeywords((prev) => [kw, ...prev]);
    setNewKeyword("");
    setShowForm(false);
  };

  const removeKeyword = (id: string) => {
    setKeywords((prev) => prev.filter((kw) => kw.id !== id));
  };

  const scanKeyword = async (kw: Keyword) => {
    setScanning(kw.id);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: kw.keyword, brand: kw.brand }),
      });
      if (res.ok) {
        const result = await res.json();
        const avgScore = Math.round(
          Object.values(result.scores as Record<string, number>).reduce((a, b) => a + b, 0) / 4
        );
        setKeywords((prev) =>
          prev.map((k) =>
            k.id === kw.id
              ? { ...k, lastScore: avgScore, lastScannedAt: new Date().toISOString(), trend: avgScore > k.lastScore ? "up" : avgScore < k.lastScore ? "down" : "stable" }
              : k
          )
        );
      }
    } catch {
      // silently fail for MVP
    } finally {
      setScanning(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">キーワード管理</h1>
          <p className="mt-1 text-sm text-white/50">
            AI検索エンジンで監視するキーワードを管理
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="cursor-pointer rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
        >
          {showForm ? "キャンセル" : "キーワードを追加"}
        </button>
      </div>

      {showForm && (
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">新しいキーワードを追加</h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-1 block text-sm text-white/50">キーワード</label>
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="例: プロジェクト管理ツール おすすめ"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && addKeyword()}
              />
            </div>
            <div className="sm:w-48">
              <label className="mb-1 block text-sm text-white/50">ブランド名</label>
              <input
                type="text"
                value={newBrand}
                onChange={(e) => setNewBrand(e.target.value)}
                placeholder="MyBrand"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
              />
            </div>
            <button
              onClick={addKeyword}
              disabled={!newKeyword.trim()}
              className="cursor-pointer rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              追加
            </button>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            監視キーワード
          </h3>
          <span className="text-sm text-white/40">{keywords.length}件</span>
        </div>
        {keywords.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-white/40">キーワードが登録されていません</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 cursor-pointer text-sm text-cyan-400 transition-all duration-200 hover:text-cyan-300"
            >
              最初のキーワードを追加
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left text-sm font-medium text-white/50">キーワード</th>
                  <th className="pb-3 text-right text-sm font-medium text-white/50">スコア</th>
                  <th className="pb-3 text-right text-sm font-medium text-white/50">トレンド</th>
                  <th className="pb-3 text-right text-sm font-medium text-white/50">最終スキャン</th>
                  <th className="pb-3 text-right text-sm font-medium text-white/50">操作</th>
                </tr>
              </thead>
              <tbody>
                {keywords.map((kw) => (
                  <tr key={kw.id} className="border-b border-white/5 transition-all duration-200 hover:bg-white/5">
                    <td className="py-3 text-sm text-white">{kw.keyword}</td>
                    <td className="py-3 text-right text-sm font-medium text-white">
                      {kw.lastScore > 0 ? kw.lastScore : "-"}
                    </td>
                    <td className="py-3 text-right">
                      <span className={`text-sm ${kw.trend === "up" ? "text-green-400" : kw.trend === "down" ? "text-red-400" : "text-white/40"}`}>
                        {kw.trend === "up" ? "上昇" : kw.trend === "down" ? "下降" : "横ばい"}
                      </span>
                    </td>
                    <td className="py-3 text-right text-sm text-white/40">
                      {new Date(kw.lastScannedAt).toLocaleDateString("ja-JP")}
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => scanKeyword(kw)}
                          disabled={scanning === kw.id}
                          className="cursor-pointer rounded px-2 py-1 text-xs text-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 disabled:opacity-50"
                        >
                          {scanning === kw.id ? "実行中..." : "スキャン"}
                        </button>
                        <button
                          onClick={() => removeKeyword(kw.id)}
                          className="cursor-pointer rounded px-2 py-1 text-xs text-red-400 transition-all duration-200 hover:bg-red-400/10"
                        >
                          削除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">キーワード追加のヒント</h3>
        <ul className="space-y-2 text-sm text-white/50">
          <li>- 自社サービス名 + 「おすすめ」「比較」「レビュー」などの組み合わせ</li>
          <li>- 業界の一般的な検索クエリ（例: 「プロジェクト管理ツール」）</li>
          <li>- 競合他社名との組み合わせ（例: 「[競合名] 代替」）</li>
          <li>- ユーザーの課題を表すフレーズ（例: 「チーム作業 効率化」）</li>
        </ul>
      </div>
    </div>
  );
}
