import { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image, ImageProps } from "@heroui/image";
import DefaultLayout from "@/layouts/default";
import meImage from "../resources/pictures/Me.png";
import meBackgroundImage from "../resources/pictures/neonRain.jpg";

export default function IndexPage() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <DefaultLayout>
        {isPageLoaded && (
          <section className={`flex justify-center w-fit fixed top-[69%] left-1/2 transform -translate-x-1/2`}>
            <div className="h-[3vw] animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300">
              <div className={title() + " text-neutral-300"}>
                My name is{" "}
                <span className={title({ color: "violet" })}>Danny</span>
              </div>
            </div>
          </section>
        )}
      </DefaultLayout>
    </>
  );
}
