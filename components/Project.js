import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Project({ title, desc, webLink, githubLink }) {
  console.log({ webLink, githubLink });
  return (
    <li>
      <h3 className="skewy align-left">{title}</h3>
      <p>{desc}</p>
      <div className="project-links">
        <a href={webLink} target="_blank" rel="noopener noreferrer nofollow">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          Web Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer nofollow">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          GitHub Link
        </a>
      </div>
    </li>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  webLink: PropTypes.string,
  githubLink: PropTypes.string,
};
