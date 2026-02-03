import { useEffect, useState } from "react";
import { getDashboard } from "../api/api";
import { ResponseDashboard } from "../types/type";

export default function useDashboard() {
  const [loading, setLoading] = useState(false);
  const [responseDashboard, setResponseDashboard] =
    useState<ResponseDashboard | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);
  return { loading, responseDashboard };
}
