import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";

import Gems from "../components/Gems";
import { handleGoInto } from "../components/Content/functions";
import gsap from "gsap";
import Intro from "../components/Intro";
function IntroCamera(p) {
  const { camera } = useThree();
  return (
    <Html fullscreen>
      <Intro
        camera={camera}
        language={p.language}
        click={p.click}
        setClick={p.setClick}
      />
    </Html>
  );
}
export default function Homes() {
  const [click, setClick] = useState(false),
    [language, setLanguage] = useState("EN"),
    [factorStars, setFactorStars] = useState(10);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
      className={styles.bg}
    >
      <Canvas
        camera={{ position: [0, 200, 600] }}
        style={{ position: "fixed" }}
      >
        <group position={[0, 0, 0]}>
          <ambientLight intensity={1.5} />
          {/*  <TextMesh
          hAlign="center"
          position={[0, 220, 0]}
          color="yellow"
          child={language === "ES" ? "Tocame" : "Click Me"}
          size={40}
          onClick={(e) => handleGoInto(e, zoom, setFactorStars)}
        />  */}
          <Stars
            style={styles.stars}
            factor={factorStars}
            count={800}
            radius={300}
          />
          <Gems language={language} setFactorStars={setFactorStars} />

          <OrbitControls
            // maxPolarAngle={[2 * Math.PI, 2 * Math.PI, 2 * Math.PI]}
            // position={[0, 0, 0]}
            maxPolarAngle={2 * Math.PI}
            // autoRotate={click ? false : true}
            enableZoom={click ? true : false}
            // rotateSpeed={click ? 0.0005 : 0}
            // enableRotate
          />

          {click ? null : (
            <IntroCamera
              language={language}
              click={click}
              setClick={setClick}
            />
          )}
        </group>
      </Canvas>
    </div>
  );
}
