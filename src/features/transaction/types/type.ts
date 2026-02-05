interface TransactionsValue {
  amount: number;
  category: { id: string; name: string };
  date: string;
  id: string;
  note: string;
  type: Type;
}

interface TransactionQueryParams{
  month:number,
  year:number,
  search?:string
}

type Type = "EXPENSE" | "INCOME" | "BOTH"
export type {TransactionsValue,TransactionQueryParams}