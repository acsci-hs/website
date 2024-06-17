import Image from "next/legacy/image";
import {
  BrowseLinks,
  ContactInfo,
  Socials,
} from "@/components/homepage/FooterLinks";
import AcsciLogo from "@/../public/acsci-logo-bg.png";

export default function Footer() {
  return (
    <div className="relative h-svh md:h-[60vh] min-w-full text-white overflow-hidden">
      <Image
        src={"/acsci-footer.png"}
        layout="fill"
        objectFit="cover"
        alt="Acsci footer"
        className="z-[-1] object-top"
      />
      <div className="absolute inset-0 z-[1] h-full bg-black opacity-50 mix-blend-multiply"></div>
      <div className="container absolute inset-0 z-[2] px-[max(5%,5vw)] py-[max(2%,2vw)] grid md:grid-cols-3 md:grid-rows-4 overflow-auto">
        <div className="md:row-span-2 justify-center items-center space-x-[min(3rem,1vw+0.2rem)] md:space-x-0 flex md:items-start md:flex-col">
          <div className="w-[max(100px,5%)]">
            <Image src={AcsciLogo} alt="acsci-logo" />
          </div>
          <div className="shrink-0 max-w-[calc(80%+0.2rem)]">
            <p className="text-[clamp(0.875rem,0.95rem,1rem)]">
              Formerly known as Angeles City National High School SSC. Angeles
              City Science High School was established in 2006. It is chosen to
              be one of the 110 Science and Technology High Schools in the
              Philippines.
            </p>
          </div>
        </div>
        <div className="md:row-span-2 md:place-content-center md:place-self-center lg:place-self-start">
          <div className="font-display tracking-wider font-semibold text-[clamp(1.125rem,5vw+0.125rem,2.25rem)] uppercase">
            Browse
          </div>
          <div className="mt-2">
            <BrowseLinks />
          </div>
        </div>
        <div className="md:row-span-2 place-content-center">
          <div className="font-display tracking-wider font-semibold text-[clamp(1.125rem,5vw+0.125rem,2.25rem)] uppercase">
            Contact Us
          </div>
          <div className="mt-2">
            <ContactInfo />
          </div>
        </div>
        <div className="md:place-content-center md:place-self-center lg:place-self-start lg:pt-[6vh]">
          <div className="font-display tracking-wider font-semibold text-[clamp(1.125rem,5vw+0.125rem,2.25rem)] uppercase">
            Social
          </div>
          <div>
            <Socials />
          </div>
        </div>
        <div className="md:row-start-3 self-end text-[clamp(0.875rem,0.95rem,1rem)]">
          <div>This website is maintained by: Paul Gerald D. Pare</div>
          <div>Media used from: MACRO Club</div>
        </div>
        <div className="md:row-start-4 md:col-span-3 justify-self-center self-end">
          Copyright © 2024 <span className="text-2xl">·</span> Angeles City
          Science High School <span className="text-2xl">·</span> All Rights
          Reserved
        </div>
      </div>
    </div>
  );
}
