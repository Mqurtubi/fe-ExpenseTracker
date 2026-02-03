import StatCard from "./StatCard";
import { RiWallet3Line } from "react-icons/ri";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { SummaryValue } from "../types/type";

type StatsGridProps = {
  data: SummaryValue;
};
export default function StatsGrid({ data }: StatsGridProps) {
  return (
    <div className="grid grid-cols-4 gap-5">
      <StatCard
        title="Total Pemasukan"
        subtitle={`Rp. ${data.income.toLocaleString("id-ID")}`}
        Icon={BsGraphUpArrow}
        iconBackgroudColor="bg-green-300/50"
        iconTextColor="text-green-800"
      />
      <StatCard
        title="Total Pengeluaran"
        subtitle={`Rp. ${data.expense.toLocaleString("id-ID")}`}
        Icon={BsGraphDownArrow}
        iconBackgroudColor="bg-red-300/50"
        iconTextColor="text-red-800"
      />
      <StatCard
        title="Sisa Bulan Ini"
        subtitle={`Rp. ${data.balance.toLocaleString("id-ID")}`}
        Icon={RiWallet3Line}
        iconBackgroudColor="bg-indigo-300/50"
        iconTextColor="text-indigo-800"
      />
      <StatCard
        title="Budget Terpakai"
        subtitle="25%"
        Icon={LuClock3}
        iconBackgroudColor="bg-indigo-300/50"
        iconTextColor="text-indigo-800"
      />
    </div>
  );
}
