import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const buttonClass = `font-bold text-2xl p-2 shadow border-2 rounded-xl`

const Hero = () => {
  return (
    <div id='hero' className='h-screen text-white p-4'>
      <a href="/"><p className='fixed text-5xl font-black right-8 top-8'>H</p></a>
        <div className='pt-[50%] md:pt-[20%] md:ml-10'>
            <h1 className='uppercase font-black text-3xl md:text-5xl lg:text-7xl'>Henrik Olsson</h1>
            <Typed className='text-xl font-semibold' strings={['Stories to be told ...']} typeSpeed={40} /> <br />
            <div className='flex gap-4 md:gap-8 pt-16'>
              <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                <a href="#ooyy"><motion.button    className={buttonClass} initial={{ scale: 0, rotate: 30 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, duration: 500}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >OOYY</motion.button></a>
                <a href="#yomoti"><motion.button  className={buttonClass} initial={{ scale: 0, rotate: 30 }} animate={{ rotate: 0, scale: 1 }} transition={{ delay: 0.05, type: "spring", stiffness: 260, damping: 20, duration: 500}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >Yomoti</motion.button></a>
              </div>
              <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                <a href="#luwaks"><motion.button  className={buttonClass} initial={{ scale: 0, rotate: 30 }} animate={{ rotate: 0, scale: 1 }} transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20, duration: 500}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >Luwaks</motion.button></a>
                <a href="#harvio"><motion.button  className={buttonClass} initial={{ scale: 0, rotate: 30 }} animate={{ rotate: 0, scale: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20, duration: 500}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >Harvio</motion.button></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero