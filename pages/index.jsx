import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import { useState } from "react";

import Gems from "../components/Gems";
import { handleGoInto } from "../components/Content/functions";
import Intro from "../components/Intro";

export default function Homes() {
  const [text, setText] = useState({ name: "", color: "", link: "" }),
    [language, setLanguage] = useState("EN"),
    [factorStars, setFactorStars] = useState(6);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
      className={styles.bg}
    >
      <Canvas camera={{ position: [0, 0, 425] }}>
        <Html>
          <Intro />
        </Html>
        <ambientLight intensity={1.5} />
        {/* <TextMesh
          hAlign="center"
          position={[0, 220, 0]}
          color="yellow"
          child={language === "ES" ? "Tocame" : "Click Me"}
          size={40}
          onClick={(e) => handleGoInto(e, zoom, setFactorStars)}
        /> */}
        <Stars
          style={styles.stars}
          factor={factorStars}
          count={800}
          radius={120}
        />
        <Gems language={language} setFactorStars={setFactorStars} />
      </Canvas>
    </div>
  );
}
