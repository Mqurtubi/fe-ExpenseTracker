import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Field from "../../../../components/ui/fields/Field";
import Modal from "../../../../components/ui/Modal";
import CategorySelect from "../../../../components/ui/fields/CategorySelect";
import {
  addCategorySchema,
  CategoryFormData,
} from "../../types/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddCategory from "../../hooks/useAddCategory";
import { useToast } from "../../../transaction/context/useToast";
import { useEffect } from "react";
import { CategoryValue } from "../../types/type";
import useUpdateCategory from "../../hooks/useUpdateCategory";
type Mode = "create" | "edit";
type AddModalCategoryProps = {
  open: boolean;
  mode: Mode;
  onClose: () => void;
  onSuccess: () => void | Promise<void>;
  initial?: CategoryValue;
};
export default function AddModalCategory({
  open,
  mode,
  onClose,
  onSuccess,
  initial,
}: AddModalCategoryProps) {
  const { submit: addCategory } = useAddCategory();
  const { submit: updateCategory } = useUpdateCategory();
  const { toast } = useToast();
  const dropdownCategory = [
    { value: "INCOME", label: "Pemasukan" },
    { value: "EXPENSE", label: "Pengeluaran" },
    { value: "BOTH", label: "Keduanya" },
  ];
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: "",
      type: "EXPENSE",
    },
  });
  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    try {
      if (mode === "edit") {
        await updateCategory(Number(initial?.id), data);
        toast.success("Kategori berhasil diupdate");
      } else {
        await addCategory(data);
        toast.success("Kategori berhasil dibuat");
      }
      reset();
      onClose();
      await onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!open) return;
    if (mode === "edit" && initial) {
      reset({
        type: initial.type,
        name: initial.name,
      });
      return;
    }
    reset({
      type: "EXPENSE",
      name: "",
    });
  }, [open, mode, initial, reset]);
  return (
    <Modal
      open={open}
      title="Tambah Category"
      onClose={onClose}
      idForm="add-category-form"
    >
      <form
        className="grid gap-3 "
        id="add-category-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          label="Nama Kategori"
          required={true}
          error={errors.name?.message}
        >
          <input
            type="text"
            className="w-full bg-slate-400/20 p-2 rounded-lg"
            placeholder="Contoh: Tranportasi"
            {...register("name")}
          />
        </Field>
        <Field
          label="Tipe Kategori"
          required={true}
          error={errors.type?.message}
        >
          <Controller
            control={control}
            name="type"
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
      </form>
    </Modal>
  );
}
