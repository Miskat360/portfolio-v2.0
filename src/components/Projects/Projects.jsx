import React, { useState } from 'react'
import Project from './Project'
import modalImg1 from '../../assets/modalimg1.jpg'
import modalImg2 from '../../assets/modalimg2.jpg'
import modalImg3 from '../../assets/modalimg3.jpg'
import modalImg4 from '../../assets/modalimg4.jpg'
import Modal from './Modal'
import Button from '../../common/Button/index'
import Magnetic from '../../common/Magnetic/index'
const Projects = () => {
  const projects = [
    {
      title: "Teche`",
      src: modalImg1
    },
    {
      title: "Directory",
      src: modalImg2
    },
    {
      title: "BBQ",
      src: modalImg3
    },
    {
      title: "Tictactoeground",
      src: modalImg4
    }
  ]
  const [modal, setModal] = useState({ active: false, index: 0 })
  return (
    <>
      <div className="w-full px-[4vw] dark:bg-black bg-white text-[#1c1d20] dark:text-white pb-[3vw] pt-[8vw] cursor-pointer">
        <p className='px-[11vw] uppercase text-xs mb-[3vw]'>recent projects</p>
        <div className='border-b dark:border-zinc-700 border-[#1c1d2032] w-full flex flex-col items-center justify-center'>
          {
            projects.map((item, index) => (
              <Project key={index} title={item.title} index={index} setModal={setModal} />
            ))
          }
        </div>
        <Modal modal={modal} projects={projects} />
        <div className='flex items-center justify-center py-[5.5vw]'>
          <Button fill={true}>
            <Magnetic points={0.4}>
              <p className='py-[1.5vw] px-[3vw] text-lg tracking-wider'>More work <span className='text-sm ml-1'><sup>12</sup></span></p>
            </Magnetic>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Projects