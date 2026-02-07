import { useMemo } from "react";
import useCategory from "../../../category/hooks/useCategory";
import { Type } from "../../types/type";
import DropdownFilter, { DropdownOptions } from "./DropdownFilter";
import MonthNavigation from "./MonthNavigation";
import SearchBar from "./SearchBar";
import TransactionFilters from "./TransactionFilters";
import { Sort } from "../hooks/useTransactionFilter";
type ContainerFilter = {
  search: string;
  setSearch: (v: string) => void;
  type: Type;
  setType: (v: Type) => void;
  month: number;
  setMonth: (v: number) => void;
  year: number;
  setYear: (v: number) => void;
  categoryId?: number;
  setCategoryId: (v?: number) => void;
  sort: Sort;
  setSort: (v: Sort) => void;
};
export default function ContainerFilter({
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
}: ContainerFilter) {
  const { category } = useCategory();
  const CategoryOptions: DropdownOptions<number>[] = useMemo(
    () => category.map((c) => ({ value: Number(c.id), label: c.name })),
    [category],
  );
  const sortOptions: DropdownOptions<Sort>[] = [
    { value: "terbaru", label: "Terbaru" },
    { value: "terlama", label: "Terlama" },
    { value: "terbesar", label: "Terbesar" },
    { value: "terkecil", label: "Terkecil" },
  ];
  return (
    <div className="border border-slate-300 p-5 grid gap-5 rounded-xl">
      <div className="flex gap-5">
        <MonthNavigation
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <TransactionFilters type={type} setType={setType} />
      </div>
      <div className="flex gap-5">
        <SearchBar value={search} onChange={setSearch} />
        <DropdownFilter
          value={categoryId}
          onChange={setCategoryId}
          placeholder="Semua Kategori"
          options={CategoryOptions}
          clearlabel="Semua Kategori"
        />
        <DropdownFilter
          value={sort}
          onChange={(v) => setSort(v ?? "terbaru")}
          placeholder="Terbaru"
          options={sortOptions}
        />
      </div>
    </div>
  );
}
