import { setPosition } from "./functions";
import { N } from "./gems";

let logos = [
  {
    name: "THONY FOOD",
    link: "https://thony-food.vercel.app",
    color: N.red,
    path: "/logosSVG/projects/thonyfood.png",
    iconPath: "/logosSVG/projects/recipe.png",
    // iconPath: "/logosSVG/projects/thonyfood.png",
    descriptionES: "SPA de comidas",
    descriptionEN: "SPA of recipes",
  },
  {
    name: "HENRY SHOES",
    link: "https://app-henry-shoes.herokuapp.com",
    color: N.blue,
    path: "/logosSVG/projects/thonyfood.png",
    iconPath: "/logosSVG/projects/shoe.png",
    descriptionES: "E-commerce de calzado",
    descriptionEN: "Footwear E-commerce",
  },
  {
    center: true,
    name: "Contactame",
    link: "#",
    color: "#1171EE",
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
    iconPath: "/Bitmojis/OrigamiWave.png",
  },
];
let edu = [
  {
    name: "UDEP",
    link: "https://thony-food.vercel.app",
    color: N.blue,
    path: "/logosSVG/education/udep1.png",
    iconPath: "/logosSVG/education/udep1.png",
    // iconPath: "/logosSVG/projects/thonyfood.png",
    descriptionES: "Ing Mecánico Eléctrico",
    descriptionEN: "Ing Mechanical Electrical",
    date: "01/2016-12/2022",
  },
  {
    name: "HENRY",
    link: "https://app-henry-shoes.herokuapp.com",
    color: N.yellow,
    path: "/logosSVG/education/henry.png",
    iconPath: "/logosSVG/education/henry.png",
    descriptionES: "Desarrollador Full Stack",
    descriptionEN: "Full Stack Developer",
    date: "04/2022-08/2022",
  },
  {
    center: true,
    name: "Contactame",
    link: "#",
    color: "#1171EE",
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
    iconPath: "/Bitmojis/OrigamiWave.png",
  },
];
export const projects = setPosition(logos, 17);
export const education = setPosition(edu, 17);
