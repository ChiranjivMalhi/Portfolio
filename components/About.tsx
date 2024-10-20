import React from 'react'
import Button from './ui/Botton'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="flex md:flex-row flex-col-reverse justify-between items-center container mx-auto px-0">

      {/* LEFT SIDE */}
      <div className="flex flex-col md:pr-[60px] w-2/3 pt-font">
        <h2 className="font-semibold campton-font">
          About <span className="text-purple-200">Me</span>
        </h2>
        <p>
          Hi! I&apos;m a final-year student at Thapar Institute of Engineering and Technology, pursuing computer science engineering. My interests span across 3D design, game development, and technology innovation.
        </p>
        <p>
          I’m passionate about creating visually compelling environments, characters, and game assets, continuously exploring new techniques and tools to bring my artistic visions to life.
        </p>
        <p>
          My work ranges from highly detailed cinematic scenes to game-ready assets, utilizing software such as Maya, Unreal Engine, Substance Painter, Designer, and ZBrush. I focus on delivering high-quality art that tells stories in unique ways.
        </p>
        <p>
          I was also a runner-up in Google Code-in 2019, which sparked my journey into development and design.
        </p>
        <p>
          Feel free to download my resume to learn more about my projects, and let&apos;s connect for potential collaborations!
        </p>
      </div>


      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end">

        <div className='flex flex-col w-fit items-center'>
          <Image src="/me.jpg" alt="About me" width={300} height={300} className='rounded-full' />
          <div className="mt-4">
            <a href='/files/Chiranjiv_Resume.pdf' target='_blank'><Button title="Resume" position="left" /></a>
          </div>
        </div>
      </div>


    </div>
  </section>
  )
}

export default About