import { useEffect } from "react";
import PageHeader from "../../../components/ui/PageHeader";
import StatsGrid from "../components/StatsGrid";
import { getDashboard } from "../api/api";

export default function DashboardPage() {
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      console.log(date.getMonth() + 1);
      try {
        const response = await getDashboard({
          month: Number(date.getMonth() + 1),
          year: Number(date.getFullYear()),
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid gap-7">
      <PageHeader
        title="Dashboard"
        subtitle="Ringkasan keuangan Januari 2026s"
      />
      <StatsGrid />
    </div>
  );
}
