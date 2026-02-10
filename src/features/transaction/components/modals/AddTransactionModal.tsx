import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/ui/Modal";
import AmountCurrencyInput from "../fields/AmountCurrencyInput";
import TransactionTypeToogle from "../fields/TransactionTypeToogle";
import { TransactionFormValues } from "../../types/type";
import Field from "../../../../components/ui/Field";
import CategorySelect from "../fields/CategorySelect";
import useCategory from "../../../category/hooks/useCategory";
import { DropdownOptions } from "../filter/DropdownFilter";
import { useMemo } from "react";

type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function AddTransactionModal({
  open,
  onClose,
}: AddTransactionModalProps) {
  const { category } = useCategory();
  const { control, register, watch, handleSubmit, reset } =
    useForm<TransactionFormValues>({
      defaultValues: {
        type: "EXPENSE",
        amount: 0,
        date: new Date().toISOString().slice(0, 10),
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
  return (
    <Modal open={open} onClose={onClose} title="Tambah Transaksi">
      <form className="grid gap-3">
        <Field label="Tipe Transaksi" required={false}>
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
        <Field label="Jumlah" required={true}>
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
        <Field label="Tanggal" required={true}>
          <input
            type="date"
            className="w-full bg-slate-400/20 p-2 rounded-lg"
            {...register("date")}
          />
        </Field>
        <Field label="Kategori" required={true}>
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
      </form>
    </Modal>
  );
}
