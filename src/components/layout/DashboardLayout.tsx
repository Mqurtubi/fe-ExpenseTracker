import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Sidebar
        open={openSidebar}
        handleOpen={() => setOpenSidebar(!openSidebar)}
      />
      <div
        className={`transition-all duration-300 ${openSidebar ? "ml-80" : "ml-28"} p-7`}
      >
        <Outlet />
      </div>
    </div>
  );
}
