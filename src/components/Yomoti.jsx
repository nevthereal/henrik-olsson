import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Yomoti = () => {
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
        x: '-100vw',
        opacity: 50
      })
    }
  })
  
  return (
        <div id='yomoti' className='h-screen text-white p-4' ref={ref}>
          <motion.div animate={animation} className='flex flex-col md:flex-row-reverse gap-4 md:gap-16 mx-2 md:mx-40 mt-10 md:mt-96'>
            <div className='p-6 bg-[#282828] rounded-2xl'>
              <h1 className='md:pb-4 pb-1'>Yomoti</h1>
              <p className='font-mono'>The magic of Lush Lo-Fi beats with this jazz/soul touches. I must say it's pretty relaxing to listen to when you're in the mood for it. Music released under "Yomoti" is both fun and uplifting, the crushed beats and jazzy chords combined with fun melodies will totally get you set for a great mood.</p>
            </div>
            <iframe title="Java" src="https://open.spotify.com/embed/album/1DM1aejg5wh3RXLMZaSFk5?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </motion.div>
        </div>
  )
}

export default Yomoti