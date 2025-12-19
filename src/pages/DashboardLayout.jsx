// DashboardLayout.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ClientDashboard from "../pages/dashboard/ClientDashboard";
import CoachDashboard from "../pages/dashboard/CoachDashboard";
import { isCoach } from "../utils/auth";

import "./DashboardLayout.css";

export default function DashboardLayout() {
  const coach = isCoach();

  return (
    <div className="dashboard-root">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<ClientDashboard />} />
            {coach && <Route path="/coach" element={<CoachDashboard />} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
