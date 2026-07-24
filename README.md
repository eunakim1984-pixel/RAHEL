# RAHEL Studio — Portfolio

**Designer & Creative Director** 포트폴리오 웹사이트.
애플(apple.com)을 모티브로 한 미니멀·모던·화이트 톤, 은은한 미래적 무드.
빌드 도구 없이 순수 HTML/CSS/JS로 만들어 **어디에나 올릴 수 있고, 아임웹에도 그대로 연동**됩니다.

---

## 웹사이트 기획안 (확정본)

### 1. 기본 정보
- **브랜드명:** Rahel Studio
- **한 줄 소개:** Designer & Creative Director
- **목적:** 포트폴리오 (전문직 대상 브랜딩·웹 기획 수주)
- **타겟 고객:** 변호사(법률사무소), 의사(병원), 회계사, 세무사, 부동산, 강사 등 전문직

### 2. 페이지 구성 (4 페이지)
| 페이지 | 파일 | 핵심 내용 |
|---|---|---|
| **Home** | `index.html` | 풀스크린 히어로(RAHEL · Designer & Creative Director), 작업 미리보기 3종, CTA |
| **Work** | `work.html` | WORK 01 Brand Identity · WORK 02 Web Design · WORK 03 Editorial |
| **About** | `about.html` | 소개(디자인과 졸업 → 브랜딩·기획 디자이너), 일하는 원칙, 타겟 고객, 진행 프로세스 |
| **Contact** | `contact.html` | 문의 폼(이메일 전송) + 연락처 |

### 3. 디자인 스타일
- 애플 웹사이트 무드: 화이트/오프화이트, 넉넉한 여백, 큰 타이포그래피
- 프로스티드 글래스 상단 내비게이션, 스크롤 등장 애니메이션
- 히어로의 은은한 오로라 그라디언트로 "미래적" 무드 (과하지 않게)
- 폰트: 시스템 폰트 스택 (애플 기기에선 SF Pro / Apple SD Gothic Neo로 렌더 → 애플 느낌 그대로)

### 4. 기능
- ✅ 내 소개 (About)
- ✅ 포트폴리오 (Work)
- ✅ 문의 폼 — 이메일 전송 (아임웹 폼 / Formspree / mailto 중 선택)
- ✅ 다국어 지원 (한국어 ⇄ English, 우측 상단 토글 · 선택값 저장)

---

## 폴더 구조
```
index.html      Home
work.html       Work (WORK 01/02/03)
about.html      About
contact.html    Contact (문의 폼)
css/style.css   디자인 시스템 + 전체 스타일
js/
  i18n.js       한국어/영어 번역 사전 + 언어 토글
  main.js       내비게이션 · 모바일 메뉴 · 스크롤 등장
  contact.js    문의 폼 전송 (엔드포인트 설정)
img/            실제 작업 이미지 넣는 곳 (지금은 CSS로 그린 커버 사용)
```

---

## 로컬에서 미리보기
정적 사이트라 아무 서버로나 열면 됩니다.
```bash
# 저장소 루트에서
python3 -m http.server 8000
# 또는
npx serve .
```
브라우저에서 `http://localhost:8000` 접속.
> 파일을 더블클릭(`file://`)으로 열어도 대부분 동작하지만,
> 안전하게는 위처럼 로컬 서버로 여는 걸 권장합니다.

---

## 문의 폼 이메일 연결 (3가지 중 택1)
`js/contact.js` 상단 `CONFIG` 를 수정합니다.

1. **아임웹 폼 (아임웹에 올릴 때 추천)** — 아래 "아임웹 연동" 참고.
2. **Formspree** (백엔드 없이 어디서나)
   - https://formspree.io 가입 → 폼 생성 → 폼 ID 복사
   - `CONFIG.endpoint = "https://formspree.io/f/XXXXXXX"` 로 설정
3. **mailto (기본값)** — `endpoint`를 비워두면 방문자의 메일 앱이 열리며
   `CONFIG.email` 주소로 작성됩니다. `CONFIG.email`을 본인 이메일로 바꾸세요.

---

## 아임웹(Imweb) 연동 방법

아임웹은 페이지 단위로 구성되므로, 이 사이트의 4개 페이지를 아임웹 메뉴 4개로 옮기면 됩니다.

### 방법 A. HTML 삽입 위젯 (가장 쉬움, 모든 요금제)
1. 아임웹 편집기에서 **홈 / Work / About / Contact** 메뉴(페이지)를 각각 만듭니다.
2. 각 페이지에 **[HTML 삽입]** (코드 삽입) 위젯을 추가합니다.
3. 해당 HTML 파일에서 `<body>` 안의 내용(내비게이션~푸터)을 복사해 붙여넣습니다.
4. `css/style.css`, `js/*.js` 는 아임웹 **[사이트 설정 → 코드 삽입(HEAD/BODY)]** 에
   한 번만 등록하면 전 페이지에 공통 적용됩니다.
   - CSS: `<link rel="stylesheet" href="파일주소/style.css">` 를 HEAD 에
   - JS: `i18n.js`, `main.js`, (문의 페이지엔) `contact.js` 를 BODY 하단에
   - 파일들은 아임웹 **파일 업로드** 또는 외부 호스팅(GitHub Pages 등) 주소로 연결.

### 방법 B. 개발자 모드 (Pro 이상)
아임웹 개발자 모드에서 스킨 HTML/CSS/JS를 직접 편집할 수 있으면,
각 페이지 템플릿에 그대로 이식하고 공통 CSS/JS는 레이아웃에 넣으면 됩니다.

### 문의 폼을 아임웹 폼으로 (권장)
아임웹은 자체 **폼/문의 위젯**이 있어 제출 내용이 관리자 DB에 저장되고 이메일로도 옵니다.
- Contact 페이지에서는 이 프로젝트의 `<form>` 대신 **아임웹 폼 위젯**을 넣는 걸 추천합니다.
- 디자인을 맞추고 싶다면, 아임웹 폼 위젯을 넣고 이 프로젝트의 `.form` / `.field` 클래스를
  참고해 스타일만 맞추면 됩니다.
- 그대로 이 폼을 쓰려면 위 "Formspree" 방식으로 엔드포인트를 연결하세요.

> ⚠️ 브라우저 보안(CSP)이나 요금제에 따라 아임웹에서 외부 JS 로딩이 제한될 수 있습니다.
> 그럴 땐 `i18n.js`의 번역 사전과 `main.js`의 스크립트를 페이지 HTML 하단
> `<script>` 태그 안에 인라인으로 넣으면 확실히 동작합니다.

---

## 내용 커스터마이징
- **텍스트/번역:** `js/i18n.js` 의 `DICT.ko` / `DICT.en` 에서 한 곳에서 수정.
- **작업 이미지:** 지금은 CSS로 그린 커버가 들어가 있습니다.
  실제 이미지를 넣으려면 `img/` 에 파일을 올리고, `work.html`/`index.html` 의
  `.cover ...` 블록을 `<img src="./img/파일명.jpg" alt="">` 로 교체하세요.
- **연락처/이메일:** `contact.html` 의 이메일과 `js/contact.js` 의 `CONFIG.email`.
- **색상/여백/폰트:** `css/style.css` 상단 `:root` 의 CSS 변수에서 일괄 조정.

---

## 이전 프로젝트에 대해
이 브랜치에는 예전에 "천국의 정원 · 강아지의 방" 3D 프로토타입이 있었습니다.
포트폴리오와 무관해 작업 트리에서는 제거했지만, **git 히스토리(커밋 `595feb4`)에 그대로 보존**되어
언제든 복원할 수 있습니다.
