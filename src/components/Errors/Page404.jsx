import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <main id="main-404-container">
      <div id="page-404-container">
        <h1>404 Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/projects">
          <button id="project-404-btn">Continue to projects</button>
        </Link>
      </div>
    </main>
  );
}

export default Page404;
