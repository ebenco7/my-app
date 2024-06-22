"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AppButton from "../APP/COMPONENTS/AppButton";

function DetailPage() {
  const Qparams = useSearchParams();
  const router = useRouter();
  const Imageurl = Qparams.get("Imageurl");

  return (
    <div className="h-screen w-screen bg-AppTertiary flex justify-center items-center">
      <div className={cn("pt-12 w-[180px] flex flex-col justify-start gap-[120px] items-center")}>
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
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md border-2 border-AppPrimary"
            />
          </div>
        ) : (
          <p>No Query Found</p>
        )}
      </div>
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPage />
    </Suspense>
  );
}

export default Page;
