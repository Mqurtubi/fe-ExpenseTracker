import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../../components/ui/Modal";
import AmountCurrencyInput from "../fields/AmountCurrencyInput";
import TransactionTypeToogle from "../fields/TransactionTypeToogle";
import Field from "../../../../components/ui/Field";
import CategorySelect from "../fields/CategorySelect";
import useCategory from "../../../category/hooks/useCategory";
import { DropdownOptions } from "../filter/DropdownFilter";
import { useMemo } from "react";
import { addTransactionSchema, TransactionFormData } from "../../types/transaction.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddTransaction from "../../hooks/useAddTransaction";

type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function AddTransactionModal({
  open,
  onClose,
}: AddTransactionModalProps) {
  const { category } = useCategory();
  const {submit} = useAddTransaction()
  const { control, register, watch, handleSubmit,reset, formState:{errors} } =
    useForm<TransactionFormData>({
      resolver:zodResolver(addTransactionSchema),
      defaultValues: {
        type: "EXPENSE",
        amount: 0,
        transaction_date: new Date().toISOString().slice(0, 10),
        category_id: undefined,
        payment_method: undefined,
        note: "",
      },
    });
  const type = watch("type");

  const dropdownCategory: DropdownOptions<number>[] = useMemo(
    () =>
      category
        .filter((c) => c.type === type)
        .map((c) => ({ value: Number(c.id), label: c.name })),
    [category, type],
  );

  const paymentOptions: DropdownOptions<string>[] = [
    { value: "CASH", label: "Tunai" },
    { value: "BANK_TRANSFER", label: "Transfer bank" },
    { value: "DEBIT_CARD", label: "Kartu debit" },
    { value: "CREDIT_CARD", label: "Kartu kredit" },
    { value: "EWALLET", label: "E-Wallet" },
    { value: "OTHER", label: "Lainnya" },
  ];

  const onSubmit:SubmitHandler<TransactionFormData> = async (data)=>{
    console.log(data)
    try {
      await submit(data)
      reset()
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Tambah Transaksi">
      <form className="grid gap-3" id="add-transaction-form" onSubmit={handleSubmit(onSubmit)}>
        <Field label="Tipe Transaksi" required={false} error={errors.type?.message}>
          <Controller
            control={control}
            name="type"
            
            render={({ field }) => (
              <TransactionTypeToogle
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Field>
        <Field label="Jumlah" required={true} error={errors.amount?.message}>
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
        <Field label="Tanggal" required={true} error={errors.transaction_date?.message}>
          <input
            type="date"
            className="w-full bg-slate-400/20 p-2 rounded-lg"
            {...register("transaction_date")}
          />
        </Field>
        <Field label="Kategori" required={true} error={errors.category_id?.message}>
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
        <Field label="Metode Pembayaran (opsional)" required={false}>
          <Controller
            control={control}
            name="payment_method"
            render={({ field }) => (
              <CategorySelect
                options={paymentOptions}
                placeholder="Pilih metode"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Field>
        <Field label="Catatan" required={true} error={errors.note?.message}>
            <textarea className="bg-slate-400/20 rounded-lg min-h-20 p-2" placeholder="contoh: makan siang" {...register("note")}/>
        </Field>
      </form>
    </Modal>
  );
}
