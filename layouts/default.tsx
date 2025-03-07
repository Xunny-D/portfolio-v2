import { useState, useEffect, ReactNode, isValidElement } from "react";

import { Head } from "./head";

import backgroundImageHome from "@/public/resources/pictures/hello.jpg";
import { Navbar } from "@/components/navigationBar/navbar";
import pageKeys from "@/_constants/pageKeys";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [pageBackground, setPageBackground] = useState("");

  const totalImages = 1;
  let imagesLoaded = 0;
  const handleImageLoad = () => {
    imagesLoaded += 1;
    if (imagesLoaded === totalImages) {
      setIsBgLoaded(true);
    }
  };

  useEffect(() => {
    const imgOne = new Image();

    imgOne.src = backgroundImageHome.src;
    imgOne.onload = handleImageLoad;

    if (isValidElement(children)) {
      switch (children.key) {
        case pageKeys.mainPage:
          setPageBackground(
            "bg-hello sm:bg-cover sm:bg-[center_bottom_100px] md:bg-[center_bottom_120px] lg:bg-[center_bottom_80px] xl:bg-bottom bg-scale-out bg-contain bg-center h-screen bg-no-repeat",
          );
          break;
        case pageKeys.portfolioPage:
          setPageBackground(
            "bg-open bg-contain bg-zoom-out bg-[left_50%_top_20vh] sm:bg-auto bg-no-repeat h-fit",
          );
          break;
        case pageKeys.servicesPage:
          setPageBackground(
            "bg-forHire bg-[#090a0c] bg-[center_25vh] sm:bg-[center_20vh] lg:bg-[center_10vh] xl:bg-[center_5vh] 2xl:bg-[center_1vh] bg-no-repeat bg-contain sm:bg-scale-in h-fit",
          );
          break;
        case pageKeys.aboutPage:
          setPageBackground(
            "bg-enjoyToday bg-[center_bottom_98%] sm:bg-[center_bottom_94%] md:bg-[center_bottom_97%] lg:bg-[center_bottom_97%] xl:bg-[center_bottom_99%] 2xl:bg-[center_bottom_103%] sm:bg-scale-in bg-no-repeat bg-contain sm:bg-cover h-fit",
          );
          break;
        default:
          setPageBackground("");
          break;
      }
    }
  }, [children]);

  return (
    isBgLoaded && (
      <div>
        <div
          className={`relative flex flex-col animate-appearance-in ease-in-out font-fixedsys ${pageBackground}`}
        >
          <Head />
          <Navbar />
          <main className="container mx-auto max-w-9xl flex-grow pt-16 h-fit">
            {children}
          </main>
        </div>
      </div>
    )
  );
}
