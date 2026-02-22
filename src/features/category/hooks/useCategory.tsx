import { useCallback, useEffect, useMemo, useState } from "react";
import { CategoryValue, TypeCategory } from "../types/type";
import { deleteCategory, getCategory } from "../api/api";

export default function useCategory() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<CategoryValue[]>([]);
  const [type, setType] = useState<TypeCategory>("BOTH");
  const handleDelete = async (id: number) => {
    await deleteCategory(id);
    fetchCategory();
  };
  const fetchCategory = useCallback(async () => {
    setLoading(true);
    try {
      const responseCategory = await getCategory("BOTH");
      setCategory(responseCategory.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  const counts = useMemo(() => {
    const total = category.length;
    const lengthIncome = category.filter(
      (v) => v.type === "INCOME" || v.type === "BOTH",
    ).length;
    const lengthExpense = category.filter(
      (v) => v.type === "EXPENSE" || v.type === "BOTH",
    ).length;
    return { total, lengthIncome, lengthExpense };
  }, [category]);

  const filteredCategories = useMemo(() => {
    if (type === "INCOME")
      return category.filter((v) => v.type === "INCOME" || v.type === "BOTH");
    if (type === "EXPENSE")
      return category.filter((v) => v.type === "EXPENSE" || v.type === "BOTH");
    return category;
  }, [type, category]);
  return {
    loading,
    category,
    fetchCategory,
    type,
    setType,
    counts,
    filteredCategories,
    handleDelete,
  };
}
