// Topbar.jsx
import LogoutButton from "./LogoutButton";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <h2>Dashboard</h2>
      <LogoutButton />
    </div>
  );
}
