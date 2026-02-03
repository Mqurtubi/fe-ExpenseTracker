import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type CategoryStat = {
  category_name: string;
  amount: number;
  category_color: string;
};

export default function PieChartExpense({ data }: { data: CategoryStat[] }) {
  const chartData = {
    labels: data.map((d) => d.category_name),
    datasets: [
      {
        data: data.map((d) => d.amount),
        backgroundColor: data.map((d) => d.category_color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: { position: "right" as const },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className=" border border-slate-300 pb-5">
    <div className="h-85 w-full col-span-1 p-5  space-y-2">
      <p className="text-lg">Distribusi Pengeluaran</p>
      <Pie data={chartData} options={options} />
    </div>
    </div>
  );
}
