import { useContext } from "react";
import styled from "styled-components";

// Page Sections
import Footer from "../../PageSections/Footer";
import Header from "../../PageSections/Header";
import Nav from "../../PageSections/Nav";
import Meta from "../../PageSections/Meta";

// Context
import ThemeContext from "../../contexts/ThemeContext";

const Body = styled.div`
  transition: all 0.5s ease-in;
  color: ${(props) =>
    props.theme === "light" ? "var(--dark-highlight)" : "var(--text-color)"};
  background: linear-gradient(
    100deg,
    ${(props) =>
      props.theme === "light" ? "rgb(190, 190, 190)" : "rgb(126, 126, 126)"},
    ${(props) => (props.theme === "light" ? "rgb(80, 80, 80)" : "rgb(0, 0, 0)")}
  );
`;

const Wrapper = styled.div`
  @media (min-width: 1001px) {
    width: 75%;
    margin: 0 auto;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Body theme={theme}>
      <Wrapper>
        <Meta />
        <Nav />
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Body>
  );
}
