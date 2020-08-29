import PropTypes from "prop-types";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
