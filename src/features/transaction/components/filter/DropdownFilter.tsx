import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function DropdownFilter(){
    const [dropdown,setDropdown]=useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        const handleClickOutside = (event:MouseEvent)=>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                setDropdown(false)
            }
        }
        document.addEventListener("click",handleClickOutside)
        return ()=>{
            document.removeEventListener("click",handleClickOutside)   
        }
    },[])
    return(
        <div className="w-2xs relative" ref={dropdownRef}>
            <button className="border border-slate-300  w-full px-3 py-2 rounded-lg flex items-center justify-between" type="button" onClick={()=>setDropdown(!dropdown)}>
                Terbaru
                <IoMdArrowDropdown/>
            </button>
            <div className={`border border-slate-300 my-2 absolute w-full bg-white rounded-lg overflow-hidden p-1 ${!dropdown&&"hidden"}`}>
                <button className="w-full flex items-center justify-between px-3 py-2 bg-slate-400/30" type="button">Terlama <FaCheck/></button>
                <button className="w-full flex px-3 py-2">Terlama</button>
                <button className="w-full flex px-3 py-2">Terlama</button>
            </div>
        </div>
    )
}