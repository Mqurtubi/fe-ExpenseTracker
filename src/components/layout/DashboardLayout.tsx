import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import AddTransactionModal from "../../features/transaction/components/modals/AddTransactionModal";
import useModal from "../../hooks/useModal";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { openModal, open, close } = useModal();
  return (
    <div className="relative min-h-screen">
      <Navbar setOpenModal={open} />
      <Sidebar
        open={openSidebar}
        handleOpen={() => setOpenSidebar(!openSidebar)}
      />
      <div
        className={`transition-all duration-300 ${openSidebar ? "ml-80" : "ml-28"} px-7 pb-7 pt-20 `}
      >
        <Outlet />
        <AddTransactionModal open={openModal} onClose={close} />
      </div>
    </div>
  );
}
