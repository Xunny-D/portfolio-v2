import { Card, CardHeader, CardFooter, Image } from "@heroui/react";

import { title } from "@/components/primitives";
import greenery from "@/public/resources/pictures/greenery.jpg";
import meAndGf from "@/public/resources/pictures/meAndGf.jpg";
import longBoardingPersonal from "@/public/resources/pictures/longboarding.jpg";
import baking from "@/public/resources/pictures/baking.png";
import patteSo from "@/public/resources/pictures/patteSo.jpg";
import catCry from "@/public/resources/pictures/catCry.jpg";
import catHello from "@/public/resources/pictures/catHello.jpg";
import gfCat from "@/public/resources/pictures/gfCat.jpg";

interface MyPersonalLifeProps {
  refPropOne: React.Ref<HTMLDivElement>;
  refPropTwo: React.Ref<HTMLDivElement>;
  inViewPropOne: boolean;
  inViewPropTwo: boolean;
}

export default function MyPersonalLife({
  refPropOne,
  refPropTwo,
  inViewPropOne,
  inViewPropTwo,
}: MyPersonalLifeProps) {
  return (
    <>
      <section className="flex flex-col gap-[6vh] h-fit">
        <div
          ref={refPropOne}
          className={`${title()} ${inViewPropOne && "animate-typewriter"} mx-auto ease-in-out overflow-hidden whitespace-nowrap ${"border-r-2 border-slate-300"} max-w-fit`}
        >
          {inViewPropOne && "Life Outside of Work"}
        </div>
        <div
          ref={refPropTwo}
          className={` ${inViewPropTwo && "animate-transitionFromBottom ease-in-out"}} opacity-0 grid grid-cols-8 grid-rows-2 h-[80vh] gap-[3em]`}
        >
          <>
            {/* Greenery */}
            <Card className="bg-black col-span-2">
              <CardHeader className="bg-white/80 top-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">
                  Software Engineer in the wild
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={greenery.src}
              />
            </Card>
            {/* Creme Brulee */}
            <Card className="bg-black col-span-2">
              <CardHeader className="bg-white/80 top-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">Me serving guests</p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="object-scale-down w-full h-full"
                src={baking.src}
              />
            </Card>
            {/* Pate So */}
            <Card className="bg-black col-span-2">
              <CardHeader className="bg-white/80 top-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">Vietnamese Bánh Patê Sô</p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={patteSo.src}
              />
            </Card>
            {/* Longboard */}
            <Card className="bg-black col-span-2">
              <CardHeader className="bg-white/80 top-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">My skater boy dreams</p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={longBoardingPersonal.src}
              />
            </Card>
            {/* Me and Gf */}
            <Card className="bg-black col-span-2">
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={meAndGf.src}
              />
              <CardFooter className="bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">My bestfriend and gf :)</p>
              </CardFooter>
            </Card>
            {/* Gf and cat */}
            <Card className="bg-black col-span-2">
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={gfCat.src}
              />
              <CardFooter className="bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">
                  My girlfriend and our cat
                </p>
              </CardFooter>
            </Card>
            {/* Cat hello */}
            <Card className="bg-black col-span-2">
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={catHello.src}
              />
              <CardFooter className="bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">Our adorale cat, Newton</p>
              </CardFooter>
            </Card>
            {/* Cat cry */}
            <Card className="bg-black col-span-2">
              <Image
                removeWrapper
                alt="Card background"
                className="object-cover w-full h-full"
                src={catCry.src}
              />
              <CardFooter className="bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-30 absolute flex justify-center">
                <p className="text-black text-sm">
                  Apparently cats can cry from onions
                </p>
              </CardFooter>
            </Card>
          </>
        </div>
      </section>
    </>
  );
}
