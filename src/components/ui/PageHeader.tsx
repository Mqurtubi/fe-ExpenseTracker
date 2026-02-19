type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};
export default function PageHeader({
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="">{title}</p>
        <p className="text-slate-600 text-sm">{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
