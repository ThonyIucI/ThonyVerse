import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState } from "react";
import TextMesh from "../components/TextMesh";
import Gems from "../components/Gems";
import { handleGoInto } from "../components/Content/functions";

export default function Homes() {
  const [text, setText] = useState({ name: "", color: "", link: "" }),
    [language, setLanguage] = useState("EN"),
    [factorStars, setFactorStars] = useState(6);

  return (
    <>
      <div className="startmage" style={{ position: "fixed" }}>
        {/* <Image
          src="/Bitmojis/laptopWave.png"
          alt="xd"
          width={300}
          height={300}
          // layout="responsive"
        /> */}
      </div>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          //   // backgroundColor: "black",
          //   backgroundColor: "#4158D0",
          //   backgroundImage:
          //     "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        }}
        className={styles.bg}
      >
        <Canvas camera={{ position: [0, 0, 425] }}>
          <ambientLight intensity={1.5} />
          {/* <pointLight position={[0, 0, 0]} /> */}
          {/* <spotLightHelper /> */}
          {/* Text to go inside the universe */}{" "}
          {/* <pointLight
            position={[0, 20, 0]}
            // color={N.blue}
            intensity={2}
            distance={200}
            power={50}
          /> */}
          <TextMesh
            hAlign="center"
            position={[0, 220, 0]}
            color="yellow"
            child={language === "ES" ? "Tocame" : "Click Me"}
            size={40}
            onClick={(e) => handleGoInto(e, zoom, setFactorStars)}
          />
          <Stars
            style={styles.stars}
            factor={factorStars}
            count={800}
            radius={90}
          />
          <Gems language={language} setFactorStars={setFactorStars} />
        </Canvas>
      </div>
      <br />
    </>
  );
}
