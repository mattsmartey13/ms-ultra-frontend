import { Routes, Route, Navigate } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./pages/DashboardLayout";

export default function App() {
  const isAuthenticated = !!localStorage.getItem("auth_token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {isAuthenticated && (
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      )}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
