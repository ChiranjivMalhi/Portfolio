"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { iconsList } from "@tabler/icons-react";




const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-black-400 campton-font">
        A small selection of{" "}
        <span className="text-purple-200">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[32.5rem] flex items-center justify-center sm:w-[22rem] w-[80vw]"
            key={item.id}
          >
            <PinContainer
             href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[13rem] overflow-clip rounded-2xl mb-7">
                
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute rounded-2xl bottom-0  "
                />
              </div>

              <h1 className="font-bold lg:text-2xl text-black-400 pt-font md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light pt-font text-beige-300 text-sm line-clamp-2"
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">


                <div className="flex flex-row justify-center items-center">
                  <p className="text-lg flex text-purple-200 pt-font mt-4">
                    Link
                  </p>
                  <FaLocationArrow className="ms-3 " color="#4C009C" />
                </div>
                <div className="flex flex-row gap-2 justify-end">
                    {item.iconLists.map((i)=>(
                      <div className="">
                        <img src={i} className="h-8"></img>
                      </div>
                    ))}
                </div>
              </div>
            </PinContainer>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;