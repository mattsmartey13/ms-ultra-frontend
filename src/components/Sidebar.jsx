import { Link } from "react-router-dom";
import { isCoach } from "../utils/auth";

export default function Sidebar() {
  const coach = isCoach();

  return (
    <aside className="sidebar">
      <h2 className="logo">MS Ultra Fitness</h2>

      <nav>
        <p className="nav-section">Client</p>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/workouts">My Workouts</Link>
        <Link to="/dashboard/programs">My Programs</Link>

        {coach && (
          <>
            <p className="nav-section">Coach</p>
            <Link to="/dashboard/coach">Coach Dashboard</Link>
            <Link to="/dashboard/coach/clients">Clients</Link>
            <Link to="/dashboard/coach/programs">Programs</Link>
          </>
        )}
      </nav>
    </aside>
  );
}
