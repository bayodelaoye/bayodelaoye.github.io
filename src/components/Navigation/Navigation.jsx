import "./Navigation.css";

function Navigation() {
  return (
    <header id="header-container">
      <div id="logo-container">
        <div id="logo">
          <span>BO</span>
        </div>
        <div id="logo-text-container">
          <h3 class="logo-text" id="name">
            Bayode Olaoye
          </h3>
          <h3 class="logo-text">Software Engineer</h3>
        </div>
      </div>

      <nav id="nav-container">
        <a href="./index.html" class="nav-link">
          Home
        </a>
        <a href="./projects.html" class="nav-link">
          Projects
        </a>
        <a href="#" class="nav-link nav-btn">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
