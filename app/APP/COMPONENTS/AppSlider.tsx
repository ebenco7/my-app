import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function AppSlider({ImageArrayList}:{ImageArrayList:string[]}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="h-[360px] w-[120px]" // Adjust height to fit 3 images
    >
      <CarouselContent className="-mt-1 h-[360px]">
        {ImageArrayList.map((item: string | StaticImport, index: React.Key | null | undefined) => (
          <CarouselItem key={index} className="pt-1">
            <div className="h-[120px] w-[120px] relative">
              <Image 
                src={item}
                width={200}
                height={500}
                alt= "Image"
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
