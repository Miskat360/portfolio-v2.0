import React from 'react'
import ErrorSvg from '../assets/error-404.svg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
    <div className='flex items-center justify-center w-full h-screen fixed -z-10 dark:bg-[#0F131A] bg-white'>
      <h1 className='text-[45vw] inline-block dark:text-[#27303f]'>404</h1>
    </div>
    <div className="w-full h-screen  flex flex-col gap-y-6 items-center justify-center text-[#0F131A] dark:text-white">
      <div className='w-[35%] h-[35%] flex'>
      <img src={ErrorSvg} alt="" />
      </div>
      <h1 className='text-3xl'>Page not found (404)</h1>
      <Link to="/" className='text-lg font-semibold tracking-widest'>Return to homepage</Link>
    </div>
    </>
  )
}

export default NotFound