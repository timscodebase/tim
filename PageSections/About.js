import { useContext } from 'react';
import styled from 'styled-components';
import Content from '../Components/Content';

// Context
import ThemeContext from '../contexts/ThemeContext';

const H2Wrapper = styled.div`
  width: 270px;
  margin: 0 auto;
  padding: 1.5rem !important;

  background: ${(props) =>
    props.theme === 'light'
      ? 'transparent'
      : 'var(--dark-highlight)'};

  h2 {
    margin: 0;
    color: transparent;

    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme === 'light'
          ? 'var(--dark-highlight)'
          : 'rgb(230, 176, 0)'},
      ${(props) =>
        props.theme === 'light'
          ? 'var(--dark-highlight)'
          : 'rgb(211, 11, 0) 80%'}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 500px) {
    transform: skewy(-8deg);

    h2 {
      transform: skewy(8deg);
    }
  }

  @media (max-width: 1000px) {
    transform: skewy(-4deg);

    h2 {
      transform: skewy(4deg);
    }
  }

  @media (min-width: 1001px) {
    transform: skewy(-2deg);

    h2 {
      transform: skewy(2deg);
    }
  }
`;

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <Content id="about-me">
      <H2Wrapper theme={theme}>
        <h2>About Me</h2>
      </H2Wrapper>
      <p className="pad-bottom">
        I am a Web Developer... sure. A damned good one! But there is
        a lot more to me than my ability to build beautiful responsive
        websites.
      </p>
      <p>
        I feel the most at home in nature, specifically around water.
        I am not a religious person pre say. I feel most connected
        with my higher power, the greater connective force between us,
        while floating in the ocean or other body of water or while
        hiking anywhere in nature on a cool day. I love to walk. I
        find it to be an excellent form of meditation and an efficient
        way to rid myself of negative feelings and thoughts.
      </p>
      <p className="padding">
        My passion in life is meeting new people and learning as much
        as I can about the many things I love!{' '}
        <span className="red">❤️</span> Every day, I find new
        inspiring things that motivate me to keep moving forward and
        to continue my search for my purpose. I believe that my Higher
        Power put me on this Earth to learn and inspire people to love
        life as I do.
      </p>
    </Content>
  );
}
