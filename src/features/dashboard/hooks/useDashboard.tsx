import { useCallback, useEffect, useState } from "react";
import { getDashboard } from "../api/api";
import { ResponseDashboard } from "../types/type";
import { deleteTransaction } from "../../transaction/api/api";

export default function useDashboard() {
  const [loading, setLoading] = useState(false);
  const [responseDashboard, setResponseDashboard] =
    useState<ResponseDashboard | null>(null);

  const refetchRecentTransaction = useCallback(async () => {
    const date = new Date();
    setLoading(true);
    try {
      const response = await getDashboard({
        month: Number(date.getMonth() + 1),
        year: Number(date.getFullYear()),
      });
      setResponseDashboard(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    refetchRecentTransaction();
  }, [refetchRecentTransaction]);
  const handleDelete = async (id: number) => {
    await deleteTransaction(id);
    await refetchRecentTransaction();
  };
  return { loading, responseDashboard, handleDelete, refetchRecentTransaction };
}
