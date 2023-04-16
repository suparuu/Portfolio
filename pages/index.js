import { Main } from './component/Main'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Newprojects } from './component/Newprojects'

import { SectionsContainer, Section } from 'react-fullpage';
//스크롤 이벤트 보류

export default function Home() {

  // let options = {
  //   activeClass: 'none', // the class that is appended to the sections links
  //   anchors: ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
  //   arrowNavigation: false, // use arrow keys
  //   className: 'SectionContainer', // the class name for the section container
  //   delay: 1000, // the scroll animation speed
  //   navigation: false, // use dots navigatio
  //   scrollBar: false, // use the browser default scrollbar
  //   sectionClassName: 'Section', // the section class name
  //   sectionPaddingTop: '0', // the section top padding
  //   sectionPaddingBottom: '0', // the section bottom padding
  //   verticalAlign: false // align the content of each section vertical
  // };//SectionsContainer options 


  return (
    <>
      {/* <main>
        <SectionsContainer {...options}>
          <Section>
            <Main></Main>
          </Section>
          <Section>
            <Newprojects></Newprojects>
          </Section>
          <Section>
            <About></About>
          </Section> 
           <Section>
            <Skills></Skills>
          </Section>
        </SectionsContainer>
      </main > */}
       <main>
            <Main></Main>
            <Newprojects></Newprojects>
            <About></About>
            <Skills></Skills>
      </main >
    </>


  )
}
