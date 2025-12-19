import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/authcontext";

export default function LogoutButton() {
  const { logout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/logout`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch {
      // ignore network errors
    } finally {
      logout(); // clears context & localStorage
      navigate("/login", { replace: true });
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
