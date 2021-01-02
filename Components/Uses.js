import { useContext } from 'react'
import DiagonalContent from './DiagonalContent'
import Content from '../Components/Content'

import styled from 'styled-components'


// Context
import ThemeContext from '../contexts/ThemeContext'

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
`

export default function Uses() {
  const { theme } = useContext(ThemeContext)
  return (
    <Content>
      <div className="section-description no-bottom-margin">
        <H2Wrapper theme={theme}>
          <h2>Hardware</h2>
        </H2Wrapper>
        <ul>
          <li>
            Dell Inspiron (upgraded with 8gb ram and 255GB SSD HD)
          </li>
          <li>iPhone X (daily driver)</li>
          <li>iPhone SE (for testing)</li>
          <li>iPad 2 (daily driver and testing)</li>
        </ul>
      </div>
      <div className="section-description no-bottom-margin">
        <H2Wrapper theme={theme}>
          <h2>Software</h2>
        </H2Wrapper>
        <ul>
          <li>VSCode (primary IDE)</li>
          <li>Gimp</li>
          <li>Kubuntu</li>
          <li>Chrome</li>
          <li>Firefox</li>
        </ul>
      </div>
    </Content>
  )
}