import { RiWallet3Line } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";
import banner from "../../../assets/banner.jfif";
import type { FeaturesAuthHero } from "../types/auth.type";
type AuthHero = {
  title: string;
  subtitle: string;
  features: FeaturesAuthHero[];
};
export default function AuthHero({ title, subtitle, features }: AuthHero) {
  return (
    <div className="bg-purple-200/30 p-15 grid col-span-2 gap-20 min-h-screen overflow-hidden">
      <div className="flex items-center gap-2">
        <RiWallet3Line className="bg-indigo-600 text-4xl p-2 rounded-2xl text-white" />
        <p className="text-2xl font-semibold">Expense Tracker</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="space-y-3">
          <p className="text-4xl font-semibold">{title}</p>
          <p className="text-lg text-slate-700">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-2">
          {features.map((item) => (
            <div className="flex items-center gap-4">
              <IoCheckmarkSharp className="text-4xl p-2 bg-indigo-200/40 rounded-full text-indigo-600" />
              <div className="space-y-1">
                <p className="font-semibold">{item.subTitle}</p>
                <p className="text-slate-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img src={banner} alt="" className="h-52 w-full object-cover" />
      </div>
    </div>
  );
}
