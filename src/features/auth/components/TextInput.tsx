import { forwardRef } from "react";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label>{label}</label>
        <input
          ref={ref}
          {...props}
          className={[
            "bg-slate-300/50 focus:outline-indigo-600 px-3 py-3 rounded-xl border border-slate-300",
            error ? "border-red-400" : "border-slate-300",
            className,
          ].join(" ")}
        />
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
// export default function TextInput({
//   label,
//   type,
//   name,
//   placeholder,
//   value,
//   handleChange,
// }: TextInputProps) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label>{label}</label>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//         className="bg-slate-300/50 focus:outline-indigo-600 px-3 py-3 rounded-xl border border-slate-300"
//       />
//     </div>
//   );
// }
