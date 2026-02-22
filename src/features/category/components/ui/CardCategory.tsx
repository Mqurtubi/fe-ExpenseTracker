export default function CardCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-3 py-4 border border-slate-300 rounded-xl  hover:shadow-sm">
      {children}
    </div>
  );
}
