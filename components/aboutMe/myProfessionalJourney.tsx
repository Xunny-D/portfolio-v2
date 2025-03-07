import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
} from "@heroui/react";

import { title } from "@/components/primitives";
import UH from "@/public/resources/pictures/UH.png";

interface MyProfessionalJourneyProps {
  refPropOne: React.Ref<HTMLDivElement>;
  inViewPropOne: boolean;
  outerViewRef: boolean;
}

export default function MyProfessionalJourney({
  refPropOne,
  inViewPropOne,
  outerViewRef,
}: MyProfessionalJourneyProps) {
  return (
    <>
      <section className="flex flex-col gap-[15vh] h-fit">
        <div
          ref={refPropOne}
          className={` ${inViewPropOne && "animate-transitionFromBottom ease-in-out"}} opacity-0 flex flex-col h-fit gap-[10vw] justify-center`}
        >
          <div
            className={` ${inViewPropOne && "animate-transitionFromBottom ease-in-out"}} opacity-0 mx-auto sm:ml-[5%] grid sm:grid-cols-5 gap-[20vh] sm:gap-[10vw] xl:gap-[6vw] h-fit`}
          >
            <Card className="bg-black h-full sm:col-span-2 w-fit overflow-visible mx-auto px-[5vw]">
              <CardHeader className="flex flex-col justify-center gap-[10vh]">
                <h1
                  className={`${title()} ${inViewPropOne && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap ${"border-r-2 border-slate-300"} max-w-fit mx-auto`}
                  onAnimationEnd={(e) =>
                    e.currentTarget.classList.remove(
                      "border-r-2",
                      "border-slate-300",
                    )
                  }
                >
                  How it started
                </h1>
                <h2 className="text-xl">University of Houston</h2>
              </CardHeader>
              <Divider className="bg-default-400" />
              <Image
                removeWrapper
                alt="Card background"
                className="object-contain xl:object-cover w-fit h-full my-[3vh] mx-auto"
                src={UH.src}
              />
              <Divider className="bg-default-400" />
              <CardFooter className="flex flex-col justify-center gap-[1vh] overflow-clip">
                <h4>Computer Engineering B.S. (2016-2020)</h4>
                <h4>Cum Laude (somehow)</h4>
              </CardFooter>
            </Card>
            <Card className="bg-black h-full sm:col-span-3 mx-auto px-[5vw] xl:px-0">
              <CardHeader className="flex flex-col justify-center gap-[10vh]">
                <h1
                  className={`${title()} ${inViewPropOne && "animate-typewriter animate-delay-2s"} ease-in-out overflow-hidden whitespace-nowrap ${!outerViewRef && "border-r-2 border-slate-300"} max-w-fit sm:mr-[25%]`}
                >
                  How it&apos;s going
                </h1>
              </CardHeader>
              <CardBody className="text-lg lg:text-xl">
                <ul className="px-[1vw] tracking-wider list-disc list-outside flex flex-col gap-[4vh] lg:gap-[3vh] h-full justify-evenly mt-[10%]">
                  <li>Software Engineering for 4 years and counting</li>
                  <li>
                    Started off in hardware related topics (Digital Electronics,
                    FPGAs, Embedded Systems, etc.), but my curiosity led me to
                    explore pure software applications.
                  </li>
                  <li>
                    My life goal is to always continue my hardware and software
                    skills, create cool things, and help others.
                  </li>
                  <li>
                    Possible ECE/AI master&apos;s degree in the near future.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
