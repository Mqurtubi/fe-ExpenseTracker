import { useEffect, useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import MonthNavigation from "../../../components/ui/date/MonthNavigation";
import PageHeader from "../../../components/ui/PageHeader";
import BudgetGrid from "../components/list/BudgetGrid";
import BudgetSummaryCard from "../components/summary/BudgetSummaryCard";
import useBudget from "../hooks/useBudget";
import AddModalBudget from "../components/modals/AddModalBudget";
import useTransactions from "../../transaction/hooks/useTransactions";
import BudgetEmptyState from "../components/empty/BudgetEmptyState";

export default function BudgetPage() {
  const { month, year, setMonth, setYear, fetchBudget, budget, budgets } =
    useBudget();
  const { refetchTransactions } = useTransactions();
  const [openModal, setOpenModal] = useState(false);
  const onSuccess = async () => {
    await fetchBudget();
    await refetchTransactions();
  };
  useEffect(() => {
    fetchBudget();
  }, [fetchBudget]);
  return (
    <ContainerContent>
      <PageHeader title="Budget" subtitle="Kelola budget keuanganmu">
        <MonthNavigation
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
      </PageHeader>
      {budgets.length === 0 ? (
        <BudgetEmptyState addModal={() => setOpenModal(true)} />
      ) : (
        <>
          <BudgetSummaryCard
            budget={budget}
            addModal={() => setOpenModal(true)}
          />
          <BudgetGrid budgets={budgets} />
        </>
      )}
      <AddModalBudget
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={onSuccess}
      />
    </ContainerContent>
  );
}
