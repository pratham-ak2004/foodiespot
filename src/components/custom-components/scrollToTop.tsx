"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScrollToTop() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <Button
      className={` z-20 right-8 bottom-8 fixed transition-all duration-500 ease-in-out transform ${
        isScrolled ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      size={"icon"}
    >
      <Link href={"#top-home"}>
        <ArrowUp />
      </Link>
    </Button>
  );
}
