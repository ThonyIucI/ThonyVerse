import { setPosition } from "./functions";
export const N = {
  orange: "#DF681B",
  green: "#01D06B",
  blue: "#1171EE",
  yellow: "#E5B93E",
  red: "#FD0114",
  purple: "#BA18EA",
  black: "#0B0D21",
};

// console.log(N);
("naranja-cerde-azul,amarillo,rojo-lila");
let logos = [
  {
    name: "Snapchat",
    link: "https://github.com/thonyiuci",
    color: N.yellow,
    path: "/logosSVG/snapchat.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/thonyiuci",
    color: N.purple,
    path: "/logosSVG/github.png",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anthony-urbina-5773b9173/",
    color: N.blue,
    path: "/logosSVG/linkedin.svg",
  },
  {
    name: "WhatsApp",
    link: "https://wa.link/ekvtpw",
    // https://api.whatsapp.com/send?phone=51910130488&text=Hello%20%F0%9F%91%8B%2C%20I%20come%20from%20your%20portfolio%2C%20I%20wanna%20know%20more%20about%20you.%20%F0%9F%98%84
    color: "green",
    path: "/logosSVG/whatsapp.svg",
  },
  {
    center: true,
    name: "Contactame",
    link: "/",
    color: N.blue,
    position: [0, 0, 0],
    path: "/Bitmojis/OrigamiWave.png",
  },
];
export const contacts = setPosition(logos, 15);
