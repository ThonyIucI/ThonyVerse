import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { gems } from "../components/Content/gems";
import Gem from "../components/Gem";
import { useRef, useState } from "react";
import TextMesh from "../components/TextMesh";
import gsap from "gsap";

import SvgModel from "../components/SvgModel";
import { contacts } from "../components/Content/contact";
function Jumbo(p) {
  const ref = useRef();

  useFrame(
    ({ clock }) =>
      // (ref.current.rotation.x = ref.current.rotation.y += 0.005)
      (ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.1)
  );
  // (ref.current.position.x = Math.sin(clock.getElapsedTime()) * 0.1),
  // (ref.current.position.y = Math.cos(clock.getElapsedTime()) * 0.1)

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

function Navbar(props) {
  const [text, setText] = useState({ name: "", color: "", link: "" }),
    [language, setLanguage] = useState("EN"),
    [cameraP, setCameraP] = useState([0, 0, 425]),
    [zoom, setZoom] = useState(false),
    [active, setActive] = useState(false);

  function handleZoom(e) {
    setZoom(!zoom);

    const tl = gsap.timeline();
    tl.to(e.camera.position, {
      x: 0,
      y: 0,
      z: 25,
      // x: cameraP[0],
      // y: cameraP[1],
      // z: cameraP[2],
      duration: 2,
      ease: "circ.out",
      // onUpdate: function () {
      //   e.camera.lookAt(0, 0, 0);
      // },
    });
    // .to(e.camera.position, {
    //   z: 200,
    //   x: e.camera.position.x + 50,
    //   y: e.camera.position.y + 50,
    //   duration: 1.5,
    //   ease: "power3.out",
    //   onUpdate: function () {
    //     e.camera.lookAt(0, 0, 0);
    //   },
    // })
  }

  return (
    <>
      {/* <>
       <Head>
         <title>Portafolio</title>
        <meta
          name="description"
          content="Portafolio by thony, I am Mechanical electrical enginner and full stack developer"
        />
       <link rel="icon" href="/favicon.ico" /> 
      </Head>*/}

      <Canvas camera={{ position: [0, 0, 425] }}>
        <ambientLight intensity={1.5} />
        <TextMesh
          hAlign="center"
          position={[0, 220, 0]}
          color="yellow"
          child={language === "ES" ? "Tocame" : "Click Me"}
          size={40}
          onClick={(e) => handleZoom(e)}
        />
        <Stars
          style={styles.stars}
          factor={zoom ? 2 : 6}
          count={800}
          radius={100}
        />

        <Jumbo {...text} />
        {gems.map((e) => (
          <Gem
            key={e.nameEN}
            {...e}
            setText={setText}
            language={language}
            active={active}
            setActive={setActive}
            camera={cameraP}
            setCameraP={setCameraP}
          />
        ))}
        {contacts?.map((e) => (
          <SvgModel key={e.name} {...e} active={active} setActive={setActive} />
        ))}

        <OrbitControls maxPolarAngle={2 * Math.PI} />
      </Canvas>
    </>
  );
}

export default Navbar;
