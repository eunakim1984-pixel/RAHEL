# RAHEL STUDIO 전문직 웹사이트 카피 업데이트 적용

대상 브랜치: `claude/rahel-studio-responsive-5kvbtt`

## 적용 순서

1. 이 폴더의 아래 파일을 현재 프로젝트 루트에 덮어씁니다.
   - `index.html`
   - `services.html`
   - `about.html`
   - `works.html`
   - `insight.html`
   - `contact.html`
   - `404.html`
   - `assets/rahel.css`
2. 기존 `assets/rahel.js`의 기능은 유지하고 카피만 바꾸기 위해 프로젝트 루트에서 실행합니다.

```bash
git apply rahel-js-copy.patch
```

3. 금지 문구가 남아 있지 않은지 확인합니다.

```bash
grep -RniE '변호사|법률|법무|법률사무소|lawyer|attorney|law firm' --include='*.html' --include='*.js' .
```

결과가 없으면 완료입니다.

## 변경 원칙

- 기존 class 이름과 JS 동작 유지
- 레이아웃·애니메이션·반응형 구조 최대한 유지
- 카피, SEO 메타데이터, H1/H2, CTA 중심 수정
- 자간/행간은 기존 디자인을 해치지 않는 범위에서 완화
- Works는 실제 고객 사례가 아닌 `Concept Project`로 명시
