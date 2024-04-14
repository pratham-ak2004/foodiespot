import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import React from "react";

export const navItems = [
  {
    name: "Home",
    link: "/#top-home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Search",
    link: "/#search",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "category",
    link: "/#category",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
