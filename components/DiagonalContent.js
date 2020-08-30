import PropTypes from "prop-types";
import styled from "styled-components";

const Diagonal = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  margin: 0 -3rem 3rem -3rem;
  font-size: 2rem;
  background-color: var(--dark-highlight);
  border-top: 4px solid var(--header-color);
  border-bottom: 4px solid var(--header-color);
  font-weight: bold;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  @media (max-width: 500px) {
    transform: skewy(-8deg);

    p {
      transform: skewy(8deg);
    }
  }

  @media (max-width: 1000px) {
    transform: skewy(-4deg);

    p {
      transform: skewy(4deg);
    }
  }

  @media (min-width: 1001px) {
    transform: skewy(-2deg);

    p {
      transform: skewy(2deg);
    }
  }
`;

export default function DiagonalContent({ children }) {
  return <Diagonal>{children}</Diagonal>;
}

DiagonalContent.propTypes = {
  children: PropTypes.object,
};
