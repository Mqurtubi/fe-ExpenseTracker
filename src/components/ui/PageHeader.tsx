type PageHeaderProps = {
  title: string;
  subtitle: string;
};
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-1">
      <p className="">{title}</p>
      <p className="text-slate-600 text-sm">{subtitle}</p>
    </div>
  );
}
