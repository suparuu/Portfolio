import React, { useEffect, useRef, useState } from 'react'
import Newprojectscss from "@/styles/Newprojectscss.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export const Newprojects = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imgstate, setImgstate] = useState();
  const [swiperIndex, setSwiperIndex] = useState(0);


  //

  function getIndex(index) {
    console.log(index)
    console.log(imgstate)
    setSwiperIndex(index)
  }//get swiper index
  useEffect(() => {
    let datas = [
      {
        name: '제주맥주(클론코딩)', url: '/jejubeer.png', id: 0,
        detail: '처음으로 하는 프로젝트 이기도 하고, 클론코딩을 부담없이 할 수 있을거라 생각하여 제주맥주 사이트를 클론코딩을 하게 되었습니다.',
        skills: "HTML5, CSS3, SCSS, JQuery 를 사용 GitHub를 이용하여 사이트 배포",
        site:'https://suparuu.github.io/Project_jejubeer/'
      },
      {
        name: '담배추천사이트', url: '/ciga.png', id: 1,
        detail: '팀원 들과 협의를 해서 공통적으로 좋아하는 것이 담배 였는데, 비 흡연자도 사이트를 한번 쯤은 방문하게 끔 만들자 라고 생각해서 사이트를 만들게 되었습니다.',
        skills: "HTML, CSS, SCSS, Javascript, JSON , JQuery를 사용 GitHub를 이용하여 사이트 배포",
        site:'https://suparuu.github.io/Project_Ciga/'

      },
      {
        name: '롤 챔피언 정보', url: '/project_lol1.png', id: 2,
        detail: "국비지원 학원에서 React라는 Javascript 라이브러리를 배웠고, 저의 취미인 게임중에서 리그오브레전드 라는 게임의 API를 호출하여 안에 있는 데이터들을 활용하기 위해 진행된 프로젝트입니다.",
        skills: 'Javascript, CSS, SCSS, React, JQuery, League of Legends API를 사용 GitHub를 이용하여 사이트 배포',
        site:'https://suparuu.github.io/Project_lol/'

      },
      {
        name: '음악앱', url: '/project_lol2.png', id: 3,
        detail: 'React 에서 제공하는 라이브러리인 Nextjs 를 배웠고, CRUD를 활용하여 로그인기능 , 플레이리스트 기능을 ... <내용 추가 예정',
        skills: 'React, Next.js, mySQL, Spotify API 사용 CloudType을 이용하여 사이트 배포 <내용 추가 예정',
        site:'https://suparuu.github.io/Project_jejubeer/'

      }
    ]
    setImgstate(datas)
  }, [])//프로젝트 이미지, 내용, 이름 수정하기 및 기능 덜 했음 

  return (
    <div className={Newprojectscss.sectionBox}>
      <div className={Newprojectscss.leftBox}>
        <div className={Newprojectscss.textBox}>
          {imgstate && imgstate.map((obj, index) => {
            if(index == swiperIndex){
              return (
                <>
                  <p className={Newprojectscss.pjName}>{obj.name}</p>
                  <p className={Newprojectscss.pjDetail}>{obj.detail}</p>
                  <p className={Newprojectscss.pjSkill}>{obj.skills}</p>
                  <div className={Newprojectscss.gotoProject} onClick={obj.site}>자세히 보기</div>
                </>
              )
            }
          })}
          {/* <p className={Newprojectscss.pjName}>제주맥주</p>
          <p className={Newprojectscss.pjDetail}>처음으로 하는 프로젝트 이기도 하고, 클론코딩을 부담없이 할 수 있을거라 생각하여 제주맥주 사이트를 클론코딩을 하게 되었습니다.
          </p>
          <p className={Newprojectscss.pjSkill}>HTML5, CSS3, SCSS, JQuery 를 사용
            GitHub를 이용하여 사이트 배포
          </p>
          <div className={Newprojectscss.gotoProject}>자세히 보기</div> */}
        </div>
      </div>
      <div className={Newprojectscss.rightBox}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            width: '100%'
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onSlideChange={(e) => getIndex(e.realIndex)}
        // onChangeIndex={this.onChangeIndex}
        >
          {imgstate && imgstate.map((img, id) => {
            return (
              <SwiperSlide style={{ width: '100%' }}>
                <img src={img.url} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
              </SwiperSlide>
            )
          })}

          {/* <div className="swiper-button-prev" ref={swiperPrev} onClick={''}></div>
<div className="swiper-button-next" ref={swiperNext}></div> */}

        </Swiper>



        <Swiper
          style={{ position: 'absolute', bottom: '10%', width: '100%' }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={false}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imgstate && imgstate.map((img, id) => {
            return (
              <SwiperSlide >
                <img src={img.url} style={{ width: '100%' }} />
              </SwiperSlide>

            )
          })}

        </Swiper>


      </div>
    </div>
  )
}
