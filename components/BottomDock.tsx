import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

export function BottomDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/chirag-bang/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/chiragbang",
    },
    {
      title: "Instagram",
      icon: (
         <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/accounts/login/?next=%2Fchirag.bang%2F&source=omni_redirect",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    // <div className="flex  items-center justify-center  w-full">
    //   <FloatingDock
        
    //     items={links}
    //   />
    // </div>
     <div className="flex items-center justify-center w-full">
    <FloatingDock
      mobileClassName="bottom-4 right-4" // Fixes mobile visibility
      items={links}
    />
  </div>
  );
}
