import {
    Navbar
  } from "@heroui/navbar";
  import {extendVariants} from "@heroui/react";

  
  export const VariantNavBar = extendVariants(Navbar, {
  variants: {
    design: {
      cyberPunk:{
        base: [
          "backdrop-filter-none",
          "bg-transparent",
          "w-fit",
          "absolute",
          "top-[84%]",
          "mx-auto",
        ],
      wrapper:[
          "flex",
          "flex-col",
          "gap-10",
          "h-fit",
      ],
      }
    },
    rotated: {
      none: {
        base:[
          "rotate-none"
        ]
      },
      diagonal: {
        base:[
          "rotate-45",
          "absolute",
          "top-[40%]",
          "bottom-[40%]",
          "right-[65%]",
          "left-[30%]",
          "w-fit",
          "backdrop-filter-none",
          "bg-transparent"
        ],
        brand:[
            "rotate-[-46deg]"
        ],
        item:[
          "rotate-[-46deg]",
          "w-full"
        ],
        toggle:[
          "rotate-[-46deg]"
        ]
      }
    },
  
  }});