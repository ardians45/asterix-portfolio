import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../components/Developer.jsx';
import CanvasLoader from "../components/CanvasLoader.jsx";

// Canvas wrapper untuk Developer
const DeveloperCanvas = ({ animationName }) => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} />
      <directionalLight position={[10, 10, 20]} intensity={1} />

      <Suspense fallback={<CanvasLoader />}>
        <Developer position-y={-3} scale={3} animationName={animationName} />
      </Suspense>

      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default DeveloperCanvas;