export default function ProgressBar({ progress }: { progress: number }) {
  const value = Math.max(0, Math.min(100, progress));
  return (
    <div className="w-full h-3 bg-slate-200 rounded-2xl overflow-hidden">
      <div className={`bg-green-600 w-[${value}%] h-3`}></div>
    </div>
  );
}
