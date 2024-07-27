import "./ProjectDetails.css";
import { Link, useParams } from "react-router-dom";
import ProjectDetailsTechnologies from "./ProjectDetailsTechnologies";
import ProjectDetailsLinks from "./ProjectDetailsLinks";

function ProjectDetails({ projects }) {
  const { projectId } = useParams();
  let invalidProject = false;

  const project = projects.find((project) => {
    return project.id === +projectId;
  });

  if (
    projectId < projects[0].id ||
    projectId > projects[projects.length - 1].id
  ) {
    invalidProject = true;
  }

  return (
    <div>
      {invalidProject ? (
        <main id="main-project-404-container">
          <div id="project-404-container">
            <h1>404 Page Not Found</h1>
            <p>The page you requested does not exist.</p>
            <Link to="/projects">
              <button id="project-404-btn">Continue to projects</button>
            </Link>
          </div>
        </main>
      ) : (
        <main id="main-project-details-container">
          <div id="project-details-container">
            <h2>{project.name}</h2>
            <img src={project.image_url} alt="project image" />

            <div className="project-details-text">
              <p className="project-details-heading">Project Description</p>
              <p>{project.description}</p>
            </div>

            <div className="project-details-text">
              <p className="project-details-heading">My Role</p>
              <p>{project.role}</p>
            </div>

            <div>
              <p className="project-details-heading technologies-links-text">
                Technologies
              </p>
              {project.technologies.map((technology) => {
                return (
                  <ProjectDetailsTechnologies
                    technology={technology}
                    key={technology}
                  />
                );
              })}
            </div>

            <div>
              <p className="project-details-heading technologies-links-text">
                Links
              </p>
              {project.links.map((link, index) => {
                return <ProjectDetailsLinks link={link} key={index} />;
              })}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default ProjectDetails;
