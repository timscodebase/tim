import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import SocialLinks from '../Components/SocialLinks';

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2rem;
  padding: 1.5rem;
  color: var(--header-color);
  background-color: var(--dark-highlight);
  border-top: 4px solid var(--header-color);

  div {
    flex: 0 1 300px;
    margin: 5px;
  }

  p {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Tim Smith &copy; {new Date().getFullYear()}</p>
      </div>
      <div>
        <p>
          Made with <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
      <SocialLinks />
    </StyledFooter>
  );
}
