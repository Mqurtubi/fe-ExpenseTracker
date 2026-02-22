import { TypeCategory } from "../../types/type";
type CategoryTypeTabsProps = {
  type: TypeCategory;
  setType: (v: TypeCategory) => void;
  count: { total: number; lengthIncome: number; lengthExpense: number };
};
export default function CategoryTypeTabs({
  type,
  setType,
  count,
}: CategoryTypeTabsProps) {
  return (
    <div className="bg-slate-300/50 grid grid-cols-3 text-sm  p-1 rounded-2xl object-fill col-span-2 ">
      <button
        type="button"
        className={`${type === "BOTH" ? "bg-white" : ""} px-7 py-1 rounded-2xl font-semibold`}
        onClick={() => setType("BOTH")}
      >
        Semua ({count.total})
      </button>
      <button
        type="button"
        className={`${type === "INCOME" ? "bg-white" : ""} px-7 py-1 rounded-2xl font-semibold`}
        onClick={() => setType("INCOME")}
      >
        Pemasukan ({count.lengthIncome})
      </button>
      <button
        type="button"
        className={`${type === "EXPENSE" ? "bg-white" : ""} px-7 py-1 rounded-2xl font-semibold`}
        onClick={() => setType("EXPENSE")}
      >
        Pengeluaran ({count.lengthExpense})
      </button>
    </div>
  );
}
