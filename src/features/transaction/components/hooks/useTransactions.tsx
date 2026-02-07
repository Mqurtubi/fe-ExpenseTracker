import { useMemo } from "react";
import useTransactionFilter from "./useTransactionFilter";
import useTransactionQuery from "./useTransactionQuery";
import { Sort_by, Sort_dir } from "../../types/type";

export default function useTransactions() {
  const filter = useTransactionFilter();

  const { sort_by, sort_dir } = useMemo((): {
    sort_by: Sort_by;
    sort_dir: Sort_dir;
  } => {
    switch (filter.sort) {
      case "terlama":
        return { sort_by: "transaction_date", sort_dir: "asc" };
      case "terbesar":
        return { sort_by: "amount", sort_dir: "desc" };
      case "terkecil":
        return { sort_by: "amount", sort_dir: "asc" };
      default:
        return { sort_by: "transaction_date", sort_dir: "desc" };
    }
  }, [filter.sort]);
  const queryParams = useMemo(
    () => ({
      month: filter.month,
      year: filter.year,
      type: filter.type,
      category: Number(filter.categoryId) || undefined,
      search: filter.debounceSearch || undefined,
      sort_by,
      sort_dir,
    }),
    [
      filter.month,
      filter.year,
      filter.type,
      filter.debounceSearch,
      filter.categoryId,
      sort_by,
      sort_dir,
    ],
  );

  const query = useTransactionQuery(queryParams);

  return {
    transactions: query.transactions,
    loading: query.loading,
    refetchTransactions: query.refetch,
    ...filter,
  };
}
