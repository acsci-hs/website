"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-full relative">
      <Carousel
        className="relative z-[1]"
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="max-h-[80vh]">
              <div>
                <Image
                  className="max-h-svh"
                  src={`/hero/${index + 1}.jpg`}
                  alt={`${index + 1}`}
                  height={1080}
                  width={1920}
                  style={{ objectFit: "cover" }}
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
            Angeles City Science High School envisions in molding students who
            are globally competitive in the field of Science and Technology
            imbued with the necessary skills, values and attitudes to respond to
            the needs of changing society.
          </div>
        </div>
        <div className="absolute inset-0 z-[2] size-full bg-slate-800 opacity-60 mix-blend-multiply"></div>
      </Carousel>
    </div>
  );
}

function Programs() {
  return (
    <div className="container min-h-screen min-w-full bg-secondary-background flex flex-col items-center justify-center">
      <div className="font-display text-5xl font-bold uppercase flex justify-center py-5">
        Programs
      </div>
      <div className="flex flex-col space-y-20 justify-center md:flex-row md:space-x-5 md:space-x-10 lg:space-x-20 md:space-y-0">
        <Card className="w-[25rem] shadow-lg">
          <Image
            className="object-cover rounded-t-lg"
            src="/jhs-program.png"
            width={573}
            height={353}
            alt={"JHS"}
          />
          <CardContent className="flex flex-col min-w-max items-center">
            <CardTitle className="block mt-2 uppercase font-display font-medium text-4xl">
              Junior High School
            </CardTitle>
            <CardDescription className="block my-2 text-center text-foreground text-lg max-w-xs">
              Our junior high school curriculum is carefully crafted to provide
              students with a well-rounded education with additional elective
              classes for science.
            </CardDescription>
            <Button
              variant="ghost"
              className="bg-accent text-accent-foreground uppercase font-menu font-semibold text-2xl"
              size="xl"
            >
              <Link href="/application/jhs">Apply Now!</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[25rem] shadow-lg">
          <Image
            className="object-cover rounded-t-lg"
            src="/shs-program.png"
            width={573}
            height={353}
            alt={"SHS"}
          />
          <CardContent className="flex flex-col min-w-full items-center">
            <CardTitle className="block mt-2 uppercase font-display font-medium text-4xl">
              Senior High School
            </CardTitle>
            <CardDescription className="block my-2 text-center text-foreground text-lg max-w-xs">
              Our senior high school offers a cutting-edge STEM curriculum that
              integrates rigorous academic coursework with hands-on learning
              experiences.
            </CardDescription>
            <Button
              variant="ghost"
              className="bg-accent text-accent-foreground uppercase font-menu font-semibold text-2xl"
              size="xl"
            >
              <Link href="/application/shs">Apply Now!</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Programs />
    </>
  );
}
