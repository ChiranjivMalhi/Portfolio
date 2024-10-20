"use client";
import React, {
  useEffect,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";


interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};


export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);


  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };


  return (
      <div className="relative w-[87.5rem]">
        <div
          className="flex w-auto overflow-x-scroll overscroll-x-auto  scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "flex flex-row gap-4 ",
            )}
          >
            {items.map((item, index) => (
              <div
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-end gap-2 ml-32 mt-5">
          <button
            className="relative z-40 h-7 w-10 rounded-full bg-beige-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6" />
          </button>
          <button
            className="relative z-40 h-7 w-10 rounded-full bg-beige-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6" />
          </button>
        </div>

      </div>

  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {

  return (
    <>
      
      <button
        className="rounded-3xl bg-beige-100 dark:bg-neutral-900 h-52 w-52 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <Image
          src={card.src}
          alt={card.title}
          width={200}
          height={200}
          className="object-cover w-screen p-3 absolute z-10 inset-0 "
        />
      </button>
    </>
  );
};

