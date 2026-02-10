import { useMemo, useState } from "react";
import { RefetchFn } from "./TransactionContext";
import { TransactionContext } from "./TransactionContext";
export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [refetch, setRefetch] = useState<RefetchFn>(null);
  const value = useMemo(() => ({ refetch, setRefetch }), [refetch]);
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}
