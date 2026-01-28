import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<DashboardLayout/>}/>
        </Routes>
    )
}