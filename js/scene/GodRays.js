// ===================================================================
// GodRays.js — 창문에서 쏟아지는 빛줄기 (볼류메트릭 라이트 근사)
// 실제 볼류메트릭 대신, 창에서 방 안쪽으로 기울어진 가산(additive)
// 판넬 여러 장을 겹쳐 빛이 공기 중에 번지는 느낌을 낸다.
// 안개 + 블룸과 결합하면 사실적인 god ray 로 보인다. (모바일 친화적)
// ===================================================================

import * as THREE from "three";
import { CONFIG } from "../config.js";
import { makeRayGradient } from "../util/textures.js";

export function buildGodRays(scene, windowInfo) {
  if (!CONFIG.godRays.enabled) return { group: null, update: () => {} };

  const group = new THREE.Group();
  group.name = "GodRays";

  const rayTex = makeRayGradient();
  const center = windowInfo.center.clone();
  const { count, color, opacity } = CONFIG.godRays;

  const rays = [];
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshBasicMaterial({
      map: rayTex,
      color,
      transparent: true,
      opacity: opacity * (0.6 + Math.random() * 0.6),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      fog: false,
    });

    // 길고 가는 판넬 — 창에서 방 안쪽 바닥 방향으로 뻗음
    const len = 7 + Math.random() * 2.5;
    const wide = 0.5 + Math.random() * 0.9;
    const geo = new THREE.PlaneGeometry(wide, len);
    const ray = new THREE.Mesh(geo, mat);

    // 창 근처에서 시작, 살짝씩 흩뿌려 배치
    const spreadX = (Math.random() - 0.5) * windowInfo.size.w * 0.9;
    const spreadY = (Math.random() - 0.5) * windowInfo.size.h * 0.5;
    ray.position.set(
      center.x + spreadX,
      center.y + spreadY,
      center.z + 0.3
    );

    // 빛 방향: 창(뒤/위)에서 방 안(앞/아래)으로 기울여
    ray.rotation.x = Math.PI * 0.32 + (Math.random() - 0.5) * 0.12;
    ray.rotation.z = (Math.random() - 0.5) * 0.35;
    // 판넬을 대략 카메라 쪽으로 향하게(빌보드 유사) 초기 y 회전
    ray.rotation.y = (Math.random() - 0.5) * 0.5;

    // 길이 방향으로 원점 이동(창에서 뻗어나가도록 pivot 조정)
    ray.geometry.translate(0, -len / 2 + 0.4, 0);

    ray.userData.baseOpacity = mat.opacity;
    ray.userData.phase = Math.random() * Math.PI * 2;
    ray.userData.speed = 0.25 + Math.random() * 0.4;
    rays.push(ray);
    group.add(ray);
  }

  scene.add(group);

  // 빛줄기가 아주 미세하게 밝기 진동 — 공기 흐름 느낌
  function update(t) {
    for (const ray of rays) {
      const flick =
        0.82 + Math.sin(t * ray.userData.speed + ray.userData.phase) * 0.18;
      ray.material.opacity = ray.userData.baseOpacity * flick;
    }
  }

  return { group, rays, update };
}
