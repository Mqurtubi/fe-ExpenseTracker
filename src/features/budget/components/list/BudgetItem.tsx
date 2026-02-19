import { ItemBudget } from "../../types/type";
import CardAction from "../ui/cards/CardAction";
import CardBudget from "../ui/cards/CardBudget";
import ProgressBar from "../ui/progress/ProgressBar";

export default function BudgetItem({ budget }: { budget: ItemBudget }) {
  return (
    <CardBudget>
      <div className="space-y-7">
        <div>
          <div className="flex justify-between items-center">
            <p>{budget.category.name}</p>
            <CardAction />
          </div>
          <span className="text-xs bg-green-400/30 text-green-700 px-2 py-1 rounded-xl">
            {budget.status}
          </span>
        </div>
        <div className="space-y-3 ">
          <ProgressBar progress={budget.progress} />
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <div>
              <p className="text-sm text-slate-600 font-normal">Terpakai</p>
              <p className="font-medium">
                Rp. {budget.used.toLocaleString("id-ID")}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600 font-normal">Limit</p>
              <p className="font-medium">
                Rp. {budget.limit.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-600 font-normal">Sisa Budget</p>
            <p className="font-medium">
              Rp. {budget.remaining.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </CardBudget>
  );
}
