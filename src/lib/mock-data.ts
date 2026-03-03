import { DashboardData, ScanResult, Keyword, AIModel } from "./types";

const MODEL_NAMES: Record<AIModel, string> = {
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  perplexity: "Perplexity",
  claude: "Claude",
};

export { MODEL_NAMES };

export const mockKeywords: Keyword[] = [
  {
    id: "kw-1",
    keyword: "プロジェクト管理ツール おすすめ",
    brand: "MyBrand",
    lastScore: 72,
    trend: "up",
    lastScannedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "kw-2",
    keyword: "タスク管理 アプリ 比較",
    brand: "MyBrand",
    lastScore: 45,
    trend: "stable",
    lastScannedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "kw-3",
    keyword: "チーム コラボレーション ツール",
    brand: "MyBrand",
    lastScore: 58,
    trend: "up",
    lastScannedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "kw-4",
    keyword: "業務効率化 SaaS",
    brand: "MyBrand",
    lastScore: 30,
    trend: "down",
    lastScannedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "kw-5",
    keyword: "リモートワーク ツール",
    brand: "MyBrand",
    lastScore: 63,
    trend: "up",
    lastScannedAt: "2026-03-03T10:00:00Z",
  },
];

export const mockRecentResults: ScanResult[] = [
  {
    id: "scan-1",
    keyword: "プロジェクト管理ツール おすすめ",
    brand: "MyBrand",
    scores: { chatgpt: 85, gemini: 60, perplexity: 78, claude: 65 },
    responses: [
      {
        model: "chatgpt",
        query: "プロジェクト管理ツール おすすめを教えてください",
        response:
          "プロジェクト管理ツールとしては、MyBrand、Asana、Notion、Jiraなどがあります。MyBrandは特に日本企業向けの機能が充実しており...",
        brandMentioned: true,
        position: 1,
        sentiment: "positive",
      },
      {
        model: "gemini",
        query: "プロジェクト管理ツール おすすめを教えてください",
        response:
          "おすすめのプロジェクト管理ツールをご紹介します。Asana、Monday.com、MyBrandなどが人気です...",
        brandMentioned: true,
        position: 3,
        sentiment: "neutral",
      },
      {
        model: "perplexity",
        query: "プロジェクト管理ツール おすすめを教えてください",
        response:
          "プロジェクト管理ツールの比較です。MyBrandは日本語対応が優れており、中小企業に人気があります...",
        brandMentioned: true,
        position: 1,
        sentiment: "positive",
      },
      {
        model: "claude",
        query: "プロジェクト管理ツール おすすめを教えてください",
        response:
          "プロジェクト管理には様々なツールがあります。Notion、Asana、MyBrand、Trelloなどが代表的です...",
        brandMentioned: true,
        position: 3,
        sentiment: "neutral",
      },
    ],
    scannedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "scan-2",
    keyword: "タスク管理 アプリ 比較",
    brand: "MyBrand",
    scores: { chatgpt: 40, gemini: 50, perplexity: 45, claude: 35 },
    responses: [
      {
        model: "chatgpt",
        query: "タスク管理アプリを比較してください",
        response:
          "タスク管理アプリの比較です。Todoist、TickTick、Microsoft To Do、Any.doなどが人気です...",
        brandMentioned: false,
        position: null,
        sentiment: "neutral",
      },
      {
        model: "gemini",
        query: "タスク管理アプリを比較してください",
        response:
          "主要なタスク管理アプリを比較します。MyBrandもタスク管理機能を提供していますが...",
        brandMentioned: true,
        position: 5,
        sentiment: "neutral",
      },
      {
        model: "perplexity",
        query: "タスク管理アプリを比較してください",
        response:
          "タスク管理アプリの詳細比較。Todoist、TickTick、MyBrand、Notionなどを機能別に比較...",
        brandMentioned: true,
        position: 3,
        sentiment: "neutral",
      },
      {
        model: "claude",
        query: "タスク管理アプリを比較してください",
        response:
          "タスク管理アプリにはそれぞれ特徴があります。Todoist、Microsoft To Do、TickTickなど...",
        brandMentioned: false,
        position: null,
        sentiment: "neutral",
      },
    ],
    scannedAt: "2026-03-03T10:00:00Z",
  },
];

export const mockDashboardData: DashboardData = {
  overallScore: 54,
  trend: "up",
  totalScans: 24,
  modelScores: [
    { model: "chatgpt", score: 62, mentions: 18, sentiment: "positive" },
    { model: "gemini", score: 55, mentions: 14, sentiment: "neutral" },
    { model: "perplexity", score: 61, mentions: 16, sentiment: "positive" },
    { model: "claude", score: 38, mentions: 10, sentiment: "neutral" },
  ],
  recentResults: mockRecentResults,
  keywords: mockKeywords,
};
