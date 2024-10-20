"use client"

import React, { useState, useEffect } from 'react';
import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Image from "next/image";
import Grid from "@/components/Grid";
import DemoReel from "@/components/DemoReel";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Loading from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="relative bg-beige-100 flex justify-center overflow-x-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className='hidden md:block lg:block'><FloatingNav navItems={navItems} /></div>
        <Hero />
        <About />
        <div className="hidden md:block lg:block"><Grid /></div>
        <DemoReel />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}