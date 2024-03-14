import React from 'react'
import myimg from '../../assets/myimg.png'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic/index'
import { GoArrowDownLeft } from "react-icons/go";
const Footer = () => {
    return (
        <>
            <div className="w-full h-screen dark:bg-[#2f3136] bg-black sm:px-[4vw] px-[6vw] text-white">
                <div className="w-full sm:px-[11vw] pt-[15vh] sm:pb-[15vh] pb-[13vh]">
                    <div className='sm:mb-0 mb-6'>
                        <div className='flex items-center gap-[1.8vw]'>
                            <div className='sm:w-[5vw] w-[12vw] sm:h-[5vw] h-[12vw] rounded-full overflow-hidden'>
                                <img src={myimg} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h1 className='sm:text-[6vw] text-[12vw] leading-none'>Let's work</h1>
                        </div>
                        <h1 className='sm:text-[6vw] text-[12vw] leading-none flex justify-between'>together<span className='sm:text-[2vw] text-[7vw]'><GoArrowDownLeft /></span></h1>
                    </div>
                    <div className='w-full flex items-center relative justify-end'>
                        <div className='w-full h-[1px] dark:bg-[#888888] bg-[#1c1d20] absolute'></div>
                        <div data-scroll data-scroll-speed="-.2" data-scroll-direction="horizontal" className="mr-[4vw]">
                            <Button className="sm:w-[12vw] sm:h-[12vw] w-[35vw] h-[35vw]">
                                <div className='w-full h-full  bg-[#455CE9]'>
                                    <Magnetic points={0.5}>
                                        <p className='sm:text-lg text-white'>Get in touch</p>
                                    </Magnetic>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='part-3 flex sm:flex-row flex-col sm:gap-[2vw] gap-[3.7vw] sm:-mt-6 mt-8'>
                        {["gmcmarchantcenter@gmail.com", "+8801859580365"].map((item, index) => (
                            <Button fill={true} key={index}>
                                <Magnetic points={0.2}>
                                    <p key={index} className='sm:py-[1.6vw] py-[4.5vw] px-[3vw] sm:text-[1.2vw] text-[4.5vw] tracking-wider'>{item}</p>
                                </Magnetic>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="w-full flex sm:flex-row flex-col-reverse justify-between sm:items-center">
                    <div className='sm:border-t-0 border-t sm:pt-0 pt-7 sm:mt-0 mt-8'>
                        <p className="uppercase text-xs text-zinc-400 mb-3">version</p>
                        <p className="uppercase text-sm">2024 © edition</p>
                    </div>
                    <div>
                        <p className="uppercase text-xs text-zinc-400 mb-3">sosials</p>
                        <div className='flex md:gap-[2vw] gap-[3vw]'>
                            {["LinkedIn", "Twitter", "Facebook"].map((item, index) => (
                                <Magnetic points={0.8}>
                                    <p>
                                        <a key={index} href="/">{item}</a>
                                    </p>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer