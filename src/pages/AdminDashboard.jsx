import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function AdminDashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <main className="container mt-5" role="main" aria-label="Tableau de bord administrateur">
      <header className="admin-header" role="banner">
        <h1 tabIndex="0">Tableau de bord administrateur</h1>
        <p className="welcome-message">
          Bienvenue, <span aria-live="polite">{user?.name || "Administrateur"}</span>
        </p>
      </header>

      < Home />

      <button
        className="logout-button"
        onClick={handleLogout}
        aria-label="Se déconnecter du tableau de bord administrateur"
      >
        Se déconnecter
      </button>
    </main>
  );
}