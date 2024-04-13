"use client";

import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Github,
  PanelRightOpen,
  PanelRightClose,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-20 flex justify-center px-6">
        <div className="w-full max-w-7xl font-normal text-xl flex items-center justify-center">
          <Label className="font-normal text-4xl">FoodieSpot</Label>
          <ul className="flex-row gap-x-5 ml-8 w-full hidden md:flex">
            <li>Home</li>
            <li>Category</li>
            <li>Search</li>
            <li>About us</li>
          </ul>
          <div
            className="gap-x-4 md:flex flex-row items-center hidden
            "
          >
            <Button variant="outline" size="icon" className="border-0">
              <Github />
            </Button>
            <SwitchTheme />
          </div>
        </div>
        <Drawer />
      </div>
    </>
  );
}

export function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Drawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme || "light");
  }, [theme]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden absolute right-7 top-7">
        <PanelRightOpen
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>

      <div
        className={`fixed backdrop-blur-3xl h-screen w-[300px] z-50 right-0 transform transition-transform ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <PanelRightClose
          className="absolute right-7 top-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <ul className="flex flex-col gap-y-8 mt-24 text-center">
          <li>Home</li>
          <li>Category</li>
          <li>Search</li>
          <li>About us</li>
        </ul>
        <div className="w-full mt-8 flex justify-center">
          <SwitchTheme />
        </div>
      </div>
    </>
  );
}
