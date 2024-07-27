function ProjectDetailsLinks({ link }) {
  const linkText = Object.keys(link)[0];
  const urlLink = Object.values(link)[0];

  return (
    <>
      <p>
        {linkText}: {urlLink}
      </p>
    </>
  );
}

export default ProjectDetailsLinks;
