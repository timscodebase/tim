import { useContext } from "react"
import DiagonalContent from "../Components/DiagonalContent";
import Grid from "./Styles/Grid";
import Education from "../Components/Education";
import styled from "styled-components";

// Context
import ThemeContext from "../contexts/ThemeContext";

const StyledClass = styled.section`
  .transparent-background {
    width: 250px;
    margin: 0 auto;
    color: var(--text-color) !important;
    background: rgba(0, 0, 0, 0.5) !important;
    background-clip: initial !important;
    -webkit-text-fill-color: initial !important;
  }
`;

export default function Teachers() {
  const { theme } = useContext(ThemeContext);
  const isTransparent = theme === "light" ? "transparent-background" : "";
  return (
    <DiagonalContent key="education" id="education">
      <h2 className="skewy">Education</h2>
      <p>
        I found Chris Coyier in the early 2000s. The treasure trove of articles,
        guides, and videos contained here on CSS-Tricks has been a major benefit
        for me and actually progressed my ability to learn code. Later, I found
        Wes Bos. He, too, has been a leading contributor to my web learning. Wes
        unlocked many of the things I struggled with, namely React and the new
        features of ES6.
      </p>
      {MyTeachers.map(({ classes, teacher }) => {
        return (
          <StyledClass  key={teacher}>
            <h3 className={isTransparent} key={teacher}>{teacher}</h3>
            <Grid>
              {classes.map(({ desc, id, link, name }) => (
                <Education key={id} desc={desc} link={link} name={name} />
              ))}
            </Grid>
          </StyledClass>
        );
      })}
    </DiagonalContent>
  );
}

const MyTeachers = [
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
