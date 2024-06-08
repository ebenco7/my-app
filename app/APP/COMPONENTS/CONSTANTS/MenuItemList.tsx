//Here is the Menu list, this page wil be rendered automatically from page.tsx dynamically.
import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";
import { GiSniffingDog } from "react-icons/gi";

const MenuItemList = [
  {
    id: 0,
    title: "Bouvier",
    link: "/breed/Bouvier",
    icon: <FaDog />,
  },

  {
    id: 1,
    title: "Airedale",
    link: "/breed/Airedale",
    icon: <GiSittingDog />,
  },

  {
    id: 2,
    title: "Bluetick",
    link: "/breed/Bluetick",
    icon: <BiSolidDog />,
  },

  {
    id: 3,
    title: "Akita",
    link: "/breed/Akita",
    icon: <GiSniffingDog />,
  },
];

export { MenuItemList };
