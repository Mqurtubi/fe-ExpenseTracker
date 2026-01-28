export default function Navbar() {
  return (
    <div className="flex flex-row-reverse border-b border-slate-300 py-3 px-8">
      <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-indigo-600/70 transition-all duration-300">
        + Tambah Transaksi
      </button>
    </div>
  );
}
