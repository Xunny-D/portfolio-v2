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
          setPageBackground("bg-hello bg-bottom bg-cover h-screen");
          break;
        case pageKeys.portfolioPage:
          setPageBackground(
            "bg-open bg-[left_50%_top_5vh] bg-no-repeat bg-cover bg-zoom-out-2x h-fit",
          );
          break;
        case pageKeys.servicesPage:
          setPageBackground(
            "bg-forHire bg-[#090a0c] bg-[center_-60px] bg-no-repeat bg-cover bg-zoom-out h-fit",
          );
          break;
        case pageKeys.aboutPage:
          setPageBackground(
            "bg-enjoyToday bg-[center_bottom_103%] bg-zoom-out bg-no-repeat bg-cover h-fit",
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
