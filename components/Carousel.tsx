"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-screen h-screen ">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Autodesk Maya",
    title: "",
    src: "/Maya.png",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/unreal_dark.png",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/Blender.png",
    content: "",
  },

  {
    category: "Autodesk Maya",
    title: "",
    src: "/Zbrush_dark.svg",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/Unity.png",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/PT_logo.svg",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/DS_logo.svg",
    content: "",
  },
  {
    category: "Autodesk Maya",
    title: "",
    src: "/AI_logo.svg",
    content: "",
  },
];
