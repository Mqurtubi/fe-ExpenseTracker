import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};
export default function Modal({ open, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const handelEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handelEsc);
    return () => window.removeEventListener("keydown", handelEsc);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  });

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, open]);
  if (!open) return null;
  return (
    <div className={` absolute w-full bg-slate-500/50 top-0 left-0 h-full `}>
      <div
        className="bg-white min-w-md py-5 px-7 rounded-xl space-y-5 relative w-1/4 m-auto top-32"
        ref={modalRef}
      >
        <div className="flex justify-between">
          <p className="font-semibold">{title}</p>
          <button
            type="button"
            className="text-lg text-slate-700/50 hover:text-slate-700"
            onClick={onClose}
          >
            <IoClose />
          </button>
        </div>
        <div>{children}</div>
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
            className="px-5 py-2 rounded-xl font-semibold text-sm bg-indigo-600/80 hover:bg-indigo-600  text-white"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
