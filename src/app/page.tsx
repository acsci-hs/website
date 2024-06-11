import Image from "next/legacy/image";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ApplyBtn from "@/components/homepage/ApplyBtn";
import {
  BrowseLinks,
  ContactInfo,
  Socials,
} from "@/components/homepage/FooterLinks";
import HeroSectionCarousel from "@/components/homepage/HeroSectionCarousel";

function HeroSection() {
  return (
    <div className="w-full relative">
      <HeroSectionCarousel />
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
            <ApplyBtn href="/application/jhs" />
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
            <ApplyBtn href="/application/shs" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Footer() {
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
            <BrowseLinks />
          </div>
        </div>
        <div className="row-span-2 place-content-center lg:pt-[6vh]">
          <div className="font-display tracking-wider font-semibold text-4xl uppercase">
            Contact Us
          </div>
          <div className="mt-2">
            <ContactInfo />
          </div>
        </div>
        <div className="place-content-center place-self-center lg:place-self-start lg:pt-[6vh] lg:pl-[5vw]">
          <div className="font-display tracking-wider font-semibold text-4xl uppercase">
            Social
          </div>
          <div>
            <Socials />
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
