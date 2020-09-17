import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledSocialLinks = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(251, 46, 5);
  text-align: center;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 1;
  grid-row-end: 3;

  p {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  svg {
    font-size: 4rem;
  }
`;

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <a href="https://github.com/timscodebase">
        <FontAwesomeIcon icon={faGithub} /><p>timscodebase</p>
      </a>
      <a href="https://twitter.com/timsmith23">
      <FontAwesomeIcon icon={faTwitter} /><p>timsmith23</p>
      </a>
      <a href="https://codepen.io/WebRuin">
      <FontAwesomeIcon icon={faCodepen} /><p>webruin</p>
      </a>
    </StyledSocialLinks>
  );
}
