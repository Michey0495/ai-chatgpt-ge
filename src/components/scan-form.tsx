"use client";

import { useState } from "react";
import type { ScanResult } from "@/lib/types";

interface ScanFormProps {
  onScanComplete?: (result: ScanResult) => void;
}

export function ScanForm({ onScanComplete }: ScanFormProps) {
  const [keyword, setKeyword] = useState("");
  const [brand, setBrand] = useState("MyBrand");
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || !brand.trim()) return;

    setScanning(true);
    setError(null);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword.trim(), brand: brand.trim() }),
      });

      if (!res.ok) {
        throw new Error("スキャンに失敗しました");
      }

      const result = await res.json();
      onScanComplete?.(result);
      setKeyword("");
    } catch {
      setError("スキャンの実行中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">新規スキャン</h3>
      <form onSubmit={handleScan} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="scan-keyword" className="mb-1 block text-sm text-white/50">キーワード</label>
          <input
            id="scan-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="例: プロジェクト管理ツール おすすめ"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
            disabled={scanning}
          />
        </div>
        <div className="sm:w-48">
          <label htmlFor="scan-brand" className="mb-1 block text-sm text-white/50">ブランド名</label>
          <input
            id="scan-brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="例: MyBrand"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
            disabled={scanning}
          />
        </div>
        <button
          type="submit"
          disabled={scanning || !keyword.trim() || !brand.trim()}
          className="cursor-pointer rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {scanning ? "スキャン中..." : "スキャン実行"}
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
