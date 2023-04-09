import React from 'react'
import Aboutcss from "@/styles/Aboutcss.module.scss";

export const About = () => {


  return (
    
    <>
      <div className={Aboutcss.sectionBox}>
        <div className={Aboutcss.textBox}>
          <h2 className={Aboutcss.text}>About Me</h2>
        </div>
        <div className={Aboutcss.aboutBox}>

          <div className={Aboutcss.leftBox}>
            <div className={Aboutcss.imgBox}>
              <img className={Aboutcss.myImg} src='/AboutmeImg.jpg' />
            </div>
          </div>

          <div className={Aboutcss.rightBox}>
            <p className={Aboutcss.myName}>김경우 (Kyung Woo Kim) {}</p>
            <p className={Aboutcss.relate}>서울거주 / 27세 / 남자 / 게임좋음 / ESTP / kkwoo97@naver.com</p>
            <p className={Aboutcss.detail}>상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.
               항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다. 
               “smooth waters run deep” 제가 가장 좋아하는 영어 격언 입니다.
                거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고,
                 계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이
                  되는 프론트엔드 개발자로 일하고 싶습니다.</p>

          </div>
        </div>

      </div>
    </>
  )
}