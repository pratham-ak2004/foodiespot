import "@/app/styles.module.css";
import Image from "next/image";

import { HeroHighlight } from "@/components/hero-highlight";
import { TextGenerateEffect } from "@/components/text-generate-effect";

import { Label } from "@/components/ui/label";
import HomeSVG from "@/components/custom-components/hero-home-svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0">
      <HeroSection />
    </main>
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
      <SearchRestaurant />
      {/* <Categories /> */}
    </>
  );
}

function SearchRestaurant() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Label className="text-4xl">Search Restaurant</Label>
      <input
        type="text"
        placeholder="Search for restaurants"
        className="w-96 h-12 px-4 mt-4 border border-gray-300 rounded-lg"
      />
    </div>
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
    <div className="flex flex-col items-center justify-center">
      <Label className="text-4xl">Categories</Label>
      <div className="flex flex-row items-center justify-center">
        {/* <CategoryCard title="Fast Food" />
        <CategoryCard title="Desserts" />
        <CategoryCard title="Beverages" /> */}
      </div>
    </div>
  );
}
