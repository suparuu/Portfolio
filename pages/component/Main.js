import React from 'react'
import Maincss from "@/styles/Maincss.module.scss";
import { Header } from './Header'


export const Main = () => {

  
  return (
    <>
    <Header></Header>
    <div className={Maincss.mainFlex}>
      <div className={Maincss.shapeAndText}>
        <div className={Maincss.shapeBox}>
          <div className={Maincss.shape}></div>
          <h1 className={Maincss.h1Text}>Frontend</h1>
        </div>
      </div>
      <div className={Maincss.whoamI}>
        <p className={Maincss.aspiration}>상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.</p>
        <br></br>
        <p className={Maincss.myName}>김경우 </p>
      </div>
    </div>
    </>
  )
}
