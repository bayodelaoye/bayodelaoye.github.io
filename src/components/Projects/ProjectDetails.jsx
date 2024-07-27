import { useParams } from "react-router-dom";
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
        <p>Invalid Project</p>
      ) : (
        <main id="main-project-details-container">
          <div id="project-details-container">
            <h2>{project.name}</h2>
            <img src={project.image_url} alt="" />

            <div id="project-description-container">
              <p className="project-details-heading">Project Description</p>
              <p>{project.description}</p>
            </div>

            <div id="project-role-container">
              <p className="project-details-heading">My Role</p>
              <p>{project.role}</p>
            </div>

            <div id="project-technologies-container">
              <p className="project-details-heading">Technologies</p>
              {project.technologies.map((technology) => {
                return (
                  <ProjectDetailsTechnologies
                    technology={technology}
                    key={technology}
                  />
                );
              })}
            </div>

            <div id="project-links-container">
              <p className="project-details-heading">Links</p>
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
