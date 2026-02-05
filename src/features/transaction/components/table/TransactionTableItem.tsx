import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TransactionsValue } from "../../types/type";

type TransactionTableItemProps={
    data:TransactionsValue
}
export default function TransactionTableItem({data}:TransactionTableItemProps){
    const date = new Date(data.date)
    const amount = Number(data.amount)
    return(
        <tr className="border-b border-slate-300 ">
            <td className="px-5 py-2">{date.toLocaleString("id-ID",{day:"2-digit", month:"long",year:"numeric"})}</td>
            <td className="px-5 py-2">{data.category.name}</td>
            <td className="px-5 py-2">{data.note}</td>
            <td className="px-5 py-2"><span className={`font-semibold ${data.type === "EXPENSE" ? "text-red-800 bg-red-300/50":"text-green-800 bg-green-300/50"} py-1 px-2 rounded-xl`}>{data.type}</span></td>
            <td className={`${data.type === "EXPENSE"?"text-red-700":"text-green-700"} font-semibold px-5 py-2`}>{data.type === "EXPENSE"?"-":"+"} Rp {amount.toLocaleString("id-ID")}</td>
            <td className="flex text-lg py-2 px-3 space-x-5">
                <button type="button" className="hover:cursor-pointer">
                    <BiEdit/>
                </button>
                <button type="button" className="text-red-800 hover:cursor-pointer">
                    <RiDeleteBin6Line/>
                </button>
            </td>
        </tr>
    )
}