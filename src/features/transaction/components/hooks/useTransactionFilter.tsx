import { useState } from "react"
import useDebounce from "../../../../hooks/useDebounce"
export default function useTransactionFilter(){
    const [search,setSearch]=useState("")
    const date = new Date()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const debounceSearch = useDebounce(search,600)

    return {month, year, search, setSearch,debounceSearch}
}