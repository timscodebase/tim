import Head from "next/head";
import styled from "styled-components";
import DiagonalContent from "../components/DiagonalContent";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem 0 8rem 0;
  font-size: 3rem;
  font-weight: bold;
  background-color: var(--dark-highlight);
  border-bottom: 4px solid var(--header-color);

  h1 {
    display: block;
    color: transparent;
    background: linear-gradient(135deg, rgb(230, 176, 0), rgb(255, 18, 6));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1,
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  @media (max-width: 500px) {
    margin-top: -20%;
    transform: skewy(-8deg);

    h1,
    p {
      transform: skewy(8deg);
    }
  }

  @media (max-width: 1000px) {
    display: block;
    margin-top: -10%;
    transform: skewy(-4deg);

    h1,
    p {
      transform: skewy(4deg);
    }
  }

  @media (min-width: 1001px) {
    display: block;
    margin-top: -10%;
    transform: skewy(-2deg);

    h1,
    p {
      transform: skewy(2deg);
    }
  }
`;

const Content = styled.section`
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
          <h1>Tim Smith</h1>
          <p>Frontend Web Developer</p>
        </Header>
        <Content>
          <p>
            My passion in life is meeting great new people and learning as much
            as I can about the many things I love! Every day, I find new
            inspiring things that motivate me to keep moving forward in life and
            to continue my search for my purpose in life. I believe that my
            Higher Power put me on this Earth to learn and inspire people to
            love life.
          </p>

          <DiagonalContent id="projects">
            <p>Test</p>
          </DiagonalContent>

          <DiagonalContent id="education">
            <p>Test</p>
          </DiagonalContent>

          <DiagonalContent id="contact">
            <p>Test</p>
          </DiagonalContent>

          <DiagonalContent id="about-me">
            <p>Test</p>
          </DiagonalContent>
        </Content>
      </main>

      <footer></footer>
    </>
  );
}
