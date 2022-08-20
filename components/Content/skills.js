import { setPosition } from "./functions";
import { N } from "./gems";
// ("naranja-cerde-azul,amarillo,rojo-lila");
const red = "#97110C";
// const red = N.red;
let frontend = [
  {
    name: "CSS",
    color: N.blue,
    path: "/logosSVG/skills/frontend/css.png",
  },
  {
    name: "HTML",
    color: N.orange,
    path: "/logosSVG/skills/frontend/html.png",
  },
  {
    name: "JavaScript",
    color: N.orange,
    path: "/logosSVG/skills/frontend/javascript.png",
  },
  {
    name: "React",
    color: N.blue,
    path: "/logosSVG/skills/frontend/react.png",
  },
  {
    name: "Redux",
    color: N.purple,
    path: "/logosSVG/skills/frontend/redux.png",
  },
  {
    name: "Sass",
    color: "hotpink",
    path: "/logosSVG/skills/frontend/sass.png",
  },
  {
    name: "GreenSock",
    color: N.green,
    path: "/logosSVG/skills/frontend/greensock.png",
  },
  {
    name: "Next",
    color: N.blue,
    path: "/logosSVG/skills/frontend/next.png",
  },
  {
    name: "Three",
    color: "#D3C8B8",
    path: "/logosSVG/skills/frontend/three.png",
  },
  {
    name: "Material UI",
    color: N.blue,
    path: "/logosSVG/skills/frontend/materialUi.png",
  },
  {
    center: true,
    name: "Contactame",
    link: "#",
    color: N.blue,
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
    iconPath: "/Bitmojis/OrigamiWave.png",
  },
];
let backend = [
  {
    name: "Express",
    color: "gray",
    path: "/logosSVG/skills/backend/express.png",
  },
  {
    name: "Node",
    color: N.green,
    path: "/logosSVG/skills/backend/node.png",
  },
  {
    name: "PostgreSQL",
    color: N.blue,
    path: "/logosSVG/skills/backend/postgre.png",
  },
  {
    name: "Sequelize",
    color: N.blue,
    path: "/logosSVG/skills/backend/sequelize.png",
  },
  {
    center: true,
    name: "Contactame",
    link: "#",
    color: N.blue,
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
    iconPath: "/Bitmojis/OrigamiWave.png",
  },
];
let engineering = [
  {
    name: "Arduino",
    color: N.blue,
    path: "/logosSVG/skills/engineering/arduino.png",
  },
  {
    name: "AutoCad",
    color: red,
    path: "/logosSVG/skills/engineering/autocad.png",
  },
  {
    name: "MatLab",
    color: red,
    path: "/logosSVG/skills/engineering/matlab.png",
  },

  {
    name: "Office365",
    color: N.orange,
    path: "/logosSVG/skills/engineering/office.png",
  },

  {
    name: "Python",
    color: N.yellow,
    path: "/logosSVG/skills/engineering/python.png",
  },

  {
    name: "QGIS",
    color: N.green,
    path: "/logosSVG/skills/engineering/qgis.png",
  },
  {
    name: "SolidWorks",
    color: red,
    path: "/logosSVG/skills/engineering/solidworks.png",
  },
  {
    center: true,
    name: "Contactame",
    link: "#",
    color: N.blue,
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
    iconPath: "/Bitmojis/OrigamiWave.png",
  },
];
export const skillsFrontend = setPosition(frontend, 40);
export const skillsBackend = setPosition(backend, 10);
export const skillsEngineering = setPosition(engineering, 25);
