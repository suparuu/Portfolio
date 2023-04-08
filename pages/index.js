import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Main } from './component/Main'
import { Header } from './component/Header'
import { Test } from './component/Test'
import { Projects } from './component/Projects'

export default function Home() {
  return (
    <>
    <Header></Header>
    <main>
    <Test></Test>
    <Projects></Projects>
      {/* <Main></Main> */}
      
      </main>
    </>
  )
}
