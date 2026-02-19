import { useEffect, useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import MonthNavigation from "../../../components/ui/date/MonthNavigation";
import PageHeader from "../../../components/ui/PageHeader";
import BudgetGrid from "../components/list/BudgetGrid";
import BudgetSummaryCard from "../components/summary/BudgetSummaryCard";
import useBudget from "../hooks/useBudget";
import AddModalBudget from "../components/modals/AddModalBudget";

export default function BudgetPage() {
  const { month, year, setMonth, setYear, fetchBudget, budget, budgets } =
    useBudget();
    const [openModal,setOpenModal] = useState(true)
    const onSuccess=()=>{
      fetchBudget()
    }
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
      <BudgetSummaryCard budget={budget} addModal={()=>setOpenModal(true)}/>
      <BudgetGrid budgets={budgets} />
      <AddModalBudget open={openModal} onClose={()=>setOpenModal(false)} onSuccess={onSuccess}/>
    </ContainerContent>
  );
}
