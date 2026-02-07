import { Type } from "../../types/type";

type TransactionFiltersProps = {
  type: Type;
  setType: (v: Type) => void;
};
export default function TransactionFilters({
  type,
  setType,
}: TransactionFiltersProps) {
  return (
    <div className="flex gap-2">
      <button
        className={`${type === undefined ? "bg-indigo-600 text-white" : "border border-slate-300"} px-3 py-1 rounded-lg`}
        type="button"
        onClick={() => setType(undefined)}
      >
        Semua
      </button>
      <button
        className={`${type === "EXPENSE" ? "bg-indigo-600 text-white" : "border border-slate-300"} px-3 py-1 rounded-lg`}
        type="button"
        onClick={() => setType("EXPENSE")}
      >
        Pengeluaran
      </button>
      <button
        className={`${type === "INCOME" ? "bg-indigo-600 text-white" : "border border-slate-300"} px-3 py-1 rounded-lg`}
        type="button"
        onClick={() => setType("INCOME")}
      >
        Pemasukan
      </button>
    </div>
  );
}
