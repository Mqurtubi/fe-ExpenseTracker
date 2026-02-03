import { ResponseDashboard } from "../../types/type";
import TransactionItem from "./TransactionItem";

type TransactionListProps={
    data:ResponseDashboard | null
}
export default function TransactionList({data}:TransactionListProps){
    if(!data){
        return <p>loading</p>
    }
    return (
        <div className="border border-slate-300 rounded-xl p-5 grid gap-8">
            <div className="flex justify-between mx-2 text-lg">
                <p className="text-slate-800">Transaksi Baru</p>
                <p className="text-slate-400">{data.recent_transactions.length} Transaksi</p>
            </div>
            <div className="grid gap-5">
                {data.recent_transactions.length === 0 ? <p>Transaksi tidak ada</p>:(
                    <>
                        {data.recent_transactions.map((item)=>(
                            <TransactionItem transactions={item}/>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}