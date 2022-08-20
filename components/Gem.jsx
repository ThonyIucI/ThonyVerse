import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useFrame } from "@react-three/fiber";
import {
  Box,
  Dodecahedron,
  PerspectiveCamera,
  Tetrahedron,
  useTexture,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { useSpring, animated } from "@react-spring/three";

import TextMesh from "./TextMesh";
import gsap from "gsap";
import SvgModel from "./SvgModel";
import { contacts } from "./Content/contact";
import Children from "./Children";
import { handleGoInto } from "./Content/functions";

function Gem(p) {
  const refGem = useRef(),
    refText = useRef(),
    refBox = useRef(),
    [hovered, setHover] = useState(false),
    [factor, setFactor] = useState(1.2),
    [active, setActive] = useState({ val: false, scale: 10 }),
    [rotating, setRotating] = useState(true),
    texture = useLoader(TextureLoader, "textures/diamond.jpg"),
    spri = useSpring();

  useFrame(({ clock }) => {
    if (refGem && rotating) {
      // refGem.current.rotation.y += 0.001;
      refText.current.rotation.y -= 0.001;
      // (mesh1.current.rotation.x += p.center ? 0 : 0.001);
    }
  });
  useLayoutEffect(() => {
    refGem.current.position.x = p.position[0];
    refGem.current.position.y = p.position[1];
    refGem.current.position.z = p.position[2];
    refText.current.position.x = 0;
    refText.current.position.y = 30;
    refText.current.position.z = 0;
  });
  function handleHoverIn(e) {
    setHover(true);
    setFactor(1.3);
    p.setText({
      name: e.object.name,
      link: e.object.link,
      color: e.object.color,
    });
  }
  function handleHoverOut(e) {
    setHover(false);
    setFactor(1.2);
  }
  function focusGem(e) {
    const tl = gsap.timeline();
    tl.to(e.camera.position, {
      x: 0,
      y: 0,
      z: 30,
      duration: 2,
      ease: "circ.out",
    });
    // .to(active, {
    //   // x: active.scale,
    //   // y: active.scale,
    //   // z: active.scale,
    //   scale: 4,
    //   duration: 4,
    //   ease: "circ.out",
    // });
  }
  function restartAndFocus(e) {
    const tl = gsap.timeline();
    tl.to(e.camera.position, {
      x: 0,
      y: 0,
      z: 150,
      // x: p.position[0],
      // y: p.position[1],
      // z: p.position[2],
      duration: 4,
      ease: "circ.out",
    });
    // .to(e.camera.position, {
    //   // x: active.scale,
    //   // y: active.scale,
    //   // z: active.scale,
    //   scale: 4,
    //   duration: 4,
    //   ease: "circ.out",
    // });
    // e.camera.lookAt(focus.x, focus.y, focus.z);
  }
  function adjustZ(e) {
    const tl = gsap.timeline();
    tl.to(e.camera.position, {
      z:
        e.camera.position.z < 0
          ? e.camera.position.z - 4
          : e.camera.position.z + 4,
      y: 10,
      duration: 4,
      ease: "circ.out",
    });
    // .to(e.camera.position, {
    //   // x: active.scale,
    //   // y: active.scale,
    //   // z: active.scale,
    //   scale: 4,
    //   duration: 4,
    //   ease: "circ.out",
    // });
    // e.camera.lookAt(focus.x, focus.y, focus.z);
  }
  useFrame((state, delta) => {
    state.camera.lookAt(refGem.current.position);
    state.camera.updateProjectionMatrix();
  });
  function handleSelect(e) {
    p.setActiveBorder(e.object.idn === "contact" ? false : true);
  }
  function handleZoomGem(e) {
    const tl = gsap.timeline();
    tl.to(e.camera.position, {
      x: refGem.current.matrixWorld.elements[12] * 1.6,
      y: refGem.current.matrixWorld.elements[13] + 20,
      z: refGem.current.matrixWorld.elements[14] * 1.6,
      duration: 2,
      ease: "circ.out",
    });
  }
  function handleClick(e) {
    // console.log(refGem.current.position);
    setActive({ val: true, scale: 2 });
    handleSelect(e);
    e.object.idn === "contact" ? handleGoInto(e) : handleZoomGem(e);
    // console.log("p", p.position);
    // console.log("ref", refBox.current.position);
    // console.log("ref", refBox);
    // console.log("refRot", refText);
    // console.log("gem", refGem.current.matrixWorld.elements);
  }

  return (
    <>
      <group ref={refGem}>
        <group ref={refText}>
          <TextMesh
            hAlign="center"
            color={p.color}
            child={p.language === "ES" ? p.linkES : p.linkEN}
            size={14}
            map={useTexture("/textures/marmol.jpg")}
          />
        </group>

        {p.activeBorder ? (
          <PerspectiveCamera
            // makeDefault
            args={[45, 1.2, 1, 1000]}
            // far={5}
          />
        ) : null}
        <Dodecahedron
          ref={refBox}
          args={[1, 0, 0]}
          // position={p.position}
          scale={active.scale * factor}
          onClick={(e) => handleClick(e)}
          onPointerOver={(e) => handleHoverIn(e)}
          onPointerOut={() => handleHoverOut()}
          name={p[`language${p.language}`]}
          link={p[`link${p.language}`]}
          color={p.color}
          idn={p.id}
        >
          <meshStandardMaterial
            attach="material"
            map={texture}
            color={hovered ? `yellow` : p.color}
            wireframe
            transparent
          />
        </Dodecahedron>
        {p.center ? (
          <>
            <directionalLight
              position={[p.position[0], p.position[1] + 40, p.position[2]]}
              // color={p.color}
              intensity={2}
              distance={150}
              power={100}
              decay={2}
            />
            {/* <pointLight
              position={[p.position[0], p.position[1] + 40, p.position[2]]}
              // color={p.color}
              intensity={2}
              distance={150}
              power={100}
              decay={2}
            /> */}
            <Box
              ref={refBox}
              args={[1, 1, 1]}
              // position={p.position}
              scale={active.scale * factor}
              onClick={(e) => handleClick(e)}
              onPointerOver={(e) => handleHoverIn(e)}
              onPointerOut={() => handleHoverOut()}
              name={p[`language${p.language}`]}
              link={p[`link${p.language}`]}
              color={p.color}
              idn={p.id}
            >
              <meshStandardMaterial
                map={texture}
                attach="material"
                color={hovered ? `${p.color}` : p.color}
                emissive={1}
                transparent
              />
            </Box>
          </>
        ) : (
          // <animated.mesh position={p.position} scale={scale}>
          //   <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          //   <meshNormalMaterial attach="material" />
          // </animated.mesh>
          <>
            <pointLight
              position={[p.position[0] - 2, p.position[1], p.position[2] - 2]}
              // color={p.color}
              intensity={2}
              distance={150}
              power={200}
              decay={2}
            />
            <Tetrahedron
              args={[1, 1, 1]}
              // position={p.position}
              scale={active.scale * factor}
              onClick={(e) => handleClick(e)}
              onPointerOver={() => setHover(true)}
              onPointerOut={() => setHover(false)}
            >
              <meshStandardMaterial
                metalness={0.5}
                roughness={1}
                map={texture}
                attach="material"
                color={hovered ? `${p.color}` : p.color}
                transparent
              />
            </Tetrahedron>
          </>
        )}
        <Children
          {...p}
          language={p.language}
          active={active}
          setActive={setActive}
        />
      </group>
    </>
  );
}

export default Gem;
