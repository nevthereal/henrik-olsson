import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Luwaks = () => {
  
  const {ref, inView} = useInView({
    threshold: 0.6,
    triggerOnce: "True"
  })

  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        opacity: 100,
        transition: {
          type: 'spring', duration: 0.7, bounce: 0.2
        }
      })
    };
    if(!inView){
      animation.start({
        x: '100vw',
        opacity: 50
      })
    }
  })

  return (
    <div id='luwaks' className='h-screen text-white p-4' ref={ref}>
      <motion.div animate={animation} className='flex flex-col md:flex-row gap-4 md:gap-16 mx-2 md:mx-40 mt-10 md:mt-96'>
        <div className='p-6 bg-[#282828] rounded-2xl'>
          <h1 className='md:pb-4 pb-1'>Luwaks</h1>
          <p className='font-mono'>The more relaxing and ambient sounds is released under "Luwaks". The creating process of "Luwaks" is a lot of sound design and getting the right feel into the tracks. I want to create this feeling with “luwaks” where you can set your mind free and with your imagination create a meaningful and creative place for the track.</p>
        </div>
        <iframe title="the northern saga" src="https://open.spotify.com/embed/album/6BmunqgCokKgxQhUziKEWJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </motion.div>
    </div>
  )
}

export default Luwaks