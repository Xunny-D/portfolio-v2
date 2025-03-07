import { useState, useEffect, Fragment } from "react";

import pageKeys from "../_constants/pageKeys";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <DefaultLayout>
        {isPageLoaded && (
          <Fragment key={pageKeys.mainPage}>
            <section
              className={`flex justify-center w-fit fixed mt-[62vh] left-1/2 transform -translate-x-1/2`}
            >
              <div className="animate-typewriterSlow ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 h-fit">
                <div className={title() + " text-neutral-300"}>
                  My name is{" "}
                  <span className={title() + " text-[#eb32a4]"}>Danny</span>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </DefaultLayout>
    </>
  );
}
