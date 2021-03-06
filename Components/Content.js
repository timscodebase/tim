import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 -3rem 3rem -3rem;
  font-size: 2rem;

  .red {
    color: red;
    font-size: 1.75rem;
  }

  div {
    padding: 0 3rem;
  }
`;

export default function Content({ children, id }) {
  return (
    <StyledContent>
      <div id={id}>{children}</div>
    </StyledContent>
  );
}

Content.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
};
