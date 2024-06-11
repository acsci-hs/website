import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { IconType } from "@icons-pack/react-simple-icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Links = {
  url: string;
  display: string;
};

export type FooterInfo = {
  icon: React.ComponentType;
  description: string;
};

export type FooterSocials = {
  icon: IconType;
  url: string;
};
