import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { VariantNavBar } from "./variantComponents/variantNavBar";

import { siteConfig } from "@/config/site";
import { LinkedInIcon, GithubIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <VariantNavBar
      className="animate-appearance-in ease-in-out"
      design="cyberPunk"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <div className="hidden lg:flex gap-16 justify-evenly">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="border-b-2 border-slate-300 text-default-500 hover:text-default-900 text-2xl"
            >
              <NextLink
                className={clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden sm:flex gap-8">
          <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
            <LinkedInIcon className="text-default-500 hover:text-default-900 w-[40px] h-[40px]" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 hover:text-default-900 w-[40px] h-[40px]" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </VariantNavBar>
  );
};
