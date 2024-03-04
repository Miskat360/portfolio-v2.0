import { motion } from 'framer-motion'
import React from 'react'

const ScrollingSlider = ({ sliderItem, diraction, x1, x2 }) => {
    
    return (
        <>
            <div className='w-[120vw] -ml-[10vw] flex justify-center items-center overflow-x-hidden'>
                <motion.div style={diraction === "leftToRight" ? {x:x1}:{x:x2}} className='flex !overflow-x-hidden gap-6 justify-center items-center'>
                    {
                        sliderItem.map((item, index) => (
                            <div className='w-[32vw] '>
                                {item.type === "img" ? <img src={item.src} /> : <video muted autoPlay loop>
                                    <source src={item.src} type='video/mp4' />
                                </video>}
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </>
    )
}

export default ScrollingSlider