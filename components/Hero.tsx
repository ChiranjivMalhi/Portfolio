import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerator'
import Button from './ui/Botton'
import { BoxesCore } from './ui/background-boxes'

const Hero = () => {
  return (

    
    <div className='pb-20 pt-36'>
       
            <div className=' items-center justify-center hidden md:flex ipad:hidden'>
                <BoxesCore />
            </div>

            <div className="absolute pointer-events-none hidden md:flex inset-0 h-1/4  items-center justify-center bg-amber-50 [mask-image:radial-gradient(ellipse_at_bottom,transparent_60%,white)]" />
            

        <div className='flex justify-center relative my-20 z-10'>
            
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest font-semibold text-center text-xs text-black-400 max-w-80 pt-font'>
                    Hello There People.
                </h2>

                <div>
                    <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl campton-font'
                    words="I&apos;m Chiranjiv Singh Malhi"/>

                    <p className='text-center mb-4 text-2xl text-black-400 pt-font'>
                        A 3D designer based in India.
                    </p>
                    
                </div>
                 <a href='#demoreel'><Button title='Demo Reel' position='left'/></a>

            </div>
        </div>

       
    </div>
  )
}

export default Hero