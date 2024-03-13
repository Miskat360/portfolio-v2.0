import React from 'react'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic/index'
import { Link } from 'react-router-dom'
const SideNavbar = ({ navShowHide, setNavShowHide, sideNavBtnShowHide, setSideNavBtnShowHide }) => {
    if (navShowHide == true) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
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
            <div className={`fixed ${navShowHide ? "right-0" : "right-[-100%]"} top-0 right-0 dark:bg-[#1C1D20] bg-[#ddd9d9] dark:text-white text-[#1c1d20] hover:text-black md:border-l xl:w-[34vw] lg:w-[38vw] md:w-[45vw] w-full h-screen z-[11] p-[4vw] transition-all duration-300`}>
                <div className={`relative w-full h-full`}>
                    <div className={`${sideNavBtnShowHide ? "opacity-100" : "opacity-0"} flex justify-end`}>
                        <Button className="w-[15vw] h-[15vw] sm:w-[5.5vw] sm:h-[5.5vw]">
                            <div className='w-full h-full dark:bg-black bg-[#1c1d20]'>
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
                                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                            {/* close icon */}
                                            <svg className="swap-on dark:fill-current fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                        </label>
                                    </p>
                                </Magnetic>
                            </div>
                        </Button>
                    </div>
                    <p className='text-xs uppercase pb-[4vh] border-b border-zinc-600 sm:mt-0 mt-[9vw] mb-[4vw]'>navigation</p>
                    <ul>
                        {["home", "work", "about", "contact"].map((item, index) => (
                            <Link to={`${item == "home" ? '/' : '/' + item}`}>
                                <Magnetic points={0.07}>
                                    <li key={index} className='sm:text-[3.8vw] text-[13vw] capitalize md:leading-tight leading-snug md:after:w-[1vw] md:after:h-[1vw] dark:after:bg-white after:bg-black after:rounded-full hover:after:block after:hidden cursor-pointer dark:hover:text-white hover:text-[#1c1d20] flex items-center justify-between pr-[4vw]'><a href="/">{item}</a></li>
                                </Magnetic>
                            </Link>
                        ))}
                    </ul>
                    <div className="absolute md:bottom-0 sm:bottom-[2%] bottom-[7%] w-full">
                        <p className='border-t border-zinc-600 md:pt-[1.5vw] pt-[4vw] md:pl-3 pl-[3vw] uppercase text-xs mb-[2vw] md:mb-[1vw] w-full'>socials</p>
                        <ul className='flex md:gap-[2vw] gap-[4vw] md:ml-3 ml-[3vw]'>
                            {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((item, index) => (
                                <Magnetic points={0.3}>
                                    <li key={index} className='text-lg hover:text-[#1c1d20] dark:hover:text-white'><a href="/">{item}</a></li>
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