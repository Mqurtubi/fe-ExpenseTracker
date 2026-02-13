import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useToast } from "../../../features/transaction/context/useToast";

export default function Toast(){
    const {toasts}=useToast()
    return(
        <div className="absolute  z-50 top-7 right-2 bg-white flex items-center space-x-3 shadow-2xs border border-slate-200 rounded-lg px-5 py-3">
            {toasts.map((item)=>(
                <>
                    {item.type === "error"?<IoMdCloseCircle className={`text-xl text-red-500`}/>:<FaCircleCheck className="text-xl text-green-500"/>}
                    <p>{item.message}</p>
                </>
            ))}
            
        </div>
    )
}