import { ItemBudget } from "../../types/type";
import BudgetItem from "./BudgetItem";

type BudgetGridProps = {
  budgets: ItemBudget[];
  handleUpdate: (v: ItemBudget) => void;
  handleDelete: (id: number) => void;
};
export default function BudgetGrid({
  budgets,
  handleUpdate,
  handleDelete,
}: BudgetGridProps) {
  if (budgets.length === 0) return;
  return (
    <div className="grid grid-cols-3 gap-5">
      {budgets.map((budget) => (
        <BudgetItem
          budget={budget}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
