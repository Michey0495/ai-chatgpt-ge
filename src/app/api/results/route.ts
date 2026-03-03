import { NextResponse } from "next/server";
import { mockRecentResults } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    results: mockRecentResults,
    total: mockRecentResults.length,
  });
}
