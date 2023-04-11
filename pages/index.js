import { Main } from './component/Main'
import { Header } from './component/Header'
import { Projects } from './component/Projects'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Newprojects } from './component/Newprojects'
import { useEffect } from 'react'
import  Test  from './component/Test'

import { SectionsContainer, Section } from 'react-fullpage';
export default function Home() {

  let options = {
    activeClass: 'none', // the class that is appended to the sections links
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'], // the anchors for each sections
    arrowNavigation: false, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: false, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false // align the content of each section vertical
  };//SectionsContainer options 


  return (
    <>
      <main>
        <SectionsContainer {...options}>
        <Section>
            <About></About>
          </Section>
          
          <Section>
            <Header></Header>
            <Main></Main>
          </Section>

          <Section>
            {/* <Projects></Projects> */}
            <Newprojects></Newprojects>
            {/* <Test></Test> */}
          </Section>

          

          <Section>
            <Skills></Skills>
          </Section>

        </SectionsContainer>
      </main >
    </>


  )
}
