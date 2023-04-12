import React, { useEffect, useState } from 'react'
import Skillcss from "@/styles/Skillscss.module.scss";
import Aboutcss from "@/styles/Aboutcss.module.scss";

export const Skills = () => {

  const [frontSkill, setFrontSkill] = useState('');
  const [otherSkill, setOtherSkill] = useState('');

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
      { name: 'VUE.JS', url: '/Vue.png', detail: 'Vue를 어떻게 사용하는지 경험해 보았고, 공부중에 있습니다.', },
      { name: 'GITHUB', url: '/github.png', detail: 'Github를 통해 프로젝트들을 저장하고 있습니다.', },
      { name: 'FIGMA', url: '/figma.png', detail: 'Figma를 이용하여 협업을 해보았고, 프로젝트를 만들기 전 시안을 만들어 사용합니다.', },
      { name: 'GIT', url: '/git.png', detail: 'Git을 통해 프로젝트를 Push를 사용하여 저장하고 Pull을 사용하여 가져옵니다. ', },
      { name: 'NODE.JS', url: '/node.png', detail: 'Nodejs를 이용하여 서버를 렌더링 하고, 패키지를 관리합니다.', },
      { name: 'MYSQL', url: '/mysql.png', detail: 'Mysql을 사용하여 DB를 관리하고 CRUD를 사용하여 생성, 읽기, 갱신, 삭제가 가능합니다.' }
    ]
    const other = [
      { name: 'GITHUB', url: '/github.png', detail: 'Github를 통해 프로젝트들을 저장하고 있습니다.', },
      { name: 'VUE.JS', url: '/Vue.png', detail: 'Vue를 어떻게 사용하는지 경험해 보았고, 공부중에 있습니다.', },
      { name: 'FIGMA', url: '/figma.png', detail: 'Figma를 이용하여 협업을 해보았고, 실제로 프로젝트를 만들기 전 시안을 만들어 사용합니다.', },
      { name: 'GIT', url: '/git.png', detail: 'Git을 통해 프로젝트를 Push를 사용하여 저장하고 Pull을 사용하여 가져옵니다. ', },
      { name: 'NODE.JS', url: '/node.png', detail: 'Nodejs를 이용하여 서버를 렌더링 하고, 패키지를 관리합니다.', },
      { name: 'MYSQL', url: '/mysql.png', detail: 'Mysql을 사용하여 DB를 관리하고 CRUD를 사용하여 생성, 읽기, 갱신, 삭제가 가능합니다.' }
    ]
    setFrontSkill(front);
    setOtherSkill(other);


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
              return (
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
        <div className={Skillcss.otherskillsBox}>
          <div className={Skillcss.otherImgText}>
            <div className={Skillcss.otherImg}>
              <img src='' alt=''></img>
            </div>
            <p className={Skillcss.otherDetail}></p>
          </div>


        </div>
      </div>


    </>

  )
}
