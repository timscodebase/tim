import styled from 'styled-components'

import About from '../PageSections/About'
import Contact from '../PageSections/Contact'
import Teachers from '../PageSections/Teachers'
import Projects from '../PageSections/Projects'

const MainContent = styled.section`
  font-size: 2rem;
  padding: 3rem;
`

export default function Home() {
  return (
    <>
      <main>
        <MainContent>
          <About />
          <Projects />
          <Teachers />
          <Contact />
        </MainContent>
      </main>
    </>
  )
}
