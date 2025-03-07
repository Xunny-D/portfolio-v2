import { useState, useEffect } from "react";

const useScrollNavReposition = (maxScroll: number = 300) => {
  const [navVariant, setNavVariant] = useState<
    "cyberPunk" | "regular" | "mobile"
  >("cyberPunk");

  useEffect(() => {
    const initialWindowWidth = window.innerWidth;

    if (initialWindowWidth < 640) {
      setNavVariant("mobile");
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

      if (windowWidth >= 640) {
        if (scrollY > maxScroll) {
          setNavVariant("regular");
        } else {
          setNavVariant("cyberPunk");
        }
      } else {
        setNavVariant("mobile");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return navVariant;
};

export default useScrollNavReposition;
