import * as THREE from 'three';

var up = new THREE.Vector3(0, 0, 1);
let position = 0;

const FOOTSTEP_ANIMATION_TIME = 1;

export const createPath = () => {
  // the path
  const path = new THREE.Path();
  var arcRadius = 5;
  // path.moveTo(0, 0 - arcRadius);
  path.absarc(0, 0, arcRadius, -Math.PI * 2, Math.PI * 2, false);
  // path.lineTo(3, 3);
  // path.absarc(5, 5, -arcRadius, -Math.PI / 2, 0, false);
  // path.lineTo(-5, -5);

  return path;
};

export const drawPath = (path) => {
  var vertices = path.getSpacedPoints(20);

  // Change 2D points to 3D points
  for (var i = 0; i < vertices.length; i++) {
    const point = vertices[i];
    vertices[i] = new THREE.Vector3(point.x, point.y, 0);
  }
  var lineGeometry = new THREE.BufferGeometry().setFromPoints(vertices);
  var lineMaterial = new THREE.LineBasicMaterial({
    color: 0x000,
  });
  var line = new THREE.Line(lineGeometry, lineMaterial);
  return line;
};

export const move = (mesh, path, deltaTime, isLeft, nameMesh) => {
  // add up to position for movement
  position += 0.0002;

  // If we finish the path (the position is outside 0-1), reset the position with the differial
  if (!path.getPointAt(position)) {
    console.log(position);
    position = position - 1 + 0.0002;
  }
  var point = path.getPointAt(position);
  var angle = getAngle(path, position);

  // Change name mesh position
  // Same as feet, in case the position of the name is out of the path [0-1], we ajustate it
  const positionDifference = position - 0.08;
  const positionName =
    positionDifference < 0 ? 1 + positionDifference : positionDifference;
  var pointName = path.getPointAt(positionName);

  nameMesh.position.x = pointName.x;
  nameMesh.position.y = pointName.y;

  animateFootPrint(mesh, deltaTime, angle, point, isLeft);
};

export function animateFootPrint(obj, deltaTime, angle, point, isLeft) {
  if (obj.currentTimeAnimation >= FOOTSTEP_ANIMATION_TIME && obj.isAppearing) {
    obj.isAppearing = false;
  } else if (obj.currentTimeAnimation <= 0 && !obj.isAppearing) {
    obj.isAppearing = true;
    obj.position.x = point.x;
    obj.position.y = point.y;
    obj.quaternion.setFromAxisAngle(up, angle - Math.PI / 2);
    isLeft ? obj.translateX(-0.3) : obj.translateX(0.3);
  }

  obj.currentTimeAnimation = obj.isAppearing
    ? obj.currentTimeAnimation + deltaTime
    : obj.currentTimeAnimation - deltaTime;

  const newOpacity = obj.currentTimeAnimation / FOOTSTEP_ANIMATION_TIME;
  obj.material.opacity = newOpacity;
}

export function getAngle(path, position) {
  // get the 2Dtangent to the curve
  var tangent = path.getTangent(position).normalize();

  // change tangent to 3D
  const angle = Math.atan2(tangent.y, tangent.x);

  return angle;
}
