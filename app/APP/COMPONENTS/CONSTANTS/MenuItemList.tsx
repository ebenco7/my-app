//Here is the Menu list, this page wil be rendered automatically from page.tsx dynamically.
import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";
import { GiSniffingDog } from "react-icons/gi";

const MenuItemList = [
  {
    id: 0,
    title: "Bouvier",
    link: "/breed/bouvier",
    icon: <FaDog />,
  },

  {
    id: 1,
    title: "Bulldog",
    link: "/breed/bulldog",
    icon: <GiSittingDog />,
  },

  {
    id: 2,
    title: "Bluetick",
    link: "/breed/bluetick",
    icon: <BiSolidDog />,
  },

  {
    id: 3,
    title: "Hound",
    link: "/breed/hound",
    icon: <GiSniffingDog />,
  },
];

export { MenuItemList };
