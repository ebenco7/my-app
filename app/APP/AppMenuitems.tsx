import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
//Other imports were not included here because
function AppMenuItems({link, text, icon }: TitleIcon) {
  return (
    <Link href={link}
      className={cn(
        " hover:bg-AppPrimary hover:cursor-pointer text-white w-fit-content h-[40px] CENTER gap-2 rounded-md pl-3 pr-3",
        "justify-start items-start"
      )}
    >
      {icon} <span>{text}</span>
    </Link>
  );
}
 
export default AppMenuItems;
