import { IconType } from "react-icons";
type StatCardProps = {
  title: string;
  subtitle: string;
  Icon: IconType;
  iconBackgroudColor: string;
  iconTextColor: string;
};
export default function StatCard({
  title,
  subtitle,
  Icon,
  iconBackgroudColor,
  iconTextColor,
}: StatCardProps) {
  return (
    <div className="flex items-center border border-slate-300 shadow-2xs rounded-xl justify-between px-5 py-7 gap-3">
      <div className="space-y-1">
        <p className="text-sm text-slate-600">{title}</p>
        <p className="text-xl font-semibold">{subtitle}</p>
      </div>
      <div className={`${iconBackgroudColor} p-3 rounded-2xl`}>
        <Icon className={`${iconTextColor}`} />
      </div>
    </div>
  );
}
