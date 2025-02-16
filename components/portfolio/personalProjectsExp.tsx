import { Card, CardBody, CardFooter } from "@heroui/react";

import { title } from "@/components/primitives";

interface PersonalProjectsExpProps {
  refPropOne: React.Ref<HTMLDivElement>;
  refPropTwo: React.Ref<HTMLDivElement>;
  inViewPropOne: boolean;
  inViewPropTwo: boolean;
}

/**
 * A component that displays a title and a list of cards with images and
 * descriptions when they come into view.
 * @param {object} props - The props object.
 * @param {React.Ref<HTMLDivElement>} props.refPropOne - A ref to the title element.
 * @param {React.Ref<HTMLDivElement>} props.refPropTwo - A ref to the list of cards element.
 * @param {boolean} props.inViewPropOne - Whether the title is in view.
 * @param {boolean} props.inViewPropTwo - Whether the list of cards is in view.
 * @returns {JSX.Element} A JSX element.
 */
export default function PersonalProjectsExp({
  refPropOne,
  refPropTwo,
  inViewPropOne,
  inViewPropTwo,
}: PersonalProjectsExpProps) {
  return (
    <>
      <section className="flex flex-col gap-[1vh] justify-center h-fit w-fit mx-auto">
        <div
          ref={refPropOne}
          className={`${title()} mx-auto  ${inViewPropOne && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 max-w-fit`}
        >
          {inViewPropOne && "Personal Projects"}
        </div>
        <div
          ref={refPropTwo}
          className={` ${inViewPropTwo && "animate-transitionFromBottom ease-in-out"}} opacity-0 mx-auto grid grid-cols-1 gap-[4vw] w-[35vw] p-[4em]`}
        >
          <>
            <Card className="border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform">
              <CardBody className="bg-black w-fit h-fit">
                <video autoPlay loop muted className="scale-105">
                  <source
                    src="/resources/videos/PortfolioV1_Demo.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardBody>
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center items-center">
                <h4 className="font-bold text-large">Portfolio Website V1</h4>
              </CardFooter>
            </Card>
            <Card className="bg-black max-h-fit border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform">
              <CardBody className="bg-black">
                <video autoPlay loop muted className="h-[75vh]">
                  <source
                    className="bg-black "
                    src="/resources/videos/LongboardDemo.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardBody>
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center items-center">
                <h4 className="font-bold text-large">Electric Longboard</h4>
              </CardFooter>
            </Card>
          </>
        </div>
      </section>
    </>
  );
}
