import { useEffect, useMemo, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export type DropdownOptions<T> = {
  value: T;
  label: string;
};

type DropdownFilterProps<T> = {
  value?: T;
  onChange: (v?: T) => void;
  options: DropdownOptions<T>[];
  placeholder?: string;
  clearlabel?: string;
};

export default function DropdownFilter<T>({
  value,
  onChange,
  options,
  placeholder,
  clearlabel,
}: DropdownFilterProps<T>) {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectedLabel = useMemo(() => {
    if (value === null) return placeholder;
    const foundCategory = options.find(
      (o) => String(o.value) === String(value),
    );
    return foundCategory?.label ?? placeholder;
  }, [value, options, placeholder]);

  return (
    <div className="w-2xs relative" ref={dropdownRef}>
      <button
        className="border border-slate-300  w-full px-3 py-2 rounded-lg flex items-center justify-between"
        type="button"
        onClick={() => setDropdown(!dropdown)}
      >
        {selectedLabel}
        <IoMdArrowDropdown />
      </button>
      {dropdown && (
        <div
          className={`border border-slate-300 my-2 absolute w-full bg-white rounded-lg overflow-hidden p-1 space-y-1`}
        >
          {clearlabel && (
            <button
              type="button"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-400/30 ${
                value == null ? "bg-slate-400/30" : ""
              }`}
              onClick={() => {
                onChange(undefined);
                setDropdown(false);
              }}
            >
              {clearlabel}
              {value == null && <FaCheck />}
            </button>
          )}

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
