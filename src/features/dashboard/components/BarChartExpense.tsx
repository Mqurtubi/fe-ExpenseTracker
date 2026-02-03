import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type CategoryStat = {
  category_name: string;
  amount: number;
  category_color: string;
};

export default function BarChartExpense({ data }: { data: CategoryStat[] }) {
  const chartData = {
    labels: data.map((d) => d.category_name),
    datasets: [
      {
        label: "Pengeluaran",
        data: data.map((d) => d.amount),
        backgroundColor: data.map((d) => d.category_color),
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#e5e7eb" } },
    },
  };

  return (
    <div className=" border border-slate-300 pb-5">
    <div className="h-85 w-full col-span-1 p-5  space-y-2">
      <p className="text-lg">Pengeluaran Per Kategori</p>
      <Bar data={chartData} options={options} />
    </div>
    </div>
  );
}
