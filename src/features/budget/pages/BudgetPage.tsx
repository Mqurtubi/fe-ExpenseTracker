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
import { budgetValue, ItemBudget } from "../types/type";
import { useToast } from "../../transaction/context/useToast";
import ConfirmDialog from "../../../components/ui/dialog/ConfirmDialog";

export default function BudgetPage() {
  const {
    month,
    year,
    setMonth,
    setYear,
    fetchBudget,
    budget,
    budgets,
    handleDelete,
  } = useBudget();
  const { refetchTransactions } = useTransactions();
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<budgetValue>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const onSuccess = async () => {
    await fetchBudget();
    await refetchTransactions();
  };
  const mapItemToBudgetValue = (item: ItemBudget): budgetValue => ({
    id: item.id,
    category_id: Number(item.category.id),
    month,
    year,
    amount: item.limit,
  });
  const handleUpdate = (budget: ItemBudget) => {
    setSelectedBudget(mapItemToBudgetValue(budget));
    setOpenEditModal(true);
  };
  const askDelete = (id: number) => {
    setSelectedId(id);
    setOpenConfirm(true);
  };
  const confirmDelete = async () => {
    if (!selectedId) return;
    await handleDelete(selectedId);
    toast.success("Budget berhasil dihapus");
    setOpenConfirm(false);
    setSelectedId(null);
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
          <BudgetGrid
            budgets={budgets}
            handleUpdate={handleUpdate}
            handleDelete={askDelete}
          />
        </>
      )}
      <AddModalBudget
        mode="create"
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={onSuccess}
      />
      <AddModalBudget
        mode="edit"
        open={openEditModal}
        initial={selectedBudget}
        onClose={() => setOpenEditModal(false)}
        onSuccess={onSuccess}
      />
      <ConfirmDialog
        openConfirm={openConfirm}
        title="Hapus data ini?"
        subTitle="Tindakan tidak dapat dibatalkan."
        onClose={() => setOpenConfirm(false)}
        onConfirm={confirmDelete}
      />
    </ContainerContent>
  );
}
