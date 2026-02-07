import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
};
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari catatan..."
        className=" w-xs pl-10 py-2 bg-slate-400/20 focus:bg-white focus:outline-none focus:border border-slate-300 rounded-lg focus:shadow-md transition-all duration-200"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <CiSearch className="absolute top-3 left-3 text-xl" />
    </div>
  );
}
