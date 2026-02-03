import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import ContainerFilter from "../components/filter/ContainerFilter";

export default function TransactionPage(){
    return(
        <ContainerContent>
            <PageHeader title="Transaksi" subtitle="Kelola semua transaksi keuanganmu"/>
            <ContainerFilter/>
        </ContainerContent>
    )
}