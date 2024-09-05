import { Link } from "react-router-dom";
import "./HomeIndex.css";

function HomeIndex() {
  return (
    <main id="main-container">
      <div id="intro-container">
        <h2>Hi, I'm Bayode</h2>
        <div id="intro-paragraph-container">
          <p id="italic-text">
            I'm a developer fascinated with problem solving and exploring new
            technologies for developing software solutions.
          </p>

          <p>
            I'm based in Philadelphia, PA and have a rich background in both
            front-end and back end development.
          </p>

          <p>
            I recently completed a coding bootcamp at App Academy where I
            learned full stack technologies such as: JavaScript, Python, HTML,
            CSS, SQL, React, Flask and more.
          </p>

          <p>
            Email me at <span id="email-underline">laoye.bayode@gmail.com</span>
          </p>
        </div>

        <div id="intro-icons-container">
          <Link to="mailto:laoye.bayode@gmail.com">
            <img
              src="https://bayodeolaoye.onrender.com/assets/envelope.png"
              alt="email"
            />
          </Link>

          <Link to="https://github.com/bayodelaoye" target="_blank">
            <img
              src="https://bayodeolaoye.onrender.com/assets/github.png"
              alt="github"
            />
          </Link>

          <Link to="https://www.linkedin.com/in/bayode-olaoye/" target="_blank">
            <img
              src="https://bayodeolaoye.onrender.com/assets/linkedin.png"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>

      <div id="intro-img-container">
        <img
          src="https://res.cloudinary.com/dsb4nx6zn/image/upload/v1725549589/Headshot-1_hnolef.jpg"
          alt="headshot image"
        />
      </div>
    </main>
  );
}

export default HomeIndex;
