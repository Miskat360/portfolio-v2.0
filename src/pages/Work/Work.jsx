import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
const Work = () => {
  return (
    <>
      <Navbar BgColorDark={'#000'} BgColorLight={'#fff'} textColorLight={'text-black'} textColorDark={'dark:text-white'}/>
      <Projects />
      <Footer />
    </>
  );
};

export default Work;
