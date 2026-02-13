import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import TransactionPage from "../../features/transaction/pages/TransactionPage";
import { TransactionProvider } from "../../features/transaction/context/TransactionProvider";
import { ToastProvider } from "../../features/transaction/context/ToastProvider";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TransactionProvider>
              <ToastProvider>
                <DashboardLayout />
              </ToastProvider>
            </TransactionProvider>
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Route>
    </Routes>
  );
}
