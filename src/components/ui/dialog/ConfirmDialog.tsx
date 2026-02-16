type ConfirmDialogProps = {
  openConfirm: boolean;
  title: string;
  subTitle: string;
  onClose: () => void;
  onConfirm: () => void;
};
export default function ConfirmDialog({
  openConfirm,
  title,
  subTitle,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <div
      className={` ${openConfirm ? "fixed" : "hidden"}  w-full bg-slate-500/50 top-0 left-0 h-screen grid justify-center`}
    >
      <div className="bg-white min-w-md py-5 px-7 rounded-xl space-y-5 relative w-1/4 m-auto  ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-slate-500">{subTitle}</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="border border-slate-300 px-5 py-2 rounded-xl font-semibold text-sm hover:bg-slate-300/50"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            type="submit"
            form="add-transaction-form"
            className="px-5 py-2 rounded-xl font-semibold text-sm bg-red-600/80 hover:bg-red-600  text-white"
            onClick={onConfirm}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
