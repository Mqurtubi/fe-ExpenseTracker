type HeaderFormProps = {
  title: string;
  subtitle: string;
};
export default function HeaderForm({ title, subtitle }: HeaderFormProps) {
  return (
    <div className="space-y-2">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-slate-700">{subtitle}</p>
    </div>
  );
}
