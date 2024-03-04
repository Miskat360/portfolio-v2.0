import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
const Loader = () => {
    const loaderContainerRef = useRef(null);
    const text = ["Hello", "হ্যালো", "مرحبًا", "Hola", "Ciao", "Salve", "Bonjour", "你好", "Hello"]

    useGSAP(() => {
        gsap.from("h1", {
            delay: 0.5,
            display: "none",
            stagger: 0.15
        })
        gsap.to(loaderContainerRef.current, {
            top: "-120%",
            delay:3,
            ease: "expo.inOut"
        })
    })
    console.log("loading")
    return (
        <>
            <div ref={loaderContainerRef} className='text-white bg-[#1c1d20] w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center cursor-none overflow-hidden'>
                {text.map((item, index) => (
                    <h1 key={index} className="text-6xl bg-[#1c1d20] p-20 tracking-tighter absolute flex items-center gap-2 before:w-4 before:h-4 before:inline-block before:bg-white before:rounded-full">{item}</h1>
                ))}
            </div>
        </>
    )
}

export default Loader