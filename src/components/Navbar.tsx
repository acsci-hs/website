"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center my-4 mx-7">
        <Image
          src="/acsci-logo-full.png"
          width={500}
          height={100}
          alt={"Acsci logo"}
        />
        <div className="hidden lg:flex ml-auto">
          <Button variant="ghost">
            <Link className="text-2xl font-menu" href="/">
              HOME
            </Link>
          </Button>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="text-2xl font-menu" variant="ghost">
                ABOUT <ChevronDown />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex-col justify-items-center">
                <ul className="font-menu w-full">
                  <ListItem href={"/about/history"}>HISTORY</ListItem>
                  <ListItem href={"/about/mission"}>MISSION/VISION</ListItem>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="text-2xl font-menu" variant="ghost">
                ACADEMIC <ChevronDown />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex-col justify-items-center">
                <ul className="font-menu w-full">
                  <ListItem href={"/academic/teachers"}>
                    TEACHERS AND STAFF
                  </ListItem>
                  <ListItem href={"/academic/clubs"}>CLUBS</ListItem>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="text-2xl font-menu" variant="ghost">
                RESEARCH <ChevronDown />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex-col justify-items-center">
                <ul className="font-menu w-full">
                  <ListItem href={"/research/winnings"}>WINNINGS</ListItem>
                  <ListItem href={"/research/format"}>FORMAT</ListItem>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Button variant="ghost">
            <Link className="text-2xl font-menu" href="/contact">
              CONTACT
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, href, children, ...props }, ref): React.JSX.Element => {
  return (
    <li>
      <Link href={String(href)}>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
