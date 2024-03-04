import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const scaleAnim = {
    initial: { scale: 0, x: "5%", y: "40%" },
    open: { scale: 1, x: "50%", y: "50%", transition: { duration: 0.4, ease: [0.76, 0, .24, 1] } },
    close: { scale: 0, x: "50%", y: "50%", transition: { duration: 0.4, else: [0.32, 0, 0.67, 0] } }
}

const Modal = ({ modal, projects }) => {
    const { active, index } = modal;
    const modalContainer = useRef(null)
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })

    window.addEventListener('mousemove', (e) => {

        xMoveContainer(e.clientX - 390)
        yMoveContainer(e.clientY - 390)

    });

    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnim} initial={"initial"} animate={active == true ? "open" : "close"} className={`w-[26vw] h-[26vw] fixed top-0 left-0 pointer-events-none overflow-hidden flex items-center justify-center`}>
                <div style={{ top: index * -100 + "%", transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)" }} className='w-full h-full absolute'>
                    {
                        projects.map((item, index) => (
                            <div key={`modal_${index}`} className='h-full flex items-center justify-center'>
                                <img src={item.src} alt="image" />
                            </div>
                        ))
                    }
                </div>
                <div className='text-white z-10 bg-[#455CE9] w-[5vw] h-[5vw] rounded-full flex items-center justify-center'>View</div>
            </motion.div>
        </>
    )
}

export default Modal