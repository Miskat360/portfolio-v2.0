import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
// import { Pagination } from 'swiper/modules';

import img1 from "../../assets/projectSm1.jpg";
import img2 from "../../assets/projectSm2.jpg";
import img3 from "../../assets/projectSm3.jpg";
import img4 from "../../assets/projectSm4.jpg";
const ProjectMobile = () => {
  const ProjectImg = [img1, img2, img3, img4];
  return (
    <>
      <div className="w-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
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
          modules={[Pagination, EffectCreative]}
          className="mySwiper"
        >
          {ProjectImg.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[40vh] flex items-center justify-center">
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProjectMobile;
