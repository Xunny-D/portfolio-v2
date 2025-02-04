import { Fragment } from "react";

import pageKeys from "../../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <Fragment key={pageKeys.aboutPage}>
        <section
          className={`flex flex-col gap-[15vh] justify-center fixed top-[70%] left-1/2 transform -translate-x-1/2 w-fit`}
        >
          <div
            className={
              title() +
              " text-[#f6f6f6] h-fit animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 w-fit"
            }
          >
            ...because life is too short to be a coder who never touches grass
          </div>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
