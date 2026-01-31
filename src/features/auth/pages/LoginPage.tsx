import AuthHero from "../components/AuthHero";
import LoginForm from "../forms/LoginForm";
import { FeaturesAuthHero } from "../types/auth.type";

const listDescription: FeaturesAuthHero[] = [
  {
    subTitle: "Catat transaksi harian",
    description: "Simpan semua pengeluaran dan pemasukan dalam satu tempat",
  },
  {
    subTitle: "Atur budget per kategori",
    description: "Tentukan batas pengeluaran untuk setiap kategori kebutuhan",
  },
  {
    subTitle: "Lihat laporan bulanan",
    description: "Analisis pola pengeluaran dengan visualisasi yang jelas",
  },
];
export default function LoginPage() {
  return (
    <div className="grid grid-cols-5">
      <AuthHero
        title="Kelola pengeluaranmu dengan rapi."
        subtitle="Pantau setiap rupiah, raih tujuan finansialmu."
        features={listDescription}
      />
      <LoginForm />
    </div>
  );
}
