import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

import pageKeys from "../../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ArrowDownIcon, GolangIcon } from "@/components/icons";

export default function DocsPage() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 1,
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
          className={`flex flex-col gap-[4vh] justify-center w-fit mx-auto mt-[30vh]`}
        >
          <div
            ref={ref4}
            className={`${title()} text-[#f6f6f6] h-fit ${inView4 && "animate-typewriter"} ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 max-w-fit`}
          >
            {inView4 && "My Dev Toolkit:"}
          </div>
          <GolangIcon className="mx-auto" />
          <div className="mt-[100vh]">test</div>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
