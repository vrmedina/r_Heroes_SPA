import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className={"navbar-brand"} to={`/`}>  
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to={`/heroes/marvel`}>
            Marvel
          </NavLink>

          <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to={`/heroes/dc`}>
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end px-2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            Victor Medina
          </span>

          <button className="nav-item nav-link">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};