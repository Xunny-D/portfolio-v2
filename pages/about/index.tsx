import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

import pageKeys from "../../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ArrowDownIcon } from "@/components/icons";
import MyProfessionalJourney from "@/components/aboutMe/myProfessionalJourney";
import MyPersonalLife from "@/components/aboutMe/myPersonalLife";

export default function DocsPage() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <DefaultLayout>
      <Fragment key={pageKeys.aboutPage}>
        <section
          className={`flex flex-col gap-[8vh] items-center w-fit mx-auto mt-[53vh]`}
        >
          <div
            ref={ref1}
            className={`
              ${title({ size: "mdXs" })}
              text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap ${!inView3 && "border-r-2 border-slate-300"} w-fit`}
          >
            {inView1 && "...because life is too short to just code."}
          </div>
          <ArrowDownIcon
            ref={ref2}
            className={`${inView2 ? "animate-appearance-in-bounce-delay2s" : " "} opacity-0 ease-in-out mx-auto w-[6vw] h-[6vh]`}
          />
        </section>
        <section className={`flex justify-center w-full mt-[30vh]`}>
          <MyProfessionalJourney
            inViewPropOne={inView3}
            outerViewRef={inView4}
            refPropOne={ref3}
          />
        </section>
        <section className={`flex justify-center w-full mt-[20vh] mb-[10vh]`}>
          <MyPersonalLife
            inViewPropOne={inView4}
            inViewPropTwo={inView5}
            refPropOne={ref4}
            refPropTwo={ref5}
          />
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
