// ===================================================================
// textures.js — 캔버스 기반 절차적 텍스처 생성
// 외부 이미지 없이도 사실적인 재질감을 내기 위한 헬퍼.
// 나중에 실제 텍스처 파일로 교체하기 쉽도록 분리해 둠.
// ===================================================================

import * as THREE from "three";

/** 부드러운 원형 점 — 먼지/포인트 스프라이트용 */
export function makeSoftDot(size = 64) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 세로 선형 그라디언트 — 빛줄기(god ray) 판넬용 */
export function makeRayGradient(w = 32, h = 256) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  // 창(위)에서 시작해 아래로 흐려지고, 좌우로도 부드럽게 사라지게
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "rgba(255,255,255,0.85)");
  g.addColorStop(0.45, "rgba(255,255,255,0.28)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  // 좌우 페이드
  const side = ctx.createLinearGradient(0, 0, w, 0);
  side.addColorStop(0, "rgba(0,0,0,1)");
  side.addColorStop(0.5, "rgba(0,0,0,0)");
  side.addColorStop(1, "rgba(0,0,0,1)");
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = side;
  ctx.fillRect(0, 0, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 절차적 나무 바닥 — 따뜻한 우드톤 + 결/판자 이음새 */
export function makeWoodFloor(size = 1024, planks = 7) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");

  // 베이스
  ctx.fillStyle = "#6b4f34";
  ctx.fillRect(0, 0, size, size);

  const plankH = size / planks;
  for (let p = 0; p < planks; p++) {
    const y = p * plankH;
    // 판자마다 살짝 다른 색조
    const base = 60 + Math.random() * 26;
    ctx.fillStyle = `hsl(${28 + Math.random() * 8}, 34%, ${base * 0.5}%)`;
    ctx.fillRect(0, y, size, plankH);

    // 나뭇결 (가로로 흐르는 얇은 선들)
    const grains = 40;
    for (let i = 0; i < grains; i++) {
      const gy = y + Math.random() * plankH;
      ctx.strokeStyle = `rgba(40,26,14,${0.04 + Math.random() * 0.08})`;
      ctx.lineWidth = 0.5 + Math.random() * 1.4;
      ctx.beginPath();
      ctx.moveTo(0, gy);
      let cx = 0;
      while (cx < size) {
        const nx = cx + 40 + Math.random() * 80;
        ctx.lineTo(nx, gy + (Math.random() - 0.5) * 3);
        cx = nx;
      }
      ctx.stroke();
    }
    // 판자 이음새 (어두운 홈)
    ctx.strokeStyle = "rgba(20,12,6,0.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 벽용 미세 얼룩/질감 — 완전히 평평하지 않게 */
export function makeWallTexture(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#e8dcc4";
  ctx.fillRect(0, 0, size, size);
  // 은은한 얼룩
  for (let i = 0; i < 2600; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 2.4;
    ctx.fillStyle = `rgba(${180 + Math.random() * 40},${
      160 + Math.random() * 30
    },${120 + Math.random() * 30},${Math.random() * 0.05})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 창밖 하늘 — 위(밝은 크림) → 아래(따뜻한 금빛) 그라디언트 */
export function makeSkyGradient(top, bottom, w = 16, h = 256) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, top);
  g.addColorStop(1, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
