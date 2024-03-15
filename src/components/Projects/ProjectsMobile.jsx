import React from "react";
import ProjectMobile from "./ProjectMobile";

import person from '../../assets/myimg.png'
const ProjectsMobile = () => {
  return (
    <>
      <div className="w-full mt-10 mb-5 text-center">
        <p>Resent</p>
        <p className="text-3xl font-[founder] my-3">PROJECTS</p>
        <p className="mb-7 text-xl">Chect out my resent projects</p>
        <ProjectMobile />
        <div className="text-left mt-7 flex items-center gap-2">
          <img src={person} alt="" className="w-8 h-8 rounded-full"/>
          <p>© Code by Miskat</p>
        </div>
      </div>
    </>
  );
};

export default ProjectsMobile;
