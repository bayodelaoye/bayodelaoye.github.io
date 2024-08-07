import "./Projects.css";
import ProjectIndex from "./ProjectIndex";

function Projects({ projects }) {
  return (
    <main id="main-project-container">
      <div id="project-container">
        <h2>Student Projects</h2>
        <p>
          These are the projects I worked on during my time at App Academy from
          02/2024 to 09/2024.
        </p>

        <div id="project-cards-container">
          {projects.map((project) => {
            return <ProjectIndex project={project} key={project.id} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Projects;
