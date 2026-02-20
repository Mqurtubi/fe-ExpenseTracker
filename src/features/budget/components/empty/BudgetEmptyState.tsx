import { RiWallet3Line } from "react-icons/ri";
import CardBudget from "../ui/cards/CardBudget";

export default function BudgetEmptyState({
  addModal,
}: {
  addModal: () => void;
}) {
  return (
    <CardBudget>
      <div className="flex justify-center">
        <div className=" flex flex-col items-center  w-1/2 gap-5 py-10">
          <RiWallet3Line className="text-8xl p-4 bg-slate-300/50 rounded-full text-slate-500" />
          <div className="text-center">
            <p className="font-medium">Belum ada budget</p>
            <p className="text-slate-600">
              Mulai kelola keuanganmu dengan membuat budget untuk <br />
              kategori tertentu.
            </p>
          </div>
          <button
            className="font-semibold text-white bg-indigo-600 hover:bg-indigo-600/70 px-5 py-2 rounded-lg hover:cursor-pointer"
            type="button"
            onClick={addModal}
          >
            <span>+</span> Tambah Budget
          </button>
        </div>
      </div>
    </CardBudget>
  );
}
