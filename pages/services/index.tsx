import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import pageKeys from "../_constants/pageKeys";
import { Fragment } from "react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <Fragment key={pageKeys.servicesPage}>
      <section
          className={`flex flex-col gap-[15vh] justify-center fixed top-[60%] left-1/2 transform -translate-x-1/2 w-fit`}
        >
            <div
            className={
              title() +
              " text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 w-fit"
            }
            >
            Here's a menu of my <span className={title() + " text-[#ef4742]"}>services</span>:
            </div>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
