import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from './ZoomParallax.module.scss'
import ZoomParallaxViedo1 from '../../assets/ZoomParallaxVideo1.mp4'
import ZoomParallaxViedo2 from '../../assets/ZoomParallaxVideo2.mp4'
import ZoomParallaxViedo3 from '../../assets/ZoomParallaxVideo3.mp4'
import ZoomParallaxViedo4 from '../../assets/ZoomParallaxVideo4.mp4'
import ZoomParallaxViedo5 from '../../assets/ZoomParallaxVideo5.mp4'
import ZoomParallaxViedo6 from '../../assets/ZoomParallaxVideo6.mp4'
import ZoomParallaxViedo7 from '../../assets/ZoomParallaxVideo7.mp4'
const ZoomParallax = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: ZoomParallaxViedo1,
            scale: scale5
        },
        {
            src: ZoomParallaxViedo2,
            scale: scale6
        },
        {
            src: ZoomParallaxViedo3,
            scale: scale8
        },
        {
            src: ZoomParallaxViedo4,
            scale: scale7
        },
        {
            src: ZoomParallaxViedo5,
            scale: scale9
        },
        {
            src: ZoomParallaxViedo6,
            scale: scale6
        },
        {
            src: ZoomParallaxViedo7,
            scale: scale7
        }
    ]

    return (
        <>
            <div ref={container} className="h-[300vh] relative -z-10">
                <div className="sticky top-0 h-[100vh] dark:bg-black bg-white overflow-hidden">
                    {
                        pictures.map(({ src, scale }, index) => {
                            return <motion.div style={{ scale }} key={index} className={`${styles.element} w-full h-full`}>
                                <div className={`${styles.imgContainer} overflow-hidden flex items-center justify-center`}>
                                    <video muted autoPlay loop className='w-full h-full object-cover'>
                                        <source src={src}type='video/mp4' />
                                    </video>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ZoomParallax