import { FaCheck } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { DropdownOptions } from "../filter/DropdownFilter";
import { useEffect, useMemo, useRef, useState } from "react";
type CategorySelectProps<T> = {
  value?: T;
  onChange: (v?: T) => void;
  options: DropdownOptions<T>[];
  placeholder?: string;
};
export default function CategorySelect<T>({
  value,
  options,
  placeholder,
  onChange,
}: CategorySelectProps<T>) {
  const [dropdown, setDropdown] = useState(false);
  const refDropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refDropdown.current &&
        !refDropdown.current.contains(event.target as null)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedLabel = useMemo(() => {
    if (value === null) return placeholder;
    const foundCategory = options.find(
      (o) => String(o.value) === String(value),
    );
    return foundCategory?.label ?? placeholder;
  }, [placeholder, value, options]);
  return (
    <div className="w-full relative" ref={refDropdown}>
      <button
        className={`bg-slate-400/20  w-full px-3 py-2 rounded-lg flex items-center justify-between text-slate-500 ${value && "text-slate-900"}` }
        type="button"
        onClick={() => setDropdown(!dropdown)}
      >
        {selectedLabel}
        <IoMdArrowDropdown />
      </button>
      {dropdown && (
        <div
          className={`border border-slate-300 my-2 absolute w-full bg-white rounded-lg overflow-hidden p-1 space-y-1 z-50`}
        >
          {options.map((item) => {
            const active =
              value != null && String(item.value) === String(value);
            return (
              <button
                className={`w-full flex items-center justify-between px-3 py-2 ${active && "bg-slate-400/30"} rounded-lg hover:bg-slate-400/30`}
                type="button"
                onClick={() => {
                  onChange(item.value);
                  setDropdown(false);
                }}
              >
                {item.label}
                {active && <FaCheck />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
