import DropdownFilter from "./DropdownFilter";
import MonthNavigation from "./MonthNavigation";
import SearchBar from "./SearchBar";
import TransactionFilters from "./TransactionFilters";

export default function ContainerFilter(){
    return(
        <div className="border border-slate-300 p-5 grid gap-5 rounded-xl">
            <div className="flex gap-5">
                <MonthNavigation/>
                <TransactionFilters/>
            </div>
            <div className="flex gap-5">
                <SearchBar/>
                <DropdownFilter/>
                <DropdownFilter/>
            </div>
        </div>
    )
}