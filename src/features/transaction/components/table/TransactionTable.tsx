import { TransactionsValue } from "../../types/type";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableItem from "./TransactionTableItem";

type TransactionTableProps={
    transactions:TransactionsValue[]
}
export default function TransactionTable({transactions}:TransactionTableProps){
    if(!transactions){
        return <p>loading</p>
    }
     if (transactions.length === 0) {
        return <p>No transactions available.</p>;
    }
    return(
        <div className="overflow-hidden rounded-2xl border border-slate-300">
        <table className="table-auto min-w-full ">
            <TransactionTableHeader/>
            {transactions.map((transaction)=>(
                <TransactionTableItem data={transaction}/>
            ))}
        </table>
        </div>
    )
}