import styled from "styled-components";

import Content from "../components/Content";
import ContactForm from "../components/ContactForm";
import DiagonalContent from "../components/DiagonalContent";
import Project from "../components/Project";
import Education from "../components/Education";

const MainContent = styled.section`
  font-size: 2rem;
  padding: 3rem;

  p {
    text-align: justify;
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.ul`
  display: grid;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.25);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1001px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Home() {
  return (
    <>
      <main>
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
            <Grid>
              {Projects.map(({ title, desc, webLink, githubLink }) => (
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

          <DiagonalContent id="education">
            <h2 className="skewy">Education</h2>
            {Teachers.map(({ classes, teacher }) => {
              return (
                <>
                  <h3 key={teacher}>{teacher}</h3>
                  <Grid>
                    {classes.map(({ desc, id, link, name }) => (
                      <Education key={id} desc={desc} link={link} name={name} />
                    ))}
                  </Grid>
                </>
              );
            })}
          </DiagonalContent>

          <DiagonalContent id="contact-me">
            <h2 className="skewy">Contact Me</h2>
            <ContactForm />
          </DiagonalContent>

          <Content id="about-me">
            <h2>About Me</h2>
            <p className="pad-bottom">
              I am a Web Developer... sure. A damned good one! But there is a
              lot more to me than my ability to build beautiful responsive
              websites.
            </p>
            <p>
              I feel the most at home in nature, specifically around water.
              While I am not a religious person pre say, I feel most connected
              with my higher power while floating in the ocean or other body of
              water. I love to walk. I find it to be an excellent from of
              meditation and an efficient way to rid myself of negative feelings
              and thoughts.
            </p>
          </Content>
        </MainContent>
      </main>
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

const Teachers = [
  {
    teacher: "Wes Bos",
    classes: [
      {
        id: 1,
        desc:
          "This is a course that taught me everything I needed to build a full stack application with React.js and GraphQL.",
        link: "https://advancedreact.com/",
        name: "Fullstack Advanced React and GraphQL",
      },
      {
        id: 2,
        desc:
          "ES6 is a major update to JavaScript that includes dozens of new features. With a focus on simplicity and readability, this premium video course is the best way to learn about all that ES6 has to offer while sharpening your core JavaScript skills.",
        link: "https://es6.io/",
        name: "ES6 for Everyone",
      },
      {
        id: 3,
        desc:
          "A free 30 day vanilla js coding challenge. Learn to build 30 things in 30 days with 30 tutorials. No Frameworks, No Compilers, No Libraries, No Boilerplate. Good luck!",
        link: "https://javascript30.com/",
        name: "Javascript30",
      },
      {
        id: 4,
        desc:
          "Upgrade your JavaScript skills to learn React.js in just a couple of afternoons. A premium step-by-step training course to get you building real world React.js + Firebase apps and website components.",
        link: "https://reactforbeginners.com/",
        name: "React For Beginners",
      },
      {
        id: 5,
        desc:
          "A free 25 video course on all there is to learn about CSS Grid! We start with CSS Grid fundamentals and end with some real-world examples.",
        link: "https://cssgrid.io/",
        name: "CSS Grid",
      },
      {
        id: 6,
        desc:
          "Flexbox sure is tricky to learn. Get a grasp on flexbox while learning both the fundamentals and real world applications.",
        link: "Flexbox.io",
        name: "What The Flexbox?!",
      },
      {
        id: 7,
        desc:
          "A 20 video / 2.5 hour course to learn how to use Redux, React Router and React together. This course is intended as a next step to my React for Beginners course.",
        link: "https://learnredux.com/",
        name: "Learn Redux",
      },
    ],
  },
  {
    teacher: "Chris Coyier",
    classes: [
      {
        id: 8,
        desc:
          "This is a course that taught me everything I needed to build a full stack application with React.js and GraphQL.",
        link: "https://advancedreact.com/",
        name: "* Fullstack Advanced React and GraphQL",
      },
      {
        id: 9,
        desc:
          "ES6 is a major update to JavaScript that includes dozens of new features. With a focus on simplicity and readability, this premium video course is the best way to learn about all that ES6 has to offer while sharpening your core JavaScript skills.",
        link: "https://es6.io/",
        name: "* ES6 for Everyone",
      },
      {
        id: 10,
        desc:
          "A free 30 day vanilla js coding challenge. Learn to build 30 things in 30 days with 30 tutorials. No Frameworks, No Compilers, No Libraries, No Boilerplate. Good luck!",
        link: "https://javascript30.com/",
        name: "* Javascript30",
      },
    ],
  },
];
