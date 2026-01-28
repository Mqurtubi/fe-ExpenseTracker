import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function DashboardLayout(){
    const [openSidebar,setOpenSidebar]=useState(true)
    return(
        <div className="relative h-screen">
            <Navbar/>
            <Sidebar open={openSidebar} handleOpen={()=>setOpenSidebar(!openSidebar)}/>
            <Outlet/>
        </div>
    )
}