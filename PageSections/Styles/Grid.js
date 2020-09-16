import styled from "styled-components";

const Grid = styled.ul`
  display: grid;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.25);

  @media (min-width: 1001px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;
