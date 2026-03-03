import { DashboardClient } from "@/components/dashboard-client";
import { mockDashboardData } from "@/lib/mock-data";

export const metadata = {
  title: "ダッシュボード - GEO Radar",
};

export default function DashboardPage() {
  return <DashboardClient initialData={mockDashboardData} />;
}
