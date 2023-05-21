import React from 'react'

const Hero = () => {
  return (
    <div className='hero h-screen w-screen text-white p-4'>
        <div className='pt-[50%] md:pt-[20%] md:pl-10'>
            <h1 className='uppercase font-bold'>Henrik Olsson</h1>
            <p>Stories to be told</p>
        </div>
        <div className='flex flex-col mx-auto'>
            <p>Dive in!</p>
            <i className="fa-solid fa-angle-down text-3xl"></i>
        </div>
    </div>
  )
}

export default Hero