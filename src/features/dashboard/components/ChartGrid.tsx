import { ResponseDashboard } from "../types/type";
import BarChartExpense from "./BarChartExpense";
import PieChartExpense from "./PieChartExpense";

type ChartGridProps = {
  data: ResponseDashboard | null;
};
export default function ChartGrid({ data }: ChartGridProps) {
  if(!data){
    return <p>loading</p>
  }
  return (
    <div className="grid grid-cols-2 gap-5">
      {data?.expense_by_category.length === 0 ? (
        <p>belum ada transaksi</p>
      ) : (
        <>
          <BarChartExpense data={data.expense_by_category} />
          <PieChartExpense data={data.expense_by_category} />
        </>
      )}
    </div>
  );
}
