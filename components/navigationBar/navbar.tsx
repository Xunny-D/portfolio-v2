import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/navbar";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navBarDesign = useScrollNavReposition(700);

  const iconMenuGap = navBarDesign === "regular" ? "gap-2" : "gap-8";

  return (
    <VariantNavBar design={navBarDesign} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden pb-[40px]"
        />

        <div className="hidden sm:flex sm:gap-[6vw] md:gap-16 justify-evenly">
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

      <NavbarMenu className="mt-[2vh]">
        {siteConfig.navMenuItems.map((item) => (
          <NavbarMenuItem
            key={item.href}
            className="border-b-2 border-slate-300 text-default-500 hover:text-default-900 text-2xl font-fixedsys"
          >
            <NextLink
              className={clsx(
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem
          key="/contact"
          className="border-b-2 border-slate-300 text-default-500 hover:text-default-900 text-2xl font-fixedsys"
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
            <ContactModal openModal={isModalOpen} onClose={handleCloseModal} />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </VariantNavBar>
  );
};
