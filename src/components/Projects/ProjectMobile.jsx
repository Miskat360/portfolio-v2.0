import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
// import react icon';
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

import img1 from "../../assets/projectSm1.jpg";
import img2 from "../../assets/projectSm2.jpg";
import img3 from "../../assets/projectSm3.jpg";
import img4 from "../../assets/projectSm4.jpg";
import img5 from "../../assets/projectSm5.jpg";
import img6 from "../../assets/projectSm6.jpg";

const ProjectMobile = () => {
  const ProjectImg = [img1, img2, img3, img4, img5, img6];
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
              <div className="w-full relative h-[40vh] flex items-center justify-center">
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                />
                <div className="w-full absolute h-full left-0 top-0 px-6 bg-gradient-to-t from-black/60 rounded-[15px]">
                  <a href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black py-3 px-4 flex items-center gap-2 rounded-md text-lg"><GoArrowRight />Visit Now</a>
                  <div className="w-full absolute bottom-0 text-left pb-4 left-0 text-white">
                    <p className="text-sm px-6">WEBSITE</p>
                    <p className="text-xl font-semibold flex items-center justify-between w-full px-6">Tourepea lu ne 1.0<span><GoArrowUpRight /></span></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProjectMobile;
