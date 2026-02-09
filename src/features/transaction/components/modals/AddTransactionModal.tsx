import Modal from "../../../../components/ui/modal";

type AddTransactionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function AddTransactionModal({
  open,
  onClose,
}: AddTransactionModalProps) {
  return <Modal open={open} onClose={onClose} title="Tambah Transaksi"></Modal>;
}
