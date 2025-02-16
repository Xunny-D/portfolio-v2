import { Navbar } from "@heroui/navbar";
import { extendVariants } from "@heroui/react";

export const VariantNavBar = extendVariants(Navbar, {
  variants: {
    design: {
      cyberPunk: {
        base: [
          "backdrop-filter-none",
          "bg-transparent",
          "w-fit",
          "absolute",
          "top-[48em]",
          "mx-auto",
          "animate-transitionFromBottom",
          "ease-in-out",
        ],
        wrapper: ["flex", "flex-col", "gap-10", "h-fit"],
      },
      regular: {
        base: [
          "w-fit",
          "sticky",
          "mx-auto",
          "animate-appearance-in",
          "ease-in-out",
          "rounded",
        ],
        wrapper: ["flex", "gap-10", "h-fit", "mt-[2vh]"],
      },
    },
    rotated: {
      none: {
        base: ["rotate-none"],
      },
      diagonal: {
        base: [
          "rotate-45",
          "absolute",
          "top-[40%]",
          "bottom-[40%]",
          "right-[65%]",
          "left-[30%]",
          "w-fit",
          "backdrop-filter-none",
          "bg-transparent",
        ],
        brand: ["rotate-[-46deg]"],
        item: ["rotate-[-46deg]", "w-full"],
        toggle: ["rotate-[-46deg]"],
      },
    },
  },
});
