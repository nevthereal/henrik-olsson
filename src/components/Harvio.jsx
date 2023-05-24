import React from 'react'

const Harvio = () => {
  return (
    <div id='harvio' className='h-screen text-white p-4'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-16 mx-2 md:mx-40 mt-10 md:mt-96'>
            <div className='p-6 bg-[#282828] rounded-2xl'>
              <h1 className='md:pb-4 pb-1'>Yomoti</h1>
              <p className='font-mono'>It's the old but gold deep house music that probably fits every lounge in the world...! Harvio is all about the lounge vibes together with a beautiful sunset on the beach.</p>
            </div>
            <iframe title='sunset valley' src="https://open.spotify.com/embed/album/6KqKDLkERGjrDXqR8ACuOo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
  )
}

export default Harvio