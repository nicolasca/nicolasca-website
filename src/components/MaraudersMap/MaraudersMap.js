// import "./style.css";
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { createPath, move } from './utils';

const FOOTSTEP_ANIMATION_TIME = 1;

export const MaraudersMap = () => {
  const [footPrintLeft, footprintRight, hpName] = useLoader(TextureLoader, [
    '/images/marauder-map/footprint-left.png',
    '/images/marauder-map/footprint-right.png',
    '/images/marauder-map/harry-potter-name.png',
  ]);

  const hpNameRef = useRef(null);
  const footLeftRef = useRef(null);
  const footRightRef = useRef(null);
  const groupRef = useRef(null);

  let previousTime = 0;

  const path = createPath();
  // const line = drawPath(path);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = Math.abs(elapsedTime - previousTime);
    if (previousTime === 0) {
      footLeftRef.current.currentTimeAnimation = FOOTSTEP_ANIMATION_TIME;
      footRightRef.current.currentTimeAnimation = 0;
    }

    previousTime = elapsedTime;

    move(footLeftRef.current, path, deltaTime, true, hpNameRef.current);
    move(footRightRef.current, path, deltaTime, false, hpNameRef.current);
  });

  return (
    <>
      <SetCamera />
      <ambientLight intensity={0.2} />
      <directionalLight />
      {/* <primitive object={line} /> */}
      <group ref={groupRef}>
        <mesh ref={hpNameRef}>
          <planeGeometry args={[2.5, 1]} />
          <meshStandardMaterial map={hpName} transparent={true} />
        </mesh>
        <mesh ref={footLeftRef} isAppearing={false}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial map={footPrintLeft} transparent={true} />
        </mesh>
        <mesh ref={footRightRef} isAppearing={false}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial map={footprintRight} transparent={true} />
        </mesh>
      </group>
    </>
  );
};

function SetCamera() {
  useFrame(({ clock, camera }) => {
    camera.position.z = 10;
  });

  return null;
}
