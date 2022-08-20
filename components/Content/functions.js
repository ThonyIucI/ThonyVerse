import gsap from "gsap";
export function setPosition(array, radius, custom, step) {
  let theta = 0;
  if (custom?.length) {
    array?.map((e, i) => {
      let position = [
        radius * Math.cos((custom[i] * Math.PI) / 180),
        0,
        radius * Math.sin((custom[i] * Math.PI) / 180),
      ];

      array[i] = array[i].position ? array[i] : { ...array[i], position };
    });

    return array;
  }
  for (let i = 0; i < array.length; i++) {
    let position = [radius * Math.cos(theta), 0, radius * Math.sin(theta)];
    array[i] = array[i].position ? array[i] : { ...array[i], position };
    theta += step ? (step * Math.PI) / 180 : (2 * Math.PI) / (array.length - 1);
  }

  return array;
}
export function handleGoInto(e) {
  const tl = gsap.timeline();
  tl.to(e.camera.position, {
    x: 0,
    y: 0,
    z: 25,
    duration: 2,
    ease: "circ.out",
  });
}
