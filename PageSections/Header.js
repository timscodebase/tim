import { useContext } from "react";
import styled from "styled-components";

// Context
import ThemeContext from "../contexts/ThemeContext";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 10rem 0 8rem 0;
  font-size: 3rem;
  font-weight: bold;
  transition: all 0.5s ease-in;
  background: linear-gradient(
      var(--dark-highlight-transparent),
      ${(props) =>
        props.theme === "light" ? "transparent" : "var(--background-color)"}
    ),
    url(https://res.cloudinary.com/tihos/image/upload/e_auto_brightness/e_auto_contrast/e_auto_color,f_auto,q_auto/v1600282502/mt-hood_alawql.png);
  border-bottom: 4px solid
    ${(props) =>
      props.theme === "light"
        ? "var(--dark-highlight)"
        : "var(--header-color)"};

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (max-width: 500px) {
    background: linear-gradient(
      var(--dark-highlight-transparent),
      ${(props) =>
        props.theme === "light" ? "transparent" : "var(--background-color)"}
    ),
      url(https://res.cloudinary.com/tihos/image/upload/c_scale,e_auto_brightness,f_auto,q_auto,w_800/e_auto_color/e_auto_contrast/v1600283971/mt-hood_zw5pzy.png);
    margin-top: -20%;
    transform: skewy(-8deg);

    p {
      transform: skewy(8deg);
    }
  }

  @media (max-width: 1000px) {
    display: block;
    margin-top: -10%;
    transform: skewy(-4deg);

    p {
      transform: skewy(4deg);
    }
  }

  @media (min-width: 1001px) {
    display: block;
    margin-top: -5%;
    transform: skewy(-2deg);

    p {
      transform: skewy(2deg);
    }
  }
`;

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledHeader theme={theme}>
      <h1 className="skewy">Tim Smith</h1>
      <p className="centered">Frontend Web Developer</p>
    </StyledHeader>
  );
}
