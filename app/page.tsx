import React from "react";
import AppLeftPane from "./APP/COMPONENTS/AppLeftPane";
import { cn } from "@/lib/utils";

function Page() {
  return (
    <div
      className={cn(
        "CENTER  gap-1 flex-col bg-AppTertiary h-screen w-screen",
        "justify-start items-start"
      )}
    >
      <AppLeftPane />
    </div>
  );
}

export default Page;