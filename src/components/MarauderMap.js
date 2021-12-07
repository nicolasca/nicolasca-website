// import "./style.css";
import React, { useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';

const FOOTSTEP_ANIMATION_TIME = 1;
const FOOTSTEP_ANIMATION_SPEED = 0.2;

function animateFootPrint(obj, deltaTime) {
  if (obj.currentTimeAnimation >= FOOTSTEP_ANIMATION_TIME && obj.isAppearing) {
    obj.isAppearing = false;
  } else if (obj.currentTimeAnimation <= 0 && !obj.isAppearing) {
    obj.isAppearing = true;
    obj.position.y += FOOTSTEP_ANIMATION_SPEED * 2;
  }

  obj.currentTimeAnimation = obj.isAppearing
    ? obj.currentTimeAnimation + deltaTime
    : obj.currentTimeAnimation - deltaTime;

  const newOpacity = obj.currentTimeAnimation / FOOTSTEP_ANIMATION_TIME;
  obj.material.opacity = newOpacity;
}

export const MarauderMap = () => {
  const [footPrintLeft, footprintRight, hpName] = useLoader(TextureLoader, [
    '/images/marauder-map/footprint-left.png',
    '/images/marauder-map/footprint-right.png',
    '/images/marauder-map/harry-potter-name.png',
  ]);

  const hpNameRef = useRef(null);
  const footLeftRef = useRef(null);
  const footRightRef = useRef(null);

  let previousTime = 0;

  useFrame(({ clock }) => {
    if (previousTime === 0) {
      footLeftRef.current.currentTimeAnimation = FOOTSTEP_ANIMATION_TIME;
      footRightRef.current.currentTimeAnimation = 0;
    }

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = Math.abs(elapsedTime - previousTime);
    previousTime = elapsedTime;

    animateFootPrint(footLeftRef.current, deltaTime);
    animateFootPrint(footRightRef.current, deltaTime);
    hpNameRef.current.position.y +=
      deltaTime * FOOTSTEP_ANIMATION_TIME * FOOTSTEP_ANIMATION_SPEED;
  });

  return (
    <>
      <SetCamera />
      <ambientLight intensity={0.2} />
      <directionalLight />
      <group>
        <mesh ref={hpNameRef}>
          <planeGeometry args={[2.5, 1]} />
          <meshStandardMaterial map={hpName} transparent={true} />
        </mesh>
        <mesh ref={footLeftRef} position={[-0.3, 1.5, 0]} isAppearing={false}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial map={footPrintLeft} transparent={true} />
        </mesh>
        <mesh ref={footRightRef} position={[0.3, 1.7, 0]} isAppearing={true}>
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
