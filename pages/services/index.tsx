import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

import pageKeys from "../../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ArrowDownIcon } from "@/components/icons";
import ServicesMenu from "@/components/professionalServices/servicesMenu";

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
    threshold: 1,
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <DefaultLayout>
      <Fragment key={pageKeys.servicesPage}>
        <section
          className={`flex flex-col gap-[8vh] items-center w-fit mx-auto mt-[50vh]`}
        >
          <div
            ref={ref1}
            className={`
              ${title({ size: "mdSmaller" })}
               text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap ${!inView3 && "border-r-2 border-slate-300"} w-fit`}
          >
            {inView1 && (
              <>
                Here&apos;s a menu of my{" "}
                <span
                  className={title({ size: "mdSmaller" }) + " text-[#ef4742]"}
                >
                  services
                </span>
              </>
            )}
          </div>
          <ArrowDownIcon
            ref={ref2}
            className={`${inView2 ? "animate-appearance-in-bounce-delay2s" : " "} opacity-0 ease-in-out mx-auto w-[6vw] h-[6vh]`}
          />
        </section>
        <section
          className={`flex flex-col gap-[8vh] items-center w-fit mx-auto mt-[5vh] sm:mt-[30vh]`}
        >
          <ServicesMenu
            inViewPropOne={inView3}
            inViewPropTwo={inView4}
            refPropOne={ref3}
            refPropTwo={ref4}
          />
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
