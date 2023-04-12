import React, { useEffect, useState } from 'react'
import Skillcss from "@/styles/Skillscss.module.scss";
import Aboutcss from "@/styles/Aboutcss.module.scss";

export const Skills = () => {

  const [frontSkill, setFrontSkill] = useState('');

  useEffect(() => {
    const front = [
      { name: 'HTML5', url: '/html5.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'CSS3', url: '/css3.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'JAVASCRIPT', url: '/javascript.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'SASS', url: '/sass.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'JQUERY', url: '/jquery.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'JSON', url: '/json.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'REACT', url: '/React.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
      { name: 'NEXT.JS', url: '/Nextjs.png', detail: '저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라' },
    ]
    setFrontSkill(front);


    console.log(frontSkill, 'who r u')
  }, []);

  return (
    <>
      <div className={Skillcss.sectionBox}>
        <div className={Skillcss.h2Box}>
          <h2 className={Skillcss.h2text}>SKILLS</h2>
        </div>
        <div className={Skillcss.skillBox}>
          {
            frontSkill && frontSkill.map((obj, i) => {
              return(
              <div className={Skillcss.skill}>
                <div className={Skillcss.imgBox}>
                  <img src={obj.url} alt=''></img>
                </div>
                <div className={Skillcss.textBox}>
                  <h3>{obj.name}</h3>
                  <p className={Skillcss.text}>{obj.detail}</p>
                </div>
              </div>
              )

            })
          }
        </div>
      </div>


      {/* <div className={Skillcss.sectionBox}>
        <div className={Skillcss.textBox}>
          <h2 className={Skillcss.text}>SKILLS</h2>
        </div>

        <div className={Skillcss.skillsBox}>

        </div>
      </div> */}
    </>

  )
}
