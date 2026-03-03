export type AIModel = "chatgpt" | "gemini" | "perplexity" | "claude";

export interface BrandScore {
  model: AIModel;
  score: number;
  mentions: number;
  sentiment: "positive" | "neutral" | "negative";
}

export interface ScanResult {
  id: string;
  keyword: string;
  brand: string;
  scores: Record<AIModel, number>;
  responses: AIResponse[];
  scannedAt: string;
}

export interface AIResponse {
  model: AIModel;
  query: string;
  response: string;
  brandMentioned: boolean;
  position: number | null;
  sentiment: "positive" | "neutral" | "negative";
}

export interface Keyword {
  id: string;
  keyword: string;
  brand: string;
  lastScore: number;
  trend: "up" | "down" | "stable";
  lastScannedAt: string;
}

export interface DashboardData {
  overallScore: number;
  trend: "up" | "down" | "stable";
  totalScans: number;
  modelScores: BrandScore[];
  recentResults: ScanResult[];
  keywords: Keyword[];
}

export interface MCPToolCall {
  tool: string;
  params: Record<string, unknown>;
}

export interface MCPResponse {
  result: unknown;
  error?: string;
}
