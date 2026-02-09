type AmountCurrencyInputProps={
    value:number,
    onChange:(v:number)=>void,
    placeholder?:string
}
function formatIdr(n:number){
    return new Intl.NumberFormat("id-ID").format(n)
}

function parseIdr(raw:string){
    const digits = raw.replace(/[^\d]/g, "");
    return digits ? Number(digits) : 0
}
export default function AmountCurrencyInput({value,onChange,placeholder="0"}:AmountCurrencyInputProps){
    const display = value ? formatIdr(value):"" 
    return(
        <div className="flex relative items-center">
            <span className="text-slate-600 absolute left-3">Rp</span>
            <input inputMode="numeric" className="w-full bg-slate-400/20 py-2 pl-10 rounded-lg" placeholder={placeholder} onChange={(e)=>onChange(parseIdr(e.target.value))} value={display}/>
        </div>
    )
}