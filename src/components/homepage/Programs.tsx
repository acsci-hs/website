import Image from "next/legacy/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ApplyBtn from "@/components/homepage/ApplyBtn";

export default function Programs() {
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
