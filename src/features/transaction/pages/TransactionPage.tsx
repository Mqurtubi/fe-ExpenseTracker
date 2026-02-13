import { useEffect, useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import ContainerFilter from "../components/filter/ContainerFilter";
import TransactionTable from "../components/table/TransactionTable";
import useTransactions from "../hooks/useTransactions";
import useTransactionRefetch from "../context/useTransactionRefetch";
import AddTransactionModal from "../components/modals/AddTransactionModal";
import { TransactionsValue } from "../types/type";

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
  const [openEditModal,setOpenEditModal] = useState(false)
  const [selectedTransaction,setSelectedTransaction]=useState<TransactionsValue>()

  const handleUpdate = (transaction:TransactionsValue)=>{
    setSelectedTransaction(transaction)
    console.log(transaction)
    setOpenEditModal(true)
  }

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
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <AddTransactionModal mode="edit" open={openEditModal} onClose={()=>setOpenEditModal(false)} onSuccess={refetch ?? undefined} initial={selectedTransaction}/>
    </ContainerContent>
  );
}
