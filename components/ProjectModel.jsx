import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Cylinder, useTexture } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import TextMesh from "./TextMesh";
import Router from "next/router";
import { N } from "./Content/gems";

export default function ProjectModel(p) {
  const refContact = useRef(),
    refBase = useRef(),
    [hovered, setHover] = useState(false),
    texture = useLoader(TextureLoader, p.iconPath),
    marmol = useTexture("/textures/marmol.jpg");

  useFrame(({ clock }) => {
    if (refContact?.current?.rotation) {
      refContact.current.rotation.y -= 0.0015;
    }
  });
  function handleHoverIn(e) {
    setHover(true);
  }
  function handleHoverOut(e) {
    setHover(false);
  }
  function handleClick(e) {
    // if(e.object.name="WhatsApp")
    Router.push(p.link);
  }

  return (
    <>
      {p.active.val ? (
        <group ref={refContact}>
          (
          <>
            {/* <TextMesh
                child={p.name}
                hAlign="center"
                position={[p.position[0], p.position[1] + 4, p.position[2]]}
                color={`${p.color}`}
                size={1}
              /> */}
            {/* <Box
                args={[2, 2, 0]}
                position={p.position}
                ref={mesh1}
                scale={hovered ? 2.3 : 2.2}
                // onClick={() => Router.back()}
                onPointerOver={(e) => handleHoverIn(e)}
                onPointerOut={() => handleHoverOut()}
                name={p.language === "ES" ? p.nameES : p.nameEN}
                link={p.language === "ES" ? p.linkES : p.linkEN}
                color={p.color}
              >
                <meshStandardMaterial
                  attach="material"
                  map={texture}
                  color={hovered ? `${p.color}` : p.color}
                  transparent
                />
              </Box> */}
          </>
          ) : (
          <>
            <TextMesh
              child={p.center ? "" : p.name}
              font="roboto"
              hAlign="center"
              position={[p.position[0], p.position[1] + 9, p.position[2]]}
              color={p.center ? "purple" : `${p.color}`}
              size={p.actve ? 2 : 2.2}
            />
            <TextMesh
              child={p.center ? "" : p[`description${p.language}`]}
              font="roboto"
              hAlign="center"
              position={[p.position[0], p.position[1] + 6, p.position[2]]}
              color={p.center ? "purple" : `${p.color}`}
              size={p.actve ? 2 : 1.5}
            />
            {p.date ? (
              <TextMesh
                child={p.center ? "" : p.date}
                font="roboto"
                hAlign="center"
                position={[p.position[0], p.position[1] + 4, p.position[2]]}
                color={p.center ? "purple" : `${p.color}`}
                size={p.actve ? 2 : 1.5}
              />
            ) : null}
            <Box
              args={p.center ? [0, 0, 0] : [5, 5, 5]}
              position={p.position}
              scale={hovered ? 1 : 0.9}
              onClick={(e) => handleClick(e)}
              onPointerOver={(e) => handleHoverIn(e)}
              onPointerOut={() => handleHoverOut()}
              name={p[`language${p.language}`]}
              link={p[`link${p.language}`]}
            >
              <meshStandardMaterial
                metalness={0.3}
                attach="material"
                map={texture}
                color={hovered ? `${p.color}` : `${p.color}`}
                transparent
              />
            </Box>

            <group ref={refBase}>
              <Cylinder
                onPointerOver={(e) => handleHoverIn(e)}
                onPointerOut={() => handleHoverOut()}
                args={p.center ? [0, 0, 0] : [2, 4, 4, 10, 10]}
                position={[p.position[0], p.position[1] - 5, p.position[2]]}
                scale={hovered ? 1 : 0.9}
              >
                <meshStandardMaterial
                  attach="material"
                  map={marmol}
                  color={`${p.color}`}
                  metalness={0.3}
                />
              </Cylinder>
            </group>
          </>
          )
        </group>
      ) : null}
    </>
  );
}
