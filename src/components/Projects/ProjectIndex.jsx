function ProjectIndex({ project }) {
  return (
    <>
      <div class="card-container">
        <img src={project.image_url} alt="" />
        <p>{project.name}</p>
      </div>
    </>
  );
}

export default ProjectIndex;
