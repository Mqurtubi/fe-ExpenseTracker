import { useCallback, useEffect, useState } from "react";
import { TransactionQueryParams, TransactionsValue } from "../types/type";
import { getTransactions } from "../api/api";

export default function useTransactionQuery(params: TransactionQueryParams) {
  const [transactions, setTransactions] = useState<TransactionsValue[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransaction = useCallback(async () => {
    setLoading(true);
    console.log(params);
    try {
      const transactionsResponse = await getTransactions(params);
      console.log(transactionsResponse);
      setTransactions(transactionsResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);

  return { transactions, loading, refetch: fetchTransaction };
}
