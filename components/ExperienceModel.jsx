import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Html, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import TextMesh from "./TextMesh";
import { N } from "./Content/gems";
function Text(p) {
  const refText = useRef(),
    updatePosition = (position, x, y, z) => {
      return [position[0] + x, position[1] + y, position[2] + z];
    },
    colorText = "#23152a";

  return (
    <>
      <TextMesh
        ref={refText}
        position={
          p.rotation
            ? updatePosition(p.position, 0, 6, -0.25)
            : updatePosition(p.position, 0, 6, 0.25)
        }
        rotation={p.rotation ? [0, Math.PI, 0] : [0, 0, 0]}
        child={p[`name${p.language}`]}
        font="roboto"
        hAlign="center"
        color={colorText}
        size={p.actve ? 2 : 1.4}
      />
      <TextMesh
        child={p.company}
        font="roboto"
        hAlign="center"
        ref={refText}
        position={
          p.rotation
            ? updatePosition(p.position, 0, 3, -0.25)
            : updatePosition(p.position, 0, 3, 0.25)
        }
        rotation={p.rotation ? [0, Math.PI, 0] : [0, 0, 0]}
        color={colorText}
        size={p.actve ? 2 : 1.2}
      />

      <TextMesh
        child={p.date}
        font="roboto"
        hAlign="center"
        ref={refText}
        position={
          p.rotation
            ? updatePosition(p.position, 0, 1, -0.25)
            : updatePosition(p.position, 0, 1, 0.25)
        }
        rotation={p.rotation ? [0, Math.PI, 0] : [0, 0, 0]}
        color={colorText}
        size={p.actve ? 2 : 1.2}
      />
    </>
  );
}

export default function ExperienceModel(p) {
  const refExperience = useRef(),
    refBase = useRef(),
    [hovered, setHover] = useState(false),
    marmol = useTexture("/textures/marmol.jpg");

  useFrame(({ clock }) => {
    if (refExperience?.current?.rotation) {
      refExperience.current.rotation.y -= 0.0015;
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
  }

  return (
    <>
      {p.active.val && !p.center ? (
        <group ref={refExperience} position={[0, -6, 0]}>
          <>
            <Text {...p} hovered={hovered} />

            <Text {...p} hovered={hovered} rotation />
            <Box
              args={p.center ? [0, 0, 0] : [23, 10, 0.25]}
              position={[p.position[0], p.position[1] + 4, p.position[2]]}
              scale={1}
              //   onClick={(e) => handleClick(e)}
              onPointerOver={(e) => handleHoverIn(e)}
              onPointerOut={() => handleHoverOut()}
              name={p[`language${p.language}`]}
              link={p[`link${p.language}`]}
            >
              {/* <Html>
                <div style={{ background: "purple", padding: 5 }}>
                  Buenas gente
                </div>
              </Html> */}
              <meshLambertMaterial
                attach="material"
                map={marmol}
                color={hovered ? N.green : `${p.color}`}
                transparent
              />
            </Box>

            <group ref={refBase}>
              <Cylinder
                onPointerOver={(e) => handleHoverIn(e)}
                onPointerOut={() => handleHoverOut()}
                args={p.center ? [0, 0, 0] : [2, 4, 4, 10, 10]}
                position={[p.position[0], p.position[1] - 2, p.position[2]]}
                scale={1}
              >
                <meshPhongMaterial
                  attach="material"
                  map={marmol}
                  color={hovered ? N.green : `${p.color}`}
                />
              </Cylinder>
            </group>
          </>
        </group>
      ) : null}
    </>
  );
}
