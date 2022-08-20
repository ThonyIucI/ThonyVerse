import { Box, Cone, Lathe, RoundedBox, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { N } from "./Content/gems";
import TextMesh from "./TextMesh";

export default function SkillModel({ hovered, setHover, ...p }) {
  const refSkill = useRef(),
    refLathe = useRef(),
    marmol = useTexture("/textures/marmol.jpg"),
    [clicked, setClick] = useState(false),
    texture = useTexture(p.path);

  // useFrame(({ clock }) => {
  //   if (refSkill?.current?.rotation) {
  //     refSkill.current.rotation.y -= 0.0015;
  //   }
  // });
  function handleHoverIn(e) {
    setHover(true);
  }
  function handleHoverOut(e) {
    setHover(false);
  }
  function handleClick(e) {
    // if(e.object.name="WhatsApp")
    // Router.push(p.link);
    setClick(!clicked);
  }
  // "rgb(49, 27, 55)"
  const shad = "#0b0f47",
    colorText = hovered ? shad : shad,
    colorTable = hovered ? N.orange : `${p.color}`;
  return (
    <>
      {p.active.val && !p.center ? (
        <group ref={refSkill}>
          <>
            {hovered || clicked ? (
              <>
                <TextMesh
                  color={colorText}
                  child={p.name}
                  font="roboto"
                  hAlign="center"
                  position={[
                    p.position[0],
                    p.position[1] + 5.4,
                    p.position[2] + 0.25,
                  ]}
                  size={1.4}
                />
                <TextMesh
                  color={colorText}
                  child={p.name}
                  font="roboto"
                  hAlign="center"
                  position={[
                    p.position[0],
                    p.position[1] + 5,
                    p.position[2] - 0.25,
                  ]}
                  size={1.4}
                  rotation={[0, Math.PI, 0]}
                />
                <Box
                  args={p.center ? [0, 0, 0] : [12, 2.8, 0.25]}
                  position={[p.position[0], p.position[1] + 5, p.position[2]]}
                  scale={1}
                  onClick={(e) => handleClick(e)}
                  onPointerOver={(e) => handleHoverIn(e)}
                  onPointerOut={() => handleHoverOut()}
                  name={p[`language${p.language}`]}
                  link={p[`link${p.language}`]}
                  // color={p.color}
                >
                  <meshLambertMaterial
                    attach="material"
                    map={marmol}
                    color={colorTable}
                  />
                </Box>
              </>
            ) : null}

            <Box
              args={p.center ? [0, 0, 0] : [4.2, 4.2, 4.2]}
              position={[p.position[0], p.position[1] + 1.3, p.position[2]]}
              scale={hovered ? 1 : 0.9}
              onClick={(e) => handleClick(e)}
              onPointerOver={(e) => handleHoverIn(e)}
              onPointerOut={() => handleHoverOut()}
              name={p[`language${p.language}`]}
              link={p[`link${p.language}`]}
              // color={p.color}
            >
              <meshLambertMaterial
                attach="material"
                map={texture}
                color={hovered ? `${p.color}` : `${p.color}`}
                transparent
                // emissiveMap
              />
            </Box>
            <group ref={refLathe}>
              <Cone
                args={p.center ? [0, 0, 0] : [2, 2, 10, 1, 0]}
                position={[p.position[0], p.position[1] - 1, p.position[2]]}
                onClick={(e) => handleClick(e)}
              >
                <meshPhongMaterial
                  map={p.map}
                  attach="material"
                  color={hovered ? colorTable : `${p.color}`}
                />
              </Cone>
            </group>
          </>
        </group>
      ) : null}
    </>
  );
}
