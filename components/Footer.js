import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  display: grid;
  font-size: 2rem;
  padding: 1.5rem;
  text-align: center;
  color: var(--header-color);
  background-color: var(--dark-highlight);
  border-top: 4px solid var(--header-color);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1001px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Tim Smith &copy; {new Date().getFullYear()}</p>
      </div>
      <SocialLinks />
    </StyledFooter>
  );
}
