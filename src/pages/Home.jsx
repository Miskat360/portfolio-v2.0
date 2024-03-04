import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { motion, useScroll, useSpring } from "framer-motion";

import '../styles/Home.scss'
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import ZoomParallax from '../components/ZoomParallax/ZoomParallax'
import Projects from '../components/Projects/Projects'
import ScrollingSliders from '../components/ScrollingSlider/ScrollingSliders'
import Footer from '../components/Footer/Footer'

const Home = () => {
    const locomotiveScroll = new LocomotiveScroll();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div className="overflow-x-hidden">
                <motion.div className="progress-bar" style={{ scaleX }} />
                <Loader />
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ZoomParallax />
                <Projects />
                <ScrollingSliders />
                <Footer />
            </div>
        </>
    )
}

export default Home