import PropTypes from "prop-types";
import styled from "styled-components";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Wrapper = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: 1001px) {
    width: 75%;
    margin: 0 auto;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
