import { setPosition } from "./functions";
import { N } from "./gems";

let data = [
  {
    nameES: "JEFE DE LAB",
    nameEN: "LABORATORY HEAD",
    company: "UDEP",
    date: "03/2018-06/2019",
    color: N.blue,
  },
  {
    nameES: "ASISTENTE DE PROYECTOS",
    nameEN: "PROJEXT ASISTANT",
    company: "ADEN EIRL",
    date: "12/2019-03/2020",
    color: N.yellow,
  },
  {
    nameES: "JEFE DE PRACTICAS",
    nameEN: "PRACTIEVE BOZZ",
    company: "UDEP",
    date: "12/2019-03/2020",
    color: N.blue,
  },
  {
    nameES: "DES. FULL STACK",
    nameEN: "FULL STACK DEV.",
    company: "HENRY",
    date: "06/2022-07/2020",
    color: N.yellow,
  },
  {
    nameES: "DES. FRONT END",
    nameEN: "FRONT END DEV.",
    company: "HENRY",
    date: "07/2019-08/2020",
    color: N.yellow,
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

export const experience = setPosition(data, 25);
