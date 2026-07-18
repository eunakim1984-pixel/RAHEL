// ===================================================================
// Room.js — 방 뼈대: 바닥, 벽, 천장, 창문(역광 광원 판넬)
// 로우폴리 + PBR 재질 + 좋은 조명으로 감성 사실주의를 낸다.
// ===================================================================

import * as THREE from "three";
import { CONFIG } from "../config.js";
import {
  makeWoodFloor,
  makeWallTexture,
  makeSkyGradient,
} from "../util/textures.js";

export function buildRoom(scene) {
  const { w, h, d } = CONFIG.room;
  const group = new THREE.Group();
  group.name = "Room";

  // --- 바닥 (나무) ---
  const floorTex = makeWoodFloor();
  floorTex.repeat.set(2.2, 2.2);
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    roughness: 0.72,
    metalness: 0.02,
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);

  // --- 벽 재질 (부드러운 크림) ---
  const wallTex = makeWallTexture();
  wallTex.repeat.set(3, 2);
  const wallMat = new THREE.MeshStandardMaterial({
    map: wallTex,
    color: 0xf0e6d0,
    roughness: 0.94,
    metalness: 0.0,
    side: THREE.FrontSide,
  });

  // 뒷벽 (창문이 있는 벽, -Z)
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wallMat);
  backWall.position.set(0, h / 2, -d / 2);
  backWall.receiveShadow = true;
  group.add(backWall);

  // 왼쪽 벽 (-X)
  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(d, h), wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-w / 2, h / 2, 0);
  leftWall.receiveShadow = true;
  group.add(leftWall);

  // 오른쪽 벽 (+X)
  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(d, h), wallMat);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(w / 2, h / 2, 0);
  rightWall.receiveShadow = true;
  group.add(rightWall);

  // 천장 (살짝 어둡게 — 빛이 아래에서 위로 번지도록)
  const ceilMat = new THREE.MeshStandardMaterial({
    color: 0xcdbfa4,
    roughness: 1.0,
  });
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(w, d), ceilMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = h;
  group.add(ceiling);

  // --- 창문 (뒷벽에 뚫린 큰 창 + 역광 하늘 판넬) ---
  const win = buildWindow();
  group.add(win.group);

  scene.add(group);

  return {
    group,
    floor,
    walls: { backWall, leftWall, rightWall },
    window: win,
  };
}

/**
 * 창문: 프레임(나무) + 창살 + 창밖 하늘(emissive 판넬).
 * 하늘 판넬이 밝게 빛나며 역광/블룸/빛줄기의 광원 역할을 한다.
 */
function buildWindow() {
  const { h, d } = CONFIG.room;
  const group = new THREE.Group();
  group.name = "Window";

  const winW = 3.4;
  const winH = 3.0;
  const cx = -1.1; // 뒷벽에서 살짝 왼쪽
  const cy = h * 0.52;
  const z = -d / 2 + 0.02;

  // 창밖 하늘 (밝은 그라디언트, emissive)
  const skyTex = makeSkyGradient(CONFIG.sky.top, CONFIG.sky.bottom);
  const skyMat = new THREE.MeshStandardMaterial({
    map: skyTex,
    emissive: 0xffffff,
    emissiveMap: skyTex,
    emissiveIntensity: CONFIG.sky.emissive,
    roughness: 1,
    fog: false, // 하늘은 안개 영향 X — 창밖은 밝게
  });
  const sky = new THREE.Mesh(
    new THREE.PlaneGeometry(winW * 1.15, winH * 1.15),
    skyMat
  );
  sky.position.set(cx, cy, z - 0.25);
  sky.name = "WindowSky";
  group.add(sky);
  group.userData = { skyPanel: sky };

  // 나무 프레임
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x5b4632,
    roughness: 0.6,
    metalness: 0.05,
  });
  const t = 0.16; // 프레임 두께
  const frameParts = [
    // 상, 하, 좌, 우
    { w: winW + t * 2, h: t, x: cx, y: cy + winH / 2 },
    { w: winW + t * 2, h: t, x: cx, y: cy - winH / 2 },
    { w: t, h: winH, x: cx - winW / 2, y: cy },
    { w: t, h: winH, x: cx + winW / 2, y: cy },
    // 창살 (십자)
    { w: winW, h: t * 0.5, x: cx, y: cy },
    { w: t * 0.5, h: winH, x: cx, y: cy },
  ];
  frameParts.forEach((p) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(p.w, p.h, 0.14), frameMat);
    m.position.set(p.x, p.y, z + 0.04);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  });

  // 창틀 아래 선반(햇살 받는 지점) — 나중에 화분/촛불 올릴 자리
  const sillMat = new THREE.MeshStandardMaterial({
    color: 0x6b5238,
    roughness: 0.65,
  });
  const sill = new THREE.Mesh(
    new THREE.BoxGeometry(winW + t * 2, 0.14, 0.42),
    sillMat
  );
  sill.position.set(cx, cy - winH / 2 - 0.02, z + 0.22);
  sill.castShadow = true;
  sill.receiveShadow = true;
  group.add(sill);

  // 창문 중심/치수 정보 — 빛줄기/조명이 참조
  group.userData.center = new THREE.Vector3(cx, cy, z);
  group.userData.size = { w: winW, h: winH };

  return { group, center: group.userData.center, size: group.userData.size };
}
