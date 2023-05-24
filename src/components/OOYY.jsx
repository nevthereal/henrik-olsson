import React from 'react'

const OOYY = () => {
  return (
    <div id='ooyy' className='h-screen text-white p-4'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-16 mx-2 md:mx-40 mt-10 md:mt-96'>
        <div className='p-6 bg-[#282828] rounded-2xl'>
          <h1 className='md:pb-4 pb-1'>OOYY</h1>
          <p className='font-mono'>The music released under the name "Ooyy" have a modern and futuristic sound with a touch of ambient feels. Creating an "Ooyy" track is a fun process and when you hear the rhythms and sounds of the productions you know it's an "Ooyy" track.</p>
        </div>
        <iframe title='Kopfkino' src="https://open.spotify.com/embed/album/65cGjzqeCzAtnDdq6DzWIt?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default OOYY