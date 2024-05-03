"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, Restaurant, restaurants } from "@/lib/data";

import { Label } from "@/components/ui/label";
import { LayoutGrid } from "@/components/layout-grid";

export default function Hotel() {
  const params = useParams();
  const [hotel, setHotel] = React.useState<Restaurant>();
  const [cards, setCards] = React.useState<Card[]>([]);

  React.useEffect(() => {

    const list = restaurants.filter(
      (restaurant) => restaurant.link === params.hotel
    );
    if (list.length > 0) {
      setHotel(list[0]);
    }
    setCards(getCards(list[0], params));
  }, [params]);

  return (
    <>
      <main
        id="main"
        className="w-full min-h-[80vh] flex flex-col items-center bg-dot-dark/[0.2] dark:bg-dot-white/[0.2]"
      >
        <div className="w-full max-h-96 max-w-7xl pt-2 h-min relative flex justify-around object-cover aspect-video">
          <Image
            width={1920}
            height={1080}
            className="aspect-video object-cover rounded-3xl"
            alt={hotel?.name || ""}
            src={`/images/${params.category}/${params.hotel}/${hotel?.image[0]}`}
          ></Image>
        </div>
        <div className="flex p-8 justify-between items-center w-full max-w-7xl">
          <Label className="font-semibold md:text-5xl text-3xl text-left">
            {hotel?.name}
          </Label>
          <Label className="font-medium md:text-2xl text-md">
            {hotel?.category}
          </Label>
        </div>
        <div className="w-full max-w-7xl p-8 pb-0">
          <Label className="text-xl">Gallery</Label>
        </div>
        <div className="h-screen w-full">
          <LayoutGrid cards={cards}></LayoutGrid>
        </div>
      </main>
    </>
  );
}

function getCards(hotel: any, params: any): Card[] {
  if (hotel === undefined || hotel === null) {
    return [] as Card[];
  }

  let cards: Card[] = [];
  let count = 1;
  let type = false;

  for (let i = 0; i < hotel.image.length; i++) {
    count++;
    cards.push({
      id: i,
      content: (
        <>
        </>
      ),
      className: `md:col-span-${type ? "1" : "2"}`,
      thumbnail: `/images/${params.category}/${params.hotel}/${
        hotel.image[i] || ""
      }`,
    });

    if (count > 1) {
      type = !type;
      count = 0;
    }
  }

  console.log(cards);
  

  return cards;
}
