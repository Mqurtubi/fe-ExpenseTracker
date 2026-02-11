import PageHeader from "../../../components/ui/PageHeader";
import StatsGrid from "../components/stats/StatsGrid";
import ChartGrid from "../components/charts/ChartGrid";
import useDashboard from "../hooks/useDashboard";
import TransactionList from "../components/transaction/TransactionList";
import ContainerContent from "../../../components/ui/ContainerContent";
export default function DashboardPage() {
  const { loading, responseDashboard, handleDelete } = useDashboard();
  const month = new Date().toLocaleString("id-ID", { month: "long" });
  const year = new Date().toLocaleString("id-ID", { year: "numeric" });
  if (loading) return <p>loading...</p>;
  return (
    <ContainerContent>
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
      <TransactionList data={responseDashboard} handleDelete={handleDelete} />
    </ContainerContent>
  );
}
