import * as THREE from "three";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

import { contacts } from "./Content/contact";

function Moment({ data, zoomToView }) {
  const meshRef = useRef();

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "grab";
  }, [hover]);
  useFrame(({ clock }) => {
    meshRef.current.rotation.y -= 0.0015;
  });
  useLayoutEffect(() => {
    meshRef.current.position.x = data.position[0];
    meshRef.current.position.y = data.position[1];
    meshRef.current.position.z = data.position[2];
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
      onClick={() => {
        setClicked(!clicked);
        zoomToView(meshRef);
      }}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial color={data.color} />
      {hover || clicked ? (
        <Html distanceFactor={1}>
          <div className="content" style={{ height: 200, width: 200 }}>
            hello <br />
            {p.name}
          </div>
        </Html>
      ) : (
        ""
      )}
    </mesh>
  );
}

function Cloud({ momentsData }) {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState(true);
  const vec = new THREE.Vector3();
  useFrame((state) => {
    const step = 0.05;

    /*
    Need to find some way to lerp the lookAt
    */

    zoom ? vec.set(focus.x, focus.y, focus.z + 0.2) : vec.set(0, 0, 5);
    //
    state.camera.position.lerp(vec, step);
    // state.camera.lookAt(0, 0, 0);
    // state.camera.lookAt(focus.x, focus.y, focus.z)
    // Update to new position/lookAt
    // state.camera.updateProjectionMatrix();
  });

  // controls.setLookAt( positionX, positionY, positionZ, targetX, targetY, targetZ, true)

  const zoomToView = (focusRef) => {
    setZoom(!zoom);
    setFocus(focusRef.current.position);
  };

  return (
    <instancedMesh>
      {momentsData.map((moment, i) => {
        // Set position here so it isn't reset on state change
        // for individual moment.
        return <Moment key={i} data={moment} zoomToView={zoomToView} />;
      })}
    </instancedMesh>
  );
}

function App(p) {
  /*
  momentsArray is data that comes from elsewhere in the app
  but for this demo I just generate it here.
  */
  const momentsArray = contacts;

  return (
    <Canvas
      linear
      camera={{
        position: [0, 5, 5],
      }}
    >
      <ambientLight />
      <directionalLight position={[150, 150, 150]} intensity={0.55} />
      <Cloud momentsData={momentsArray} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
