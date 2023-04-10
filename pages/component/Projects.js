import React, { useEffect,  useState } from 'react'
import Projectscss from "@/styles/Projectcss.module.scss";
import Image from "next/image";

//swiper js 
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
//


export const Projects = () => {


  const [Imgstate, setImgstate] = useState();

  useEffect(() => {
    let datas = [
      { name: '제주맥주(클론코딩)', url: '/jejubeer.png', id: 0, detail:'' },
      { name: '담배추천사이트', url: '/ciga.png', id: 1 },
      { name: '롤 챔피언 정보', url: '/project_lol1.png', id: 2 },
      { name: '음악앱', url: '/project_lol2.png', id: 3 }
    ]
    setImgstate(datas)
  }, [])//프로젝트 이미지, 내용, 이름 수정하기 및 기능 덜 했음 


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
              <div className={Projectscss.numberBox}>1 / 4</div>
              <div className={Projectscss.nameBox}>Amipharm</div>
              <div className={Projectscss.skillBox}>This is an important skill in creating</div>
            </div>
            <div className={Projectscss.rightBox}>
              {
              /* <div className={Projectscss.fourImgs}>
              {
                Imgstate && Imgstate.map((data,id) => {
                  return (
                    <div className={Projectscss.projectImgBox}>
                      <img className={Projectscss.projectImg}src={data.url} alt={data.name}></img>
                    </div>
                  )
                })
              }
              </div> */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{ clickable: true, }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper">

                {
                  Imgstate && Imgstate.map((data, id) => {
                    return (
                      <SwiperSlide>
                        <img src={data.url} alt={data.name} style={{width:'100%'}}/>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>



            </div>
          </div>
        </div>

      </div>

    </>
  )
}
