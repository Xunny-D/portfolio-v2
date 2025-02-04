import { useState, useEffect } from "react";

const useScrollNavReposition = (maxScroll: number = 300) => {
  const [navVariant, setNavVariant] = useState<"cyberPunk" | "regular">(
    "cyberPunk",
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > maxScroll) {
        setNavVariant("regular");
      } else {
        setNavVariant("cyberPunk");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return navVariant;
};

export default useScrollNavReposition;
