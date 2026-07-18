// ===================================================================
// main.js — 강아지의 방 3D 인테리어 · 오케스트레이터
// 씬/렌더러/카메라 구성, 방·조명·빛줄기·먼지·안개 조립,
// 후처리, 어둠→빛 페이드인, 부드러운 카메라, 리사이즈, 렌더 루프.
// ===================================================================

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CONFIG, IS_LOW } from "./config.js";
import { buildRoom } from "./scene/Room.js";
import { setupLighting } from "./scene/Lighting.js";
import { buildGodRays } from "./scene/GodRays.js";
import { buildDust } from "./scene/Dust.js";
import { buildComposer } from "./postfx/composer.js";
import { buildDogSpot } from "./scene/DogSpot.js";

// ---------- 기본 골격 ----------
const canvas = document.getElementById("scene");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !IS_LOW,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.renderer.maxPixelRatio));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = CONFIG.renderer.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
// 페이드인: 노출을 0에서 시작해 서서히 올림
renderer.toneMappingExposure = 0.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.fog.color);
scene.fog = new THREE.FogExp2(CONFIG.fog.color, CONFIG.fog.density);

const camera = new THREE.PerspectiveCamera(
  CONFIG.camera.fov,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(...CONFIG.camera.start);

// ---------- 컨트롤 (느리고 부드럽게) ----------
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = CONFIG.camera.damping;
controls.target.set(...CONFIG.camera.target);
controls.minDistance = CONFIG.camera.minDistance;
controls.maxDistance = CONFIG.camera.maxDistance;
controls.minPolarAngle = CONFIG.camera.minPolar;
controls.maxPolarAngle = CONFIG.camera.maxPolar;
controls.enablePan = false;
controls.rotateSpeed = 0.42; // 급격하지 않게
controls.zoomSpeed = 0.6;
controls.autoRotate = true;
controls.autoRotateSpeed = CONFIG.camera.autoRotate;

// ---------- 씬 조립 ----------
const room = buildRoom(scene);
const lights = setupLighting(scene, room.window);
const godRays = buildGodRays(scene, room.window);
const dust = buildDust(scene, room.window);
const dogSpot = buildDogSpot(scene); // 강아지의 자리 (은은한 빛으로)

// ---------- 후처리 ----------
const { composer } = buildComposer(renderer, scene, camera);

// ---------- 페이드인 연출 ----------
const targetExposure = CONFIG.renderer.exposure;
let fadeStart = null;
const FADE_MS = 2600;
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

function hideLoader() {
  const loader = document.getElementById("loader");
  const fade = document.getElementById("fade");
  const hud = document.getElementById("hud");
  const exit = document.getElementById("exit");
  loader.classList.add("hidden");
  fade.classList.add("lit");
  hud.classList.add("show");
  exit.classList.add("show");
}

// ---------- 리사이즈 ----------
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
}
window.addEventListener("resize", onResize);

// ---------- 나가기 버튼 (메인 천국 씬으로 — 현재는 페이드아웃 데모) ----------
document.getElementById("exit").addEventListener("click", () => {
  const fade = document.getElementById("fade");
  fade.classList.remove("lit");
  // 실제 서비스에서는 여기서 천국의 정원 메인 씬으로 라우팅
  setTimeout(() => {
    // 데모: 다시 밝아지도록
    fade.classList.add("lit");
  }, 1400);
});

// ---------- 상세 패널 닫기 ----------
document.querySelector(".detail-close")?.addEventListener("click", () => {
  document.getElementById("detail").classList.remove("show");
});

// ---------- 렌더 루프 ----------
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.getElapsedTime();

  // 페이드인: 노출 상승
  if (fadeStart === null) fadeStart = performance.now();
  const p = Math.min((performance.now() - fadeStart) / FADE_MS, 1);
  renderer.toneMappingExposure = targetExposure * easeOutCubic(p);

  controls.update();
  godRays.update(t);
  dust.update(dt, t);
  dogSpot.update(t);

  composer.render();
}

// 첫 프레임이 그려지면 로더를 걷어낸다
requestAnimationFrame(() => {
  animate();
  requestAnimationFrame(hideLoader);
});
