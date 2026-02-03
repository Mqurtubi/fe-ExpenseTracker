import { useEffect, useState } from "react";

export default function Navbar() {
  const [isBlurred,setIsBlurred] = useState(false)

  const handleScroll = ()=>{
    if(window.scrollY>3){
      setIsBlurred(true)
    }else{
      setIsBlurred(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return (
    <div className={`flex flex-row-reverse border-b border-slate-300 py-3 px-8 fixed w-full  ${isBlurred?"navbar-blur":""} navbar`}>
      <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-indigo-600/70 transition-all duration-300 ">
        + Tambah Transaksi
      </button>
    </div>
  );
}
