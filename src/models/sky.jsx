/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

function Sky({ isRotating }) {
	const sky = useGLTF(skyScene);
	const skyRef = useRef();

	useFrame((_, delta) => {
		if (isRotating) {
			skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
		}
	});

	return (
		<mesh ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	);
}

export default Sky;
