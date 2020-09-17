import { useContext, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { motion, useCycle } from "framer-motion";

// Context
import ThemeContext from "../contexts/ThemeContext";

// Hooks
import { useDimensions } from "../hooks/useDimensions";

//Components
import MenuToggle from "../Components/MenuToggle";
import Navigation from "../Components/Navigation";

const StyledNav = styled.div`
  position: absolute;
  z-index: 999;

  .themeToggleBtn {
    position: fixed;
    top: 50px;
    left: 15px;
    background: transparent;
    font-size: 2.5rem;
    
    color: ${(props) =>
      props.theme === "light"
        ? "var(--dark-highlight)"
        : "var(--header-color)"};
    padding: 1rem;
    border: 0;
    outline: 0;
    user-select: none;
  }
`;

const sidebar = {
  open: (height = 1000) => ({
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    zIndex: -3,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <StyledNav theme={theme}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle theme={theme} toggle={() => toggleOpen()} />
        <button
        aria-label="Toggle Theme"
          className="themeToggleBtn"
          onClick={() => {
            if (theme === "dark") setTheme("light");
            if (theme === "light") setTheme("dark");
          }}
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </motion.nav>
    </StyledNav>
  );
}
