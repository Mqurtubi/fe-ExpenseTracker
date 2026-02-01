import { SubmitHandler, useForm } from "react-hook-form";
import ButtonForm from "../components/ButtonForm";
import FooterForm from "../components/FooterForm";
import FormLayout from "../components/FormLayout";
import HeaderForm from "../components/HeaderForm";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import { loginSchema, LoginValues } from "../types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../hooks/useLogin";
import AlertForm from "../components/AlertForm";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password_hash: "",
    },
  });
  const { message, isError, submit, clear } = useLogin();
  const { refresh } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginValues> = async (payload) => {
    try {
      await submit(payload);
      refresh();
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormLayout handleSubmit={handleSubmit(onSubmit)}>
      <HeaderForm
        title="Masuk"
        subtitle="Selamat datang kembali, lanjutkan pencatatanmu."
      />
      <AlertForm isError={isError} message={message} />
      <TextInput
        label="Email"
        type="email"
        placeholder="name@gmail.com"
        error={errors.email?.message}
        {...register("email", { onChange: () => clear() })}
      />
      <PasswordInput
        label="Password"
        placeholder="Masukkan password"
        error={errors.password_hash?.message}
        {...register("password_hash", { onChange: () => clear() })}
      />
      <ButtonForm label="Masuk" isSubmitting={isSubmitting} />
      <FooterForm text="Belum punya akun?" linkText="Daftar" href="/register" />
    </FormLayout>
  );
}
