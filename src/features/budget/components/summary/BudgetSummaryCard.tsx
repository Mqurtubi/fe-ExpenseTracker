import { SummaryBudget } from "../../types/type";
import CardBudget from "../ui/cards/CardBudget";
import ProgressBar from "../ui/progress/ProgressBar";
import BudgetStatusLegend from "./BudgetStatusLegend";
import BudgetSummaryHeader from "./BudgetSummaryHeader";
import BudgetSummaryStats from "./BudgetSummaryStats";

export default function BudgetSummaryCard({
  budget,
}: {
  budget: SummaryBudget | undefined;
}) {
  if (!budget) return;
  return (
    <div className="grid grid-cols-1">
      <CardBudget>
        <BudgetSummaryHeader />
        <ProgressBar progress={budget.progress} />
        <BudgetSummaryStats
          used={budget.totalUsed}
          remaining={budget.totalRemaining}
          total={budget.totalBudget}
        />
        <BudgetStatusLegend
          over={budget.overCount}
          warning={budget.warningCount}
          safe={budget.safeCount}
        />
      </CardBudget>
    </div>
  );
}
