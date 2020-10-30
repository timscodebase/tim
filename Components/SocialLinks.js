import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faDev,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const StyledSocialLinks = styled.div`
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

  a {
    padding: 0 5px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  svg {
    font-size: 4rem;
  }

  .dev {
    width: 4rem;
    height: 4rem;
    margin-bottom: -5px !important;
    color: rgb(251, 46, 5);
  }
`;

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <a
        href="https://github.com/timscodebase"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faGithub} />
        <p>timscodebase</p>
      </a>
      <a
        href="https://twitter.com/timsmith23"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faTwitter} />
        <p>timsmith23</p>
      </a>
      <a
        href="https://codepen.io/WebRuin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faCodepen} />
        <p>webruin</p>
      </a>
      <a
        href="https://dev.to/tithos"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faDev} />
        <p>dev</p>
      </a>
    </StyledSocialLinks>
  );
}
