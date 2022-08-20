import { useFrame } from "@react-three/fiber";
import { Box, Html, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import TextMesh from "./TextMesh";
import Router from "next/router";

export default function InterestModel(p) {
  const refContact = useRef(),
    [click, setClick] = useState(false),
    [hovered, setHover] = useState(false),
    texture = useTexture(p.path);

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
    // if(e.object.name="WhatsApp")
    // Router.push(p.link);
    setClick(true);
  }
  return (
    <>
      {p.active.val && !p.center ? (
        <group ref={refContact}>
          <>
            {/* <Html>npm r</Html> */}
            <TextMesh
              child={p[`name${p.language}`]}
              font="roboto"
              hAlign="center"
              position={[p.position[0], p.position[1] + 4, p.position[2]]}
              color={p.center ? "purple" : `${p.color}`}
              size={2.5}
            />
            <Box
              args={[3, 3, 3]}
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
                metalness={0.5}
                roughness={1}
                attach="material"
                map={texture}
                color={hovered ? `${p.color}` : p.color}
                transparent
              />
            </Box>
          </>
        </group>
      ) : null}
    </>
  );
}
