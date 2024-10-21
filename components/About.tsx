import React, { lazy } from 'react'
import Button from './ui/Botton'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="flex md:flex-row flex-col-reverse justify-between items-center container mt-10 mx-auto px-0">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-center mt-10 md:mt-0 md:items-start md:pr-[60px] w-2/3 pt-font">
        <h2 className="campton-font">
          About <span className="text-purple-200">Me</span>
        </h2>
        <p>
          Hi! I&apos;m a final-year student at <span className='text-black-400 pt-font-bold'>Thapar Institute of Engineering and Technology</span>, pursuing computer science engineering. My interests span across 3D design, frontend design, and game design & development.
        </p>
        <p>
          I&apos;m passionate about creating visually compelling environments, characters, and game assets, continuously exploring new techniques and tools to bring my artistic visions to life.
        </p>
        <p>
          I work extensively with <span className="pt-font-bold text-black-400">Maya</span>, <span className="pt-font-bold text-black-400">Unreal Engine</span>, <span className="pt-font-bold text-black-400">Substance Painter</span>, <span className="pt-font-bold text-black-400">Substance Designer</span>, and <span className="pt-font-bold text-black-400">ZBrush</span>, ensuring the highest quality in my creations.
        </p>
        <p>
      I have consistently been among the top performers at my college and have received scholarships throughout all four years. I was also a runner-up in <span className="pt-font-bold text-black-400">Google Code-in 2019</span>, a milestone in my development and design journey.
        </p>
        <p>
          Feel free to download my resume to learn more about my projects, and let&apos;s connect for potential collaborations!
        </p>
      </div>




      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end">

        <div className='flex flex-col w-fit items-center'>
          <Image src="/me.jpg" alt="About me" width={300} height={300} className='rounded-full' loading='lazy' />
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