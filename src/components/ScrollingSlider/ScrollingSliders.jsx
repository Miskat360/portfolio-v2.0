import React, { useRef } from 'react'
import ScrollingSlider from './ScrollingSlider'
import item1 from '../../assets/home-item-1.jpg'
import item2 from '../../assets/home-item-2.mp4'
import item3 from '../../assets/home-item-3.jpg'
import item4 from '../../assets/home-item-4.mp4'
import item5 from '../../assets/home-item-5.mp4'
import item6 from '../../assets/home-item-6.jpg'
import item7 from '../../assets/home-item-7.mp4'
import item8 from '../../assets/home-item-8.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollingSliders = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])

    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
    const slider1 = [
        {
            src: item1,
            type: "img"
        },
        {
            src: item2,
            type: "video"
        },
        {
            src: item3,
            type: "img"
        },
        {
            src: item4,
            type: "video"
        },
    ]
    const slider2 = [
        {
            src: item5,
            type: "video"
        },
        {
            src: item6,
            type: "img"
        },
        {
            src: item7,
            type: "video"
        },
        {
            src: item8,
            type: "img"
        },
    ]
    return (
        <>
            <div ref={container} className="w-full min-h-screen dark:bg-black bg-white flex flex-col gap-[2.5vw] overflow-x-hidden">
                <ScrollingSlider sliderItem={slider1} x1={x1} diraction={"leftToRight"} />
                <ScrollingSlider sliderItem={slider2} x2={x2} />
            </div>
            <motion.div style={{ height }} className='relative'>
                <div className='h-[1550%] w-[120%] absolute left-[-10%] rounded-[0_0_50%_50%] dark:bg-black bg-white z-10 shadow-[0px_30px_50px_rgba(0,0,0,0.748)] overflow-x-hidden'></div>
            </motion.div>
        </>
    )
}

export default ScrollingSliders