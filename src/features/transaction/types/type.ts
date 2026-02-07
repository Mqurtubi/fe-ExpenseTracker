interface TransactionsValue {
  amount: number;
  category: { id: string; name: string };
  date: string;
  id: string;
  note: string;
  type: Type;
}

interface TransactionQueryParams {
  month: number;
  year: number;
  type: Type;
  category?: number;
  search?: string;
  sort_dir: Sort_dir;
  sort_by: Sort_by;
}

type Sort_dir = "asc" | "desc";
type Sort_by = "transaction_date" | "amount";
type Type = "EXPENSE" | "INCOME" | undefined;
export type {
  TransactionsValue,
  TransactionQueryParams,
  Type,
  Sort_dir,
  Sort_by,
};
