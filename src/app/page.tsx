import Link from "next/link";
import { Header } from "@/components/header";

const FEATURES = [
  {
    title: "マルチモデル対応",
    description:
      "ChatGPT、Gemini、Perplexity、Claudeの4大AI検索エンジンを同時に監視。各モデルでのブランド表示状況を一目で把握。",
  },
  {
    title: "可視性スコアリング",
    description:
      "独自アルゴリズムでブランドの言及頻度・表示順位・センチメントを0-100のスコアに数値化。改善効果を定量的に追跡。",
  },
  {
    title: "AI回答プレビュー",
    description:
      "各AIモデルがキーワードに対してどう回答しているかをリアルタイムでプレビュー。ブランドの言及箇所と文脈を確認。",
  },
  {
    title: "トレンド分析",
    description:
      "週次・月次でのスコア推移を追跡。GEO施策の効果測定とレポート生成で、改善サイクルを高速化。",
  },
  {
    title: "キーワード管理",
    description:
      "業界・サービス別にキーワードを登録。競合ブランドとの比較分析で、AI検索での自社ポジションを把握。",
  },
  {
    title: "AIエージェント連携",
    description:
      "MCP/A2A対応のAPIを標準搭載。他のAIエージェントやツールからGEOデータに直接アクセス可能。",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "0",
    features: [
      "1ブランド",
      "5キーワード",
      "週1回スキャン",
      "基本ダッシュボード",
    ],
  },
  {
    name: "Pro",
    price: "980",
    features: [
      "3ブランド",
      "50キーワード",
      "日次スキャン",
      "競合比較分析",
      "トレンドレポート",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "2,980",
    features: [
      "無制限ブランド",
      "無制限キーワード",
      "リアルタイム監視",
      "API / MCPアクセス",
      "優先サポート",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-cyan-400 uppercase">
            Generative Engine Optimization
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white">
            AI検索エンジンでの
            <br />
            ブランド可視性を監視
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            ChatGPT、Gemini、Perplexity、Claude。
            <br />
            4大AI検索エンジンがあなたのブランドをどう回答しているか、
            <br />
            スコア化して追跡する日本語対応GEOモニタリングツール。
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="cursor-pointer rounded-lg bg-cyan-400 px-8 py-3 text-base font-medium text-black transition-all duration-200 hover:bg-cyan-300"
            >
              無料で始める
            </Link>
            <Link
              href="/dashboard"
              className="cursor-pointer rounded-lg border border-white/10 px-8 py-3 text-base font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/5"
            >
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Score Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/40">ブランド可視性スコア</p>
              <p className="text-3xl font-bold text-white">
                54<span className="text-lg text-white/40">/100</span>
              </p>
            </div>
            <span className="rounded-full bg-green-400/10 px-3 py-1 text-sm text-green-400">
              +5.2% 先週比
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "ChatGPT", score: 62 },
              { name: "Gemini", score: 55 },
              { name: "Perplexity", score: 61 },
              { name: "Claude", score: 38 },
            ].map((model) => (
              <div
                key={model.name}
                className="rounded-lg border border-white/5 bg-white/[0.02] p-4 text-center"
              >
                <p className="text-sm text-white/50">{model.name}</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {model.score}
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${model.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-white">
            GEO対策に必要なすべてを
          </h2>
          <p className="mb-16 text-center text-white/50">
            AI検索エンジン時代のブランド戦略を、データドリブンで実現
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-white/20"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-white">
            料金プラン
          </h2>
          <p className="mb-16 text-center text-white/50">
            まずは無料プランで始めて、必要に応じてアップグレード
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-6 transition-all duration-200 ${
                  plan.highlighted
                    ? "border-cyan-400/30 bg-cyan-400/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.highlighted && (
                  <p className="mb-2 text-xs font-medium text-cyan-400 uppercase">
                    おすすめ
                  </p>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2">
                  <span className="text-3xl font-bold text-white">
                    &yen;{plan.price}
                  </span>
                  <span className="text-sm text-white/40">/月</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <span className="mt-0.5 text-cyan-400">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-6 block cursor-pointer rounded-lg py-2.5 text-center text-sm font-medium transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.price === "0" ? "無料で始める" : "プランを選択"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            AI検索エンジン時代の
            <br />
            ブランド戦略を始めよう
          </h2>
          <p className="mt-4 text-white/50">
            従来のSEOだけでは不十分。GEO対策で次の時代に備える。
          </p>
          <Link
            href="/register"
            className="mt-8 inline-block cursor-pointer rounded-lg bg-cyan-400 px-8 py-3 text-base font-medium text-black transition-all duration-200 hover:bg-cyan-300"
          >
            無料アカウントを作成
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/30">
              GEO Radar - AI検索エンジン可視性モニタリング
            </p>
            <div className="flex gap-6">
              <Link
                href="/llms.txt"
                className="text-sm text-white/30 transition-all duration-200 hover:text-white/50"
              >
                llms.txt
              </Link>
              <Link
                href="/.well-known/agent.json"
                className="text-sm text-white/30 transition-all duration-200 hover:text-white/50"
              >
                Agent Card
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
