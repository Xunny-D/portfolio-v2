import { Fragment } from "react";

import pageKeys from "../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <Fragment key={pageKeys.portfolioPage}>
        <section
          className={`flex flex-col gap-[15vh] justify-center fixed top-[45%] left-1/2 transform -translate-x-1/2 w-fit`}
        >
          <div
            className={
              title() +
              " text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 w-fit"
            }
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove("border-r-2", "border-slate-300")
            }
          >
            and ready for business...
          </div>
          <div
            className={
              title() +
              " text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap max-w-fit border-r-2 border-slate-300 animate-delay-5s"
            }
          >
            Check out my work below
          </div>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
