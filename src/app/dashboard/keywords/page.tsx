import { KeywordTable } from "@/components/keyword-table";
import { mockKeywords } from "@/lib/mock-data";

export const metadata = {
  title: "キーワード管理 - GEO Radar",
};

export default function KeywordsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">キーワード管理</h1>
          <p className="mt-1 text-sm text-white/50">
            AI検索エンジンで監視するキーワードを管理
          </p>
        </div>
        <button className="cursor-pointer rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300">
          キーワードを追加
        </button>
      </div>

      <KeywordTable keywords={mockKeywords} />

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">
          キーワード追加のヒント
        </h3>
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
