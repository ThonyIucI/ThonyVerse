import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { gems } from "../components/Content/gems";
import Gem from "../components/Gem";

export default function Home() {
  return (
    <div
      style={{ height: "100vh", overflow: "hidden", backgroundColor: "black" }}
    >
      {/* <>
       <Head>
         <title>Portafolio</title>
        <meta
          name="description"
          content="Portafolio by thony, I am Mechanical electrical enginner and full stack developer"
        />
       <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Image
        src="/bg.jpg"
        alt="background image"
        width={1920}
        height={1080}
        layout="responsive"
      />> */}
      <Canvas>
        {/* <Stars count={1000} radius={30} /> */}
        <group>
          {gems.map((e) => (
            <Gem key={e.nameEN} color={e.color} position={e.position} />
          ))}
        </group>
        <ambientLight />
      </Canvas>
    </div>
  );
}
