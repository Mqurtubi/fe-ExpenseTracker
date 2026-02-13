interface TransactionsValue {
  amount: number;
  category: { id: string; name: string };
  transaction_date: string;
  payment_method?:PaymentMethod,
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

interface TransactionFormValues{
  type: "EXPENSE" | "INCOME",
  amount:number,
  transaction_date:string,
  category_id?:number,
  payment_method?:PaymentMethod,
  note?:string
}

type Sort_dir = "asc" | "desc";
type Sort_by = "transaction_date" | "amount";
type Type = "EXPENSE" | "INCOME" | undefined;
type PaymentMethod = "CASH" | "BANK_TRANSFER" | "DEBIT_CARD" | "CREDIT_CARD" | "EWALLET" | "OTHER"
export type {
  TransactionsValue,
  TransactionQueryParams,
  Type,
  Sort_dir,
  Sort_by,
  TransactionFormValues
};
