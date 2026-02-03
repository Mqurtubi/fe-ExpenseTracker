interface ExpenseCategoryValue {
  amount: number;
  category_color: string;
  category_id: string;
  category_name: string;
}
interface ResponseDashboard {
  budget: { used_percetage: number };
  expense_by_category: ExpenseCategoryValue[];
  recent_transactions: RecentTransactionsValue[];
  summary: SummaryValue;
}

interface RecentTransactionsValue {
  amount: number;
  category: { id: string; name: string };
  date: string;
  id: string;
  note: string;
  type: Type;
}

interface SummaryValue {
  income: number;
  expense: number;
  balance: number;
}

type Type = "INCOME" | "EXPENSE" | "BOTH";
export type { ExpenseCategoryValue, ResponseDashboard, SummaryValue };
