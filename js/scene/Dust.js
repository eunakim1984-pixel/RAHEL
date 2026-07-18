// ===================================================================
// Dust.js — 빛에 반짝이며 천천히 떠다니는 미세 먼지 입자
// THREE.Points + 부드러운 스프라이트. 위로 아주 느리게 상승하고
// 좌우로 흔들리다 방 상단에 닿으면 바닥 근처로 재순환.
// ===================================================================

import * as THREE from "three";
import { CONFIG } from "../config.js";
import { makeSoftDot } from "../util/textures.js";

export function buildDust(scene, windowInfo) {
  const D = CONFIG.dust;
  const { w, h, d } = CONFIG.room;

  const count = D.count;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count); // 개별 위상
  const speeds = new Float32Array(count);

  // 빛줄기 근처(창 앞)에 밀도를 더 높게 뿌려 반짝임을 강조
  const center = windowInfo.center;
  for (let i = 0; i < count; i++) {
    const biasToLight = Math.random() < 0.5;
    let x, y, z;
    if (biasToLight) {
      x = center.x + (Math.random() - 0.5) * 4.0;
      y = 0.4 + Math.random() * (h - 0.8);
      z = center.z + 0.5 + Math.random() * 4.5;
    } else {
      x = (Math.random() - 0.5) * (w - 0.6);
      y = 0.3 + Math.random() * (h - 0.6);
      z = (Math.random() - 0.5) * (d - 0.6);
    }
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    seeds[i] = Math.random() * Math.PI * 2;
    speeds[i] = 0.5 + Math.random() * 1.2;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: D.color,
    size: D.size,
    map: makeSoftDot(),
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    fog: false,
  });

  const points = new THREE.Points(geo, mat);
  points.name = "Dust";
  points.frustumCulled = false;
  scene.add(points);

  const posAttr = geo.getAttribute("position");

  function update(dt, t) {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // 아주 느린 상승
      posAttr.array[i3 + 1] += D.driftSpeed * speeds[i] * dt;
      // 좌우/앞뒤 미세한 흔들림 (sin/cos)
      posAttr.array[i3] +=
        Math.sin(t * 0.3 * speeds[i] + seeds[i]) * D.swayAmount * dt;
      posAttr.array[i3 + 2] +=
        Math.cos(t * 0.24 * speeds[i] + seeds[i]) * D.swayAmount * dt * 0.7;

      // 천장에 닿으면 바닥 근처로 재순환
      if (posAttr.array[i3 + 1] > h - 0.2) {
        posAttr.array[i3 + 1] = 0.3;
      }
    }
    posAttr.needsUpdate = true;
  }

  return { points, update };
}
