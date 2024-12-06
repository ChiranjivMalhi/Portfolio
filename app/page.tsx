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

    const trackPageLoad = async () => {
      try {
        let ipAddress = 'unknown'
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json')
          const ipData = await ipResponse.json()
          ipAddress = ipData.ip
        } catch (ipError) {
          console.error('IP tracking failed:', ipError)
        }

        // Send page load data
        await fetch('/api/tracking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            eventType: 'page_load',
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            ipAddress,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            userAgent: navigator.userAgent,
            referrer: document.referrer
          })
        })
      } catch (error) {
        console.error('Page load tracking error:', error)
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Track page load after loading is complete
      trackPageLoad();
    }, 3000);

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
        <div className="hidden md:block portrait:hidden"><Grid /></div>
        <DemoReel />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}