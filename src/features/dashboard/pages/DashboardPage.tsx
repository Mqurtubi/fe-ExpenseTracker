import { useEffect } from "react";
import PageHeader from "../../../components/ui/PageHeader";
import StatsGrid from "../components/StatsGrid";
import { getDashboard } from "../api/api";
import ChartGrid from "../components/ChartGrid";

export default function DashboardPage() {
  const month= new Date().toLocaleString('id-ID',{month:'long'})
  const year = new Date().toLocaleString('id-ID',{year:"numeric"})
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
        subtitle={`Ringkasan keuangan ${month} ${year}`}
      />
      <StatsGrid />
      <ChartGrid/>
    </div>
  );
}
