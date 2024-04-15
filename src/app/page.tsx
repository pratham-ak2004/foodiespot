"use client";
import "@/app/styles.module.css";
import Image from "next/image";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { restaurants } from "@/lib/data";
import { useRouter } from "next/navigation";

import ScrollToTop from "@/components/custom-components/scrollToTop";
import { HeroHighlight } from "@/components/hero-highlight";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BackgroundGradient } from "@/components/background-gradient";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <main className="flex min-h-screen flex-col items-center justify-between pt-0">
          <ScrollToTop />
          <HeroSection />
          <SearchRestaurant />
          <Categories />
        </main>
      </SessionProvider>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <HeroHighlight className="w-screen flex flex-col-reverse items-center lg:flex-row justify-center">
        <div className="p-6 mx-4">
          <Label className="text-5xl w-96">Welcome to FoodieSpot 🍔</Label>
          <TextGenerateEffect words="The place to know about restaurants in nitte" />
        </div>
        <Image
          src="/food-home-svg.svg"
          className="md:size-[40rem] size-64"
          width={500}
          height={500}
          alt={""}
        />
      </HeroHighlight>
    </>
  );
}

function SearchRestaurant() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleCategoryClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <a id="search"></a>
      <div className="w-full min-h-[40vh] h-[25vh]">
        <BackgroundGradient
          className="bg-background rounded-[20px] p-10 w-full h-full flex lg:flex-row flex-col items-center justify-around"
          containerClassName="h-full"
        >
          <div className="grid grid-flow-row text-center lg:text-left gap-5 p-4">
            <Label className="text-4xl">Search Restaurants</Label>
            <p className="text-xl">
              Find the best restaurants in your area. Search by name or
              category.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for restaurants"
              className="w-96 h-12 px-4 mt-4 border border-gray-300 rounded-lg"
              onFocus={() => setIsOpen(true)}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 200);
              }}
            />
            <div className={`size-96 pt-2 ${isOpen ? "absolute" : "hidden"}`}>
              <ScrollArea className="w-full h-full bg-background shadow-2xl rounded-xl p-4 gap-y-2">
                {restaurants.map((item, index) => {
                  return (
                    <>
                      <Separator className={`${index === 0 ? "hidden" : ""}`} />
                      <div
                        className="my-3 text-center"
                        onClick={() => handleCategoryClick(item.link)}
                      >
                        {item.name}
                      </div>
                    </>
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
}

const categoryList = [
  {
    title: "Fast Food",
    image: "/fast-food.svg",
  },
  {
    title: "Desserts",
    image: "/desserts.svg",
  },
  {
    title: "Beverages",
    image: "/beverages.svg",
  },
];

function Categories() {
  return (
    <>
      <a id="category"></a>
      <div className="flex flex-col items-center justify-center h-screen">
        <Label className="text-4xl">Categories</Label>
        <div className="flex flex-row items-center justify-center">
          {/* <CategoryCard title="Fast Food" />
        <CategoryCard title="Desserts" />
        <CategoryCard title="Beverages" /> */}
        </div>
      </div>
    </>
  );
}
