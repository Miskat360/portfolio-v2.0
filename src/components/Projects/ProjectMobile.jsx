import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

import img1 from "../../assets/projectSm1.jpg";
import img2 from "../../assets/projectSm2.jpg";
import img3 from "../../assets/projectSm3.jpg";
import img4 from "../../assets/projectSm4.jpg";
const ProjectMobile = () => {
  //   const ProjectImg = [img1, img2, img3, img4];
  return (
    <>
      <div className="w-full bg-red-700 text-center">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="w-full h-[40vh] bg-blue-800 flex items-center justify-center"
            >
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[40vh] bg-blue-800 flex items-center justify-center"
            >
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <p className="pt-3 text-lg">Chect out all Projects</p>
      </div>
    </>
  );
};

export default ProjectMobile;
