import Image from "next/legacy/image";
import {
  BrowseLinks,
  ContactInfo,
  Socials,
} from "@/components/homepage/FooterLinks";

export default function Footer() {
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
