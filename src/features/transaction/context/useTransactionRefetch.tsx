import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export default function useTransactionRefetch() {
  const ctx = useContext(TransactionContext);
  if (!ctx)
    throw new Error(
      "useTransactionRefetch must be used within TransactionRefetchProvider",
    );
  return ctx;
}
