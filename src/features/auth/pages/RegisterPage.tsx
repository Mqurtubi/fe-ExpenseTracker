import AuthHero from "../components/AuthHero";
import RegisterForm from "../forms/RegisterForm";
import { FeaturesAuthHero } from "../types/auth.type";

const listDescription: FeaturesAuthHero[] = [
  {
    subTitle: "Gratis selamanya",
    description: "Semua fitur utama tersedia tanpa biaya berlangganan",
  },
  {
    subTitle: "Data aman & terenkripsi",
    description: "Informasi keuanganmu dilindungi dengan teknologi terkini",
  },
  {
    subTitle: "Akses multi-platform",
    description: "Gunakan di desktop, tablet, atau smartphone kapan saja",
  },
];
export default function RegisterPage() {
  return (
    <div className="grid grid-cols-5">
      <AuthHero
        title="Buat akun, mulai kontrol keuangan."
        subtitle="Bergabung dengan ribuan pengguna yang sudah terbantu."
        features={listDescription}
      />
      <RegisterForm />
    </div>
  );
}
