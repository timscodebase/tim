import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import SocialLinks from "../Components/SocialLinks";

const StyledFooter = styled.footer`
  display: grid;
  font-size: 2rem;
  padding: 1.5rem;
  color: var(--header-color);
  background-color: var(--dark-highlight);
  border-top: 4px solid var(--header-color);

  p {
    text-align: center;
  }

  @media (min-width: 1001px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;

    .name,
    .love {
      display: grid;
      justify-content: center;
      
    }

    .name {
      grid-column-start: 1;
      grid-column-end: 2;

      grid-row-start: 1;
      grid-row-end: 2;
    }

    .love {
      grid-column-start: 1;
      grid-column-end: 2;

      grid-row-start: 2;
      grid-row-end: 3;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="name">
        <p>Tim Smith &copy; {new Date().getFullYear()}</p>
      </div>
      <SocialLinks />
      <div className="love">
        <p>
          Made with <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
    </StyledFooter>
  );
}
