"use client"
import React from "react";
import AppMenuItemGroup from "./AppMenuItemGroup";
import Image from "next/image";
import { cn } from "@/lib/utils";

function AppLeftPane() {
  // h-screen height of screen, w-screen=> width of screen any object assigned with this attribute will take the size of the device dynamically
  return (
    <div
      className={cn(
        "bg-AppSecondary h-screen w-[160px] CENTER",
        "flex-col gap-40 justify-start pt-20"
      )}
    >
      <Image src="/Logo.svg" width={50} height={70} alt="DogApp Logo" />

      <div className={cn('CENTER gap-4', "flex-col items-start")}>
        <AppMenuItemGroup />
      </div>
    </div>
  );
}

export default AppLeftPane;
