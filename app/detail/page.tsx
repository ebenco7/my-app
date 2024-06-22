"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


import Image from "next/image";
import AppButton from "../APP/COMPONENTS/AppButton";

function Page() {
  const Qparams = useSearchParams();
  const router = useRouter(); // Corrected usage of useRouter
  const Imageurl = Qparams.get("Imageurl");

  return (
   <Suspense fallback={ <div>Loading...</div> }>
    <div className="h-screen w-screen bg-AppTertiary CENTER">
      <div
        className={cn(
          "pt-12 w-[180px] CENTER h-screen",
          "justify-start gap-[120px] flex-col"
        )}
      >
        <div onClick={() => router.back()}>
          <AppButton>Back</AppButton>
        </div>
      </div>

      <div className="w-full h-full pt-12 pl-12 p-12">
        <h1 className="text-3xl font-bold capitalize text-AppMute">Image Url</h1>
        <p>{Imageurl}</p>
        {Imageurl ? (
          <div className="h-[400px] w-[400px] relative mt-20">
            <Image
              src={Imageurl}
              alt="Image"
              fill // Ensure the image fills the container
              style={{ objectFit: "cover" }} // Ensures the image covers the entire container
              className="rounded-md border-2 border-AppPrimary"
            />
          </div>
        ) : (
          <p>No Query Found</p>
        )}
      </div>
    </div>
   </Suspense>
   
      
  );
}

export default Page;
