import PageHeader from "../../../components/ui/PageHeader";
import StatsGrid from "../components/StatsGrid";
import ChartGrid from "../components/ChartGrid";
import useDashboard from "../hooks/useDashboard";

export default function DashboardPage() {
  const { loading, responseDashboard } = useDashboard();
  const month = new Date().toLocaleString("id-ID", { month: "long" });
  const year = new Date().toLocaleString("id-ID", { year: "numeric" });
  if (loading) return <p>loading...</p>;
  return (
    <div className="grid gap-7">
      <PageHeader
        title="Dashboard"
        subtitle={`Ringkasan keuangan ${month} ${year}`}
      />
      {responseDashboard?.summary ? (
        <StatsGrid data={responseDashboard.summary} />
      ) : (
        <p>Summary kosong</p>
      )}

      <ChartGrid data={responseDashboard} />
    </div>
  );
}
