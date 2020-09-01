import Head from "next/head";
import styled from "styled-components";

import Content from "../components/Content";
import ContactForm from "../components/ContactForm";
import DiagonalContent from "../components/DiagonalContent";
import Project from "../components/Project";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 10rem 0 8rem 0;
  font-size: 3rem;
  font-weight: bold;
  background-color: var(--dark-highlight);
  border-bottom: 4px solid var(--header-color);

  h1,
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  @media (max-width: 500px) {
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
    margin-top: -10%;
    transform: skewy(-2deg);

    p {
      transform: skewy(2deg);
    }
  }
`;

const MainContent = styled.section`
  font-size: 2rem;
  padding: 3rem;

  p {
    text-align: justify;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <h1 className="skewy">Tim Smith</h1>
          <p>Frontend Web Developer</p>
        </Header>
        <MainContent>
          <p>
            My passion in life is meeting great new people and learning as much
            as I can about the many things I love! Every day, I find new
            inspiring things that motivate me to keep moving forward in life and
            to continue my search for my purpose in life. I believe that my
            Higher Power put me on this Earth to learn and inspire people to
            love life.
          </p>

          <DiagonalContent id="projects">
            <h2 className="skewy">Projects</h2>
            <ul>
              {Projects.map(({ title, desc, webLink, githubLink }) => (
                <Project
                  key={title}
                  title={title}
                  desc={desc}
                  webLink={webLink}
                  githubLink={githubLink}
                />
              ))}
            </ul>
          </DiagonalContent>

          <DiagonalContent id="education">
            <h2 className="skewy">Education</h2>
            <p>Test</p>
          </DiagonalContent>

          <DiagonalContent id="contact-me">
            <h2 className="skewy">Contact Me</h2>
            <p>Test</p>
            <ContactForm />
          </DiagonalContent>

          <Content id="about-me">
            <h2>About Me</h2>
            <p>Test</p>
          </Content>
        </MainContent>
      </main>

      <footer></footer>
    </>
  );
}

const Projects = [
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
