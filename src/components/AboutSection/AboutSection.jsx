import React, { useRef } from 'react'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic'

const AboutSection = () => {
  const container = useRef(null)
  const headtext = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."
  
  return (
    <>
      <div ref={container} id='container' className="w-full h-scree relative dark:bg-black bg-white dark:text-white text-[#1c1d20] px-[15vw] pt-[9vw] flex -m">
        <div className="basis-3/5">
          <p id="headTextcontainer">
            {headtext.split(" ").map((item, index) => (
              <p
                key={index} className='text-[2.2vw] font-light ml-2 overflow-hidden inline-flex'><span>{item}</span></p>
            ))}
          </p>
        </div>
        <div className='basis-2/5 pl-[12vw]'>
          <div className='mb-[2vw]'>
            <p className='text-[1.2vw]'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
          </div>
          <div data-scroll data-scroll-speed=".2" className="z-10">
            <Button size={"185px"}>
              <div className='w-full h-full bg-[#1c1d20] dark:bg-white'>
                <Magnetic points={0.4}>
                  <p className='text-lg font-bold text-white dark:text-[#1c1d20] hover:dark:text-white tracking-wider dark:tracking-normal'>About me</p>
                </Magnetic>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection