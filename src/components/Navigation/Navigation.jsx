import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header id="header-container">
      <NavLink to="/">
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
      </NavLink>

      <nav id="nav-container">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <Link
          to="https://drive.google.com/file/d/1wJPIH1L2grdYn37rlAokwF3iu61_FqvE/view?usp=sharing"
          target="_blank"
          className="nav-link nav-btn"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
