import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Main } from './component/Main'
import { Header } from './component/Header'
import { Projects } from './component/Projects'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { useEffect, useState } from 'react'

export default function Home() {

  const [scroll,setScroll] = useState(0);


  useEffect(()=>{
    window.addEventListener('scroll', function(){
    const Main = document.querySelector('main')

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        // do something when the user scrolls down more than 100 pixels

        console.log(window.scrollY)
        Main.style.transform=`translateY(-${window.innerHeight})`;
        
      }
    });
  },[])
  


  return (
    <>
      <main style={{
        /* position : 'fixed', */
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    }}
    >
        <Header></Header>
        <Main></Main>
        <Projects></Projects>
        <About></About>
        <Skills></Skills>
      </main >
    </>


  )
}
