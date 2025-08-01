/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from '../components';
import PropTypes from 'prop-types';

const Computers = ({ isMobile }) => {
	const computer = useGLTF('src/assets/3d/desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight
				intensity={3.25}
				groundColor="black"
			/>
			<spotLight
				position={[-20, 50, 10]}
				angle={0.5}
				penumbra={3}
				intensity={2}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={6} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.5 : 0.75}
				position={isMobile ? [0, -2, -1.5] : [0, -3.75, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia('(max-width: 500px)');

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

Computers.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};

export default ComputersCanvas;
