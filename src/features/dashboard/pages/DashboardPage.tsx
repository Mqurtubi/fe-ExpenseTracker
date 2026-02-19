import PageHeader from "../../../components/ui/PageHeader";
import StatsGrid from "../components/stats/StatsGrid";
import ChartGrid from "../components/charts/ChartGrid";
import useDashboard from "../hooks/useDashboard";
import TransactionList from "../components/transaction/TransactionList";
import ContainerContent from "../../../components/ui/ContainerContent";
import { useEffect, useState } from "react";
import { TransactionsValue } from "../../transaction/types/type";
import AddTransactionModal from "../../transaction/components/modals/AddTransactionModal";
import ConfirmDialog from "../../../components/ui/dialog/ConfirmDialog";
export default function DashboardPage() {
  const { loading, responseDashboard, handleDelete, refetchRecentTransaction } =
    useDashboard();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionsValue>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const month = new Date().toLocaleString("id-ID", { month: "long" });
  const year = new Date().toLocaleString("id-ID", { year: "numeric" });

  const handleUpdate = (transaction: TransactionsValue) => {
    setOpenEditModal(true);
    setSelectedTransaction(transaction);
  };
  const askDelete = (id: number) => {
    setOpenConfirm(true);
    setSelectedId(id);
  };
  const confirmDelete = async () => {
    if (!selectedId) return;
    await handleDelete(selectedId);
    setOpenConfirm(false);
    setSelectedId(null);
    refetchRecentTransaction();
  };
  useEffect(() => {
    refetchRecentTransaction();
  }, [refetchRecentTransaction]);
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
      <TransactionList
        data={responseDashboard}
        handleDelete={askDelete}
        handleUpdate={handleUpdate}
      />
      <AddTransactionModal
        mode="edit"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSuccess={refetchRecentTransaction ?? undefined}
        initial={selectedTransaction}
      />
      <ConfirmDialog
        openConfirm={openConfirm}
        title="Hapus transaction ini"
        subTitle="tindakan tidak dapat dibatalkan"
        onClose={() => setOpenConfirm(false)}
        onConfirm={confirmDelete}
      />
    </ContainerContent>
  );
}
