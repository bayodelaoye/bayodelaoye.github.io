import { Link } from "react-router-dom";

function ProjectIndex({ project }) {
  return (
    <>
      <Link to={`/projects/${project.id}`}>
        <div className="card-container">
          <img src={project.image_url} alt="project image" />
          <div>
            <p>{project.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectIndex;
