import { contacts } from "./contact";
import { setPosition } from "./functions";
let colors1 = [
  "#DC5A35",
  "#23D480",
  "#3255FD",
  "#E6E477",
  "#BF032B",
  "#5331A8",
  "#0070f3",
];

("naranja-verde-azul,amarillo,rojo-lila");
export const N = {
  orange: "#DF681B",
  green: "#01D06B",
  blue: "#1171EE",
  yellow: "#E5B93E",
  red: "#FD0114",
  purple: "#BA18EA",
  black: "#0B0D21",
};
let fgems = [
  {
    id: "interests",
    nameEN: "Soul",
    nameES: "Alma",
    linkEN: "Interests",
    linkES: "Intereses",

    color: N.orange,
    children: contacts,
  },
  {
    id: "experience",
    nameEN: "Time",
    nameES: "Tiempo",
    linkEN: "Experience",
    linkES: "Experiencia",

    color: N.green,
  },
  {
    id: "education",
    nameEN: "Mind",
    nameES: "Mente",
    linkEN: "Education ",
    linkES: "Educación",
    color: N.yellow,
  },
  {
    id: "skills",
    nameEN: "Reality",
    nameES: "Realidad",
    linkEN: "Skills",
    linkES: "Habilidades",
    color: N.red,
  },
  {
    id: "projects",
    nameEN: "Power",
    nameES: "Poder",
    linkEN: "Projects",
    linkES: "Proyectos",
    color: N.purple,
  },
  {
    id: "contact",
    center: true,
    nameEN: "Space",
    nameES: "Espacio",
    linkEN: "Contact me",
    linkES: "Contacto",
    color: N.blue,
    position: [0, 0, 0],
  },
];

let customTheta = [0, 90, 180, 240, 300, 0];
// export const gems = setPosition(fgems, 120, customTheta);
export const gems = setPosition(fgems, 120);
