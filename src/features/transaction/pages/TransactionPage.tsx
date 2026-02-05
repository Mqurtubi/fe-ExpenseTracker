import { useEffect, useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import ContainerFilter from "../components/filter/ContainerFilter";
import TransactionTable from "../components/table/TransactionTable";
import useTransactions from "../components/hooks/useTransactions";

export default function TransactionPage(){
    const {transactions,loading,refetchTransactions,search,setSearch}=useTransactions()
    useEffect(()=>{
        refetchTransactions()
    },[refetchTransactions])
    return(
        <ContainerContent>
            <PageHeader title="Transaksi" subtitle="Kelola semua transaksi keuanganmu"/>
            <ContainerFilter search={search} setSearch={setSearch}/>
            <TransactionTable transactions={transactions}/>
        </ContainerContent>
    )
}