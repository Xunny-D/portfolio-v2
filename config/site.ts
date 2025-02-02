export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Danny Huynh Portfolio",
  description: "The name's Danny and welcome to my portfolio.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/porfolio",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/dxhuynh/",
    github: "https://github.com/Xunny-D",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
