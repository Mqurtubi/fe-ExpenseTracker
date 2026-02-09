import { useEffect, useState } from "react";
import { CategoryValue } from "../types/type";
import { getCategory } from "../api/api";

export default function useCategory() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<CategoryValue[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const responseCategory = await getCategory();
        setCategory(responseCategory.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);
  return { loading, category };
}
