import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize("UA-178247022-1")
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const reportWebVitals = (metric) => {
  console.log('====================================');
  console.log('Tim Smith Site Metric');
  console.log(metric);
  console.log('====================================');
  
  metric.label === "web-vital" && console.log(metric);
}

// export const reportWebVitals = ({ id, name, label, value }) => {
//   console.log('====================================');
//   console.log('Tim Smith Site Metric');
//   console.log({ id, name, label, value });
//   console.log('====================================');
  
//   ga('send', 'event', {
//     eventCategory:
//       label === 'web-vital' ? 'Web Vitals' : 'Tim Smith Site Metric',
//     eventAction: name,
//     eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//     eventLabel: id, // id unique to current page load
//     nonInteraction: true, // avoids affecting bounce rate.
//   })
// }