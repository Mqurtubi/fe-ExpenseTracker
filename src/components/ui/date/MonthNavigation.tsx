import { useEffect } from "react";

type MonthNavigationProps = {
  month: number;
  setMonth: (v: number) => void;
  year: number;
  setYear: (v: number) => void;
};
export default function MonthNavigation({
  month,
  setMonth,
  year,
  setYear,
}: MonthNavigationProps) {
  const bulanID = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  useEffect(() => {
    console.log(month);
  }, [month]);
  return (
    <div className="space-x-3">
      <button
        className="border border-slate-300 py-1 px-3 rounded-lg text-lg hover:bg-slate-400/20 hover:cursor-pointer"
        type="button"
        onClick={() => {
          if (month <= 1) {
            setYear(year - 1);
            setMonth(12);
            return;
          }
          setMonth(month - 1);
        }}
      >
        &lt;
      </button>
      <span className="bg-slate-400/20 px-10 py-2 rounded-lg font-semibold">
        {bulanID[month - 1]} {year}
      </span>
      <button
        className="border border-slate-300 py-1 px-3 rounded-lg text-lg hover:bg-slate-400/20 hover:cursor-pointer"
        type="button"
        onClick={() => {
          if (month >= 12) {
            setYear(year + 1);
            setMonth(1);
            return;
          }
          setMonth(month + 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
}
