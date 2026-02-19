type BudgetStatusLegendProps = {
  safe: number;
  warning: number;
  over: number;
};
export default function BudgetStatusLegend({
  safe,
  warning,
  over,
}: BudgetStatusLegendProps) {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <p className="text-sm text-slate-600">Aman ({safe})</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
        <p className="text-sm text-slate-600">Hampir Habis ({warning})</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <p className="text-sm text-slate-600">Over Budget ({over})</p>
      </div>
    </div>
  );
}
