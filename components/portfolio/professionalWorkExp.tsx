import { Card, CardFooter, Image } from "@heroui/react";

import { title } from "@/components/primitives";
import avanadePic from "@/public/resources/pictures/Avanade.png";
import tealLogo from "@/public/resources/pictures/tealLogo.png";
import PnnlLogo from "@/public/resources/pictures/PnnlLogo.png";
import aspenLogo from "@/public/resources/pictures/aspenLogo.png";

interface ProfessionalWorkExpProps {
  refPropOne: React.Ref<HTMLDivElement>;
  refPropTwo: React.Ref<HTMLDivElement>;
  outerViewRef: boolean;
  inViewPropOne: boolean;
  inViewPropTwo: boolean;
}

export default function ProfessionalWorkExp({
  refPropOne,
  refPropTwo,
  outerViewRef,
  inViewPropOne,
  inViewPropTwo,
}: ProfessionalWorkExpProps) {
  return (
    <>
      <section className="flex flex-col gap-[1vh] justify-center h-fit w-fit mx-auto">
        <div
          ref={refPropOne}
          className={`${title()} mx-auto  ${inViewPropOne && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap ${!outerViewRef && "border-r-2 border-slate-300"} max-w-fit`}
        >
          {inViewPropOne && "Professional Work Experiences"}
        </div>
        <div
          ref={refPropTwo}
          className={` ${inViewPropTwo && "animate-transitionFromBottom ease-in-out"}} opacity-0 mx-auto grid grid-cols-2 gap-[4vw] w-[30vw] p-[4em]`}
        >
          <>
            <Card
              isPressable
              className="bg-black max-h-fit border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="object-scale-down scale-105 z-0 w-full h-full rounded-none"
                src={avanadePic.src}
              />
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center items-center py-[3vh]">
                <h4 className="font-bold text-medium">
                  Senior Software Analyst
                </h4>
              </CardFooter>
            </Card>
            <Card
              isPressable
              className="bg-black max-h-fit border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="object-scale-down scale-75 bg-black w-full h-full z-0 rounded-none"
                src={tealLogo.src}
              />
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center items-center py-[3vh]">
                <h4 className="font-bold text-medium">
                  Embedded Software Engineer
                </h4>
              </CardFooter>
            </Card>
            <Card
              isPressable
              className="bg-black border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <Image
                removeWrapper
                alt="Card background"
                classNames={{
                  img: "object-scale-down scale-75 bg-black w-full h-full p-x-[4vw] z-0 rounded-none",
                  wrapper: "bg-black",
                }}
                src={aspenLogo.src}
              />
              <CardFooter className=" bg-black pb-[1vh] flex flex-col justify-center items-center py-[3vh]">
                <h4 className="font-bold text-medium">Software Engineer</h4>
              </CardFooter>
            </Card>
            <Card
              isPressable
              className="bg-black max-h-fit border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <Image
                removeWrapper
                alt="Card background"
                className="object-scale-down scale-105 z-0 w-full h-full rounded-none"
                src={PnnlLogo.src}
              />
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center items-center py-[3vh]">
                <h4 className="font-bold text-medium">Software Engineer II</h4>
              </CardFooter>
            </Card>
          </>
        </div>
      </section>
    </>
  );
}
