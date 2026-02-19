export default function BudgetSummaryHeader({addModal}:{addModal:()=>void}) {
  return (
    <div className="flex justify-between items-center text-sm">
      <p className="text-lg">Ringkasan Budget</p>
      <button className="font-semibold text-white bg-indigo-600 hover:bg-indigo-600/70 px-5 py-2 rounded-lg hover:cursor-pointer" type="button" onClick={addModal}>
        <span>+</span> Tambah Budget
      </button>
    </div>
  );
}
