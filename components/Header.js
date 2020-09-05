import Head from "next/head";
import styled from "styled-components";

const StyledHeader = styled.header`
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
    margin-top: -5%;
    transform: skewy(-2deg);

    p {
      transform: skewy(2deg);
    }
  }
`;

export default function Header() {
  return (
    <>
      <Head>
        <title>Tim Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledHeader>
        <h1 className="skewy">Tim Smith</h1>
        <p>Frontend Web Developer</p>
      </StyledHeader>
    </>
  );
}
