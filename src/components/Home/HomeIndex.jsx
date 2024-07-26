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

          <p>Email me at laoye.bayode@gmail.com</p>
        </div>

        <div id="intro-icons-container">
          <a href="#">
            <img src="../../../public/assets/envelope.png" alt="" />
          </a>
          <a href="#">
            <img src="../../../public/assets/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="../../../public/assets/github.png" alt="" />
          </a>
        </div>
      </div>

      <div id="intro-img-container">
        <img src="../../../public/assets/headshot.jpg" alt="headshot image" />
      </div>
    </main>
  );
}

export default HomeIndex;
