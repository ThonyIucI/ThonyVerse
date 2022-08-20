import * as THREE from "three";
import React, { useMemo, useRef, useLayoutEffect } from "react";
import { Text3D } from "@react-three/drei";
import rubik from "../public/Fonts/Pacifico_Regular.json";
import roboto from "../public/Fonts/roboto.json";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "../lavatile.jpg";

export default function TextMesh({
  vAlign = "center",
  hAlign = "center",
  size,
  ...p
}) {
  const texture = useLoader(TextureLoader, "textures/diamond.jpg");
  const config = useMemo(
    () => ({
      size: 10,
      height: 8,
      curveSegments: 32,
      // bevelEnabled: true,
      // bevelThickness: 6,
      // bevelSize: 2.5,
      // bevelOffset: 0,
      // bevelSegments: 8,
    }),
    []
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.position.x =
      hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
    mesh.current.position.y =
      vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
  }, [hAlign, vAlign, p.child]);

  return (
    <group
      {...p}
      scale={[0.1 * size, 0.1 * size, 0.01]}
      // rotation={p.rotation ? p.rotation : [0, 0, 0]}
    >
      <Text3D ref={mesh} font={p.font ? roboto : rubik} {...config}>
        {p.child}
        <meshStandardMaterial
          color={p.color}
          metalness={0.3}
          // attach="material"
          map={p.map}

          // vertexColors={true}
          // metalness={1}
          // roughnessMap="bricks"
        />
      </Text3D>
    </group>
  );
}
