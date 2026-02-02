import StatCard from "./StatCard";
import { RiWallet3Line } from "react-icons/ri";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <StatCard
        title="Total Pemasukan"
        subtitle="Rp. 5.000.000"
        Icon={BsGraphUpArrow}
        iconBackgroudColor="bg-green-300/50"
        iconTextColor="text-green-800"
      />
      <StatCard
        title="Total Pengeluaran"
        subtitle="Rp. 3.000.000"
        Icon={BsGraphDownArrow}
        iconBackgroudColor="bg-red-300/50"
        iconTextColor="text-red-800"
      />
      <StatCard
        title="Sisa Bulan Ini"
        subtitle="Rp. 2.000.000"
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
