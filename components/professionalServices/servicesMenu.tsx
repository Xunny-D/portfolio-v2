import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";

import { title } from "@/components/primitives";
import servicesPricing from "@/_constants/servicesPricing";
import servicesDescription from "@/_constants/servicesDescription";

interface ServicesMenuProps {
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
export default function ServicesMenu({
  refPropOne,
  refPropTwo,
  inViewPropOne,
  inViewPropTwo,
}: ServicesMenuProps) {
  return (
    <>
      <section className="flex flex-col gap-[1vh] justify-center h-fit w-fit mx-auto">
        <div
          ref={refPropOne}
          className={`${title()} mx-auto  ${inViewPropOne && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 max-w-fit underline underline-offset-8`}
        >
          {inViewPropOne && "A La Carte Offerings"}
        </div>
        <div
          ref={refPropTwo}
          className={` ${inViewPropTwo && "animate-transitionFromBottom ease-in-out"}} opacity-0 mx-auto grid sm:grid-cols-2 gap-[4vw] w-fit h-fit p-[2em] sm:p-[4em]`}
        >
          <>
            <Card
              isPressable
              className="group bg-black border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <CardHeader className="bg-black flex flex-col justify-center items-center max-h-fit text-xl">
                <h4
                  className={`text-[#FF00A6] group-hover:text-[#ff00a690] transition-transform-colors ease-in-out will-change-transform font-bold text-2xl`}
                >
                  Landing Page Development
                </h4>
              </CardHeader>
              <Divider className="bg-default-200" />
              <CardBody className="bg-black w-fit sm:text-lg px-[2em] sm:px-[4vw] xl:px-[2vw] h-full overflow-visible">
                {servicesDescription.landingPageDescription}
              </CardBody>
              <Divider className="bg-default-200" />
              <CardFooter className="bg-black pb-[1vh] flex flex-col-end justify-evenly h-full text-xl">
                {servicesPricing.landingPagePricing}
              </CardFooter>
            </Card>
            <Card
              isPressable
              className="group bg-black border-small border-default-200 hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform"
            >
              <CardHeader className="bg-black flex flex-col justify-center items-center max-h-fit text-xl">
                <h4
                  className={`text-[#FF00A6] group-hover:text-[#ff00a690] transition-transform-colors ease-in-out will-change-transform font-bold text-2xl`}
                >
                  Custom Software & Hardware Solutions
                </h4>
              </CardHeader>
              <Divider className="bg-default-200" />
              <CardBody className="bg-black h-full overflow-visible w-fit sm:text-lg px-[2em] sm:px-[4vw] xl:px-[2vw]">
                {servicesDescription.customSoftwareHardwareDescription}
              </CardBody>
              <Divider className="bg-default-200" />
              <CardFooter className="bg-black pb-[1vh] flex flex-col justify-center h-full text-xl">
                {servicesPricing.customSoftwareHardwarePricing}
              </CardFooter>
            </Card>
          </>
        </div>
      </section>
    </>
  );
}
