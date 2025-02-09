import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { Spacer, Button, Link } from "@heroui/react";

import pageKeys from "../../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ArrowDownIcon } from "@/components/icons";
import DevKitIcons from "@/components/portfolio/devKitIcons";
import ProfessionalWorkExp from "@/components/portfolio/professionalWorkExp";
import PersonalProjectsExp from "@/components/portfolio/personalProjectsExp";

export default function DocsPage() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "0px 0px 0px 0px",
  });

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  const { ref: ref7, inView: inView7 } = useInView({
    threshold: 0.19,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: ref8, inView: inView8 } = useInView({
    threshold: 0.19,
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  const { ref: ref9, inView: inView9 } = useInView({
    threshold: 0.19,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: ref10, inView: inView10 } = useInView({
    threshold: 0.19,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <DefaultLayout>
      <Fragment key={pageKeys.portfolioPage}>
        <section
          className={`flex flex-col gap-[8vh] justify-center w-fit mx-auto mt-[39vh]`}
        >
          <div
            ref={ref1}
            className={`${title()} text-[#f6f6f6] h-fit ${inView1 && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 w-fit`}
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove("border-r-2", "border-slate-300")
            }
          >
            {inView1 && "...and ready for business"}
          </div>
          <div
            ref={ref2}
            className={`${title()} text-[#f6f6f6] h-fit ${inView2 && "animate-typewriter"} animate-delay-2half ease-in-out overflow-hidden whitespace-nowrap ${!inView4 && "border-r-2 border-slate-300"} max-w-fit`}
          >
            {inView2 && "Check out my work below"}
          </div>
          <ArrowDownIcon
            ref={ref3}
            className={`${inView3 ? "animate-appearance-in-bounce" : " "} opacity-0 ease-in-out mx-auto w-[6vw] h-[6vh]`}
          />
        </section>
        <section
          ref={ref4}
          className={`flex flex-col gap-[4vh] justify-center h-fit w-fit mx-auto my-[30vh]`}
        >
          <DevKitIcons
            inViewProp={inView5}
            outerViewRef={inView6}
            refProp={ref5}
          />
          <Spacer y={2} />
          <ProfessionalWorkExp
            inViewPropOne={inView6}
            inViewPropTwo={inView7}
            outerViewRef={inView8}
            refPropOne={ref6}
            refPropTwo={ref7}
          />
          <Spacer y={2} />
          <PersonalProjectsExp
            inViewPropOne={inView8}
            inViewPropTwo={inView9}
            refPropOne={ref8}
            refPropTwo={ref9}
          />

          <Spacer y={2} />
          <Button
            ref={ref10}
            as={Link}
            className={`bg-black border-default-400 border-medium text-2xl h-fit w-fit mx-auto py-[1vh] opacity-0 ${inView10 && "animate-transitionFromBottom ease-in-out"}
              hover:shadow-lg hover:shadow-default-500 hover:transition-shadow transition-all ease-in-out will-change-transform`}
            download="Huynh_Resume_2025.pdf"
            href="/resources/files/Huynh_Resume_2025.pdf"
          >
            Download my resume here :)
          </Button>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
