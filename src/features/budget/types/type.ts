interface SummaryBudget {
  overCount: number;
  progress: number;
  safeCount: number;
  totalBudget: number;
  totalRemaining: number;
  totalUsed: number;
  warningCount: number;
}
interface ItemBudget {
  category: { id: string; name: string };
  id: string;
  limit: number;
  progress: number;
  remaining: number;
  status: "SAFE" | "WARNING" | "OVER";
  used: number;
}
export type { SummaryBudget, ItemBudget };
