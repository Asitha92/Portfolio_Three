/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';
function Plane({ isRotating, ...props }) {
	const ref = useRef();
	// Load the 3D model and its animations
	const { scene, animations } = useGLTF(planeScene);
	const { actions } = useAnimations(animations, ref);

	useEffect(() => {
		if (isRotating) {
			actions['Take 001'].play();
		} else {
			actions['Take 001'].stop();
		}
	}, [actions, isRotating]);

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<primitive object={scene} />
		</mesh>
	);
}

export default Plane;
