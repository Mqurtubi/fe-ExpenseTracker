type TransactionTypeToogleProps={
    value : "INCOME" | "EXPENSE",
    onChange : (value:"INCOME"|"EXPENSE") => void
}
export default function TransactionTypeToogle({value,onChange}:TransactionTypeToogleProps){
    const base = " w-full py-2 rounded-lg"
    const activeIncome = value === "INCOME" ? "bg-green-500 text-white hover:bg-green-700/80" : "border border-slate-300 hover:bg-slate-500/20"
    const activeExpense = value === "EXPENSE" ? "bg-red-500 text-white hover:bg-red-700/80" : "border border-slate-300 hover:bg-slate-500/20    "
    return (
            <div className="flex gap-2 font-semibold">
                <button className={`${base} ${activeIncome}`} onClick={()=>onChange("INCOME")} type="button">Pemasukan</button>
                <button className={`${base} ${activeExpense}`} onClick={()=>onChange("EXPENSE")} type="button">Pengeluaran</button>
            </div>
        )
}