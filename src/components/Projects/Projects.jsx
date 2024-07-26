import "./Projects.css";
import ProjectIndex from "./ProjectIndex";

function Projects() {
  const projects = [
    {
      name: "Firebnb",
      image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    },
    {
      name: "Calculator",
      image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    },
    {
      name: "Calculatorr",
      image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    },
    {
      name: "Calculatort",
      image_url: "https://bayodeolaoye.onrender.com/assets/firebnb-logo.png",
    },
  ];

  return (
    <main id="main-project-container">
      <div id="project-container">
        <h2>Student Project</h2>
        <p>
          These are the projects I worked on during my time at App Academy from
          04/2024 to 10/2024.
        </p>

        <div id="project-cards-container">
          {projects.map((project) => {
            return <ProjectIndex project={project} key={project.name} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Projects;
