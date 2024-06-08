import React from "react";
import { MenuItemList } from "./CONSTANTS/MenuItemList";
import AppMenuItems from "../AppMenuitems";

function AppMenuItemGroup() {
  return (
    //This is a <>fragment</> which allows the container styling to govern the children
    <>
      {MenuItemList.map((item) => (
        <AppMenuItems link={item.link} icon={item.icon} text={item.title} key={item.id} />
      ))}
    </>
  );
}

export default AppMenuItemGroup;
