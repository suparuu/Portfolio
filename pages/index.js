import { Main } from '../component/Main'
import { About } from '../component/About'
import { Skills } from '../component/Skills'
import { Newprojects } from '../component/Newprojects'


export default function Home() {

  


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
