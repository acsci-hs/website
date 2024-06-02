import type { Metadata } from "next";
import { Livvic as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const openSansCondensed = localFont({
  src: [
    {
      path: "../../public/fonts/OpenSansCondensed-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-menu",
});

export const metadata: Metadata = {
  title: "Angeles City Science High School",
  description: "Formerly known as Angeles City National High School - SSC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          openSansCondensed.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
