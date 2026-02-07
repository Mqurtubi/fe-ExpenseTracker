import { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";

export type Sort = "terbaru" | "terlama" | "terbesar" | "terkecil";
export default function useTransactionFilter() {
  const date = new Date();
  const [search, setSearch] = useState("");
  const [type, setType] = useState<"EXPENSE" | "INCOME" | undefined>(undefined);
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [sort, setSort] = useState<Sort>("terbaru");
  const debounceSearch = useDebounce(search, 600);

  return {
    search,
    setSearch,
    type,
    setType,
    month,
    setMonth,
    year,
    setYear,
    categoryId,
    setCategoryId,
    sort,
    setSort,
    debounceSearch,
  };
}
