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

  svg {
    font-size: 4rem;
  }
`;

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <a href="https://github.com/timscodebase">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://twitter.com/timsmith23">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://codepen.io/WebRuin">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
    </StyledSocialLinks>
  );
}
