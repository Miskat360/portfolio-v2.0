import React from 'react'
import styles from './HeroSection.module.scss'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { GoArrowDownRight } from "react-icons/go";

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import myimg from '../../assets/myimg.png'

const HeroSection = () => {
  const imgs = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]


  return (
    <>
      <div className="w-full md:h-[90vh] h-[86vh] text-white dark:bg-[#1C1D20] bg-[#999D9E] px-[4vw] overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='flex sm:flex-row flex-col-reverse sm:gap-0 gap-[6vw] sm:pt-[14vw] lg:pt-[5vw] md:pt-[10vw] pt-[15vw]'>
          <div className=' basis-2/3'>
            {["we create", "eye-opening", "presentations"].map((item, index) => (
              <div key={index} className='flex items-center gap-[1.2vw]'>
                {index == 1 && <div className="relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "15vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .8, delay: 4.5 }}
                    className="sticky w-[15vw] sm:hidden block h-[10vw]"></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .8, delay: 4.5 }}
                    className='w-[9vw] h-[6vw] overflow-hidden lg:mb-[.6vw] sm:mb-[.9vw] mb-[2vw] rounded sm:relative absolute top-1/2 left-1/2 sm:-translate-y-0 -translate-y-1/2 -translate-x-1/2'>
                    <Swiper
                      spaceBetween={35}
                      centeredSlides={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {imgs.map((item, index) => (
                        <SwiperSlide>
                          <img key={index} className='w-full h-full object-cover scale-150 ' src={item} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "15vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .8, delay: 4.5 }}
                    className='w-[15vw] h-[10vw] sm:hidden block overflow-hidden rounded absolute left-0 top-0 -z-10'>
                    <Swiper
                      spaceBetween={35}
                      centeredSlides={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {imgs.map((item, index) => (
                        <SwiperSlide>
                          <img key={index} className='w-full h-full object-cover scale-150 blur-sm' src={item} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </div>

                }
                <h1 key={index} className="lg:text-[8.4vw] sm:text-[10.5vw] text-[18.5vw] lg:leading-[7.4vw] sm:leading-[8.5vw] leading-[15.5vw] uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{item}</h1>
              </div>
            ))}
          </div>
          <div className='md:text-[2.5vw] sm:text-[3vw] text-[5vw] basis-1/3'>
            <div data-scroll data-scroll-section data-scroll-speed=".1" className={`md:w-[7vw] md:h-[7vw] sm:w-[8vw] sm:h-[8vw] w-[22vw] sm:border-4 border-2 rounded-full overflow-hidden md:relative sticky top-2`}>
              <img src={myimg} alt="" className='w-full h-full object-cover' />
            </div>
            <div data-scroll data-scroll-section data-scroll-speed=".08" className='mb-4'><GoArrowDownRight /></div>
            <h1 data-scroll data-scroll-section data-scroll-speed=".05">Freelance</h1>
            <h1 data-scroll data-scroll-section data-scroll-speed=".05">Designer & Developer</h1>
          </div>
        </div>
        <div data-scroll data-scroll-section data-scroll-speed=".05" className='flex whitespace-nowrap select-none sm:mt-0 mt-[36vw]'>
          {["Code by Miskat Hasan —", "Code by Miskat Hasan —", "Code by Miskat Hasan —"].map((item, index) => (
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
              key={index}
              className='md:text-[13vw] sm:text-[15vw] text-[18vw] leading-none'>{item}</motion.h1>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection