import { useEffect } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import ContainerFilter from "../components/filter/ContainerFilter";
import TransactionTable from "../components/table/TransactionTable";
import useTransactions from "../components/hooks/useTransactions";

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
  } = useTransactions();
  useEffect(() => {
    refetchTransactions();
  }, [refetchTransactions]);
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
      <TransactionTable transactions={transactions} />
    </ContainerContent>
  );
}
