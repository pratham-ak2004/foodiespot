"use client";
import "@/app/styles.module.css";
import Image from "next/image";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Restaurant, restaurants } from "@/lib/data";
import { useRouter } from "next/navigation";

import ScrollToTop from "@/components/custom-components/scrollToTop";
import { HeroHighlight } from "@/components/hero-highlight";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BackgroundGradient } from "@/components/background-gradient";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <main
          id="main"
          className="flex min-h-screen flex-col items-center justify-between pt-0"
        >
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
          <Label className="md:text-5xl text-4xl w-96">
            Welcome to FoodieSpot 🍔
          </Label>
          <TextGenerateEffect words="The place to know about restaurants in nitte" />
        </div>
        <Image
          src="/food-home-svg.svg"
          className="lg:size-[40rem] md:size-[35rem] size-[80%]"
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
  const [restaurantsOptions, setRestaurantOptions] =
    React.useState(restaurants);
  const router = useRouter();

  const handleCategoryClick = (link: string) => {
    router.push(link);
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    let searchText = e.target.value?.toLowerCase().trim();

    let filtered = restaurants.filter((item) =>
      item.name.toLowerCase().trim().includes(searchText)
    );

    let catFilter = restaurants.filter((item) =>
      item.category.toLowerCase().trim().includes(searchText)
    );

    setRestaurantOptions(filtered.concat(catFilter));
  };

  return (
    <>
      <a id="search"></a>
      <div className="w-full min-h-[40vh] h-fit">
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
          <div className="">
            <Input
              placeholder="Search for restaurants"
              className="max-w-96 w-[90vw] md:w-96 h-12 px-4 mt-4 bg-background border border-foreground rounded-lg"
              onFocus={() => setIsOpen(true)}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 200);
              }}
              onChange={handleInputChange}
            />
            <div
              className={`max-w-96 w-[90vw] md:w-96 h-96 pt-2  ${
                isOpen ? "absolute" : "hidden"
              }`}
            >
              <ScrollArea className="w-full border-[3px] h-96 min-h-10 bg-background shadow-2xl rounded-xl p-4 gap-y-2">
                {restaurantsOptions.map((item, index) => {
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
                {restaurantsOptions.length === 0 && (
                  <>
                    <div className="my-3 text-center">No search results</div>
                  </>
                )}
              </ScrollArea>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
}

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
