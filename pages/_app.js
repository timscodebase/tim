import { useState } from "react";

import ThemeContext from "../contexts/ThemeContext";

import "../styles/globals.css";

import Layout from "./templates/Layout";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const context = { theme, setTheme };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}
