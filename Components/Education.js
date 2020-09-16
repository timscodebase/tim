import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const StyledEducation = styled.li`
  padding: 1.5rem;

  .education-links {
    text-align: center;
    margin-top: 2rem;
    padding: 0 !important;
    font-family: "PT+Serif", serif;
    color: var(--header-color);
  }

  a {
    text-decoration: dotted !important;
  }

  svg {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }
`;
export default function Education({ desc, link, name }) {
  return (
    <StyledEducation>
      <h4 className="skewy align-left">{name}</h4>
      <p>{desc}</p>
      <div className="education-links">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
          Learn more
        </a>
      </div>
    </StyledEducation>
  );
}

Education.propTypes = {
  desc: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
