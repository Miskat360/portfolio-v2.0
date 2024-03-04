import React from 'react'
import myimg from '../../assets/myimg.png'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic/index'
import { GoArrowDownLeft } from "react-icons/go";
const Footer = () => {
    return (
        <>
            <div className="w-full h-screen dark:bg-[#2f3136] bg-black px-[4vw] text-white">
                <div className="w-full px-[11vw] py-[15vh]">
                    <div className='part-1'>
                        <div className='flex items-center gap-[1.8vw]'>
                            <div className='w-[5vw] h-[5vw] rounded-full overflow-hidden'>
                                <img src={myimg} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h1 className='text-[6vw] leading-none'>Let's work</h1>
                        </div>
                        <h1 className='text-[6vw] leading-none flex justify-between'>together<span className='text-[2vw]'><GoArrowDownLeft /></span></h1>
                    </div>
                    <div className='part-2 w-full flex items-center relative justify-end'>
                        <div className='w-full h-[1px] dark:bg-slate-400 bg-[#1c1d20] absolute'></div>
                        <div data-scroll data-scroll-speed="-.2" data-scroll-direction ="horizontal" className="mr-[4vw]">
                            <Button bigBtn={185} smallBtn={100}>
                                <div className='w-full h-full  bg-[#455CE9]'>
                                    <Magnetic points={0.5}>
                                        <p className='text-white'>Get in teuch</p>
                                    </Magnetic>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='part-3 flex gap-[2vw] -mt-6'>
                        {["gmcmarchantcenter@gmail.com", "+8801859580365"].map((item, index) => (
                            <Button fill={true} key={index}>
                                <Magnetic points={0.2}>
                                    <p key={index} className='py-[1.6vw] px-[3vw] text-[1.2vw] tracking-wider'>{item}</p>
                                </Magnetic>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <p className="uppercase text-xs text-zinc-400">version</p>
                        <p className="uppercase text-sm">2024 © edition</p>
                    </div>
                    <div>
                        <p className="uppercase text-xs text-zinc-400">sosials</p>
                        <div className='flex gap-[2vw]'>
                        {["LinkedIn", "Twitter", "Facebook"].map((item, index)=>(
                            <a key={index} href="/">{item}</a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer