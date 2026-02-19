import { ItemBudget } from "../../types/type";
import BudgetItem from "./BudgetItem";

export default function BudgetGrid({ budgets }: { budgets: ItemBudget[] }) {
  if (budgets.length === 0) return;
  return (
    <div className="grid grid-cols-3 gap-5">
      {budgets.map((budget) => (
        <BudgetItem budget={budget} />
      ))}
    </div>
  );
}
