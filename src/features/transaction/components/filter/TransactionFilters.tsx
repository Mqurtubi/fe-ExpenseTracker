export default function TransactionFilters(){
    return(
        <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg">Semua</button>
            <button className="border border-slate-300 px-3 py-1 rounded-lg">Pengeluaran</button>
            <button className="border border-slate-300 px-3 py-1 rounded-lg">Pemasukan</button>
        </div>
    )
}