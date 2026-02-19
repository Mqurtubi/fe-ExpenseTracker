import { Controller,SubmitHandler,useForm } from "react-hook-form";
import Modal from "../../../../components/ui/Modal";
import CategorySelect from "../../../../components/ui/fields/CategorySelect";
import Field from "../../../../components/ui/fields/Field";
import useCategory from "../../../category/hooks/useCategory";
import { DropdownOptions } from "../../../transaction/components/filter/DropdownFilter";
import { useMemo } from "react";
import AmountCurrencyInput from "../../../../components/ui/fields/AmountCurrencyInput";
import { BudgetFormData, BudgetFormInput, budgetSchema } from "../../types/budget.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddBudget from "../../hooks/useAddBudget";
import { useToast } from "../../../transaction/context/useToast";

type AddModalBudgetProps={
    open:boolean,
    onClose:()=>void,
    onSuccess:()=>void | Promise<void>
}
export default function AddModalBudget({open,onClose,onSuccess}:AddModalBudgetProps){
    const {category}=useCategory()
    const {submit}=useAddBudget()
    const {toast}=useToast()
    const date = new Date()
    const {control,register,reset,handleSubmit,formState:{errors}}=useForm<BudgetFormInput,undefined,BudgetFormData>({
        resolver:zodResolver(budgetSchema),
        defaultValues:{
            category_id:undefined,
            amount:0,
            period:`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`,
        }
    })

    const dropdownCategory : DropdownOptions<number>[]=useMemo(
        ()=>
            category.filter((c)=>c.type === "EXPENSE" || c.type === "BOTH" ).map((c)=>({value:Number(c.id),label:c.name}))
    ,[category])

    const onSubmit:SubmitHandler<BudgetFormData> = async (data)=>{
        try {
            await submit(data)
            toast.success("Budget berhasil ditambahkan")
            reset()
            await onSuccess?.()
        } catch (error) {
            console.log(error)
            toast.error("Budget gagal ditambahkan")
        }
        console.log(data)
    }
    return(
        <Modal title="Tambah Budget" open={open} idForm="add-budget-form" onClose={onClose}>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} id="add-budget-form">
            <Field
            label="Kategori"
            required={true}
            error={errors.category_id?.message}>
                      <Controller
                        control={control}
                        name="category_id"
                        render={({ field }) => (
                          <CategorySelect
                            options={dropdownCategory}
                            placeholder="Pilih kategori"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
            </Field>
            <Field
                label="Bulan"
                required={true}
                error={errors.period?.message}
                >
                    <input
                    type="month"
                    className="w-full bg-slate-400/20 p-2 rounded-lg"
                    {...register("period")}
                    />
            </Field>
            <Field label="Limit Budget" required={true} error={errors.amount?.message}>
                <Controller
                control={control}
                name="amount"
                render={({ field }) => (
                        <AmountCurrencyInput
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                />
            </Field>
            </form>
        </Modal>
    )
}