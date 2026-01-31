import { useForm, type SubmitHandler } from "react-hook-form";
import ButtonForm from "../components/ButtonForm";
import FooterForm from "../components/FooterForm";
import FormLayout from "../components/FormLayout";
import HeaderForm from "../components/HeaderForm";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import { registerSchema, type RegisterValues } from "../types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertForm from "../components/AlertForm";
import useRegister from "../hooks/useRegister";
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password_hash: "",
      confirmPassword: "",
    },
  });
  const { message, isError, submit, clear } = useRegister();
  const onSubmit: SubmitHandler<RegisterValues> = async (data) => {
    try {
      await submit(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormLayout handleSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Daftar"
        subtitle="Buat akun baru untuk mulai mencatat pengeluaran."
      />
      <AlertForm isError={isError} message={message} />
      <TextInput
        label="Nama Lengkap"
        type="text"
        placeholder="John Doe"
        {...register("name", { onChange: () => clear() })}
        error={errors.name?.message}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="name@gmail.com"
        {...register("email", { onChange: () => clear() })}
        error={errors.email?.message}
      />
      <PasswordInput
        label="Password"
        placeholder="Minimal 8 karakter"
        {...register("password_hash", { onChange: () => clear() })}
        error={errors.password_hash?.message}
      />
      <PasswordInput
        label="Konfirmasi Password"
        placeholder="Masukkan ulang password"
        {...register("confirmPassword", { onChange: () => clear() })}
        error={errors.confirmPassword?.message}
      />
      <ButtonForm label="Buat Akun" isSubmitting={isSubmitting} />
      <FooterForm text="Sudah punya akun?" linkText="Masuk" href="/login" />
    </FormLayout>
  );
}
