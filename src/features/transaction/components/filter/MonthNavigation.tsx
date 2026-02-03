export default function MonthNavigation(){
    return(
        <div className="space-x-3">
            <button className="border border-slate-300 py-1 px-3 rounded-lg text-lg hover:bg-slate-400/20 hover:cursor-pointer" type="button">&lt;</button>
            <span className="bg-slate-400/20 px-10 py-2 rounded-lg font-semibold">Januari 2026</span>
            <button className="border border-slate-300 py-1 px-3 rounded-lg text-lg hover:bg-slate-400/20 hover:cursor-pointer" type="button">&gt;</button>
        </div>
    )
}