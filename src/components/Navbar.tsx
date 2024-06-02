"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import React from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center my-4 mx-7">
        <Image
          src="/acsci-logo.png"
          width={150}
          height={150}
          alt={"Acsci logo"}
        />
        <Image src="/acsci-name.png" width={350} height={350} alt={"Acsci"} />
        <Button variant="ghost">
          <Link className="text-2xl font-menu" href="/">
            HOME
          </Link>
        </Button>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className="text-2xl font-menu" variant="ghost">
              ABOUT
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex-col py-3 border border-slate-300 shadow-xl justify-items-center mt-1 rounded-md">
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
              ACADEMIC
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex-col py-3 border border-slate-300 shadow-xl justify-items-center mt-1 rounded-md">
              <ul className="font-menu w-full">
                <ListItem href={"/academic/teachers"}>
                  TEACHERS AND STAFF
                </ListItem>
                <ListItem href={"/academic/clubs"}>CLUBS</ListItem>
              </ul>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button variant="ghost">
          <Link className="text-2xl font-menu" href="/contact">
            CONTACT
          </Link>
        </Button>
      </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, href, children, ...props }, ref) => {
  return (
    <li>
      <Link href={href}>
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
