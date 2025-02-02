import { useState, useEffect, Fragment } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image, ImageProps } from "@heroui/image";
import DefaultLayout from "@/layouts/default";
import pageKeys from "./_constants/pageKeys";

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
              className={`flex justify-center w-fit fixed top-[69%] left-1/2 transform -translate-x-1/2`}
            >
              <div className="animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 h-fit">
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
