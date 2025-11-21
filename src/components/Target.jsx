import React, { Suspense } from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Error boundary component to catch errors during rendering
class TargetErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('TargetErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return <TargetFallback {...this.props} />;
        }

        return this.props.children;
    }
}

// Fallback component with same animation
const TargetFallback = (props) => {
    const targetRef = React.useRef();

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'none',
            });
        }
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" transparent opacity={0.5} />
        </mesh>
    );
};

// Component that handles the model loading safely
const TargetModel = (props) => {
    const targetRef = React.useRef();
    const [gltf, setGltf] = React.useState(null);

    React.useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(
            'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
            (gltf) => {
                setGltf(gltf);
            },
            undefined, // onProgress callback
            (error) => {
                console.error('Error loading GLTF model:', error);
                // If there's an error, we don't set the gltf, so fallback will be shown
            }
        );
    }, []);

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'none',
            });
        }
    });

    if (!gltf) {
        // Show fallback while model is loading or if it fails to load
        return <TargetFallback {...props} ref={targetRef} />;
    }

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <primitive object={gltf.scene} dispose={null} />
        </mesh>
    );
};

// Main component that combines error handling and suspense
const Target = (props) => {
    return (
        <TargetErrorBoundary {...props}>
            <Suspense fallback={<TargetFallback {...props} />}>
                <TargetModel {...props} />
            </Suspense>
        </TargetErrorBoundary>
    );
};

export default Target
