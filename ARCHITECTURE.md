# GEO Radar - Architecture

## 概要
AI検索エンジン（ChatGPT, Gemini, Perplexity, Claude）でのブランド可視性を監視・分析するダッシュボード。

## ページ構成

```
/ ......................... ランディングページ（マーケティング）
/dashboard ................ メインダッシュボード（ブランド可視性スコア）
/dashboard/keywords ....... キーワード管理
/dashboard/scan/[id] ...... スキャン結果詳細
/login .................... ログイン
/register ................. 新規登録
```

## コンポーネント設計

```
src/
├── app/
│   ├── layout.tsx ............. ルートレイアウト（メタデータ、フォント）
│   ├── page.tsx ............... ランディングページ
│   ├── dashboard/
│   │   ├── layout.tsx ......... ダッシュボードレイアウト（サイドナビ）
│   │   ├── page.tsx ........... メインダッシュボード
│   │   ├── keywords/
│   │   │   └── page.tsx ....... キーワード管理
│   │   └── scan/
│   │       └── [id]/
│   │           └── page.tsx ... スキャン結果詳細
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── api/
│       ├── mcp/route.ts ....... MCP Server エンドポイント
│       ├── scan/route.ts ...... スキャン実行 API
│       └── results/route.ts ... スキャン結果取得 API
├── components/
│   ├── ui/ .................... shadcn/ui コンポーネント
│   ├── score-card.tsx ......... ブランド可視性スコア表示
│   ├── model-chart.tsx ........ AIモデル別言及率チャート
│   ├── response-preview.tsx ... AI回答プレビュー
│   ├── keyword-table.tsx ...... キーワード一覧テーブル
│   └── header.tsx ............. ヘッダーナビゲーション
├── lib/
│   ├── utils.ts ............... ユーティリティ
│   ├── mock-data.ts ........... MVP用モックデータ
│   └── types.ts ............... 型定義
└── public/
    ├── llms.txt
    ├── robots.txt
    └── .well-known/
        └── agent.json
```

## データフロー

```
User → Dashboard → API Route → AI Models (ChatGPT/Gemini/Perplexity/Claude)
                                    ↓
                              Response Analysis
                                    ↓
                              Visibility Score → DB → Dashboard Display
```

### MVP のデータフロー
MVP段階ではモックデータを使用。実際のAI APIコールはv2で実装。

## API設計

### POST /api/scan
キーワードに対してAIモデルへクエリを実行し、ブランド言及を分析。

```json
Request:  { "keyword": "string", "brand": "string", "models": ["chatgpt", "gemini", "perplexity", "claude"] }
Response: { "id": "string", "scores": { "chatgpt": number, "gemini": number, ... }, "responses": [...] }
```

### GET /api/results
スキャン結果一覧を取得。

```json
Response: { "results": [{ "id": "string", "keyword": "string", "scores": {...}, "scannedAt": "ISO8601" }] }
```

## MCP Server設計

### エンドポイント: POST /api/mcp

ツール定義:
1. **geo_scan** - 指定キーワードでAI検索エンジンのブランド可視性をスキャン
   - params: `{ keyword: string, brand: string, models?: string[] }`
   - returns: `{ scores: Record<string, number>, summary: string }`

2. **geo_report** - ブランドの可視性レポートを生成
   - params: `{ brand: string, period?: "7d" | "30d" | "90d" }`
   - returns: `{ overallScore: number, trend: string, modelBreakdown: Record<string, number> }`

3. **geo_keywords** - 監視中のキーワード一覧を取得
   - params: `{ brand?: string }`
   - returns: `{ keywords: Array<{ keyword: string, lastScore: number, trend: string }> }`

### A2A Agent Card (/.well-known/agent.json)
```json
{
  "name": "GEO Radar",
  "description": "AI検索エンジンでのブランド可視性監視エージェント",
  "url": "https://geo-radar.ezoai.jp",
  "capabilities": ["geo-monitoring", "brand-visibility-analysis"],
  "mcp_endpoint": "/api/mcp"
}
```

## デザインシステム

- 背景: `#000000`（純黒）
- アクセント: `#22d3ee`（cyan-400）
- カード: `bg-white/5 border border-white/10`
- テキスト: `text-white`, `text-white/70`
- フォント: 16px以上、line-height 1.5-1.75
- ホバー: `cursor-pointer transition-all duration-200`

## 技術スタック

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui
- Vercel (hosting)
- geo-radar.ezoai.jp (domain)
