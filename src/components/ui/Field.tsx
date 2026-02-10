type FieldProps = {
  label: string;
  children: React.ReactNode;
  required: boolean;
  error?: string;
};
export default function Field({
  label,
  children,
  required,
  error,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-semibold text-sm">
        {label} {required && "*"}
      </label>
      {children}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
