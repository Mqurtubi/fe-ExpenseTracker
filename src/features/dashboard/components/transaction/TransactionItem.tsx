import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import type { RecentTransactionsValue } from "../../types/type";
type TransactionItemProps = {
  transactions: RecentTransactionsValue;
  handleDelete: (v: number) => void;
  handleUpdate: (v: RecentTransactionsValue) => void;
};
export default function TransactionItem({
  transactions,
  handleDelete,
  handleUpdate,
}: TransactionItemProps) {
  const date = new Date(transactions.date);
  return (
    <div className="p-5 border border-slate-300 flex justify-between items-center rounded-lg">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <p
            className={`font-semibold ${transactions.type === "EXPENSE" ? "text-red-800 bg-red-300/50" : "text-green-800 bg-green-300/50"} py-1 px-2 rounded-xl`}
          >
            {transactions.category.name}
          </p>
          <p className="text-slate-600">
            {date.toLocaleString("id-ID", { month: "short", day: "2-digit" })}
          </p>
        </div>
        <p className="text-slate-600">
          {date.toLocaleString("id-ID", { month: "long", year: "numeric" })}
        </p>
      </div>
      <div className="flex text-xl space-x-5 items-center">
        <p
          className={`${transactions.type === "EXPENSE" ? "text-red-700" : "text-green-700"} font-semibold`}
        >
          {transactions.type === "EXPENSE" ? "-" : "+"} Rp{" "}
          {transactions.amount.toLocaleString("id-ID")}
        </p>
        <button
          type="button"
          className="hover:cursor-pointer hover:bg-slate-400/20 p-3"
          onClick={() => handleUpdate(transactions)}
        >
          <BiEdit />
        </button>
        <button
          type="button"
          className="text-red-800 hover:cursor-pointer hover:bg-slate-400/20 p-3"
          onClick={() => handleDelete(Number(transactions.id))}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
