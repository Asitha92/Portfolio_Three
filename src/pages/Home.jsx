/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader, HomeInfo } from '../components';
import { Island, Sky, Plane, Fox, Bird } from '../models';

function Home() {
	const [currentStage, setCurrentStage] = useState(1);
	const [isRotating, setIsRotating] = useState(false);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	// Adjust island size for all screen sizes
	function adjustIslandForScreenSize() {
		let screenScale, screenPosition;
		let rotation = [0.1, 4.7, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
			// x, y , z axis
			screenPosition = [0, -6.5, -43.4];
		} else {
			screenScale = [1, 1, 1];
			screenPosition = [0, -6.5, -43.4];
		}

		return [screenScale, screenPosition, rotation];
	}

	function adjustBiplaneForScreenSize() {
		let screenScale, screenPosition;

		// If screen width is less than 768px, adjust the scale and position
		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -4, -4];
		}

		return [screenScale, screenPosition];
	}

	const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
	const [islandScale, islandPosition, islandRotation] =
		adjustIslandForScreenSize();

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? 'cursor-grabbing' : 'cursor-grab'
				}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					{/* this is similar to sun light */}
					<directionalLight
						position={[1, 1, 1]}
						intensity={1}
					/>
					{/* Illuminate all object without a shadow */}
					<ambientLight intensity={0.5} />
					<pointLight
						position={[10, 5, 10]}
						intensity={2}
					/>
					<spotLight
						position={[0, 50, 10]}
						angle={0.15}
						penumbra={1}
						intensity={2}
					/>
					{/* illuminate scene with gradient */}
					<hemisphereLight
						skyColor="#b1e1ff"
						groundColor="#000000"
						intensity={1}
					/>

					<Bird />
					<Sky isRotating={isRotating} />

					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
					<Plane
						isRotating={isRotating}
						position={biplanePosition}
						rotation={[0, 20.1, 0]}
						scale={biplaneScale}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
}

export default Home;
