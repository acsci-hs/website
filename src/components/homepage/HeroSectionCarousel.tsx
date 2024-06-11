"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/legacy/image";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSectionCarousel() {
  return (
    <Carousel className="relative z-[1]" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="max-h-[80vh]">
            <div>
              <Image
                className="max-h-svh object-cover"
                src={`/hero/${index + 1}.jpg`}
                alt={`${index + 1}`}
                height={1080}
                width={1920}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute z-[3] inset-0 p-3 pl-16 pt-24">
        <div className="text-7xl text-white font-menu text-shadow-lg uppercase">
          Home of the Champions
        </div>
        <div className="text-4xl text-white font-menu leading-snug text-shadow-lg max-w-3xl">
          Angeles City Science High School envisions in molding students who are
          globally competitive in the field of Science and Technology imbued
          with the necessary skills, values and attitudes to respond to the
          needs of changing society.
        </div>
      </div>
      <div className="absolute inset-0 z-[2] size-full bg-slate-800 opacity-60 mix-blend-multiply"></div>
    </Carousel>
  );
}
