// ===================================================================
// DogSpot.js — 강아지의 자리
// 방 한켠의 방석/침대와, 그 위를 감싸는 은은하게 숨쉬는 빛.
// 강아지 캐릭터(.glb)는 나중에 이 자리에 로드해 교체할 수 있게
// 자리만 비워두고 따뜻한 빛으로 존재를 암시한다.
// ===================================================================

import * as THREE from "three";
import { CONFIG } from "../config.js";

export function buildDogSpot(scene) {
  const group = new THREE.Group();
  group.name = "DogSpot";

  // 방 오른쪽 앞, 창빛이 부드럽게 닿는 자리
  const px = 2.1;
  const pz = 1.3;

  // 방석 (부드러운 러그 느낌 — 로우폴리 + 러프 재질)
  const cushionMat = new THREE.MeshStandardMaterial({
    color: 0x8a6a52,
    roughness: 0.95,
    metalness: 0,
  });
  const cushion = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 1.05, 0.22, 24),
    cushionMat
  );
  cushion.position.set(px, 0.11, pz);
  cushion.castShadow = true;
  cushion.receiveShadow = true;
  group.add(cushion);

  // 방석 안쪽 눌린 부분 (강아지가 눕던 자국)
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x6f5340,
    roughness: 1.0,
  });
  const inner = new THREE.Mesh(
    new THREE.CylinderGeometry(0.66, 0.72, 0.1, 24),
    innerMat
  );
  inner.position.set(px, 0.2, pz);
  inner.receiveShadow = true;
  group.add(inner);

  // 자리를 감싸는 은은한 빛 (강아지의 존재를 암시)
  const glow = new THREE.PointLight(0xffe0b0, 3.2, 3.4, 2);
  glow.position.set(px, 0.7, pz);
  group.add(glow);

  // 바닥에 부드럽게 번지는 빛 원반 (가산 블렌딩)
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0xffe6bc,
    transparent: true,
    opacity: 0.1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  const halo = new THREE.Mesh(new THREE.CircleGeometry(1.5, 48), haloMat);
  halo.rotation.x = -Math.PI / 2;
  halo.position.set(px, 0.24, pz);
  group.add(halo);

  scene.add(group);

  // 빛이 천천히 숨쉬듯 밝기 진동
  function update(t) {
    const b = 0.82 + Math.sin(t * 0.9) * 0.18;
    glow.intensity = 2.6 * b;
    haloMat.opacity = 0.08 + Math.sin(t * 0.9) * 0.03;
  }

  return { group, glow, position: new THREE.Vector3(px, 0, pz), update };
}
