/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { a } from '@react-spring/three';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import islandScene from '../assets/3d/island.glb';

function Island({ isRotating, setIsRotating, setCurrentStage, ...props }) {
	const islandRef = useRef();
	// Get access to the Three.js renderer and viewport
	const { gl, viewport } = useThree();
	const { nodes, materials } = useGLTF(islandScene);

	// Use a ref for the last mouse x position
	const lastX = useRef(0);
	// Use a ref for rotation speed
	const rotationSpeed = useRef(0);
	// Define a damping factor to control rotation damping
	const dampingFactor = 0.95;

	// Handle pointer (mouse or touch) down event
	const handlePointerDown = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setIsRotating(true);

		// Calculate the clientX based on whether it's a touch event or a mouse event
		const clientX = event.touches ? event.touches[0].clientX : event.clientX;

		// Store the current clientX position for reference
		lastX.current = clientX;
	};

	// Handle pointer (mouse or touch) up event
	const handlePointerUp = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setIsRotating(false);
	};

	// Handle pointer (mouse or touch) move event
	const handlePointerMove = (event) => {
		event.stopPropagation();
		event.preventDefault();
		if (isRotating) {
			// If rotation is enabled, calculate the change in clientX position
			const clientX = event.touches ? event.touches[0].clientX : event.clientX;

			// calculate the change in the horizontal position of the mouse cursor or touch input,
			// relative to the viewport's width
			const delta = (clientX - lastX.current) / viewport.width;

			// Update the island's rotation based on the mouse/touch movement
			islandRef.current.rotation.y += delta * 0.01 * Math.PI;

			// Update the reference for the last clientX position
			lastX.current = clientX;

			// Update the rotation speed
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	// Handle keydown events
	const handleKeyDown = (event) => {
		if (event.key === 'ArrowLeft') {
			if (!isRotating) setIsRotating(true);

			islandRef.current.rotation.y += 0.005 * Math.PI;
			rotationSpeed.current = 0.007;
		} else if (event.key === 'ArrowRight') {
			if (!isRotating) setIsRotating(true);

			islandRef.current.rotation.y -= 0.005 * Math.PI;
			rotationSpeed.current = -0.007;
		}
	};

	// Handle keyup events
	const handleKeyUp = (event) => {
		if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
			setIsRotating(false);
		}
	};

	// Touch events for mobile devices
	const handleTouchStart = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(true);

		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		lastX.current = clientX;
	};

	const handleTouchEnd = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(false);
	};

	const handleTouchMove = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (isRotating) {
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;
			const delta = (clientX - lastX.current) / viewport.width;

			islandRef.current.rotation.y += delta * 0.01 * Math.PI;
			lastX.current = clientX;
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	useEffect(() => {
		// Add event listeners for pointer and keyboard events
		const canvas = gl.domElement;
		canvas.addEventListener('pointerdown', handlePointerDown);
		canvas.addEventListener('pointerup', handlePointerUp);
		canvas.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		canvas.addEventListener('touchstart', handleTouchStart);
		canvas.addEventListener('touchend', handleTouchEnd);
		canvas.addEventListener('touchmove', handleTouchMove);

		// Remove event listeners when component unmounts
		return () => {
			canvas.removeEventListener('pointerdown', handlePointerDown);
			canvas.removeEventListener('pointerup', handlePointerUp);
			canvas.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
			canvas.removeEventListener('touchstart', handleTouchStart);
			canvas.removeEventListener('touchend', handleTouchEnd);
			canvas.removeEventListener('touchmove', handleTouchMove);
		};
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

	// This function is called on each frame update
	useFrame(() => {
		// If not rotating, apply damping to slow down the rotation (smoothly)
		if (!isRotating) {
			// Apply damping factor
			rotationSpeed.current *= dampingFactor;

			// Stop rotation when speed is very small
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}

			islandRef.current.rotation.y += rotationSpeed.current;
		} else {
			// When rotating, determine the current stage based on island's orientation
			const rotation = islandRef.current.rotation.y;

			const normalizedRotation =
				((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Set the current stage based on the island's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});

	return (
		// {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
		<a.group
			ref={islandRef}
			{...props}
		>
			<mesh
				geometry={nodes.polySurface944_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface945_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface946_tree2_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface947_tree1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface948_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.polySurface949_tree_body_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				geometry={nodes.pCube11_rocks1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
		</a.group>
	);
}

export default Island;
