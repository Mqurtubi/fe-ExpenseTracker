import { useEffect, useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import ContainerFilter from "../components/filter/ContainerFilter";
import TransactionTable from "../components/table/TransactionTable";
import useTransactions from "../hooks/useTransactions";
import useTransactionRefetch from "../context/useTransactionRefetch";
import AddTransactionModal from "../components/modals/AddTransactionModal";
import { TransactionsValue } from "../types/type";
import ConfirmDialog from "../../../components/ui/dialog/ConfirmDialog";
import { useToast } from "../context/useToast";

export default function TransactionPage() {
  const {
    transactions,
    refetchTransactions,
    search,
    setSearch,
    type,
    setType,
    month,
    setMonth,
    year,
    setYear,
    categoryId,
    setCategoryId,
    sort,
    setSort,
    handleDelete,
  } = useTransactions();
  const { setRefetch, refetch } = useTransactionRefetch();
  const { toast } = useToast();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionsValue>();

  const handleUpdate = (transaction: TransactionsValue) => {
    setSelectedTransaction(transaction);
    setOpenEditModal(true);
  };

  const askDelete = (id: number) => {
    setSelectedId(id);
    setOpenConfirm(true);
  };
  const confirmDelete = async () => {
    if (!selectedId) return;
    await handleDelete(selectedId);

    toast.success("Transaction berhasil dihapus");
    setOpenConfirm(false);
    setSelectedId(null);
    refetchTransactions();
  };
  useEffect(() => {
    setRefetch(() => refetchTransactions);
    return () => setRefetch(null);
  }, [refetchTransactions, setRefetch]);
  return (
    <ContainerContent>
      <PageHeader
        title="Transaksi"
        subtitle="Kelola semua transaksi keuanganmu"
      />
      <ContainerFilter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        sort={sort}
        setSort={setSort}
      />
      <TransactionTable
        transactions={transactions}
        handleDelete={askDelete}
        handleUpdate={handleUpdate}
      />
      <AddTransactionModal
        mode="edit"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSuccess={refetch ?? undefined}
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
