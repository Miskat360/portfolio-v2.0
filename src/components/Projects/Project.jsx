import React from 'react'

const Project = ({title, index, setModal}) => {
  return (
    <>
        <div onMouseEnter={()=>{setModal({active: true, index})}} onMouseLeave={()=>{setModal({active: false, index})}} key={index} className="w-full border-t dark:border-zinc-700 border-[#1c1d2032]">
          <div className='px-[11vw] hover:px-[9vw] hover:text-zinc-400 transition-all duration-300 py-[2vw] flex justify-between items-center'>
            <h1 className='text-[5vw]'>{title}</h1>
            <p className='text-[1.2vw]'>Design & Development</p>
          </div>
        </div>
    </>
  )
}

export default Project