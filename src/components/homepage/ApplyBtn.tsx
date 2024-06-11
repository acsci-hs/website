"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ApplyBtn({ href }: { href: string }) {
  return (
    <Button
      variant="ghost"
      className="bg-accent text-accent-foreground uppercase font-menu font-semibold text-2xl"
      size="xl"
    >
      <Link href={href}>Apply Now!</Link>
    </Button>
  );
}
