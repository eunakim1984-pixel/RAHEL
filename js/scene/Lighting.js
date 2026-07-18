// ===================================================================
// Lighting.js — 조명 세팅
// 창에서 들어오는 따뜻한 메인 방향광 + 낮은 앰비언트 + 힘미스피어.
// 골든아워, 부드러운 그림자.
// ===================================================================

import * as THREE from "three";
import { CONFIG } from "../config.js";

export function setupLighting(scene, windowInfo) {
  const L = CONFIG.light;
  const lights = {};

  // 앰비언트 — 그림자 속도 완전히 어둡지 않게
  lights.ambient = new THREE.AmbientLight(L.ambientColor, L.ambientIntensity);
  scene.add(lights.ambient);

  // 힘미스피어 — 하늘/바닥 반사 힌트로 자연스러운 색
  lights.hemi = new THREE.HemisphereLight(
    L.hemiSky,
    L.hemiGround,
    L.hemiIntensity
  );
  lights.hemi.position.set(0, CONFIG.room.h, 0);
  scene.add(lights.hemi);

  // 메인 방향광 — 창 바깥에서 방 안으로 (골든아워)
  const sun = new THREE.DirectionalLight(L.sunColor, L.sunIntensity);
  sun.position.set(...L.sunPosition);
  // 창을 향해(방 안쪽 중앙 낮은 지점) 겨냥
  sun.target.position.set(1.5, 1.0, 2.0);
  scene.add(sun.target);

  if (CONFIG.renderer.shadows) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(
      CONFIG.renderer.shadowMapSize,
      CONFIG.renderer.shadowMapSize
    );
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 30;
    const s = 8;
    sun.shadow.camera.left = -s;
    sun.shadow.camera.right = s;
    sun.shadow.camera.top = s;
    sun.shadow.camera.bottom = -s;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    sun.shadow.radius = 4; // 부드러운 그림자 (PCFSoft)
  }
  lights.sun = sun;
  scene.add(sun);

  // 창가 필-라이트 — 창 근처를 은은하게 밝혀 역광 느낌 강화
  const winCenter = windowInfo?.center || new THREE.Vector3(-1.1, 2.6, -3.98);
  const fill = new THREE.PointLight(0xffdca6, 6.0, 9, 1.8);
  fill.position.set(winCenter.x, winCenter.y, winCenter.z + 0.6);
  lights.windowFill = fill;
  scene.add(fill);

  return lights;
}

/**
 * 벽 액자·아이템 주변 시선 유도용 은은한 포인트 라이트를 추가.
 * (액자/물건을 채워 넣을 때 위치를 넘겨 호출)
 */
export function addAccentLight(scene, position, color = 0xffd9a0, intensity = 2.2, distance = 3) {
  const p = new THREE.PointLight(color, intensity, distance, 2);
  p.position.copy(position);
  scene.add(p);
  return p;
}
