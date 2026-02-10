import { createContext } from "react";

export type RefetchFn = (() => void | Promise<void>) | null;

type TxRefetchCtx = {
  refetch: RefetchFn;
  setRefetch: React.Dispatch<React.SetStateAction<RefetchFn>>;
};

export const TransactionContext = createContext<TxRefetchCtx | null>(null);
