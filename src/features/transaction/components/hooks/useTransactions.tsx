import { useMemo } from "react"
import useTransactionFilter from "./useTransactionFilter"
import useTransactionQuery from "./useTransactionQuery"

export default function useTransactions(){
    const filter = useTransactionFilter()

    const queryParams = useMemo(()=>({
        month:filter.month,
        year:filter.year,
        search:filter.debounceSearch || undefined
    }),[filter.month, filter.year, filter.debounceSearch])

    const query = useTransactionQuery(queryParams)


    return{transactions:query.transactions, loading:query.loading, refetchTransactions:query.refetch, ...filter}
}