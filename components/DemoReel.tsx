import React from 'react'



const DemoReel = () => {
  return (
    <div id="demoreel" className='mt-20'>
        <div className='heading text-black-400 campton-font'>
            Demo {' '} <span className='text-purple-200'>Reel</span>
        </div>

    <div className='flex justify-center items-center mt-8 ' >
       <iframe width="1280" height="720" className='mask' src="https://www.youtube.com/embed/2qFjj-ctAaI?si=9jOch_AcBGo9CzS0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
    </div>
    

    </div>
  )
}

export default DemoReel