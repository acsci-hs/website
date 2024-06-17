"use client";

import Link from "next/link";
import { Links, FooterInfo, FooterSocials } from "@/lib/utils";
import { MapPin, Mail, Phone } from "lucide-react";
import { SiFacebook } from "@icons-pack/react-simple-icons";

export function BrowseLinks() {
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

  return (
    <ul>
      {footerLinks.map((link, index) => (
        <li
          key={index}
          className="uppercase hover:text-accent duration-150 font-medium text-[clamp(1rem,2vw+0.125rem,1.125rem)]"
        >
          <Link href={link.url}>{link.display}</Link>
        </li>
      ))}
    </ul>
  );
}

export function ContactInfo() {
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
  return (
    <ul>
      {footerInfo.map((info, index) => (
        <li
          key={index}
          className="flex gap-x-2 my-2 text-[clamp(1rem,2vw+0.125rem,1.125rem)]"
        >
          <info.icon className="shrink-0" />{" "}
          <p className="text-[clamp(0.875rem,0.95rem,1rem)]">
            {info.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function Socials() {
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
    <ul className="flex gap-x-2 mt-2">
      {footerSocials.map((social, index) => (
        <li key={index}>
          <Link href={social.url}>
            <social.icon className="size-8 hover:text-accent duration-150" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
