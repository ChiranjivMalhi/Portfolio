"use client";

import { cn } from "@/lib/utils";
import { AppleCardsCarouselDemo } from "../Carousel";
import Button from "./Botton";
import { useState } from "react";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;

}) => {

  return (
    <div
      className={cn(
        "row-span-1  relative rounded-2xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{background:'rgb (4,7,29)' , backgroundColor:'gradient...'}}
    >
        {id === 1 && (
            <div className="flex gap-1  lg:gap-5 w-fit absolute  lg:right-5">

              <div className="flex flex-col gap-1 lg:gap-2">
                {['C/C++','Python','SQL'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-8 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-beige-100 text-black-400 pt-font"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 opacity-60  rounded-lg text-center bg-beige-300"></span>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <span className="lg:py-4 lg:px-3 py-4 px-3 opacity-60 rounded-lg text-center bg-beige-300 "></span>
                {['HTML/CSS','C#','MATLAB'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-8 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-beige-100 pt-font"
                  >
                    {item}
                  </span>
                ))}
                
              </div>
            </div>
          )}

        {id === 2 && (
            <div className="absolute ">
              <div className="relative w-auto ">
                  <AppleCardsCarouselDemo/>
              </div>
            </div>
          )}

        

      <div className="group-hover/bento:translate-x-2 transition duration-200">
    
        <div className="font-sans  font-bold text-neutral-600 dark:text-neutral-200">
          {id==id && (<div className={titleClassName}>{title}</div>)}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
