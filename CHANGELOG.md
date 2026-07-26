# RAHEL STUDIO — 전문직 웹사이트 포지셔닝 수정 요약

## 1. 수정 파일

- `index.html`
- `services.html`
- `about.html`
- `works.html`
- `insight.html`
- `contact.html`
- `404.html`
- `assets/rahel.css`
- `assets/rahel.js` — `apply-rahel-update.py` 또는 `rahel-js-copy.patch`로 **카피만** 수정

## 2. 페이지별 주요 카피

### Home
- 최상단: **10년 이상 웹사이트의 품질을 평가해온 전문가에게 맡기세요.**
- Eyebrow: `PROFESSIONAL WEBSITE STUDIO`
- H1: **전문성을 신뢰로 바꾸는 / 전문직 웹사이트**
- 10+ YEARS / DESIGN / E-E-A-T 3대 강점 노출
- 세무·노무·회계·의료·교육·전문가 프로필 6개 전문 분야 추가
- “누구인지 / 무엇을 잘하는지 / 무엇을 해결하는지 / 왜 선택해야 하는지” 판단 구조 추가

### Services
- `STRATEGY → STRUCTURE → WEBSITE → CONTENT → IMPROVE` 5단계로 재구성
- 전문성 분석, 정보 구조, 디자인·제작, 신뢰 콘텐츠, 공개 후 개선 흐름으로 통일

### About
- **10년 동안 웹사이트를 평가했습니다. 이제 그 기준으로 웹사이트를 만듭니다.** 유지
- 디자인 전공 → 10년+ 품질 평가 → 정보·신뢰·콘텐츠·UX에 대한 관찰 → 전문직 웹사이트 설계로 이어지는 서사로 수정

### Works
- 모든 사례를 **Concept Project**로 명시
- 세무사 개인 브랜드 / 노무사·노무법인 / 병원·의원 / 학원 강사 개인 프로필 4개 프로젝트로 교체
- 각 프로젝트는 `Problem → Strategy` 중심으로 설명

### Insight
- 전문직 홈페이지, E-E-A-T, 검색 의도, 의료진 프로필, 전문가 프로필, CTA, 신뢰 콘텐츠 중심의 10개 주제로 교체

### Contact
- H1: **전문성을 제대로 보여주는 웹사이트가 필요하신가요?**
- 전문직 신규 제작·리뉴얼 상담으로 문구 통일
- 업종 예시도 세무사·노무사·회계사·병원·학원·강사로 변경

## 3. 제거·교체한 변호사 관련 문구

HTML 전체에서 변호사·법률 타깃 표현을 제거했습니다.

추가로 JavaScript 채팅 모달에 숨어 있던 업종 전용 문구도 교체합니다.
- 특정 법률 전문가 소개 → **전문가 소개**
- 특정 법률 콘텐츠 → **인사이트 · 콘텐츠**
- `About the lawyer` → **Expert profile**
- `Legal column` → **Insights & content**

채팅 디자인 옵션도 전문직 포지셔닝에 맞춰 신뢰 중심 / 정보 중심 / 의료·클리니컬 / 교육 친화형 등으로 정리했습니다.

## 4. SEO title / description

| 페이지 | Title | Meta description 방향 |
|---|---|---|
| Home | 전문직 웹사이트 제작 \| 세무사·노무사·회계사·병원·학원 \| RAHEL STUDIO | 10년+ 품질 평가 경험 + 디자인 전공 + 전문직 웹사이트 제작 |
| Services | 전문직 웹사이트 제작 서비스 \| 전략·구조·디자인·콘텐츠 \| RAHEL STUDIO | 전문성 분석부터 데이터 기반 개선까지 5단계 |
| About | About \| 10년+ 웹사이트 품질 평가 경험과 디자인 \| RAHEL STUDIO | 품질 평가 경험과 디자인 전공을 결합한 전문직 웹사이트 설계 |
| Works | 전문직 웹사이트 포트폴리오 \| 세무사·노무사·병원·강사 \| RAHEL STUDIO | 4개 전문 분야 Concept Project |
| Insight | 전문직 홈페이지 인사이트 \| E-E-A-T·신뢰·검색 의도 \| RAHEL STUDIO | 신뢰·검색 의도·프로필·CTA 중심 콘텐츠 |
| Contact | 전문직 웹사이트 제작 문의 \| RAHEL STUDIO | 전문직 신규 제작 및 리뉴얼 상담 |

추가로 주요 페이지에 canonical URL, `og:url`, 페이지별 Open Graph description을 설정했습니다. 실제 `<img>` 태그가 없는 현재 구조에서는 OG 이미지의 `og:image:alt`를 페이지 목적에 맞게 수정했습니다.

## 타이포그래피

기존 레이아웃은 유지하면서 한글 표시 제목의 과도한 음수 자간을 완화하고, 본문 자간과 행간을 조금 넓혀 더 시원하게 읽히도록 조정했습니다.
