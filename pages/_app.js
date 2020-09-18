import { useEffect, useState } from "react";

import Layout from "./templates/Layout";
import ThemeContext from "../contexts/ThemeContext";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  

  useEffect(() => {

    // set theme based on time of day
    const startTime = "08:00:00";
    const endTime = "20:00:00";

    const currentDate = new Date();

    const startDate = new Date(currentDate.getTime());
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    startDate.setSeconds(startTime.split(":")[2]);

    const endDate = new Date(currentDate.getTime());
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    endDate.setSeconds(endTime.split(":")[2]);

    if (startDate < currentDate && endDate > currentDate) {
      setTheme("light");
    }
  }, [])

  const context = { theme, setTheme };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

// export function reportWebVitals(metric) {
  
//   metric.label === "web-vital";
// }

export function reportWebVitals({ id, name, label, value }) {
  ga("send", "event", {
    eventCategory: `Next.js ${label} metric`,
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}
