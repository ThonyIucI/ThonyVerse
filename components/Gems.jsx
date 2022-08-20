import styles from "../styles/Home.module.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { gems } from "../components/Content/gems";
import Gem from "../components/Gem";
import { useEffect, useRef, useState } from "react";
import TextMesh from "../components/TextMesh";

function GemName(p) {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.1)
  );

  return (
    <group ref={ref}>
      <TextMesh
        hAlign="center"
        position={[0, 120, -1]}
        color={p.color}
        child={p.name}
        size={25}
      />
    </group>
  );
}

function Gems(p) {
  const { camera } = useThree();
  useEffect(() => {
    if (camera.position.z < 400) p.setFactorStars(2);
  }, [p, camera.position]);

  const [text, setText] = useState({ name: "", color: "", link: "" }),
    [cameraP, setCameraP] = useState([0, 0, 425]),
    refGems = useRef(),
    [activeBorder, setActiveBorder] = useState(
      false
      // position: [0, 120, 900],}
    );

  useFrame(({ clock }) => {
    if (refGems && !activeBorder) {
      refGems.current.rotation.y += 0.001;
      // refText.current.rotation.y += 0.001;
      // (mesh1.current.rotation.x += p.center ? 0 : 0.001);
    }
  });
  //   console.log(refGems);
  return (
    <>
      {/* Slected Gem name  */}
      <GemName {...text} />

      <instancedMesh ref={refGems}>
        {gems.map((e) => (
          <Gem
            key={e.nameEN}
            {...e}
            setText={setText}
            language={p.language}
            camera={cameraP}
            setCameraP={setCameraP}
            activeBorder={activeBorder}
            setActiveBorder={setActiveBorder}
          />
        ))}
      </instancedMesh>

      <OrbitControls
        maxPolarAngle={2 * Math.PI}
        // autoRotate={selected.active ? true : false}
        // rotateSpeed={0.0005}
      />
    </>
  );
}

export default Gems;
