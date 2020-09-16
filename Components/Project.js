import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const StyledProject = styled.li`
  padding: 2rem;

  .project-links {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 0 !important;
    font-family: "PT+Serif", serif;
    color: rgb(230, 176, 0);
  }

  a {
    text-decoration: dotted !important;
  }

  svg {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }
`;

export default function Project({ title, desc, webLink, githubLink }) {
  return (
    <StyledProject>
      <h3 className="skewy align-left margin-bottom">{title}</h3>
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
    </StyledProject>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  webLink: PropTypes.string,
  githubLink: PropTypes.string,
};
