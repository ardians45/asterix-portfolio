import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const NewModel = (props) => {
    const group = useRef();
    const { scene, animations } = useGLTF('/models/24_dizzying_space_travel_-_inktober2019.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        // Memutar animasi pertama yang ditemukan
        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.keys(actions)[0];
            actions[firstAction].reset().fadeIn(0.5).play();
        }
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
};

useGLTF.preload('/models/24_dizzying_space_travel_-_inktober2019.glb');

export default NewModel;