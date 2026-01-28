import { RiWallet3Line } from "react-icons/ri";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
export default function Sidebar({open,handleOpen}){
    return(
        <div className={`bg-white fixed top-0 ${open?"translate-0":"-translate-x-60"} w-xs h-screen border-r border-slate-300 transition-transform duration-300`}>
            <div className=" text-xl py-4 flex justify-center border-b border-slate-300 space-x-8 items-center">
                <div className="flex items-center space-x-2 font-semibold">
                    <div className="p-2 bg-blue-700 text-white rounded-xl">
                        <RiWallet3Line />
                    </div>
                    <p>Expense Tracker</p>
                </div>
                
                <button className="p-2  rounded-lg hover:bg-slate-200 hover:cursor-pointer" onClick={handleOpen}>{open?<MdOutlineArrowForwardIos/>:<MdOutlineArrowBackIos/>}</button>
            </div>
        </div>
    )
}