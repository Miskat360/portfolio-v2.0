import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParallaxSectionVideo from '../../assets/ZoomParallaxSection.mp4'
const ParallaxSection = () => {
  const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4])
  
  return (
    <>
      <div ref={container} className=" h-[300vh] relative -z-10">
        <div className=" h-[100vh] sticky top-0 dark:bg-black bg-white">
          <motion.div style={{scale: scale5 }}  className='absolute top-0 flex items-center justify-center w-full h-full'>
            <div className='w-[32vw] -[28vh] relative' >
              <video muted autoPlay loop className='w-full h-full object-cover sc'>
                <source src={ParallaxSectionVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ParallaxSection