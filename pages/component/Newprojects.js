import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
        let datas = [
            { name: '제주맥주(클론코딩)', url: '/jejubeer.png', id: 0, detail: '' },
            { name: '담배추천사이트', url: '/ciga.png', id: 1 },
            { name: '롤 챔피언 정보', url: '/project_lol1.png', id: 2 },
            { name: '음악앱', url: '/project_lol2.png', id: 3 }
        ]
        setImgstate(datas)
    }, [])//프로젝트 이미지, 내용, 이름 수정하기 및 기능 덜 했음 




    return (
        <div className={Newprojectscss.sectionBox}>
            <div className={Newprojectscss.leftBox}>
                <div className={Newprojectscss.textBox}>
                    <p className={Newprojectscss.pjName}>제주맥주</p>
                    <p className={Newprojectscss.pjDetail}>처음으로 하는 프로젝트 이기도 하고, 클론코딩을 부감없이 할 수 있을거라 생각하여 제주맥주 사이트를 클론코딩을 하게 되었습니다.
                    </p>
                    <p className={Newprojectscss.pjSkill}>HTML5, CSS3, SCSS, JQuery 를 사용
                        GitHub를 이용하여 사이트 배포
                    </p>
                    <div className={Newprojectscss.gotoProject}>자세히 보기</div>
                </div>
            </div>
            <div className={Newprojectscss.rightBox}>
                
            <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={false}
        watchSlidesProgress={false}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>



            </div>
        </div>
    )
}
