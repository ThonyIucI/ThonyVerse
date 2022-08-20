import { Torus, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { N } from "./Content/gems";
import SkillModel from "./SkillModel";

function SkillSection(p) {
  const refRing = useRef(),
    refSkill = useRef(),
    [hovered, setHover] = useState(false),
    marmol = useTexture("/textures/marmol.jpg");
  useFrame(({ clock }) => {
    if (refSkill?.current?.rotation && !hovered) {
      refSkill.current.rotation.y -= 0.0015;
    }
  });
  return (
    <group ref={refSkill}>
      {p.array?.map((e) => (
        <SkillModel
          key={e.name}
          map={marmol}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
          colorRing={p.colorRing}
          hovered={hovered}
          setHover={setHover}
        />
      ))}
      <group ref={refRing} rotation={[Math.PI / 2, 0, 0]}>
        <Torus
          args={p.center ? [0, 0, 0] : [p.radius, 0.9, 2, 15]}
          position={p.position}
          color={p.colorRing}
        >
          <meshPhongMaterial
            attach="material"
            color={hovered ? N.yellow : p.colorRing}
            map={marmol}
            wireframe
          />
        </Torus>
      </group>
    </group>
  );
}

export default SkillSection;
