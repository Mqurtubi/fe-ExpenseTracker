import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../../components/ui/Modal";
import AmountCurrencyInput from "../fields/AmountCurrencyInput";
import TransactionTypeToogle from "../fields/TransactionTypeToogle";
import Field from "../../../../components/ui/Field";
import CategorySelect from "../fields/CategorySelect";
import useCategory from "../../../category/hooks/useCategory";
import { DropdownOptions } from "../filter/DropdownFilter";
import { useEffect, useMemo, useRef } from "react";
import {
  addTransactionSchema,
  TransactionFormData,
} from "../../types/transaction.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddTransaction from "../../hooks/useAddTransaction";
import useUpdateTransaction from "../../hooks/useUpdateTransaction";

type Mode = "create" | "edit";
type TransactionFormEdit = TransactionFormData & { id: number };
type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void | Promise<void>;
  mode: Mode;
  initial?: TransactionFormEdit;
};
export default function AddTransactionModal({
  open,
  onClose,
  onSuccess,
  mode,
  initial,
}: AddTransactionModalProps) {
  const { category } = useCategory();
  const { submit: add } = useAddTransaction();
  const { submit: update } = useUpdateTransaction();
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(addTransactionSchema),
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

  const onSubmit: SubmitHandler<TransactionFormData> = async (data) => {
    console.log(data);
    try {
      if (mode === "edit" && initial) {
        await update(initial.id, data);
      } else {
        await add(data);
      }
      reset();
      onClose();
      await onSuccess?.();
    } catch (error) {
      console.log(error);
    }
  };

  const prevType = useRef(type);
  useEffect(() => {
    if (!open) return;
    if (prevType.current !== type) {
      resetField("category_id", { defaultValue: undefined });
      clearErrors("category_id");
    }
    prevType.current = type;
  }, [type, resetField, clearErrors, open]);

  useEffect(() => {
    if (!open) return;
    if (mode === "edit" && initial) {
      reset({
        type: initial.type,
        amount: Number(initial.amount),
        transaction_date: initial.transaction_date.slice(0, 10),
        category_id:
          initial.category_id != null ? Number(initial.category_id) : undefined,
        payment_method: initial.payment_method ?? undefined,
        note: initial.note ?? "",
      });
      return;
    }
    reset({
      type: "EXPENSE",
      amount: 0,
      transaction_date: new Date().toISOString().slice(0, 10),
      category_id: undefined,
      payment_method: undefined,
      note: "",
    });
  }, [open, mode, initial, reset]);
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={mode === "edit" ? "Edit Transaksi" : "Tambah Transaksi"}
    >
      <form
        className="grid gap-3 relative overflow-auto"
        id="add-transaction-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          label="Tipe Transaksi"
          required={false}
          error={errors.type?.message}
        >
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
        <Field
          label="Tanggal"
          required={true}
          error={errors.transaction_date?.message}
        >
          <input
            type="date"
            className="w-full bg-slate-400/20 p-2 rounded-lg"
            {...register("transaction_date")}
          />
        </Field>
        <Field
          label="Kategori"
          required={true}
          error={errors.category_id?.message}
        >
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
          <textarea
            className="bg-slate-400/20 rounded-lg min-h-20 p-2"
            placeholder="contoh: makan siang"
            {...register("note")}
          />
        </Field>
      </form>
    </Modal>
  );
}
