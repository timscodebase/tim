import { useContext } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import ThemeContext from "../contexts/ThemeContext";

export default function Meta() {
  const { theme } = useContext(ThemeContext);
  return (
    <Head>
      <title>Tim Smith</title>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`/favicon-${theme}/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`/favicon-${theme}/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`/favicon-${theme}/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`/favicon-${theme}/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`/favicon-${theme}/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`/favicon-${theme}/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`/favicon-${theme}/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`/favicon-${theme}/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon-${theme}/apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`/favicon-${theme}/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-${theme}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`/favicon-${theme}/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-${theme}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/favicon-${theme}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`/favicon-${theme}/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="The Portfolio for Tim Smith" />
    </Head>
  );
}

Meta.propTypes = {
  faviconTheme: PropTypes.string,
};
