import { useState } from "react";

export default function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);
  const open = () => setOpenModal(true);
  return { openModal, open, close };
}
