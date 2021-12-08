// import "./style.css";
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { createPath, move } from './utils';
import { Character } from './Character';

const FOOTSTEP_ANIMATION_TIME = 1;

export const MaraudersMap = () => {
  const arcRadius = 5;

  const hpPath = new THREE.Path();
  hpPath.absarc(0, 0, arcRadius, -Math.PI * 2, Math.PI * 2, false);

  const grangerPath = new THREE.Path();
  grangerPath.lineTo(0, 0.8);
  grangerPath.quadraticCurveTo(0, 1, 0.2, 1);
  grangerPath.lineTo(1, 1);

  return (
    <>
      <SetCamera />
      <ambientLight intensity={0.2} />
      <directionalLight />
      {/* <primitive object={line} /> */}
      <Character characterName={'harry-potter'} path={hpPath} ratioName={2.5} />
      <Character
        characterName={'hermione-granger'}
        path={grangerPath}
        ratioName={5.8}
      />
    </>
  );
};

function SetCamera() {
  useFrame(({ clock, camera }) => {
    camera.position.z = 10;
  });

  return null;
}
