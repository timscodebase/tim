import groq from "groq";
import DiagonalContent from "../Components/DiagonalContent";
import Grid from "./Styles/Grid";
import Project from "../Components/Project";

const projectsQuery = `*[_type == "project"]`;

const Projects = (props) => {
  console.log(props);
  return (
    <DiagonalContent key="projects" id="projects">
      <h2 className="skewy">Projects</h2>
      <Grid>
        {MyProjects.map(({ title, desc, webLink, githubLink }) => (
          <Project
            key={title}
            title={title}
            desc={desc}
            webLink={webLink}
            githubLink={githubLink}
          />
        ))}
      </Grid>
    </DiagonalContent>
  );
};

Projects.getInitialProps = async function () {
  return await client.fetch(groq`*[_type == "project"]`);
};

export default Projects;

const MyProjects = [
  {
    title: "Hellbonix",
    desc:
      "A fun dictionary app I am building to keep track of the silly words my wife makes up.",
    webLink: "https://hellbonix.netlify.app",
    githubLink: "https://github.com/timscodebase/hellbonix",
  },
  {
    title: "United States COVID-19 Data",
    desc:
      "A fun dictionary app I am building to keep track of the silly words my wife makes up.",
    webLink: "https://us-covid-19-data.netlify.app/",
    githubLink: "https://github.com/timscodebase/covid",
  },
  {
    title: "Me and My Song",
    desc:
      "A custom built Wordpress template for an SF Bay Area Singer/Song Writer",
    webLink: "https://hellbonix.netlify.app",
    githubLink: "https://github.com/timscodebase/hellbonix",
  },
];