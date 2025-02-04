import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { useState } from "react";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { VariantNavBar } from "./variantComponents/variantNavBar";

import { siteConfig } from "@/config/site";
import { LinkedInIcon, GithubIcon } from "@/components/icons";
import ContactModal from "@/components/contact";
import useScrollNavReposition from "@/hooks/useScrollNavReposition";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navBarDesign = useScrollNavReposition(700);

  const iconMenuGap = navBarDesign === "regular" ? "gap-2" : "gap-8";

  return (
    <VariantNavBar design={navBarDesign}>
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
          <NavbarItem
            key="/contact"
            className="border-b-2 border-slate-300 text-default-500 hover:text-default-900 text-2xl"
          >
            <Link
              className={
                clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                ) +
                " text-default-500 hover:text-default-900 text-unset cursor-pointer"
              }
              onPress={() => setIsModalOpen(true)}
            >
              Contact
              <ContactModal
                openModal={isModalOpen}
                onClose={handleCloseModal}
              />
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className={`hidden sm:flex ${iconMenuGap}`}>
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
