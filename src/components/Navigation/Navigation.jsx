import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header id="header-container">
      <div id="logo-container">
        <div id="logo">
          <span>BO</span>
        </div>
        <div id="logo-text-container">
          <h3 className="logo-text" id="name">
            Bayode Olaoye
          </h3>
          <h3 className="logo-text">Software Engineer</h3>
        </div>
      </div>

      <nav id="nav-container">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/" className="nav-link nav-btn">
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
