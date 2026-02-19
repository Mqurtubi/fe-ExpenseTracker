import {z} from "zod"

const budgetSchema = z.object({
    category_id:z.number().min(1,"kategori wajib diisi"),
    amount:z.number().min(1,"Limit budget wajib lebih dari 0"),
    period:z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Format harus YYYY-MM")
})
.transform((val)=>{
    const [year,month] = val.period.split("-");
    return{
        category_id:val.category_id,
        month:Number(month),
        year:Number(year),
        amount:val.amount
    }
})

type BudgetFormInput = z.input<typeof budgetSchema>
type BudgetFormData = z.output<typeof budgetSchema>

export {type BudgetFormData,type BudgetFormInput, budgetSchema}