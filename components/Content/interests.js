import { setPosition } from "./functions";
import { N } from "./gems";

let data = [
  {
    nameES: "Agriculture",
    nameEN: "Agricultura",
    color: N.yellow,
    path: "/logosSVG/interests/banana.png",
    descriptionES:
      "Mi familia se dedica a la agricultura, principalmente al cultivo de banano",
    descriptionEN:
      "My family is dedicated to agriculture, mainly banana cultvation",
  },
  {
    nameES: "Inteligencia Artificial",
    nameEN: "Artificial Intelligence",
    color: N.blue,
    path: "/logosSVG/interests/IA.jpg",
    descriptionES:
      "Mi familia se dedica a la agricultura, principalmente al cultivo de banano",
    descriptionEN:
      "My family is dedicated to agriculture, mainly banana cultvation",
  },
  {
    nameES: "Musica",
    nameEN: "Music",
    color: N.purple,
    path: "/logosSVG/interests/music.png",
    descriptionES:
      "Mi familia se dedica a la agricultura, principalmente al cultivo de banano",
    descriptionEN:
      "My family is dedicated to agriculture, mainly banana cultvation",
  },
  {
    nameES: "Mascotas",
    nameEN: "Pets",
    color: N.blue,
    path: "/logosSVG/interests/pet.jpg",
    descriptionES:
      "Mi familia se dedica a la agricultura, principalmente al cultivo de banano",
    descriptionEN:
      "My family is dedicated to agriculture, mainly banana cultvation",
  },
  {
    center: true,
    nameES: "Agricultura",
    nameEN: "Agriculture",
    color: N.yellow,
    path: "/logosSVG/interests/banana.png",
    descriptionES:
      "Mi familia se dedica a la agricultura, principalmente al cultivo de banano",
    descriptionEN:
      "My family is dedicated to agriculture, mainly banana cultvation",
    position: [0, 0, 0],
  },
];

export const interests = setPosition(data, 17);
