import { motion } from 'framer-motion'
import React from 'react'

const ScrollingSlider = ({ sliderItem, diraction, x1, x2 }) => {
    
    return (
        <>
            <div className={`sm:w-[120vw] w-[170vw] ${diraction === "leftToRight" ? 'sm:-ml-[10vw] -ml-[50vw]' : 'sm:-mr-[10vw] -ml-[15vw]'} flex justify-center items-center overflow-x-hidden`}>
                <motion.div style={diraction === "leftToRight" ? {x:x1}:{x:x2}} className='flex !overflow-x-hidden sm:gap-6 gap-2 justify-center items-center'>
                    {
                        sliderItem.map((item, index) => (
                            <div key={index} className='sm:w-[32vw] w-[55vw] sm:h-auto h-[40vw] bg-red-900 sm:[&:nth-child(4)]:block [&:nth-child(4)]:hidden'>
                                {item.type === "img" ? <img src={item.src} className='sm:w-auto sm:h-auto w-full h-full object-cover' /> : <video muted autoPlay loop className='sm:w-auto sm:h-auto w-full h-full object-cover'>
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