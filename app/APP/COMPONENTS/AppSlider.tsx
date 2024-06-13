import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function AppSlider({ ImageArrayList }: { ImageArrayList: string[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="h-[380px] w-[120px]" // Height to fit 3 images of 120px each
    >
      <CarouselContent className="-mt-1 h-[400px]">
        {ImageArrayList.map((item) => (
          <CarouselItem key={item} className="pt-1 md:basis-1/3">
            <div className="h-[120px] w-[120px] relative">
              <Image
                src={item}
                alt="Image"
                layout="fill" // Ensure the image fills the container
                objectFit="cover" // Ensures the image covers the entire container
                className="rounded-md border-2 border-AppPrimary"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
