// ===================================================================
// config.js — 전역 설정 · 품질 프로파일 · 에셋 경로
// 톤/성능/에셋을 한 곳에서 관리해 나중에 쉽게 교체·조정할 수 있게 함.
// ===================================================================

/**
 * 기기 성능을 대략 추정해 품질 프로파일을 고른다.
 * 저사양(모바일)은 볼류메트릭/그림자/먼지 품질을 낮춘다.
 */
function detectQuality() {
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;

  // 저사양 판정: 모바일이거나 코어/메모리가 낮은 경우
  const low = isMobile || cores <= 4 || mem <= 4;
  return low ? "low" : "high";
}

const QUALITY = detectQuality();

export const CONFIG = {
  quality: QUALITY,

  // 렌더러
  renderer: {
    // 톤매핑 노출 목표값(페이드인 시 0 → target 으로 상승)
    exposure: 1.05,
    maxPixelRatio: QUALITY === "high" ? 2 : 1.5,
    shadows: true,
    shadowMapSize: QUALITY === "high" ? 2048 : 1024,
  },

  // 안개 (공기감/깊이)
  fog: {
    color: 0x2a2015, // 따뜻한 세피아 톤
    density: 0.028,
  },

  // 조명
  light: {
    // 창에서 들어오는 메인 방향광 — 골든아워 느낌
    sunColor: 0xffdba0,
    sunIntensity: 3.4,
    sunPosition: [-6.5, 7.5, -9], // 창 바깥(뒤쪽)에서 방 안으로
    ambientColor: 0x3a2f22,
    ambientIntensity: 0.55,
    // 하늘/바닥 반사 힌트
    hemiSky: 0xffe7c2,
    hemiGround: 0x2a2018,
    hemiIntensity: 0.5,
  },

  // 창문 밖 하늘(역광 광원 판넬)
  sky: {
    top: "#fbe9c8",
    bottom: "#f6c98a",
    emissive: 2.6,
  },

  // 빛줄기 (god rays / volumetric)
  godRays: {
    enabled: true,
    count: QUALITY === "high" ? 7 : 4,
    color: 0xffe3ad,
    opacity: QUALITY === "high" ? 0.16 : 0.12,
  },

  // 떠다니는 먼지 입자
  dust: {
    count: QUALITY === "high" ? 900 : 380,
    color: 0xffe9c8,
    size: 0.045,
    driftSpeed: 0.04, // 위로 아주 천천히
    swayAmount: 0.25,
  },

  // 후처리
  post: {
    bloom: {
      strength: QUALITY === "high" ? 0.55 : 0.42,
      radius: 0.7,
      threshold: 0.82,
    },
    vignette: {
      offset: 1.0,
      darkness: 1.15,
    },
  },

  // 카메라 — 느리고 부드러운 움직임
  camera: {
    fov: 42,
    start: [3.4, 2.1, 5.6],
    target: [0, 1.4, -1.2],
    damping: 0.045, // 낮을수록 더 부드럽고 관성감
    minDistance: 2.2,
    maxDistance: 8.5,
    // 방 밖으로 시선이 새지 않도록 각도 제한
    minPolar: 0.55,
    maxPolar: 1.62,
    autoRotate: 0.06, // 아주 미세한 자동 회전(감성 연출)
  },

  // 방 치수 (w, h, d)
  room: { w: 8, h: 5, d: 8 },

  // 에셋 경로 — 나중에 사용자 업로드/실제 모델로 교체 가능
  assets: {
    // 예: frames: [{ src: "./assets/photo1.jpg", ... }]
    frames: [],
    dogModel: null, // "./assets/dog.glb" 넣으면 강아지 자리에 로드
  },
};

export const IS_LOW = QUALITY === "low";
