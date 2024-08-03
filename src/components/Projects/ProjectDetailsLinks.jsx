import { Link } from "react-router-dom";

function ProjectDetailsLinks({ link }) {
  const linkText = Object.keys(link)[0];
  const urlLink = Object.values(link)[0];

  return (
    <p>
      {linkText}:{" "}
      <Link to={urlLink} target="_blank" id="links-details">
        {urlLink}
      </Link>
    </p>
  );
}

export default ProjectDetailsLinks;
