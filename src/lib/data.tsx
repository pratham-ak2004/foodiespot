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
  link: string;
  category: string;
  location: string;
  rating: number;
  image: string[];
};

export const restaurants = [
  {
    id: 1,
    name: "Aaradhana",
    link: "aaradhana",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  },
  {
    id: 2,
    name: "Doddmane Donne Biriyani",
    link: "doddmane-donne-biriyani",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },
  {
    id: 3,
    name: "Good Vibes",
    link: "good-vibes",
    category: "cafes",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    id: 4,
    name: "Harshitha",
    link: "harshitha",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    name: "Hotel Ashik",
    link: "ashik",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg"],
  },
  {
    id: 6,
    name: "Shree Kateeleshwari Food Corner",
    link: "kateeleshwari",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },
  {
    id: 7,
    name: "Kitchen Bells",
    link: "kitchen-bells",
    category: "cafes",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  },
  {
    id: 8,
    name: "Navarathna Pure Veg",
    link: "navarathna",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg"],
  },
  {
    id: 9,
    name: "Oven Fresh",
    link: "oven-fresh",
    category: "cafes",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg"],
  },
  {
    id: 10,
    name: "Santhoor Shisha Food Court",
    link: "shisha",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg"],
  },
  {
    id: 11,
    name: "Shabari",
    link: "shabari",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg"],
  },
  {
    id: 12,
    name: "Vinaya",
    link: "vinaya",
    category: "restaurant",
    location: "Nitte",
    rating: 4.5,
    image: ["1.jpg", "2.jpg"],
  },
];

export const category = [
  {
    id: 1,
    name: "Cafes",
    link: "cafes",
    image:
      "https://www.qantas.com/content/dam/travelinsider/images/explore/europe/germany/berlin/the-best-cafes-in-berlin/83b00526-4d03-46a6-a4a9-2be8dec89d65.jpg",
  },
  {
    id: 2,
    name: "Restaurant",
    link: "restaurant",
    image:
      "https://talktobirbal.com/wp-content/uploads/2017/10/Restaurant-BG_001.jpg",
  },
];
