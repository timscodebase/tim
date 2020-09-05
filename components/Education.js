import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Education({ desc, link, name }) {
  return (
    <li>
      <h4 className="skewy align-left">{name}</h4>
      <p>{desc}</p>
      <div className="education-links">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
          Learn more
        </a>
      </div>
    </li>
  );
}

Education.propTypes = {
  desc: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
