import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import {FaBeer} from "react-icons/fa";
import Image from "next/image";
import Grid from "@/components/Grid";
import DemoReel from "@/components/DemoReel";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { AppleCardsCarouselDemo } from "@/components/Carousel";
import { BoxesCore } from "@/components/ui/background-boxes";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-beige-100 flex justify-center overflow-x-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <About/>
        <div className="hidden lg:block"><Grid/></div>
        <DemoReel/>
        <RecentProjects/>
        <Footer/>
        
      </div>
    </main>
  );
}
