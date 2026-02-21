import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../../components/ui/Modal";
import CategorySelect from "../../../../components/ui/fields/CategorySelect";
import Field from "../../../../components/ui/fields/Field";
import useCategory from "../../../category/hooks/useCategory";
import { DropdownOptions } from "../../../transaction/components/filter/DropdownFilter";
import { useEffect, useMemo } from "react";
import AmountCurrencyInput from "../../../../components/ui/fields/AmountCurrencyInput";
import {
  BudgetFormData,
  BudgetFormInput,
  budgetSchema,
} from "../../types/budget.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddBudget from "../../hooks/useAddBudget";
import { useToast } from "../../../transaction/context/useToast";
import useUpdateBudget from "../../hooks/useUpdateBudget";
import { budgetValue } from "../../types/type";

type Mode = "create" | "edit";
type AddModalBudgetProps = {
  open: boolean;
  mode: Mode;
  onClose: () => void;
  onSuccess: () => void | Promise<void>;
  initial?: budgetValue;
};
export default function AddModalBudget({
  open,
  mode,
  onClose,
  onSuccess,
  initial,
}: AddModalBudgetProps) {
  const { category } = useCategory();
  const { submit: add } = useAddBudget();
  const { submit: update } = useUpdateBudget();
  const { toast } = useToast();
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormInput, undefined, BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category_id: undefined,
      amount: 0,
      period: currentDate,
    },
  });

  const dropdownCategory: DropdownOptions<number>[] = useMemo(
    () =>
      category
        .filter((c) => c.type === "EXPENSE" || c.type === "BOTH")
        .map((c) => ({ value: Number(c.id), label: c.name })),
    [category],
  );

  const onSubmit: SubmitHandler<BudgetFormData> = async (data) => {
    try {
      if (mode === "edit" && initial) {
        await update(Number(initial.id), data);
        toast.success("Budget berhasil diupdate");
        onClose();
      } else {
        await add(data);
        toast.success("Budget berhasil ditambahkan");
        onClose();
      }
      reset();
      await onSuccess?.();
    } catch (error) {
      console.log(error);
      toast.error("Budget gagal ditambahkan");
    }
    console.log(data);
  };
  useEffect(() => {
    if (!open) return;
    if (mode === "edit" && initial) {
      const period = `${initial.year}-${String(initial.month).padStart(2, "0")}`;
      reset({
        amount: Number(initial.amount),
        category_id:
          initial.category_id != null ? Number(initial.category_id) : undefined,
        period,
      });
      return;
    }
    reset({
      amount: 0,
      category_id: undefined,
      period: currentDate,
    });
  }, [open, mode, initial, reset, currentDate]);
  return (
    <Modal
      title={mode === "edit" ? "Edit Budget" : "Tambah Budget"}
      open={open}
      idForm="add-budget-form"
      onClose={onClose}
    >
      <form
        className="space-y-3"
        onSubmit={handleSubmit(onSubmit)}
        id="add-budget-form"
      >
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
        <Field label="Bulan" required={true} error={errors.period?.message}>
          <input
            type="month"
            className="w-full bg-slate-400/20 p-2 rounded-lg"
            {...register("period")}
          />
        </Field>
        <Field
          label="Limit Budget"
          required={true}
          error={errors.amount?.message}
        >
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
  );
}
