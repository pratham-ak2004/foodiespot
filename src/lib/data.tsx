import { IconHome, IconCategory, IconSearch } from "@tabler/icons-react";
import React from "react";

export type NavItem = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
};

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/#top-home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    id: 2,
    name: "Search",
    link: "/#search",
    icon: <IconSearch className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    id: 3,
    name: "category",
    link: "/#category",
    icon: <IconCategory className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export type Restaurant = {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  image: string;
};

export const restaurants = [
  {
    id: 1,
    name: "Aaradhaa",
    link: "aaraadhaa",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-1.jpg",
  },
  {
    id: 2,
    name: "Doddmane Donne Biriyani",
    link: "doddmane-donne-biriyani",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-2.jpg",
  },
  {
    id: 3,
    name: "Good Vibes",
    link: "good-vibes",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-3.jpg",
  },
  {
    id: 4,
    name: "Harshitha",
    link: "harshitha",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-4.jpg",
  },
  {
    id: 5,
    name: "Hotel Ashik",
    link: "ashik",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-5.jpg",
  },
  {
    id: 6,
    name: "Kaleesh",
    link: "kaleesh",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-6.jpg",
  },
  {
    id: 7,
    name: "Kitchen Bells",
    link: "kitchen-bells",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-7.jpg",
  },
  {
    id: 8,
    name: "Navarathna Pure Veg",
    link: "navarathna",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-8.jpg",
  },
  {
    id: 9,
    name: "Oven Fresh",
    link: "oven-fresh",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-9.jpg",
  },
  {
    id: 10,
    name: "Shisha Food Court",
    link: "shisha",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-10.jpg",
  },
  {
    id: 11,
    name: "Shabari",
    link: "shabari",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-11.jpg",
  },
  {
    id: 12,
    name: "Vinaya",
    link: "vinaya",
    category: "Indian",
    location: "Nitte",
    rating: 4.5,
    image: "/restaurant-12.jpg",
  },
];
