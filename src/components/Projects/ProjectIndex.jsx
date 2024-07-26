function ProjectIndex({ project }) {
  return (
    <>
      <div class="card-container">
        <img src={project.image_url} alt="project image" />
        <div>
          <p>{project.name}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectIndex;
