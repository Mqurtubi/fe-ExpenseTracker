import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Nama wajib diisi"),
    email: z.email("Format email tidak valid"),
    password_hash: z.string().min(8, "Minimal 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password_hash === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email("Format email tidak valid"),
  password_hash: z.string().min(1, "Password wajib diisi"),
});
export type RegisterValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
