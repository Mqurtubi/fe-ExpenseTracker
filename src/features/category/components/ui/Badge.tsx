import { TypeCategory } from "../../types/type";

type BadgeProps = {
  value: TypeCategory;
  label: string;
  is_default: boolean;
};
export default function Badge({ value, label, is_default }: BadgeProps) {
  return (
    <>
      <p
        className={`${value === "INCOME" ? "bg-green-500/10 text-green-700" : value === "EXPENSE" ? "bg-red-500/10 text-red-700" : "bg-indigo-500/10 text-indigo-700"} text-xs rounded-xl  px-3 py-1`}
      >
        {label}
      </p>
      {is_default && (
        <p className={`border border-slate-300 text-xs rounded-xl  px-3 py-1`}>
          default
        </p>
      )}
    </>
  );
}
