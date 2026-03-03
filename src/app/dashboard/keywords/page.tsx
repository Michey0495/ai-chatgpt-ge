import { KeywordsClient } from "@/components/keywords-client";
import { mockKeywords } from "@/lib/mock-data";

export const metadata = {
  title: "キーワード管理 - GEO Radar",
};

export default function KeywordsPage() {
  return <KeywordsClient initialKeywords={mockKeywords} />;
}
