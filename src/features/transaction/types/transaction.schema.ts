import {z} from "zod"

const addTransactionSchema=z.object({
    type:z.enum(["EXPENSE","INCOME"],{error:()=>({message:"Tipe transaksi wajib dipilih"})}),
    amount:z.number().min(1,"Jumlah transaksi wajib lebih dari 0"),
    transaction_date:z.string().min(1,"Tanggal wajib diisi"),
    category_id:z.number().min(1,"kategori wajib diisi"),
    payment_method:z.enum(["CASH" , "BANK_TRANSFER" , "DEBIT_CARD" , "CREDIT_CARD" , "EWALLET" ,"OTHER"]).optional(),
    note:z.string().max(255,"Catatan tidak boleh lebih dari 255 karakter")
})

type TransactionFormData = z.infer<typeof addTransactionSchema>

export {type TransactionFormData, addTransactionSchema}