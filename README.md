# GEO Radar

AI検索エンジン（ChatGPT, Gemini, Perplexity, Claude）でのブランド可視性を監視・分析するダッシュボード。

## 概要

AI検索エンジンの利用が急増する中、従来のSEOツールではAI検索の可視性を測定できません。GEO Radarは指定キーワードで各AIモデルにクエリを投げ、ブランドの言及・引用状況をスコア化して追跡する、日本語完全対応のGEOモニタリングツールです。

## 技術スタック

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui
- Vercel (hosting)
- Domain: geo-radar.ezoai.jp

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 でアクセス。

## ページ構成

| パス | 説明 |
|------|------|
| `/` | ランディングページ |
| `/dashboard` | メインダッシュボード |
| `/dashboard/keywords` | キーワード管理 |
| `/dashboard/scan/[id]` | スキャン結果詳細 |
| `/login` | ログイン |
| `/register` | 新規登録 |

## API

| エンドポイント | メソッド | 説明 |
|---------------|---------|------|
| `/api/mcp` | GET | MCPツール一覧 |
| `/api/mcp` | POST | MCPツール実行 |
| `/api/scan` | POST | スキャン実行 |
| `/api/results` | GET | スキャン結果一覧 |

## AI公開チャネル

| パス | 説明 |
|------|------|
| `/llms.txt` | AI向けサイト説明 |
| `/.well-known/agent.json` | A2A Agent Card |
| `/robots.txt` | AIクローラー許可設定 |

## MCPツール

- `geo_scan` - AI検索エンジンのブランド可視性をスキャン
- `geo_report` - ブランドの可視性レポートを生成
- `geo_keywords` - 監視中のキーワード一覧を取得

## 開発状況

- [x] プロジェクト初期化
- [x] ランディングページ
- [x] ダッシュボード（モックデータ）
- [x] API / MCPサーバー
- [x] AI公開チャネル（llms.txt, agent.json, robots.txt）
- [ ] 認証（ログイン/登録）
- [ ] DB連携
- [ ] 実AIモデルへのクエリ実行
- [ ] Stripe決済
