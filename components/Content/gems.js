let fgems = [
  { nameEN: "Soul", nameES: "Alma", color: "orange" },
  { nameEN: "Time", nameES: "Tiempo", color: "green" },
  { nameEN: "Space", nameES: "Espacio", color: "blue" },
  { nameEN: "Mind", nameES: "Mente", color: "yellow" },
  { nameEN: "Reality", nameES: "Realidad", color: "red" },
  { nameEN: "Power", nameES: "Poder", color: "purple" },
];
function setPosition(array) {
  let radius = 2,
    theta = 0;
  for (let i = 0; i < 6; i++) {
    let position = [radius * Math.cos(theta), radius * Math.sin(theta), 0];
    array[i] = { ...array[i], position };
    theta += (2 * Math.PI) / array.length;
  }
  return array;
}
export const gems = setPosition(fgems);
