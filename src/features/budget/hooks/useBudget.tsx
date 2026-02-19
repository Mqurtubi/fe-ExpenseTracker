import { useCallback, useState } from "react";
import { getBudgets } from "../api/api";
import { ItemBudget, SummaryBudget } from "../types/type";

export default function useBudget() {
  const [budget, setBudget] = useState<SummaryBudget>();
  const [budgets, setBudgets] = useState<ItemBudget[]>([]);
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  const fetchBudget = useCallback(async () => {
    try {
      const budegtResponse = await getBudgets(month, year);
      console.log(budegtResponse.data);
      setBudget(budegtResponse.data.summary);
      setBudgets(budegtResponse.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [month, year]);

  return { month, setMonth, year, setYear, fetchBudget, budget, budgets };
}
