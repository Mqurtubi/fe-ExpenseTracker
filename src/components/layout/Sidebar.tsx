import { RiWallet3Line, RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
  MdOutlineDashboard,
} from "react-icons/md";
import { LuFolderKanban } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  handleOpen: () => void;
};
export default function Sidebar({ open, handleOpen }: SidebarProps) {
  const menu = [
    {
      icon: <MdOutlineDashboard />,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: <RiMoneyDollarBoxLine />,
      label: "Transaksi",
      href: "/transaction",
    },
    {
      icon: <RiWallet3Line />,
      label: "Budget",
      href: "/budget",
    },
    {
      icon: <LuFolderKanban />,
      label: "Kategori",
      href: "/category",
    },
    {
      icon: <FaRegChartBar />,
      label: "Laporan",
      href: "/laporan",
    },
  ];
  return (
    <div
      className={`bg-white fixed top-0 ${open ? "w-80" : "w-28"}  h-screen border-r border-slate-300 transition-all duration-300`}
    >
      <div className=" text-xl py-4 flex justify-center border-b border-slate-300 space-x-8 items-center px-5">
        <div
          className={`items-center space-x-2 font-semibold ${open ? "flex" : "hidden"}`}
        >
          <div className="p-2 bg-indigo-600 text-white rounded-xl">
            <RiWallet3Line />
          </div>
          <p>Expense Tracker</p>
        </div>

        <button
          className="p-2  rounded-lg hover:bg-slate-200 hover:cursor-pointer"
          onClick={handleOpen}
        >
          {open ? <MdOutlineArrowBackIos /> : <MdOutlineArrowForwardIos />}
        </button>
      </div>
      <div className="flex flex-col gap-3 mx-7 py-3">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center text-xl px-3 py-2 space-x-3 rounded-xl transition text-slate-700
     ${isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-200 hover:text-slate-950"} `
            }
          >
            <span>{item.icon}</span>

            <span
              className={` ${open ? "opacity-100 w-full" : "w-0 opacity-0"}`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
