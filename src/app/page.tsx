"use client";
import "@/app/styles.module.css";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";

import ScrollToTop from "@/components/custom-components/scrollToTop";
import { HeroHighlight } from "@/components/hero-highlight";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BackgroundGradient } from "@/components/background-gradient";

import { Label } from "@/components/ui/label";

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
  return (
    <>
      <a id="search"></a>
      <div className="w-full h-[30vh]">
        <BackgroundGradient
          className="bg-background rounded-[20px] p-10 w-full h-full flex lg:flex-row flex-col items-center justify-around"
          containerClassName="h-full"
        >
          <div className="grid grid-flow-row text-center lg:text-left gap-5">
            <Label className="text-4xl">Search Restaurants</Label>
            <p className="text-xl">
              Find the best restaurants in your area. Search by name or
              category.
            </p>
          </div>
          <input
            type="text"
            placeholder="Search for restaurants"
            className="w-96 h-12 px-4 mt-4 border border-gray-300 rounded-lg"
          />
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
