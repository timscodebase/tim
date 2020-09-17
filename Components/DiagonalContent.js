import { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Context
import ThemeContext from "../contexts/ThemeContext";

const Diagonal = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 -3rem 3rem -3rem;
  font-size: 2rem;
  
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(0, 0, 0, 0.25)" : "var(--dark-highlight)"};
  border-top: 4px solid
    ${(props) =>
      props.theme === "light"
        ? "var(--dark-highlight)"
        : "var(--header-color)"};
  border-bottom: 4px solid
    ${(props) =>
      props.theme === "light"
        ? "var(--dark-highlight)"
        : "var(--header-color)"};

  .padding {
    width: 100%;
    padding: 0 1.5rem;
  }

  h2,
  h3 {
    
    color: transparent;
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme === "light" ? "rgb(200, 200, 200)" : "rgb(230, 176, 0)"},
      ${(props) =>
        props.theme === "light" ? "rgb(200, 200, 200)" : "rgb(211, 11, 0) 80%"}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 500px) {
    transform: skewy(-8deg);

    p {
      transform: skewy(8deg);
    }
  }

  @media (max-width: 1000px) {
    transform: skewy(-4deg);

    p {
      transform: skewy(4deg);
    }
  }

  @media (min-width: 1001px) {
    transform: skewy(-2deg);

    p {
      transform: skewy(2deg);
    }
  }
`;

export default function DiagonalContent({ children, id }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Diagonal theme={theme}>
      <div className="padding" id={id}>
        {children}
      </div>
    </Diagonal>
  );
}

DiagonalContent.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
};
