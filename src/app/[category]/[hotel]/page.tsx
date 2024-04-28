"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Restaurant, restaurants } from "@/lib/data";

import { Label } from "@/components/ui/label";

export default function Hotel() {
  const params = useParams();
  const [hotel, setHotel] = React.useState<Restaurant>();

  React.useEffect(() => {
    console.log(params);

    const list = restaurants.filter(
      (restaurant) => restaurant.link === params.hotel
    );
    if (list.length > 0) {
      setHotel(list[0]);
    }
    console.log(`/images/${params.category}/${params.link}/${hotel?.image[0]}`);
  }, [params]);

  return (
    <>
      <main className="w-full min-h-[80vh] flex flex-col items-center">
        <div className="">
          <Image
            width={1920}
            height={1080}
            className="aspect-video h-96 object-cover max-w-7xl rounded-3xl hover:blur-[2px]"
            alt={hotel?.name || ""}
            src={`/images/${params.category}/${params.hotel}/${hotel?.image[0]}`}
          ></Image>
        </div>
        <div className="flex p-8 justify-between items-center w-full max-w-7xl">
          <Label className="font-semibold text-5xl text-left">
            {hotel?.name}
          </Label>
          <Label>{hotel?.category}</Label>
        </div>
      </main>
    </>
  );
}
