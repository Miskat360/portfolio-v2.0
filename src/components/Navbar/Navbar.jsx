import React, { useEffect, useRef, useState } from 'react'
import Magnetic from '../../common/Magnetic'
import Button from '../../common/Button/index'
import styles from './Navbar.module.scss'
import SideNavbar from '../SideNavbar/SideNavbar'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navShowHide, setNavShowHide] = useState(false)
    const [scrollBtnToggle, setScrollBtnToggle] = useState(false)
    const [sideNavBtnShowHide, setSideNavBtnShowHide] = useState(false)
    const logoRef = useRef(null)
    const copyrightRef = useRef(null)
    const nameRef = useRef(null)
    const activeLink = useRef('')
    const [spin, setSpin] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.querySelector("html").setAttribute("class", localStorage.getItem("theme"))

    }, [theme])
    window.onscroll = function () {
        if (window.scrollY > 50) {

            setScrollBtnToggle(true)
        } else {
            setScrollBtnToggle(false)
        }
    }


    return (
        <>
            <div className="w-full dark:bg-[#1C1D20] bg-[#999D9E] px-[4vw] lg:h-[6vw] md:h-[10vw] sm:h-[12vw] h-[18vw] text-white flex items-center justify-between">
                <Link to="/">
                    <div onMouseEnter={() => {
                        setSpin(true)
                    }} onMouseLeave={() => {
                        setSpin(false)
                    }} ref={logoRef} className='cursor-pointer w-[142px] overflow-hidden'>
                        <Magnetic points={0.5}>
                            <p ref={nameRef} className='text-lg flex gap-1 whitespace-nowrap'>
                                <p ref={copyrightRef} className={`${spin ? "rotate-[360deg]" : "rotate-0"} transition-all duration-500`}>©</p>
                                <p className={`${spin ? "-translate-x-[68px]" : "translate-x-0"} w-[70px] z-0 transition-all duration-500`}><span className={`${spin ? "opacity-0" : "opacity-100"} transition-opacity duration-700 delay-100`}>Code by</span> Miskat Hasan</p>
                            </p>
                        </Magnetic>
                    </div>
                </Link>
                <div className='md:block hidden'>
                    <ul className="flex gap-4 items-center">
                        {["work", "about", "contact"].map((item, index) => (
                            <NavLink to={`/${item}`} ref={activeLink} key={index}>
                                <Magnetic points={0.5}>
                                    <li key={index} className="text-lg capitalize py-3 px-4">
                                        <a href="" className={`flex flex-col items-center ${styles.dot}`}>{item}<span className={`${activeLink.current.className == "active" ? "opacity-100" : "opacity-0"} w-[5px] h-[5px] bg-white rounded-full`}></span></a>
                                    </li>
                                </Magnetic>
                            </NavLink>
                        ))}
                        <Magnetic points={0.5}>
                            <div className='px-2 py-1'>
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input
                                        type="checkbox"
                                        onChange={handleThemeToggle}
                                        checked={theme == "light" ? false : true}
                                    />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>
                        </Magnetic>
                    </ul>
                </div>

                <div className='md:hidden flex items-center'>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                onChange={handleThemeToggle}
                                checked={theme == "light" ? false : true}
                            />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    <div className='md:hidden block' onClick={() => {
                        navShowHide ? setNavShowHide(false) : setNavShowHide(true);
                        sideNavBtnShowHide ? setSideNavBtnShowHide(false) : setSideNavBtnShowHide(true);
                    }}>
                        <Magnetic points={0.5}>
                            <p className='cursor-pointer sm:w-[10vw] h-[10vw] w-[15vw] rounded-full flex items-center justify-end text-lg before:w-[1vw] before:h-[1vw] before:bg-white before:rounded-full gap-[1vw]'>
                                Menu
                            </p>
                        </Magnetic>
                    </div>
                </div>
            </div>
            <div className={`${scrollBtnToggle ? "scale-100" : "scale-0"} fixed right-8 top-8 z-[90]`} style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
                <Button smallBtn={75} bigBtn={85}>
                    <div className='w-full h-full bg-[#1C1D20] dark:bg-white text-white dark:text-black'>
                        <Magnetic points={0.4}>
                            <p>
                                <label className="btn-circle swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" onChange={() => {
                                        navShowHide ? setNavShowHide(false) : setNavShowHide(true)
                                    }} />
                                    {/* hamburger icon */}
                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                    {/* close icon */}
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                                </label>
                            </p>
                        </Magnetic>
                    </div>
                </Button>
            </div >
            <SideNavbar setNavShowHide={setNavShowHide} navShowHide={navShowHide} sideNavBtnShowHide={sideNavBtnShowHide} setSideNavBtnShowHide={setSideNavBtnShowHide} />
        </>
    )
}

export default Navbar