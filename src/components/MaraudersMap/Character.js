import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { createPath, move } from './utils';

const FOOTSTEP_ANIMATION_TIME = 1;

export const Character = ({ characterName, path, ratioName }) => {
  const [footPrintLeft, footprintRight, name] = useLoader(TextureLoader, [
    `/images/marauder-map/footprint-left.png`,
    `/images/marauder-map/footprint-right.png`,
    `/images/marauder-map/${characterName}-name.png`,
  ]);

  const nameRef = useRef(null);
  const footLeftRef = useRef(null);
  const footRightRef = useRef(null);

  let previousTime = 0;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = Math.abs(elapsedTime - previousTime);
    if (previousTime === 0) {
      footLeftRef.current.currentTimeAnimation = FOOTSTEP_ANIMATION_TIME;
      footRightRef.current.currentTimeAnimation = 0;
    }

    previousTime = elapsedTime;
    move(footLeftRef.current, path, deltaTime, true, nameRef.current);
    move(footRightRef.current, path, deltaTime, false, nameRef.current);
  });

  return (
    <group>
      <mesh ref={nameRef}>
        <planeGeometry args={[2.5, 2.5 / ratioName]} />
        <meshStandardMaterial map={name} transparent={true} />
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
  );
};
