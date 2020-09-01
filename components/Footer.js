import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  font-size: 2rem;
  padding: 3rem;
  background-color: var(--dark-highlight);
  border-top: 4px solid var(--header-color);
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>hi</p>
      <SocialLinks />
    </StyledFooter>
  );
}
