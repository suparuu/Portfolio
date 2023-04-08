import React from 'react'
import Projectscss from "@/styles/Projectscss.module.scss";

export const Projects = () => {
  return (
    <>
      <div className={Projectscss.sectionBox}>
        <div className={Projectscss.skyBox}>
          <div className={Projectscss.flexbox}>
            <div className={Projectscss.paddingbox}>
              <h2 className={Projectscss.h2text}>Web standards, grids, gsap-based websites and It's a mock-up made using Figma.
              </h2>
            </div>
            <br></br>
            <div className={Projectscss.paddingbox}>
              <p className={Projectscss.Ptext}>This is an important skill in creating a website. Web standards, grids, gsap-based websites and It's a mock-up made using Figma.
              </p>
            </div>
            <br></br>
            <div className={Projectscss.paddingbox}>
              <div className={Projectscss.pathbox}>자세히 보기</div>
            </div>

          </div>
        </div>
        <div className={Projectscss.blueBox}>
          <div className={Projectscss.rightcenterBox}>
            <div className={Projectscss.leftBox}>
              <div className={Projectscss.numberBox}>1/4</div>
              <div className={Projectscss.nameBox}>test2</div>
              <div className={Projectscss.skillBox}>test3</div>
            </div>
            <div className={Projectscss.rightBox}>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
