export default function CardBudget({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-300 shadow-2xs p-5 rounded-xl grid gap-5">
      {children}
    </div>
  );
}
