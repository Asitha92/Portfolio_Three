/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';
import PropTypes from 'prop-types';

import { CanvasLoader } from '../components';

function Ball({ imgUrl }) {
	const [decal] = useTexture([imgUrl]);

	return (
		<Float
			speed={1.75}
			rotationIntensity={1}
			floatIntensity={2}
		>
			<ambientLight intensity={0.75} />
			<directionalLight position={[0, 0, 0.1]} />
			<mesh
				castShadow
				receiveShadow
				scale={2.75}
			>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
}

function BallCanvas({ icon }) {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
}

BallCanvas.propTypes = {
	icon: PropTypes.string.isRequired,
};

Ball.propTypes = {
	imgUrl: PropTypes.string.isRequired,
};

export default BallCanvas;
