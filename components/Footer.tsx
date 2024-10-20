import React from 'react'
import { socialMedia } from "@/data";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 h-fit relative" id="contact">
    <div className="w-full absolute left-0 -bottom-0  min-h-50">
      <Image
        src="/footer-grid.svg"
        alt="grid"
        width={10}
        height={10}
        className="w-full h-[80vh] opacity-100 "
      />
    </div>

    <div className="flex flex-col items-center campton-font">
      <h1 className="heading lg:max-w-[45vw] text-black-400">
        Feel free to <span className="text-purple-200">connect </span> 
        with me
      </h1>
    </div>

    <div className="flex justify-center items-center pt-5 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-85 bg-black-400 rounded-lg border border-black-300"
          >
            <a href={info.link} target="_blank" rel="noopener noreferrer">
            <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          </div>
        ))}
      </div>

    <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
      <p className="md:text-base text-sm pt-font">
        Made with ♡
      </p>
    </div>
  </footer>
  )
}

export default Footer