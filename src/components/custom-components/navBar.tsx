"use client";

import { useTheme } from "next-themes";
import React from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FloatingNav } from "@/components/floating-navbar";
import { navItems } from "@/lib/data";

export default function NavBar() {
  return (
    <>
      <SessionProvider>
        <FloatingNav navItems={navItems} />
        <a id="top-home"></a>
        <div className="w-full h-20 flex justify-center px-6">
          <div className="w-full max-w-7xl font-normal text-xl flex items-center justify-center">
            <Label className="font-normal text-4xl">FoodieSpot</Label>
            <ul className="flex-row gap-x-5 ml-8 w-full hidden md:flex">
              {navItems.map((item, index) => (
                <>
                  <Link href={item.link}>{item.name}</Link>
                </>
              ))}
            </ul>
            <div
              className="gap-x-4 md:flex flex-row items-center hidden
            "
            >
              <Button variant="outline" size="icon" className="border-0">
                <Github />
              </Button>
              <SwitchTheme />
              <UserAvatar />
            </div>
          </div>
          <Drawer />
        </div>
      </SessionProvider>
    </>
  );
}

function UserAvatar() {
  const { data } = useSession();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  if (data === null) {
    return (
      <>
        <Button onClick={() => signIn()}>SignIn</Button>
      </>
    );
  } else {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={`${data ? data.user.image : ""}`} />
              <AvatarFallback>
                <Image
                  src="/profile-loading.svg"
                  width={100}
                  height={100}
                  alt="Profile loading"
                ></Image>
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => signOut()}>
              <Button className="w-full">LogOut</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }
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
