export default function TransactionTableHeader(){
    const rows=["Tanggal","Kategori","Catatan","Tipe","Jumlah","Aksi"]
    return(
        <thead className="border-b border-slate-300 ">
            <tr>
                {rows.map((item)=>(
                    <th className="text-start px-5 py-2">{item}</th>
                ))}
            </tr>
        </thead>
    )
}