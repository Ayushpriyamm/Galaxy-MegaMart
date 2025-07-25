export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "My Profile",
      href: "/profile/personal",
    },
    {
      label: "My orders",
      href: "/profile/orders",
    },
    {
      label: "Saved Payments",
      href: "/profile/payment",
    },
    {
      label: "Change Password",
      href: "/profile/password",
    },
    
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    login: "/login",
  },
};
