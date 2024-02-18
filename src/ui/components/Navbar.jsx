import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { logged, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand px-2" to={`/`}>
        <img
          src="/assets/icons/superman.webp"
          alt="Logo"
          width="36"
          height="36"
          className="d-inline-block align-text-top"
        />
        uperheroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/heroes/marvel`}
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/heroes/dc`}
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/heroes/search`}
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end px-2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            {logged ? user?.name : "Guest"}
          </span>
          <button className="nav-item nav-link" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
