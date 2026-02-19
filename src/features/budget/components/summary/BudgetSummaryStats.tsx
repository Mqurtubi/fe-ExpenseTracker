type BudgetSummaryStatsProps = {
  total: number;
  used: number;
  remaining: number;
};
export default function BudgetSummaryStats({
  total,
  used,
  remaining,
}: BudgetSummaryStatsProps) {
  return (
    <div className="grid grid-cols-3 justify-between">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Total Budget</p>
        <p className="text-lg font-semibold text-slate-800">
          Rp. {total.toLocaleString("id-ID")}
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Terpakai</p>
        <p className="text-lg font-semibold text-red-600">
          Rp. {used.toLocaleString("id-ID")}
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Sisa Budget</p>
        <p className="text-lg font-semibold text-green-600">
          Rp. {remaining.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
