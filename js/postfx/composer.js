// ===================================================================
// composer.js — 후처리 파이프라인
// RenderPass → UnrealBloom(빛 번짐) → Vignette(가장자리 어둡게)
//            → Output(ACES 톤매핑 + sRGB)
// 필름 같은 감성을 위한 최종 룩.
// ===================================================================

import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { CONFIG } from "../config.js";

// 커스텀 비네트 셰이더 (부드럽게 가장자리 어둡게 + 미세한 따뜻함)
const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 1.0 },
    darkness: { value: 1.15 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * vec2(offset);
      float vig = clamp(1.0 - dot(uv, uv) * darkness, 0.0, 1.0);
      vig = smoothstep(0.0, 1.0, vig);
      texel.rgb *= mix(0.72, 1.0, vig);
      gl_FragColor = texel;
    }
  `,
};

export function buildComposer(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const size = new THREE.Vector2();
  renderer.getSize(size);
  const bloom = new UnrealBloomPass(
    size,
    CONFIG.post.bloom.strength,
    CONFIG.post.bloom.radius,
    CONFIG.post.bloom.threshold
  );
  composer.addPass(bloom);

  const vignette = new ShaderPass(VignetteShader);
  vignette.uniforms.offset.value = CONFIG.post.vignette.offset;
  vignette.uniforms.darkness.value = CONFIG.post.vignette.darkness;
  composer.addPass(vignette);

  // OutputPass: renderer.toneMapping(ACES) + sRGB 변환을 마지막에 적용
  const output = new OutputPass();
  composer.addPass(output);

  return { composer, bloom, vignette, renderPass };
}
