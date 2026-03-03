# GEO Radar

AI検索エンジン（ChatGPT, Gemini, Perplexity, Claude）でのブランド可視性を監視・分析するダッシュボード。

## 概要

AI検索エンジンの利用が急増する中、従来のSEOツールではAI検索の可視性を測定できません。GEO Radarは指定キーワードで各AIモデルにクエリを投げ、ブランドの言及・引用状況をスコア化して追跡する、日本語完全対応のGEOモニタリングツールです。

## 技術スタック

- Next.js 16 (App Router)
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

## 環境変数

| 変数 | 説明 | 必須 |
|------|------|------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | いいえ |
| `GITHUB_TOKEN` | フィードバック用GitHub Token | いいえ |

## ページ構成

| パス | 説明 |
|------|------|
| `/` | ランディングページ |
| `/dashboard` | メインダッシュボード（インタラクティブスキャン機能付き） |
| `/dashboard/keywords` | キーワード管理（追加/削除/個別スキャン） |
| `/dashboard/scan/[id]` | スキャン結果詳細（サマリー/モデル別分析） |
| `/login` | ログイン |
| `/register` | 新規登録 |

## API

| エンドポイント | メソッド | 説明 |
|---------------|---------|------|
| `/api/mcp` | GET | MCPツール一覧 |
| `/api/mcp` | POST | MCPツール実行 |
| `/api/scan` | POST | スキャン実行（モック応答テキスト付き） |
| `/api/results` | GET | スキャン結果一覧 |
| `/api/feedback` | POST | フィードバック送信（GitHub Issue自動作成） |

## AI公開チャネル

| パス | 説明 |
|------|------|
| `/llms.txt` | AI向けサイト説明 |
| `/.well-known/agent.json` | A2A Agent Card |
| `/robots.txt` | AIクローラー許可設定 |
| `/sitemap.xml` | サイトマップ |

## MCPツール

- `geo_scan` - AI検索エンジンのブランド可視性をスキャン
- `geo_report` - ブランドの可視性レポートを生成
- `geo_keywords` - 監視中のキーワード一覧を取得

## 開発状況

### Night 1 (2026-03-03)
- [x] プロジェクト初期化
- [x] ランディングページ
- [x] ダッシュボード（モックデータ）
- [x] API / MCPサーバー
- [x] AI公開チャネル（llms.txt, agent.json, robots.txt）

### Night 2 (2026-03-04)
- [x] ダッシュボードをインタラクティブ化（スキャンフォーム、結果表示）
- [x] キーワード管理の機能化（追加/削除/個別スキャン）
- [x] スキャン結果詳細ページの改善（サマリー、モデル別チャート）
- [x] スキャンAPIのレスポンス改善（モック応答テキスト生成）
- [x] フィードバックウィジェット + API（GitHub Issue連携）
- [x] Google Analytics対応（NEXT_PUBLIC_GA_ID）
- [x] SEO改善（構造化データJSON-LD、OGP画像自動生成、sitemap.xml）
- [x] ダッシュボードのアクティブナビゲーション
- [x] 各ページのローディングUI（loading.tsx）
- [x] 最近のスキャン結果一覧表示

### 次回やるべきこと
- [ ] 認証（ログイン/登録）の実装
- [ ] DB連携（Supabase or Firebase）
- [ ] 実AIモデルへのクエリ実行
- [ ] Stripe決済
- [ ] ダッシュボードのリアルタイムデータ（DB連携後）
- [ ] メール通知/Slack通知

### 既知の問題
- ログイン/登録フォームはUI only（バックエンド未実装）
- データはすべてモック（インメモリ、永続化なし）
- スキャン結果は新規スキャンのみ表示（リロードでリセット）
