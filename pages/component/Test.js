import React from 'react'
import Testcss from "@/styles/Maincss2.module.scss";

export const Test = () => {
  return (
    <div className={Testcss.mainFlex}>
        <div className={Testcss.shapeAndText}>
            <div className={Testcss.shape}></div>
            <h1 className={Testcss.h1Text}>Frontend</h1>
        </div>
        <div>
            <p>상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.</p>
            <br></br>
            <p>김경우</p>
        </div>


        <p></p>
        <div></div>
    </div>
  )
}
