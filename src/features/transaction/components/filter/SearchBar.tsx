import { CiSearch } from "react-icons/ci";

export default function SearchBar(){
    return(
        <div className="relative">
            <input type="text" placeholder="Cari catatan..." className=" w-xs pl-10 py-2 bg-slate-400/20 focus:bg-white focus:outline-none focus:border border-slate-300 rounded-lg focus:shadow-md transition-all duration-200"/>
            <CiSearch className="absolute top-3 left-3 text-xl"/>
        </div>
    )
}