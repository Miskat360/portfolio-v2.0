import React, { useRef, useState } from 'react'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic/index'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const SideNavbar = ({ navShowHide, setNavShowHide, sideNavBtnShowHide, setSideNavBtnShowHide }) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const width = useTransform(scrollYProgress, [0, 0.9], [50, 0])
    const sideNavToggle = (e) => {
        if (e.target.checked) {
            setNavShowHide(true)
        } else {
            setNavShowHide(false)
        }
        sideNavBtnShowHide ? setSideNavBtnShowHide(false) : setSideNavBtnShowHide(true)
    }
    return (
        <>
            <div ref={container} className={`fixed ${navShowHide ? "right-0" : "right-[-100%]"} top-0 right-0 bg-[#1C1D20] md:w-[35vw] w-full h-screen z-10 p-[4vw] transition-all duration-300`}>

                <motion.div style={{ width }} className='relative'>
                    <div className='w-[1550%] h-[120%] absolute top-[-10%] rounded-[50%_0_0_50%] dark:bg-black bg-white z-10 shadow-[0px_30px_50px_rgba(0,0,0,0.748)] overflow-x-hidden'></div>
                </motion.div>
                <div className={`relative w-full h-full`}>
                    <div className={`${sideNavBtnShowHide ? "flex" : "hidden"} justify-end`}>
                        <Button size={"65px"}>
                            <div className='w-full h-full bg-black'>
                                <Magnetic points={0.4}>
                                    <p className='flex items-center justify-center'>
                                        <label className="btn-circle swap swap-rotate">

                                            {/* this hidden checkbox controls the state */}
                                            <input
                                                type="checkbox"
                                                onChange={sideNavToggle}
                                                checked={navShowHide ? true : false}
                                            />

                                            {/* hamburger icon */}
                                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                            {/* close icon */}
                                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                        </label>
                                    </p>
                                </Magnetic>
                            </div>
                        </Button>
                    </div>
                    <p className='text-xs uppercase pb-[4vh] border-b border-zinc-600 mb-[4vw]'>navigation</p>
                    <ul>
                        {["home", "work", "about", "contact"].map((item, index) => (
                            <Link to={`${item == "home" ? '/' : '/'+item}`}>
                                <Magnetic points={0.07}>
                                    <li key={index} className='md:text-[3.8vw] text-[10vw] capitalize md:leading-tight leading-snug md:after:w-[1vw] md:after:h-[1vw] after:w-[2vw] after:h-[2vw] after:bg-white after:rounded-full hover:after:block after:hidden cursor-pointer hover:text-white flex items-center justify-between pr-[4vw]'><a href="/">{item}</a></li>
                                </Magnetic>
                            </Link>
                        ))}
                    </ul>
                    <div className="absolute md:bottom-0 bottom-[2%] w-full">
                        <p className='border-t border-zinc-600 md:pt-[1.5vw] pt-[4vw] md:pl-3 pl-[3vw] uppercase text-xs mb-[2vw] md:mb-[1vw] w-full'>socials</p>
                        <ul className='flex md:gap-[2vw] gap-[4vw] md:ml-3 ml-[3vw]'>
                            {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((item, index) => (
                                <Magnetic points={0.3}>
                                    <li key={index} className='text-lg hover:text-white'><a href="/">{item}</a></li>
                                </Magnetic>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNavbar