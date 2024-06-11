"use client";

import Image from "next/legacy/image";
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
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Links, FooterInfo, FooterSocials } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook } from "@icons-pack/react-simple-icons";

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

function Footer() {
  const footerLinks: Links[] = [
    {
      url: "application/jhs",
      display: "Application (JHS)",
    },
    {
      url: "application/shs",
      display: "Application (SHS)",
    },
    {
      url: "announcements",
      display: "Announcements",
    },
    {
      url: "events",
      display: "Events",
    },
    {
      url: "research",
      display: "Research",
    },
  ];

  const footerInfo: FooterInfo[] = [
    {
      icon: MapPin,
      description: "Doña Aurora Street, Lourdes Sur East, Angeles City",
    },
    {
      icon: Phone,
      description: "JHS: (0968) 520 7777",
    },
    {
      icon: Phone,
      description: "SHS: (0968) 520 7777",
    },
    {
      icon: Mail,
      description: "acscience.seniorhs@depedangelescity.com",
    },
    {
      icon: Mail,
      description: "acscience.hs@depedangelescity.com",
    },
  ];

  const footerSocials: FooterSocials[] = [
    {
      icon: SiFacebook,
      url: "https://www.facebook.com/ACSciHS307202",
    },
    {
      icon: SiFacebook,
      url: "https://www.facebook.com/profile.php?id=61558627855847",
    },
  ];

  return (
    <div className="relative min-h-[60svh] min-w-full text-white">
      <Image
        src={"/acsci-footer.png"}
        layout="fill"
        objectFit="cover"
        alt="Acsci footer"
        className="z-[-1] object-top"
      />
      <div className="absolute inset-0 z-[1] h-full bg-black opacity-50 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-[2] grid grid-cols-3 grid-rows-4">
        <div className="row-span-2 flex flex-col pl-[5vw] pt-[3vw]">
          <div className="max-w-[6vw]">
            <Image
              src="/acsci-logo-bg.png"
              layout="intrinsic"
              width={486}
              height={486}
              alt="acsci-logo"
            />
          </div>
          <div className="max-w-sm">
            Formerly known as Angeles City National High School SSC. Angeles
            City Science High School was established in 2006. It is chosen to be
            one of the 110 Science and Technology High Schools in the
            Philippines.
          </div>
        </div>
        <div className="row-span-2 place-content-center place-self-center self-end lg:place-self-start lg:pt-[6vh] lg:pl-[5vw]">
          <div className="font-display tracking-wider font-semibold text-4xl uppercase">
            Browse
          </div>
          <div className="mt-2">
            <ul>
              {footerLinks.map((link, index) => (
                <li
                  key={index}
                  className="uppercase hover:text-accent duration-150 font-medium text-lg"
                >
                  <Link href={link.url}>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row-span-2 place-content-center lg:pt-[6vh]">
          <div className="font-display tracking-wider font-semibold text-4xl uppercase">
            Contact Us
          </div>
          <div className="mt-2">
            <ul>
              {footerInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex gap-x-2 my-2 font-medium text-lg"
                >
                  <info.icon /> <p>{info.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="place-content-center place-self-center lg:place-self-start lg:pt-[6vh] lg:pl-[5vw]">
          <div className="font-display tracking-wider font-semibold text-4xl uppercase">
            Social
          </div>
          <div>
            <ul className="flex gap-x-2 mt-2">
              {footerSocials.map((social, index) => (
                <li key={index}>
                  <Link href={social.url}>
                    <social.icon className="size-8 hover:text-accent duration-150" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row-start-3 self-end pl-[5vw] ">
          <div>This website is maintained by: Paul Gerald D. Pare</div>
          <div>Media used from: MACRO Club</div>
        </div>
        <div className="row-start-4 col-span-3 justify-self-center self-end pb-4">
          Copyright © 2024 <span className="text-2xl">·</span> Angeles City
          Science High School <span className="text-2xl">·</span> All Rights
          Reserved
        </div>
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
      <Footer />
    </>
  );
}
