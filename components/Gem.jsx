import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
function Gem(p) {
  return (
    <group>
      <mesh position={p.position}>
        <dodecahedronGeometry />
        <meshStandardMaterial color={p.color} />
      </mesh>
      {/* <OrbitControls autoRotate /> */}
      <spotLight
        intensity={0.5}
        // position={[40, 50, 50]}
        // shadow-bias={-0.00005}
        // penumbra={1}
        // angle={Math.PI / 6}
        // shadow-mapSize-width={2048}
        // shadow-mapSize-height={2048}
        // castShadow
      />
      {/* <ambientLight /> */}
      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer>
      <OrbitControls />
    </group>
  );
}

export default Gem;
