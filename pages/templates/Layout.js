import styled from "styled-components";

// Page Sections
import Footer from "../../PageSections/Footer";
import Header from "../../PageSections/Header";
import Nav from "../../PageSections/Nav";
import Meta from "../../PageSections/Meta";

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
  return (
    <Wrapper>
      <Meta />
      <Nav />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
