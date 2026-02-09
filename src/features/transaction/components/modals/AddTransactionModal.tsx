import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/ui/modal";
import AmountCurrencyInput from "../fields/AmountCurrencyInput";
import TransactionTypeToogle from "../fields/TransactionTypeToogle";
import { TransactionFormValues } from "../../types/type";

type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function AddTransactionModal({
  open,
  onClose,
}: AddTransactionModalProps) {
  const {control,register, handleSubmit,reset} = useForm<TransactionFormValues>(({
    defaultValues:{
      type:"EXPENSE",
      amount:0,
      date: new Date().toISOString().slice(0,10),
      category_id:undefined,
      payment_method:undefined,
      note:""
    }
  }))
  return( 
    <Modal open={open} onClose={onClose} title="Tambah Transaksi">
      <form className="grid gap-3">
        <Controller 
          control={control}
          name="type"
          render={({field})=>(
            <TransactionTypeToogle value={field.value} onChange={field.onChange}/>
          )}
          />
        <Controller
          control={control}
          name="amount"
          render={({field})=>(
            <AmountCurrencyInput value={field.value} onChange={field.onChange}/>
          )}
          />
      </form>
    </Modal>
  )
}
