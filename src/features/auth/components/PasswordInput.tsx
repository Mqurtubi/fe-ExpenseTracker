import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const [show, setShow] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        <label>{label}</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            ref={ref}
            {...props}
            className={[
              "bg-slate-300/50 focus:outline-indigo-600 px-3 py-3 rounded-xl border border-slate-300 w-full",
              error ? "border-red-400" : "border-slate-300/50",
              className,
            ].join(" ")}
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="absolute right-3 top-4 text-slate-500 hover:text-slate-950"
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
