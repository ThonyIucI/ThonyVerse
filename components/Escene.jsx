import { Canvas } from "@react-three/fiber";
import React from "react";

function Escene({ children }) {
  return (
    <Canvas camera={{ position: [0, 200, 600] }} style={{ position: "fixed" }}>
      {children}
    </Canvas>
  );
}

export default Escene;
