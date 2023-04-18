import React, { useEffect, useState } from "react";
import Skillcss from "@/styles/Skillscss.module.scss";

export const Skills = () => {
  const [frontSkill, setFrontSkill] = useState("");

  useEffect(() => {
    const front = [
      {
        name: "HTML5",
        url: "/html5.png",
        detail: "Html을 사용하여 기본적인 마크업을 할 수 있습니다.",
        alt: "html이미지",
      },
      {
        name: "CSS3",
        url: "/css3.png",
        detail:
          "Css를 사용하여 페이지를 꾸밀 수 있고, 애니메이션을 사용 할 수 있습니다.",
        alt: "css이미지",
      },
      {
        name: "JAVASCRIPT",
        url: "/javascript.png",
        detail: "Javascript를 사용하여 페이지의 ",
        alt: "javascript이미지",
      },
      {
        name: "SASS",
        url: "/sass.png",
        detail:
          "Sass를 사용하여 css코드들을 보다더 직관적으로 작성 할 수 있고, 변수에 담아 사용 할 수 있습니다.",
        alt: "sass이미지",
      },
      {
        name: "JQUERY",
        url: "/jquery.png",
        detail: "Jquery를 사용하여 보다 더 간결한 코드를 작성 할 수 있습니다.",
        alt: "jquery이미지",
      },
      {
        name: "JSON",
        url: "/json.png",
        detail: "저는 이런기술 사용 할 줄 압니다 어쩌구 저쩌구 쌸라쌸라",
        alt: "json이미지",
      },
      {
        name: "REACT",
        url: "/React.png",
        detail: "React를 사용하여 ",
        alt: "react이미지",
      },
      {
        name: "NEXT.JS",
        url: "/Nextjs.png",
        detail: "Next.js는 제가 주로 사용하는 react 프레임워크 입니다.",
        alt: "next.js이미지",
      },
      {
        name: "VUE.JS",
        url: "/Vue.png",
        detail: "Vue를 어떻게 사용하는지 경험 해 보았고, 공부중에 있습니다.",
        alt: "vue.js이미지",
      },
      {
        name: "GITHUB",
        url: "/github.png",
        detail: "Github를 통해 프로젝트들을 저장하고 있습니다.",
        alt: "github이미지",
      },
      {
        name: "FIGMA",
        url: "/figma.png",
        detail:
          "Figma를 이용하여 협업을 해 보았고, 프로젝트를 만들기 전 시안을 만들어 사용합니다.",
        alt: "figma이미지",
      },
      {
        name: "GIT",
        url: "/git.png",
        detail:
          "Git을 통해 프로젝트를 Push를 사용하여 저장하고 Pull을 사용하여 가져옵니다. ",
        alt: "git이미지",
      },
      {
        name: "NODE.JS",
        url: "/node.png",
        detail: "Nodejs를 이용하여 서버를 렌더링 하고, 패키지를 관리합니다.",
        alt: "node.js이미지",
      },
      {
        name: "MYSQL",
        url: "/mysql.png",
        detail:
          "Mysql을 사용하여 DB를 관리하고 CRUD를 사용하여 생성, 읽기, 갱신, 삭제가 가능합니다.",
        alt: "mysql이미지",
      },
    ]; //javascript 뭘 써야하지 . ?

    setFrontSkill(front);
  }, []);

  return (
    <>
      <section className={Skillcss.sectionBox}>
        <div className={Skillcss.h2Box}>
          <h2 className={Skillcss.h2text}>SKILLS</h2>
        </div>
        <div className={Skillcss.skillBox}>
          {frontSkill &&
            frontSkill.map((obj, i) => {
              return (
                <div className={Skillcss.skill} key={i}>
                  <div className={Skillcss.imgBox}>
                    <img src={obj.url} alt={obj?.alt}></img>
                  </div>
                  <div className={Skillcss.textBox}>
                    <h3>{obj.name}</h3>
                    <p className={Skillcss.text}>{obj.detail}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};
