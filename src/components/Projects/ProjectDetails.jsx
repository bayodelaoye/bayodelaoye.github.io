import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { projectId } = useParams();
  let invalidProject = false;

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
        <main id="main-project-details-container"></main>
      )}
    </div>
  );
}

export default ProjectDetails;
