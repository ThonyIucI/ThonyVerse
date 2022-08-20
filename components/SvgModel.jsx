import { useFrame, useLoader } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { useRef, useState } from "react";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import TextMesh from "./TextMesh";
import Router from "next/router";

export default function SvgModel(p) {
  const refContact = useRef(),
    mesh1 = useRef(),
    [hovered, setHover] = useState(false),
    texture = useLoader(TextureLoader, p.path);

  useFrame(({ clock }) => {
    if (refContact?.current?.rotation) {
      refContact.current.rotation.y -= 0.003;
    }
  });
  function handleHoverIn(e) {
    setHover(true);
  }
  function handleHoverOut(e) {
    setHover(false);
  }
  function handleClick(e) {
    Router.push(p.link);
  }
  return (
    <>
      {p.active.val && !p.center ? (
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
              position={[p.position[0], p.position[1] + 4, p.position[2]]}
              color={p.center ? "purple" : `${p.color}`}
              size={2}
            />
            <Box
              args={[2, 2, 2]}
              position={p.position}
              scale={hovered ? 1.5 : 1.4}
              onClick={(e) => handleClick(e)}
              onPointerOver={(e) => handleHoverIn(e)}
              onPointerOut={() => handleHoverOut()}
              name={p[`language${p.language}`]}
              link={p[`link${p.language}`]}
              color={p.color}
            >
              <meshStandardMaterial
                attach="material"
                map={texture}
                color={hovered ? `${p.color}` : p.color}
                transparent
              />
            </Box>
          </>
          )
        </group>
      ) : null}
    </>
  );
}
