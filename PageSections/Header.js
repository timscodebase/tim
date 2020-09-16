import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 10rem 0 8rem 0;
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
      var(--dark-highlight-transparent),
      var(--dark-highlight)
    ),
    url(https://res.cloudinary.com/the-classic-lunchbox/image/upload/v1599606608/mt-hood_vzifsl.png);
  border-bottom: 4px solid var(--header-color);

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (max-width: 500px) {
    background: linear-gradient(
        var(--dark-highlight-transparent),
        var(--dark-highlight)
      ),
      url(https://res.cloudinary.com/the-classic-lunchbox/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1599606608/mt-hood_vzifsl.png);
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
    <StyledHeader>
      <h1 className="skewy">Tim Smith</h1>
      <p className="centered">Frontend Web Developer</p>
    </StyledHeader>
  );
}