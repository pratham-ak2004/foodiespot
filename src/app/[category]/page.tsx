"use client";

import React from "react";
import { useParams , useRouter } from "next/navigation";

import { restaurants, Restaurant } from "@/lib/data";
import { DirectionAwareHover } from "@/components/direction-aware-hover";

export default function Category() {
  const param = useParams();
  const router = useRouter();
  const [restaurantList, setRestaurantList] = React.useState<Restaurant[]>([]);

  React.useEffect(() => {
    const list = restaurants.filter(
      (restaurant) => restaurant.category === param.category
    );
    setRestaurantList(list);
  }, [param]);

  return (
    <>
      <main id="main" className="w-full min-h-[80vh] flex flex-col items-center bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
        <h1 className="text-4xl font-bold my-4">
          {param.category.toString().toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 mb-20">
          {restaurantList.map((restaurant,idx) => (
            <div key={idx} onClick={() => {
                router.push(`/${restaurant.category}/${restaurant.link}`);
            }}>
              <DirectionAwareHover
                imageUrl={`/images/${restaurant.category}/${restaurant.link}/${restaurant.image[0]}`}
              >
                {restaurant.name}
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
