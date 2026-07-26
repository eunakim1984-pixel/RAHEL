# RAHEL STUDIO — 소스 코드 정리본 (for ChatGPT)

정적 웹사이트 (순수 HTML/CSS/JS). 6개 페이지 + 공유 assets. GitHub Pages 배포.
Live: https://eunakim1984-pixel.github.io/RAHEL/

## 파일 구성
- `index.html`
- `works.html`
- `services.html`
- `about.html`
- `insight.html`
- `contact.html`
- `assets/rahel.css`
- `assets/rahel.js`
- `site.webmanifest`
- `robots.txt`
- `sitemap.xml`

---

## index.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>RAHEL STUDIO — 전문가의 강점을 선택받는 브랜드로</title>
<meta name="description" content="변호사·세무사·의사·강사·부동산 전문가를 위한 브랜드·웹사이트·콘텐츠. 10년간 웹사이트를 평가한 기준으로 전문가의 강점을 선택받는 브랜드로 만듭니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="RAHEL STUDIO — 전문가의 강점을 선택받는 브랜드로">
<meta property="og:description" content="전문직의 강점을 발견하고 브랜드·웹사이트·콘텐츠로 연결합니다. 10년간 웹사이트를 평가한 디자이너가 만듭니다.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="RAHEL STUDIO — 전문가의 강점을 선택받는 브랜드로">
<meta name="twitter:description" content="전문직의 강점을 발견하고 브랜드·웹사이트·콘텐츠로 연결합니다.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "RAHEL STUDIO",
      "description": "Brand strategy, website, and content for professionals, by a designer with 10+ years evaluating website quality.",
      "areaServed": "KR",
      "serviceType": ["Brand Strategy", "Website", "Content", "Growth"],
      "knowsLanguage": ["ko", "en"],
      "email": "eunakim1984@gmail.com",
      "address": { "@type": "PostalAddress", "addressLocality": "Seoul", "addressCountry": "KR" }
    },
    { "@type": "WebSite", "name": "RAHEL STUDIO", "inLanguage": ["ko", "en"] }
  ]
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-container rs-hero">
    <div class="rs-hero-copy">
      <div class="rs-eyebrow" data-ko="Strategy · Branding · Web Design" data-en="Strategy · Branding · Web Design">Strategy · Branding · Web Design</div>
      <h1 style="font-size:clamp(40px,5.6vw,86px);letter-spacing:-.02em;line-height:1.12" data-ko="전문가의 강점을<span class='soft'>선택받는 브랜드로.</span>" data-en="Turn expertise<span class='soft'>into a brand people choose.</span>"><span>전문가의 강점을</span><span class="soft">선택받는 브랜드로.</span></h1>
      <p class="rs-lead" data-ko="전문직의 강점을 발견하고 브랜드 · 웹사이트 · 콘텐츠로 연결합니다." data-en="We uncover a professional's strengths and connect them through brand, website, and content.">전문직의 강점을 발견하고 브랜드 · 웹사이트 · 콘텐츠로 연결합니다.</p>
      <p class="rs-eyebrow" style="margin-top:18px;color:var(--faint)" data-ko="변호사 · 세무사 · 의사 · 강사 · 부동산 전문가를 위한 브랜드 디자인" data-en="Brand design for lawyers, accountants, doctors, instructors & real-estate pros">변호사 · 세무사 · 의사 · 강사 · 부동산 전문가를 위한 브랜드 디자인</p>
      <div class="rs-hero-links">
        <a class="rs-link blue" href="works.html"><span data-ko="작업 보기" data-en="View work">작업 보기</span><span class="arrow">→</span></a>
        <a class="rs-link" href="about.html"><span data-ko="스튜디오 소개" data-en="About the studio">스튜디오 소개</span><span class="arrow">↗</span></a>
      </div>
    </div>
    <div class="rs-hero-art">
      <div class="rs-orbit" aria-hidden="true"></div>
      <div class="rs-card-3d" id="rs-profile-card">
        <div class="rs-card-inner">
          <div class="rs-card-face rs-card-front">
            <div class="rs-card-content">
              <div class="rs-card-top"><span>RAHEL STUDIO</span><span>SEOUL / 2026</span></div>
              <div>
                <div class="rs-signature">Rahel</div>
                <div class="rs-role" data-ko="디자이너 · 크리에이티브 디렉터" data-en="Designer · Creative Director">디자이너 · 크리에이티브 디렉터</div>
              </div>
              <div class="rs-card-bottom">
                <div class="rs-cred-wrap">
                  <span class="rs-cred" data-ko="K대학교 디자인 학사 졸업<br>10년+ 웹사이트 품질 평가" data-en="BA in Design, K University<br>10+ yrs web quality evaluation">K대학교 디자인 학사 졸업<br>10년+ 웹사이트 품질 평가</span>
                  <span class="rs-chip-badge" data-ko="영어 상담 가능" data-en="English consultation OK">영어 상담 가능</span>
                </div>
                <button class="rs-flip-btn" type="button" aria-label="포트폴리오 카드 뒤집기"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ⟳</button>
              </div>
            </div>
          </div>
          <div class="rs-card-face rs-card-back">
            <div class="rs-card-content">
              <div class="rs-card-top">
                <span>PROFILE</span>
                <button class="rs-flip-btn rs-flip-back" type="button" aria-label="앞면으로 돌아가기"><span data-ko="뒤로" data-en="Back">뒤로</span> ⟲</button>
              </div>
              <div class="rs-back-body">
                <p class="rs-back-lead" data-ko="전문직 · 프로필 웹사이트 제작 전문" data-en="Websites for professionals &amp; personal brands">전문직 · 프로필 웹사이트 제작 전문</p>
                <p class="rs-back-clients" data-ko="변호사 · 세무사 · 의사 · 강사 · 부동산 전문가 · 그 밖의 전문 서비스 브랜드" data-en="Lawyers · Tax accountants · Doctors · Instructors · Real-estate pros · and other expert brands">변호사 · 세무사 · 의사 · 강사 · 부동산 전문가 · 그 밖의 전문 서비스 브랜드</p>
              </div>
              <a class="rs-back-cta" href="works.html"><span data-ko="포트폴리오 보기" data-en="View portfolio">포트폴리오 보기</span> →</a>
            </div>
          </div>
        </div>
      </div>
      <div class="rs-scrollcue" aria-hidden="true">Scroll to explore</div>
    </div>
  </section>

  <section class="rs-section soft">
    <div class="rs-container">
      <div class="rs-section-head rs-reveal">
        <div>
          <div class="rs-eyebrow">The Designer</div>
          <h2 data-ko="웹사이트를 오래<br>평가해온 디자이너가<br>만듭니다." data-en="Built by a designer<br>who evaluated<br>websites for years.">웹사이트를 오래<br>평가해온 디자이너가<br>만듭니다.</h2>
        </div>
        <p data-ko="TELUS · Appen · Lionbridge · RWS 등 글로벌 기업에서 10년 이상 웹사이트를 평가했습니다. 사용자가 무엇을 신뢰하고, 어떤 정보를 찾고, 어디에서 이탈하는지를 분석해온 경험을 디자인에 그대로 연결합니다." data-en="I evaluated websites for 10+ years at global companies like TELUS, Appen, Lionbridge, and RWS—bringing what I learned about what users trust, seek, and abandon directly into design.">TELUS · Appen · Lionbridge · RWS 등 글로벌 기업에서 10년 이상 웹사이트를 평가했습니다. 사용자가 무엇을 신뢰하고, 어떤 정보를 찾고, 어디에서 이탈하는지를 분석해온 경험을 디자인에 그대로 연결합니다.</p>
      </div>
      <div class="rs-philosophy">
        <article class="rs-reveal"><span class="rs-index">10+ YEARS</span><h3 data-ko="웹 품질 평가" data-en="Web Quality Evaluation">웹 품질 평가</h3><p data-ko="글로벌 기업에서 전 세계 웹사이트의 품질을 평가해 왔습니다." data-en="Evaluated the quality of websites worldwide for global companies.">글로벌 기업에서 전 세계 웹사이트의 품질을 평가해 왔습니다.</p></article>
        <article class="rs-reveal"><span class="rs-index">DESIGN B.A.</span><h3 data-ko="비주얼 · 디지털 디자인" data-en="Visual &amp; Digital Design">비주얼 · 디지털 디자인</h3><p data-ko="좋은 웹사이트의 기준을 직접 구현하기 위해 디자인을 전공했습니다." data-en="Studied design to build to the standard of a good website.">좋은 웹사이트의 기준을 직접 구현하기 위해 디자인을 전공했습니다.</p></article>
        <article class="rs-reveal"><span class="rs-index">E-E-A-T</span><h3 data-ko="신뢰 · 전문성 · 의도" data-en="Trust · Expertise · Intent">신뢰 · 전문성 · 의도</h3><p data-ko="사용자가 신뢰하는 기준과 검색 의도를 설계의 근거로 삼습니다." data-en="Design grounded in what users trust and the intent behind their search.">사용자가 신뢰하는 기준과 검색 의도를 설계의 근거로 삼습니다.</p></article>
      </div>
    </div>
  </section>

  <section class="rs-section" id="services-preview">
    <div class="rs-container">
      <div class="rs-section-head rs-reveal">
        <div>
          <div class="rs-eyebrow">Services</div>
          <h2 data-ko="전략부터 콘텐츠까지,<br>하나의 흐름." data-en="Strategy to content,<br>one flow.">전략부터 콘텐츠까지,<br>하나의 흐름.</h2>
        </div>
        <p data-ko="변호사 · 세무사 · 의사 · 강사 · 부동산 전문가<br><span style='color:var(--faint)'>그 밖의 전문 서비스 브랜드도 함께합니다.</span>" data-en="Lawyers · Tax accountants · Doctors · Instructors · Real-estate pros<br><span style='color:var(--faint)'>and other expert service brands, too.</span>">변호사 · 세무사 · 의사 · 강사 · 부동산 전문가<br><span style="color:var(--faint)">그 밖의 전문 서비스 브랜드도 함께합니다.</span></p>
      </div>
      <div class="rs-project-grid">
        <a class="rs-project wide rs-reveal" href="services.html">
          <div class="rs-visual v1"><div class="rs-v1-ring"></div><div class="rs-v1-label">STRATEGY</div></div>
          <div class="rs-project-meta"><span>01</span><span>Brand Strategy</span></div>
          <div class="rs-project-title">
            <h3 data-ko="선택받는 이유를<br>정의합니다." data-en="Define why<br>you're chosen.">선택받는 이유를<br>정의합니다.</h3>
            <p data-ko="타깃·경쟁·차별점을 분석해 브랜드의 핵심 메시지를 정합니다." data-en="Analyze audience, competitors, and differentiators to set the core message.">타깃·경쟁·차별점을 분석해 브랜드의 핵심 메시지를 정합니다.</p>
          </div>
        </a>

        <a class="rs-project rs-reveal" href="services.html">
          <div class="rs-visual v2">
            <div class="rs-v2-window">
              <div class="rs-v2-bar"><i class="rs-v2-dot"></i><i class="rs-v2-dot"></i><i class="rs-v2-dot"></i></div>
              <div class="rs-v2-screen">
                <div class="rs-v2-copy"><b>Clarity<br>converts.</b><small>UX / IA / Web Design / Mobile</small></div>
                <div class="rs-v2-art"></div>
              </div>
            </div>
          </div>
          <div class="rs-project-meta" style="color:white"><span>02</span><span>Website</span></div>
          <div class="rs-project-title" style="color:white"><h3 data-ko="전문성을<br>신뢰로." data-en="Expertise<br>into trust.">전문성을<br>신뢰로.</h3><p style="color:#c5c5ca" data-ko="궁금한 순서대로 설계해 상담까지 연결합니다." data-en="Structured in the order clients ask—leading to a consultation.">궁금한 순서대로 설계해 상담까지 연결합니다.</p></div>
        </a>

        <a class="rs-project rs-reveal" href="services.html">
          <div class="rs-visual v3">
            <div class="rs-grid-lines"></div>
            <div class="rs-editorial"><span class="num">03 — CONTENT</span><p>Get<br>discovered.</p><div><div class="rule"></div><small>BLOG / VIDEO / SNS / SEO</small></div></div>
          </div>
          <div class="rs-project-meta"><span>03</span><span>Content</span></div>
          <div class="rs-project-title"><h3 data-ko="전문가를<br>발견하게." data-en="Get the expert<br>discovered.">전문가를<br>발견하게.</h3><p data-ko="블로그·영상·SNS로 새로운 고객이 유입되게 합니다." data-en="Blog, video, and social that bring in new clients.">블로그·영상·SNS로 새로운 고객이 유입되게 합니다.</p></div>
        </a>
      </div>
      <div style="margin-top:34px">
        <a class="rs-link blue" href="services.html"><span data-ko="서비스 4단계 자세히 보기 (Strategy · Website · Content · Growth)" data-en="See the 4 services (Strategy · Website · Content · Growth)">서비스 4단계 자세히 보기 (Strategy · Website · Content · Growth)</span><span class="arrow">→</span></a>
      </div>
    </div>
  </section>

  <section class="rs-section">
    <div class="rs-container">
      <div class="rs-section-head rs-reveal">
        <div><div class="rs-eyebrow">Approach</div><h2 data-ko="예쁘기 전에,<br>설득력 있게." data-en="Persuasive,<br>before pretty.">예쁘기 전에,<br>설득력 있게.</h2></div>
        <p data-ko="전문직 웹사이트는 ‘멋있음’보다 신뢰, 이해, 문의 전환이 중요합니다. 그래서 디자인 결정에 이유를 둡니다." data-en="For professional services, trust, comprehension, and conversion matter more than decoration. Every design decision needs a reason.">전문직 웹사이트는 ‘멋있음’보다 신뢰, 이해, 문의 전환이 중요합니다. 그래서 디자인 결정에 이유를 둡니다.</p>
      </div>
      <div class="rs-process">
        <div class="rs-step rs-reveal"><b>01 / ANALYZE</b><h3 data-ko="먼저 고객을 봅니다." data-en="Start with the client.">먼저 고객을 봅니다.</h3><p data-ko="타깃, 경쟁사, 검색 행동과 문의 흐름을 확인합니다." data-en="Audience, competitors, search behavior, and inquiry paths.">타깃, 경쟁사, 검색 행동과 문의 흐름을 확인합니다.</p></div>
        <div class="rs-step rs-reveal"><b>02 / POSITION</b><h3 data-ko="전문가의 강점을 찾습니다." data-en="Find the strength.">전문가의 강점을 찾습니다.</h3><p data-ko="무엇으로 선택받을지, 브랜드의 핵심 메시지를 정합니다." data-en="Define what you'll be chosen for—the core message.">무엇으로 선택받을지, 브랜드의 핵심 메시지를 정합니다.</p></div>
        <div class="rs-step rs-reveal"><b>03 / DESIGN</b><h3 data-ko="신뢰가 보이게 만듭니다." data-en="Make trust visible.">신뢰가 보이게 만듭니다.</h3><p data-ko="정보 구조, 타이포그래피, 인터랙션을 하나의 시스템으로 설계합니다." data-en="Information, typography, and interaction as one system.">정보 구조, 타이포그래피, 인터랙션을 하나의 시스템으로 설계합니다.</p></div>
        <div class="rs-step rs-reveal"><b>04 / CONVERT</b><h3 data-ko="문의까지 연결합니다." data-en="Connect to inquiry.">문의까지 연결합니다.</h3><p data-ko="PC와 모바일 모두에서 자연스럽게 상담으로 이어지도록 만듭니다." data-en="Lead naturally to a consultation on desktop and mobile alike.">PC와 모바일 모두에서 자연스럽게 상담으로 이어지도록 만듭니다.</p></div>
      </div>
    </div>
  </section>

  <section class="rs-section">
    <div class="rs-container">
      <a class="rs-banner rs-reveal" href="contact.html">
        <div class="rs-banner-copy">
          <div class="rs-eyebrow" style="color:#a6a6ac">Start a Project</div>
          <h2 data-ko="당신의 전문성이<br>더 잘 보이도록." data-en="Make your expertise<br>easier to see.">당신의 전문성이<br>더 잘 보이도록.</h2>
          <p data-ko="브랜드 전략, 전문직 웹사이트, 콘텐츠까지 함께합니다. 현재 고민과 목표를 편하게 알려주세요." data-en="Brand strategy, professional-service websites, and content. Tell us your goal and where you are now.">브랜드 전략, 전문직 웹사이트, 콘텐츠까지 함께합니다. 현재 고민과 목표를 편하게 알려주세요.</p>
        </div>
      </a>
    </div>
  </section>
</main>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## works.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Works — 전문직 웹사이트 케이스 스터디 · RAHEL STUDIO</title>
<meta name="description" content="전문직 웹사이트를 문제 → 전략 → 결과의 흐름으로 정리한 케이스 스터디. 일부는 컨셉 프로젝트입니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="Works — Case Studies · RAHEL STUDIO">
<meta property="og:description" content="Problem → Strategy → Solution case studies for professional-service websites.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Works — Case Studies · RAHEL STUDIO">
<meta name="twitter:description" content="Problem → Strategy → Solution case studies for professional-service websites.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RAHEL STUDIO",
  "description": "Case studies — websites for professionals, structured as problem, strategy, and solution.",
  "areaServed": "KR",
  "serviceType": ["Brand Strategy", "Web Design", "Content", "Growth"],
  "knowsLanguage": ["ko", "en"],
  "email": "eunakim1984@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Seoul", "addressCountry": "KR" }
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-page-hero">
    <div class="rs-container">
      <div class="rs-eyebrow">Case Studies / 2026</div>
      <h1>WORKS.</h1>
      <p data-ko="각 프로젝트를 문제 → 전략 → 해결의 흐름으로 정리했습니다. 실제 의뢰 전 단계의 항목은 ‘Concept Project’로 표기합니다." data-en="Each project is framed as Problem → Strategy → Solution. Items before a real engagement are marked ‘Concept Project’.">각 프로젝트를 문제 → 전략 → 해결의 흐름으로 정리했습니다. 실제 의뢰 전 단계의 항목은 ‘Concept Project’로 표기합니다.</p>
    </div>
  </section>

  <section class="rs-case" id="work01">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">01 / LAW FIRM WEBSITE</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="형사전문 변호사<br>개인 브랜드" data-en="Criminal-defense lawyer<br>personal brand">형사전문 변호사<br>개인 브랜드</h2>
          <div class="rs-case-tags"><span class="rs-chip is-concept">Concept Project</span></div>
          <div class="rs-case-kv">
            <div class="row"><span class="k">Problem</span><p class="v" data-ko="전문 분야가 명확히 전달되지 않고, 상담으로 이어지는 진입점이 약함." data-en="The specialty isn't communicated clearly, and the path to a consultation is weak.">전문 분야가 명확히 전달되지 않고, 상담으로 이어지는 진입점이 약함.</p></div>
            <div class="row"><span class="k">Strategy</span><p class="v" data-ko="형사 사건 의뢰인의 정보 탐색 흐름을 기준으로 콘텐츠 구조를 재구성." data-en="Rebuild the content structure around how criminal-case clients actually search for information.">형사 사건 의뢰인의 정보 탐색 흐름을 기준으로 콘텐츠 구조를 재구성.</p></div>
          </div>
          <div class="rs-case-tags"><span class="rs-chip">Brand Strategy</span><span class="rs-chip">UX</span><span class="rs-chip">Web Design</span><span class="rs-chip">Mobile</span></div>
        </div>
      </div>
      <div class="rs-case-stage rs-reveal">
        <div class="rs-visual v2">
          <div class="rs-v2-window">
            <div class="rs-v2-bar"><i class="rs-v2-dot"></i><i class="rs-v2-dot"></i><i class="rs-v2-dot"></i></div>
            <div class="rs-v2-screen"><div class="rs-v2-copy"><b>Trust,<br>made clear.</b><small>Content ordered around the client's real questions.</small></div><div class="rs-v2-art"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-case" id="work02">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">02 / TAX &amp; ACCOUNTING</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="세무·회계 사무소<br>웹사이트" data-en="Tax &amp; accounting firm<br>website">세무·회계 사무소<br>웹사이트</h2>
          <div class="rs-case-tags"><span class="rs-chip is-concept">Concept Project</span></div>
          <div class="rs-case-kv">
            <div class="row"><span class="k">Problem</span><p class="v" data-ko="서비스 범위가 넓어 방문자가 자신에게 맞는 상담을 빠르게 찾기 어려움." data-en="A broad service range makes it hard for visitors to quickly find the right consultation.">서비스 범위가 넓어 방문자가 자신에게 맞는 상담을 빠르게 찾기 어려움.</p></div>
            <div class="row"><span class="k">Strategy</span><p class="v" data-ko="고객 유형별 진입 경로와 상담 CTA를 우선순위 기준으로 다시 설계." data-en="Redesign entry paths and consultation CTAs by client type and priority.">고객 유형별 진입 경로와 상담 CTA를 우선순위 기준으로 다시 설계.</p></div>
          </div>
          <div class="rs-case-tags"><span class="rs-chip">UX Strategy</span><span class="rs-chip">IA</span><span class="rs-chip">Web Design</span><span class="rs-chip">Content</span></div>
        </div>
      </div>
      <div class="rs-case-stage rs-reveal">
        <div class="rs-visual v1"><div class="rs-v1-ring"></div><div class="rs-v1-label">STRUCTURE / FLOW</div></div>
      </div>
    </div>
  </section>

  <section class="rs-case" id="work03">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">03 / MEDICAL · CLINIC</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="의료·병원<br>브랜드 사이트" data-en="Medical &amp; clinic<br>brand site">의료·병원<br>브랜드 사이트</h2>
          <div class="rs-case-tags"><span class="rs-chip is-concept">Concept Project</span></div>
          <div class="rs-case-kv">
            <div class="row"><span class="k">Problem</span><p class="v" data-ko="신뢰가 중요한데 정보가 파편화되어 전문성이 흐려짐." data-en="Trust is critical, but fragmented information blurs the expertise.">신뢰가 중요한데 정보가 파편화되어 전문성이 흐려짐.</p></div>
            <div class="row"><span class="k">Strategy</span><p class="v" data-ko="진료 분야·근거·후기 흐름을 ‘신뢰’ 중심으로 정보 구조화." data-en="Structure specialties, evidence, and reviews around a single trust narrative.">진료 분야·근거·후기 흐름을 ‘신뢰’ 중심으로 정보 구조화.</p></div>
          </div>
          <div class="rs-case-tags"><span class="rs-chip">Brand Strategy</span><span class="rs-chip">UX</span><span class="rs-chip">Web Design</span><span class="rs-chip">Editorial</span></div>
        </div>
      </div>
      <div class="rs-case-stage rs-reveal">
        <div class="rs-visual v3"><div class="rs-grid-lines"></div><div class="rs-editorial"><span class="num">03 — TRUST</span><p>Evidence<br>into trust.</p><div><div class="rule"></div><small>RESEARCH / EDITORIAL / INFORMATION DESIGN</small></div></div></div>
      </div>
    </div>
  </section>

  <section class="rs-section">
    <div class="rs-container">
      <a class="rs-banner rs-reveal" href="contact.html">
        <div class="rs-banner-copy">
          <div class="rs-eyebrow" style="color:#a6a6ac">Your Project</div>
          <h2 data-ko="다음 케이스는<br>당신의 프로젝트." data-en="The next case<br>is your project.">다음 케이스는<br>당신의 프로젝트.</h2>
          <p data-ko="지금은 컨셉 케이스지만, 실제 프로젝트로 함께 채워갈 수 있습니다. 현재 고민을 편하게 알려주세요." data-en="These are concept cases for now—let's fill them with real work together. Tell us what you're working on.">지금은 컨셉 케이스지만, 실제 프로젝트로 함께 채워갈 수 있습니다. 현재 고민을 편하게 알려주세요.</p>
        </div>
      </a>
    </div>
  </section>
</main>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## services.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Services — Strategy · Website · Content · Growth · RAHEL STUDIO</title>
<meta name="description" content="전문가의 강점을 브랜드로 바꾸는 4단계 — Brand Strategy, Website, Content, Growth. 전략부터 개선까지 하나의 흐름으로 설계합니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="Services — RAHEL STUDIO">
<meta property="og:description" content="Brand Strategy · Website · Content · Growth — one flow from strategy to improvement.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Services — RAHEL STUDIO">
<meta name="twitter:description" content="Brand Strategy · Website · Content · Growth — one flow from strategy to improvement.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RAHEL STUDIO",
  "description": "Services for professionals — brand strategy, website, content, and growth.",
  "areaServed": "KR",
  "serviceType": ["Brand Strategy", "Website", "Content", "Growth"],
  "knowsLanguage": ["ko", "en"],
  "email": "eunakim1984@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Seoul", "addressCountry": "KR" }
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-page-hero">
    <div class="rs-container">
      <div class="rs-eyebrow">What we do</div>
      <h1>SERVICES.</h1>
      <p data-ko="전략 → 웹사이트 → 콘텐츠 → 개선. 전문가의 강점을 선택받는 브랜드로 바꾸는 하나의 흐름으로 설계합니다." data-en="Strategy → Website → Content → Growth. One connected flow that turns an expert's strengths into a brand people choose.">전략 → 웹사이트 → 콘텐츠 → 개선. 전문가의 강점을 선택받는 브랜드로 바꾸는 하나의 흐름으로 설계합니다.</p>
    </div>
  </section>

  <section class="rs-case">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">01 / BRAND STRATEGY</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="당신이 무엇으로<br>선택받을지 찾습니다." data-en="We find what<br>you'll be chosen for.">당신이 무엇으로<br>선택받을지 찾습니다.</h2>
          <p data-ko="타깃 고객, 전문 분야, 경쟁자, 차별점을 분석하고 브랜드의 핵심 메시지를 정합니다. 모든 디자인 결정의 기준이 되는 단계입니다." data-en="We analyze target clients, specialty, competitors, and differentiators, then define the core brand message that guides every design decision.">타깃 고객, 전문 분야, 경쟁자, 차별점을 분석하고 브랜드의 핵심 메시지를 정합니다. 모든 디자인 결정의 기준이 되는 단계입니다.</p>
          <div class="rs-case-tags"><span class="rs-chip">Positioning</span><span class="rs-chip">Messaging</span><span class="rs-chip">Audience</span><span class="rs-chip">Competitor</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-case">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">02 / WEBSITE</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="전문성을<br>신뢰로 바꿉니다." data-en="We turn expertise<br>into trust.">전문성을<br>신뢰로 바꿉니다.</h2>
          <p data-ko="고객이 궁금해하는 순서대로 정보를 설계하고, 자연스럽게 상담으로 이어지는 웹사이트를 만듭니다. PC와 모바일 모두에서 빠르게 이해되도록 구성합니다." data-en="We structure information in the order clients actually ask, and build a website that leads naturally to a consultation—clear on both desktop and mobile.">고객이 궁금해하는 순서대로 정보를 설계하고, 자연스럽게 상담으로 이어지는 웹사이트를 만듭니다. PC와 모바일 모두에서 빠르게 이해되도록 구성합니다.</p>
          <div class="rs-case-tags"><span class="rs-chip">UX</span><span class="rs-chip">IA</span><span class="rs-chip">Web Design</span><span class="rs-chip">Mobile</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-case">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">03 / CONTENT</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="고객이 전문가를<br>발견하게 합니다." data-en="We help clients<br>discover the expert.">고객이 전문가를<br>발견하게 합니다.</h2>
          <p data-ko="블로그·유튜브·인스타그램 등 전문성을 보여줄 콘텐츠의 방향과 주제를 설계합니다. 검색과 추천을 통해 새로운 고객이 유입되는 채널을 만듭니다." data-en="We plan the direction and topics for content across blog, YouTube, and Instagram—building channels that bring in new clients through search and referral.">블로그·유튜브·인스타그램 등 전문성을 보여줄 콘텐츠의 방향과 주제를 설계합니다. 검색과 추천을 통해 새로운 고객이 유입되는 채널을 만듭니다.</p>
          <div class="rs-case-tags"><span class="rs-chip">Blog</span><span class="rs-chip">Video</span><span class="rs-chip">SNS</span><span class="rs-chip">SEO</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-case">
    <div class="rs-container">
      <div class="rs-case-head rs-reveal">
        <div><span class="rs-case-no">04 / GROWTH</span></div>
        <div class="rs-case-copy">
          <h2 data-ko="데이터를 보고<br>다시 개선합니다." data-en="We read the data,<br>then improve.">데이터를 보고<br>다시 개선합니다.</h2>
          <div class="rs-case-tags"><span class="rs-chip is-concept" data-ko="곧 추가 예정" data-en="Coming soon">곧 추가 예정</span></div>
          <p data-ko="유입·클릭·체류·이탈·상담 전환 데이터를 확인하고 웹사이트와 콘텐츠를 개선합니다. 한 번 만들고 끝내지 않고, 성과를 기준으로 계속 다듬습니다." data-en="We track traffic, clicks, dwell time, exits, and consultation conversion to keep improving the site and content—not build once and stop, but refine against results.">유입·클릭·체류·이탈·상담 전환 데이터를 확인하고 웹사이트와 콘텐츠를 개선합니다. 한 번 만들고 끝내지 않고, 성과를 기준으로 계속 다듬습니다.</p>
          <div class="rs-case-tags"><span class="rs-chip">Analytics</span><span class="rs-chip">CRO</span><span class="rs-chip">A/B Test</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-section">
    <div class="rs-container">
      <a class="rs-banner rs-reveal" href="contact.html">
        <div class="rs-banner-copy">
          <div class="rs-eyebrow" style="color:#a6a6ac">Start here</div>
          <h2 data-ko="어느 단계든<br>여기서 시작합니다." data-en="Any stage<br>starts here.">어느 단계든<br>여기서 시작합니다.</h2>
          <p data-ko="전체 흐름이 필요하든, 웹사이트 하나가 필요하든 괜찮습니다. 현재 상황을 알려주시면 필요한 단계부터 제안드립니다." data-en="Whether you need the full flow or just one website, tell us where you are and we'll propose the right starting step.">전체 흐름이 필요하든, 웹사이트 하나가 필요하든 괜찮습니다. 현재 상황을 알려주시면 필요한 단계부터 제안드립니다.</p>
        </div>
      </a>
    </div>
  </section>
</main>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## about.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>About — 10년간 웹사이트를 평가한 디자이너 · RAHEL STUDIO</title>
<meta name="description" content="TELUS·Appen·Lionbridge·RWS 등 글로벌 기업에서 10년 이상 웹사이트 품질을 평가한 기준으로, 전문가의 가치를 전달하는 웹사이트를 만듭니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="About — RAHEL STUDIO">
<meta property="og:description" content="10년 동안 웹사이트를 평가했습니다. 이제 그 기준으로 웹사이트를 만듭니다.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="About — RAHEL STUDIO">
<meta name="twitter:description" content="10년 동안 웹사이트를 평가했습니다. 이제 그 기준으로 웹사이트를 만듭니다.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RAHEL STUDIO",
  "description": "Strategy, branding, and web design for professionals, by a designer with 10+ years evaluating website quality.",
  "areaServed": "KR",
  "serviceType": ["Brand Strategy", "Web Design", "Content", "Growth"],
  "knowsLanguage": ["ko", "en"],
  "email": "eunakim1984@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Seoul", "addressCountry": "KR" }
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-section" style="padding-top:130px">
    <div class="rs-container rs-about-grid">
      <div class="rs-about-sticky">
        <div class="rs-eyebrow">About Rahel Studio</div>
        <h1 style="font-size:clamp(34px,4.4vw,62px);line-height:1.2;letter-spacing:-.02em;margin:16px 0 0" data-ko="10년 동안<br>웹사이트를<br>평가했습니다.<br><span class='muted'>이제 그 기준으로<br>웹사이트를 만듭니다.</span>" data-en="For 10 years<br>I evaluated<br>websites.<br><span class='muted'>Now I build them<br>to that standard.</span>">10년 동안<br>웹사이트를<br>평가했습니다.<br><span class="muted">이제 그 기준으로<br>웹사이트를 만듭니다.</span></h1>
      </div>
      <div class="rs-about-copy">
        <p class="statement" data-ko="예쁜 웹사이트보다, <span>왜 이 디자인이어야 하는지</span> 설명할 수 있는 웹사이트를 만듭니다." data-en="We build websites that can explain <span>why every design decision exists</span>—not just websites that look good.">예쁜 웹사이트보다, 왜 이 디자인이어야 하는지 설명할 수 있는 웹사이트를 만듭니다.</p>
        <p data-ko="여러 서비스 현장을 거치며 시작했고, 이후 <b>10년 넘게 글로벌 기업에서 전 세계의 웹사이트를 ‘평가’</b>하는 일을 해왔습니다. 수많은 사이트를 채점하며 ‘좋은 웹사이트’의 조건을 관찰했고, 그 기준을 직접 구현하기 위해 디자인을 공부했습니다. 지금은 전문가의 가치를 제대로 전달하는 웹사이트를 만듭니다." data-en="I started on the service side, then spent <b>10+ years evaluating websites from around the world for global companies</b>. Scoring countless sites showed me what actually makes a website good—so I studied design to build to that standard. Today I make websites that convey an expert's value the way it deserves.">여러 서비스 현장을 거치며 시작했고, 이후 <b>10년 넘게 글로벌 기업에서 전 세계의 웹사이트를 ‘평가’</b>하는 일을 해왔습니다. 수많은 사이트를 채점하며 ‘좋은 웹사이트’의 조건을 관찰했고, 그 기준을 직접 구현하기 위해 디자인을 공부했습니다. 지금은 전문가의 가치를 제대로 전달하는 웹사이트를 만듭니다.</p>
        <p data-ko="<b>TELUS · Appen · Lionbridge · RWS</b> 등 글로벌 기업에서 10년 이상 웹사이트 품질을 평가하며, 사용자가 무엇을 신뢰하고 어떤 정보를 찾고 어디에서 이탈하는지를 데이터로 확인해 왔습니다. 그 관점을 전문직 브랜드와 웹사이트 설계에 그대로 연결합니다." data-en="At global companies including <b>TELUS, Appen, Lionbridge, and RWS</b>, I evaluated web quality for over a decade—learning from data what users trust, what they look for, and where they leave. I bring that lens directly into branding and websites for professionals."><b>TELUS · Appen · Lionbridge · RWS</b> 등 글로벌 기업에서 10년 이상 웹사이트 품질을 평가하며, 사용자가 무엇을 신뢰하고 어떤 정보를 찾고 어디에서 이탈하는지를 데이터로 확인해 왔습니다. 그 관점을 전문직 브랜드와 웹사이트 설계에 그대로 연결합니다.</p>

        <div class="rs-facts">
          <div class="rs-fact"><span>Experience</span><span data-ko="10년+ · 웹사이트 품질 평가" data-en="10+ yrs · Web quality evaluation">10년+ · 웹사이트 품질 평가</span></div>
          <div class="rs-fact"><span>Clients</span><span>TELUS · Appen · Lionbridge · RWS</span></div>
          <div class="rs-fact"><span>Focus</span><span data-ko="전문직 브랜딩 · 웹사이트 · 콘텐츠" data-en="Professional branding · Websites · Content">전문직 브랜딩 · 웹사이트 · 콘텐츠</span></div>
          <div class="rs-fact"><span>Based</span><span>Seoul, South Korea</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="rs-section soft">
    <div class="rs-container">
      <div class="rs-section-head rs-reveal">
        <div><div class="rs-eyebrow">Process</div><h2 data-ko="감이 아니라,<br>과정으로." data-en="A process,<br>not a hunch.">감이 아니라,<br>과정으로.</h2></div>
        <p data-ko="프로젝트가 커져도 기준이 흔들리지 않도록 네 단계로 진행합니다." data-en="A four-step process keeps the standard clear even as a project grows.">프로젝트가 커져도 기준이 흔들리지 않도록 네 단계로 진행합니다.</p>
      </div>
      <div class="rs-process">
        <div class="rs-step rs-reveal"><b>01 / DISCOVER</b><h3 data-ko="문제를 찾습니다." data-en="Find the problem.">문제를 찾습니다.</h3><p data-ko="목표, 고객, 경쟁 환경과 현재 사이트의 문제를 확인합니다." data-en="Goals, audience, competition, and current-site issues.">목표, 고객, 경쟁 환경과 현재 사이트의 문제를 확인합니다.</p></div>
        <div class="rs-step rs-reveal"><b>02 / DEFINE</b><h3 data-ko="기준을 만듭니다." data-en="Set the criteria.">기준을 만듭니다.</h3><p data-ko="브랜드 메시지, 정보 구조, 우선순위와 전환 흐름을 정합니다." data-en="Message, information architecture, hierarchy, and conversion path.">브랜드 메시지, 정보 구조, 우선순위와 전환 흐름을 정합니다.</p></div>
        <div class="rs-step rs-reveal"><b>03 / DESIGN</b><h3 data-ko="형태를 만듭니다." data-en="Shape the system.">형태를 만듭니다.</h3><p data-ko="타이포그래피, 레이아웃, 인터랙션을 하나의 시각 시스템으로 설계합니다." data-en="Typography, layout, and interaction as one visual system.">타이포그래피, 레이아웃, 인터랙션을 하나의 시각 시스템으로 설계합니다.</p></div>
        <div class="rs-step rs-reveal"><b>04 / REFINE</b><h3 data-ko="끝까지 다듬습니다." data-en="Refine the details.">끝까지 다듬습니다.</h3><p data-ko="모바일, 콘텐츠, 속도와 실제 사용자 흐름을 확인하고 수정합니다." data-en="Mobile, content, performance, and real user flow are checked and refined.">모바일, 콘텐츠, 속도와 실제 사용자 흐름을 확인하고 수정합니다.</p></div>
      </div>
    </div>
  </section>
</main>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## insight.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Insight — 전문직 홈페이지·브랜딩 칼럼 · RAHEL STUDIO</title>
<meta name="description" content="변호사·세무사·의사 등 전문직 홈페이지의 신뢰·콘텐츠·전환·E-E-A-T를 다루는 칼럼. 곧 하나씩 공개됩니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="Insight — RAHEL STUDIO">
<meta property="og:description" content="Columns on trust, content, conversion, and E-E-A-T for professional-service websites.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Insight — RAHEL STUDIO">
<meta name="twitter:description" content="Columns on trust, content, conversion, and E-E-A-T for professional-service websites.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "RAHEL STUDIO — Insight",
  "inLanguage": ["ko", "en"],
  "publisher": { "@type": "Organization", "name": "RAHEL STUDIO" }
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-page-hero">
    <div class="rs-container">
      <div class="rs-eyebrow">Journal / Column</div>
      <h1>INSIGHT.</h1>
      <p data-ko="전문직 홈페이지의 신뢰, 콘텐츠, 상담 전환, E-E-A-T를 다룹니다. 아래 주제를 하나씩 글로 공개할 예정입니다." data-en="On trust, content, consultation conversion, and E-E-A-T for professional-service websites. The topics below will be published one by one.">전문직 홈페이지의 신뢰, 콘텐츠, 상담 전환, E-E-A-T를 다룹니다. 아래 주제를 하나씩 글로 공개할 예정입니다.</p>
    </div>
  </section>

  <section class="rs-section" style="padding-top:0">
    <div class="rs-container">
      <div class="rs-post-grid">
        <article class="rs-post rs-reveal">
          <span class="cat">Legal</span>
          <h3 data-ko="변호사 홈페이지에서 신뢰를 만드는 방법" data-en="How to build trust on a law-firm website">변호사 홈페이지에서 신뢰를 만드는 방법</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
        <article class="rs-post rs-reveal">
          <span class="cat">Content</span>
          <h3 data-ko="전문직 홈페이지에 필요한 콘텐츠" data-en="The content a professional website needs">전문직 홈페이지에 필요한 콘텐츠</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
        <article class="rs-post rs-reveal">
          <span class="cat">Conversion</span>
          <h3 data-ko="세무사 홈페이지의 CTA 설계" data-en="Designing CTAs for a tax-accountant site">세무사 홈페이지의 CTA 설계</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
        <article class="rs-post rs-reveal">
          <span class="cat">Content</span>
          <h3 data-ko="전문가가 블로그를 해야 하는 이유" data-en="Why experts should run a blog">전문가가 블로그를 해야 하는 이유</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
        <article class="rs-post rs-reveal">
          <span class="cat">UX</span>
          <h3 data-ko="상담으로 이어지는 랜딩페이지 구조" data-en="Landing-page structure that leads to inquiries">상담으로 이어지는 랜딩페이지 구조</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
        <article class="rs-post rs-reveal">
          <span class="cat">SEO</span>
          <h3 data-ko="E-E-A-T와 전문직 홈페이지" data-en="E-E-A-T and professional websites">E-E-A-T와 전문직 홈페이지</h3>
          <span class="status" data-ko="준비 중" data-en="Coming soon">준비 중</span>
        </article>
      </div>
    </div>
  </section>
</main>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## contact.html

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Contact — 전문직 브랜드·웹사이트 프로젝트 문의 · RAHEL STUDIO</title>
<meta name="description" content="브랜드 전략·웹사이트·리뉴얼·콘텐츠 프로젝트 문의. 업종과 현재 고민, 필요한 일정만 간단히 남겨도 충분합니다.">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RAHEL STUDIO">
<meta property="og:title" content="Contact — RAHEL STUDIO">
<meta property="og:description" content="For brand strategy, professional-service websites, redesign, and content. Tell us your field, challenge, and timeline.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RAHEL STUDIO — Strategy, Branding, Web Design">
<meta property="og:locale" content="ko_KR">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Contact — RAHEL STUDIO">
<meta name="twitter:description" content="For brand strategy, professional-service websites, redesign, and content.">
<meta name="twitter:image" content="assets/og-image.png">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="stylesheet" href="assets/rahel.css">
<script src="assets/rahel.js" defer></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RAHEL STUDIO",
  "description": "Contact — brand strategy, website, redesign, and content for professionals.",
  "areaServed": "KR",
  "serviceType": ["Brand Strategy", "Website", "Content", "Growth"],
  "knowsLanguage": ["ko", "en"],
  "email": "eunakim1984@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Seoul", "addressCountry": "KR" }
}
</script>
</head>
<body>
<a class="rs-skip" href="#main">Skip to content</a>
<div class="rs-shell">

<header class="rs-nav">
  <a class="rs-brand" href="index.html"><span class="rs-brand-dot"></span>RAHEL STUDIO</a>
  <nav class="rs-nav-center" aria-label="Primary">
    <a href="works.html" data-ko="Works" data-en="Works">Works</a>
    <a href="services.html" data-ko="Services" data-en="Services">Services</a>
    <a href="about.html" data-ko="About" data-en="About">About</a>
    <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
    <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  </nav>
  <div class="rs-nav-actions">
    <button class="rs-lang" type="button" aria-label="Switch to English">EN</button>
    <a class="rs-cta" href="works.html"><span data-ko="포트폴리오" data-en="Portfolio">포트폴리오</span> ↗</a>
    <button class="rs-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="rs-mobile-menu"><span></span><span></span></button>
  </div>
</header>
<nav class="rs-mobile-menu" id="rs-mobile-menu" aria-label="Mobile" aria-hidden="true">
  <a href="works.html" data-ko="Works" data-en="Works">Works</a>
  <a href="services.html" data-ko="Services" data-en="Services">Services</a>
  <a href="about.html" data-ko="About" data-en="About">About</a>
  <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
  <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
  <a class="rs-mobile-cta" href="works.html" data-ko="포트폴리오" data-en="Portfolio">포트폴리오</a>
</nav>


<main class="rs-main" id="main">
  <section class="rs-container rs-contact">
    <div class="rs-contact-copy">
      <div class="rs-eyebrow">Contact / New Project</div>
      <h1>LET'S<br>MAKE IT<br>CLEAR.</h1>
      <p data-ko="브랜드 전략, 전문직 웹사이트, 리뉴얼, 콘텐츠 프로젝트를 함께합니다. 업종과 현재 고민, 필요한 일정만 간단히 남겨도 충분합니다." data-en="For brand strategy, professional-service websites, redesign, and content. Just your field, the current challenge, and a rough timeline is enough.">브랜드 전략, 전문직 웹사이트, 리뉴얼, 콘텐츠 프로젝트를 함께합니다. 업종과 현재 고민, 필요한 일정만 간단히 남겨도 충분합니다.</p>
      <div class="rs-contact-mini">
        <a href="mailto:eunakim1984@gmail.com">eunakim1984@gmail.com</a>
        <a href="#">Instagram ↗</a>
      </div>
    </div>
    <div class="rs-contact-card rs-reveal">
      <!-- mailto 방식(기본): 제출 시 방문자의 메일 앱이 열립니다.
           폼 수집(관리자 저장/자동 알림)으로 바꾸려면 알려주세요 — Formspree 등 연결을 안내하겠습니다.
           (임의로 외부 서비스는 연동하지 않았습니다.) data-endpoint 를 비워두면 mailto 로 동작합니다. -->
      <form id="rs-contact-form" data-email="eunakim1984@gmail.com" data-endpoint="">
        <div class="rs-field"><label for="name" data-ko="이름 / 업체명" data-en="Name / Company">이름 / 업체명</label><input id="name" class="rs-input" name="name" required></div>
        <div class="rs-field"><label for="industry" data-ko="업종" data-en="Field">업종</label><input id="industry" class="rs-input" name="industry" placeholder="변호사 / 세무사 / 병원 / 강사 …"></div>
        <div class="rs-field-group">
          <div class="rs-field-legend" data-ko="필요한 서비스" data-en="Services needed">필요한 서비스</div>
          <div class="rs-svc">
            <label><input type="checkbox" name="service" value="브랜드 전략"><span data-ko="브랜드 전략" data-en="Brand strategy">브랜드 전략</span></label>
            <label><input type="checkbox" name="service" value="웹사이트"><span data-ko="웹사이트" data-en="Website">웹사이트</span></label>
            <label><input type="checkbox" name="service" value="리뉴얼"><span data-ko="리뉴얼" data-en="Redesign">리뉴얼</span></label>
            <label><input type="checkbox" name="service" value="콘텐츠"><span data-ko="콘텐츠" data-en="Content">콘텐츠</span></label>
          </div>
        </div>
        <div class="rs-field"><label for="message" data-ko="현재 가장 고민되는 점" data-en="Your biggest concern">현재 가장 고민되는 점</label><textarea id="message" class="rs-input" name="message" required></textarea></div>
        <div class="rs-field"><label for="timeline" data-ko="예상 일정" data-en="Timeline">예상 일정</label><input id="timeline" class="rs-input" name="timeline" placeholder="예: 1~2개월 / 미정"></div>
        <button class="rs-submit" type="submit" data-ko="문의 보내기 →" data-en="Send inquiry →">문의 보내기 →</button>
        <div class="rs-contact-note" data-ko="‘문의 보내기’를 누르면 작성한 내용이 담긴 메일 앱이 열립니다. 관리자 저장·자동 알림이 필요하면 폼 서비스(예: Formspree) 연결을 안내드립니다." data-en="Pressing “Send inquiry” opens your mail app pre-filled. If you need admin storage and auto-alerts, we can connect a form service such as Formspree.">‘문의 보내기’를 누르면 작성한 내용이 담긴 메일 앱이 열립니다. 관리자 저장·자동 알림이 필요하면 폼 서비스(예: Formspree) 연결을 안내드립니다.</div>
      </form>
    </div>
  </section>
</main>
<div class="rs-toast" role="status" aria-live="polite"></div>


<footer class="rs-footer">
  <div class="rs-container rs-footer-row">
    <div>© 2026 RAHEL STUDIO. All rights reserved.</div>
    <div class="rs-footer-links">
      <a href="works.html" data-ko="Works" data-en="Works">Works</a>
      <a href="services.html" data-ko="Services" data-en="Services">Services</a>
      <a href="about.html" data-ko="About" data-en="About">About</a>
      <a href="insight.html" data-ko="Insight" data-en="Insight">Insight</a>
      <a href="contact.html" data-ko="Contact" data-en="Contact">Contact</a>
      <a href="mailto:eunakim1984@gmail.com">Email</a>
    </div>
  </div>
</footer>

</div>
</body>
</html>
```

## assets/rahel.css

```css
/* ==========================================================================
   RAHEL STUDIO — Design System (shared)
   Approved 1st design. Do not restyle colors / typography / PC layout.
   Only additive, responsive, and accessibility rules live at the bottom.
   ========================================================================== */
:root{
  --bg:#ffffff;
  --ink:#0b0b0d;
  --muted:#6e6e73;
  --soft:#f5f5f7;
  --soft-2:#fbfbfd;
  --line:rgba(10,10,12,.10);
  --blue:#0071e3;
  --blue-2:#49a8ff;
  --radius:34px;
  --shadow:0 30px 80px rgba(0,0,0,.08);
  --max:1440px;
  --nav-h:64px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;background:var(--bg);scroll-padding-top:calc(var(--nav-h) + 16px)}
body{
  margin:0;
  color:var(--ink);
  background:var(--bg);
  font-family:-apple-system,BlinkMacSystemFont,"Pretendard","Segoe UI",sans-serif;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
a{color:inherit;text-decoration:none}
button,input,textarea{font:inherit}
button{color:inherit}
::selection{background:#111;color:#fff}
.rs-shell{min-height:100vh;overflow:clip;position:relative;z-index:1}
.rs-nav{
  position:fixed;z-index:100;left:0;right:0;top:0;
  display:flex;align-items:center;justify-content:space-between;
  height:var(--nav-h);padding:0 max(24px,calc((100vw - var(--max))/2));
  background:rgba(255,255,255,.72);
  backdrop-filter:saturate(180%) blur(24px);
  -webkit-backdrop-filter:saturate(180%) blur(24px);
  border-bottom:1px solid rgba(0,0,0,.055);
}
.rs-brand{display:flex;align-items:center;gap:11px;font-weight:760;letter-spacing:-.035em}
.rs-brand-dot{
  width:11px;height:11px;border-radius:999px;
  background:radial-gradient(circle at 35% 30%,#fff 0 10%,#71c0ff 12%,#006ee6 50%,#001d3d 100%);
  box-shadow:0 0 24px rgba(0,113,227,.5);
}
.rs-nav-center{display:flex;gap:28px;font-size:13px;color:#424245}
.rs-nav-center a{transition:opacity .2s ease}
.rs-nav-center a:hover{opacity:.55}
.rs-nav-actions{display:flex;align-items:center;gap:14px}
.rs-lang{
  border:0;background:transparent;padding:7px 0;cursor:pointer;
  font-size:12px;font-weight:650;color:#56565b
}
.rs-cta{
  display:inline-flex;align-items:center;gap:8px;border-radius:999px;
  padding:12px 20px;background:#111;color:#fff;font-size:14px;font-weight:760;letter-spacing:-.01em;
  box-shadow:0 6px 18px rgba(0,0,0,.18);
  transition:transform .2s ease,background .2s ease,box-shadow .2s ease
}
.rs-cta:hover{transform:translateY(-1px);background:#2b2b2f;box-shadow:0 10px 26px rgba(0,0,0,.26)}
.rs-main{padding-top:64px}
.rs-container{width:min(calc(100% - 48px),var(--max));margin:0 auto}
.rs-eyebrow{
  text-transform:uppercase;letter-spacing:.14em;font-size:11px;font-weight:760;color:#77777c
}
.rs-hero{
  min-height:calc(100svh - 64px);
  display:grid;grid-template-columns:minmax(0,1.08fr) minmax(340px,.92fr);
  align-items:center;gap:6vw;padding:72px 0 56px
}
.rs-hero-copy h1{
  margin:15px 0 20px;
  max-width:980px;
  font-size:clamp(58px,8.1vw,138px);
  line-height:.86;letter-spacing:-.074em;font-weight:780
}
.rs-hero-copy h1 span{display:block}
.rs-hero-copy h1 .soft{color:#b7b7bd}
.rs-lead{
  max-width:620px;margin:0;
  font-size:clamp(18px,1.55vw,25px);line-height:1.48;letter-spacing:-.03em;color:#4b4b50
}
.rs-hero-links{display:flex;align-items:center;gap:22px;margin-top:34px;flex-wrap:wrap}
.rs-link{font-weight:680;font-size:14px;display:inline-flex;gap:8px;align-items:center}
.rs-link .arrow{transition:transform .2s ease}
.rs-link:hover .arrow{transform:translateX(4px)}
.rs-link.blue{color:var(--blue)}
.rs-hero-art{position:relative;min-height:620px;display:grid;place-items:center;perspective:1200px}
.rs-orbit{
  position:absolute;width:min(42vw,620px);aspect-ratio:1;border-radius:50%;
  background:
    radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(255,255,255,0) 22%),
    radial-gradient(circle at 42% 44%,rgba(0,113,227,.65),rgba(77,180,255,.23) 37%,rgba(198,226,255,.12) 54%,rgba(255,255,255,0) 72%);
  filter:blur(.2px);
  opacity:.9;
  animation:rsBreathe 7s ease-in-out infinite;
}
.rs-orbit::after{
  content:"";position:absolute;inset:9%;border-radius:50%;
  border:1px solid rgba(0,113,227,.17);
  box-shadow:inset 0 0 90px rgba(0,113,227,.08),0 40px 120px rgba(0,113,227,.12)
}
.rs-card-3d{
  position:relative;width:min(33vw,440px);aspect-ratio:.78;border-radius:42px;
  box-shadow:0 70px 130px rgba(12,40,70,.16);
  transform:rotateY(-10deg) rotateX(5deg);
  transition:transform .15s linear;
  transform-style:preserve-3d;
  cursor:pointer
}
.rs-card-inner{
  position:absolute;inset:0;transform-style:preserve-3d;
  transition:transform .85s cubic-bezier(.2,.8,.2,1)
}
.rs-card-3d.flipped .rs-card-inner{transform:rotateY(180deg)}
.rs-card-face{
  position:absolute;inset:0;border-radius:42px;overflow:hidden;
  -webkit-backface-visibility:hidden;backface-visibility:hidden;
  border:1px solid rgba(255,255,255,.95)
}
.rs-card-front{
  background:linear-gradient(145deg,rgba(255,255,255,.92),rgba(239,244,250,.64));
  -webkit-backdrop-filter:blur(26px);backdrop-filter:blur(26px);
  box-shadow:inset 0 0 0 1px rgba(0,0,0,.035)
}
.rs-card-front::before{
  content:"";position:absolute;inset:-20%;
  background:conic-gradient(from 20deg,transparent 0 22%,rgba(39,160,255,.20),transparent 36% 56%,rgba(255,255,255,.7) 65%,transparent 76%);
  animation:rsSpin 12s linear infinite
}
.rs-card-back{
  transform:rotateY(180deg);
  background:linear-gradient(160deg,#0b0b0d,#1b2233 58%,#08203c);
  border-color:rgba(255,255,255,.14);color:#fff
}
.rs-card-content{position:absolute;inset:0;padding:34px;display:flex;flex-direction:column;justify-content:space-between;z-index:1}
.rs-card-top{display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:700;letter-spacing:.08em;color:#5f6268}
.rs-card-back .rs-card-top{color:#9aa3b2}
.rs-monogram{
  font-size:clamp(112px,11vw,170px);line-height:.76;letter-spacing:-.1em;font-weight:790;
  background:linear-gradient(140deg,#090a0d 5%,#5c626a 42%,#111 62%,#989ea5 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent
}
.rs-signature{
  font-size:clamp(56px,6.4vw,84px);line-height:.9;letter-spacing:-.045em;font-weight:780;
  background:linear-gradient(140deg,#090a0d 5%,#5c626a 42%,#111 62%,#989ea5 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent
}
.rs-role{margin-top:11px;font-size:13px;letter-spacing:-.02em;color:#6a6a70}
.rs-card-bottom{display:flex;justify-content:space-between;align-items:end;gap:16px}
.rs-card-bottom strong{font-size:15px;letter-spacing:-.03em}
.rs-cred{font-size:11px;color:#74777d;line-height:1.55}
.rs-flip-btn{
  border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.55);
  border-radius:999px;padding:8px 13px;font-size:10px;font-weight:700;letter-spacing:.04em;
  color:#2b2b2f;cursor:pointer;display:inline-flex;align-items:center;gap:6px;white-space:nowrap;
  transition:background .2s ease
}
.rs-flip-btn:hover{background:#fff}
.rs-flip-back{border-color:rgba(255,255,255,.22);background:rgba(255,255,255,.08);color:#e9edf5;padding:6px 11px}
.rs-flip-back:hover{background:rgba(255,255,255,.18)}
.rs-back-body{display:flex;flex-direction:column;gap:14px}
.rs-back-lead{margin:0;font-size:clamp(20px,2.1vw,25px);line-height:1.22;letter-spacing:-.03em;font-weight:680}
.rs-back-clients{margin:0;font-size:11.5px;line-height:1.7;color:#aab2c0;letter-spacing:.01em}
.rs-back-cta{
  display:inline-flex;align-items:center;gap:8px;align-self:flex-start;
  background:#fff;color:#0b0b0d;border-radius:999px;padding:11px 18px;font-size:13px;font-weight:720;
  transition:transform .2s ease
}
.rs-back-cta:hover{transform:translateY(-1px)}
.rs-scrollcue{
  position:absolute;bottom:22px;right:0;display:flex;align-items:center;gap:10px;
  font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8a8a8f
}
.rs-scrollcue::before{content:"";width:42px;height:1px;background:#c7c7cc}
.rs-section{padding:150px 0}
.rs-section.soft{background:var(--soft-2)}
.rs-section-head{display:flex;justify-content:space-between;gap:40px;align-items:end;margin-bottom:64px}
.rs-section-head h2,.rs-display{
  margin:0;font-size:clamp(48px,6.1vw,96px);line-height:.93;letter-spacing:-.065em;font-weight:760
}
.rs-section-head p{max-width:420px;margin:0;color:var(--muted);font-size:15px;line-height:1.65}
.rs-project-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:22px}
.rs-project{
  grid-column:span 6;border-radius:var(--radius);overflow:hidden;background:var(--soft);
  min-height:620px;position:relative;isolation:isolate;
  border:1px solid rgba(0,0,0,.04);
  transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease
}
.rs-project:hover{transform:translateY(-8px);box-shadow:var(--shadow)}
.rs-project.wide{grid-column:1/-1;min-height:720px}
.rs-project-meta{
  position:absolute;z-index:5;left:34px;right:34px;top:32px;
  display:flex;justify-content:space-between;gap:22px;
  font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase
}
.rs-project-title{
  position:absolute;z-index:5;left:34px;bottom:34px;right:34px;
  display:flex;justify-content:space-between;align-items:end;gap:28px
}
.rs-project-title h3{margin:0;font-size:clamp(34px,4vw,64px);letter-spacing:-.055em;line-height:.92}
.rs-project-title p{margin:0;max-width:260px;text-align:right;font-size:12px;line-height:1.5;color:#57575c}
.rs-visual{position:absolute;inset:0;overflow:hidden}
.rs-visual.v1{
  background:
    radial-gradient(circle at 20% 20%,rgba(255,255,255,.9) 0 7%,transparent 8%),
    linear-gradient(135deg,#edf0f2,#d7dde3 48%,#f9fafb)
}
.rs-v1-ring{
  position:absolute;width:63%;aspect-ratio:1;border:65px solid #101114;border-radius:50%;
  top:50%;left:50%;transform:translate(-50%,-50%) rotate(-16deg);
  box-shadow:0 30px 80px rgba(0,0,0,.13)
}
.rs-v1-ring::after{content:"";position:absolute;inset:18%;border:1px solid rgba(255,255,255,.3);border-radius:50%}
.rs-v1-label{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:12px;color:white;z-index:2;letter-spacing:.24em}
.rs-visual.v2{background:linear-gradient(155deg,#0c0d10,#24272d 52%,#070809);color:white}
.rs-v2-window{
  position:absolute;inset:17% 12% 14%;border-radius:28px;background:#f6f7f8;
  box-shadow:0 50px 90px rgba(0,0,0,.42);overflow:hidden;transform:rotate(-2deg)
}
.rs-v2-bar{height:38px;background:#eceef1;border-bottom:1px solid #d8dbe0;display:flex;align-items:center;gap:7px;padding:0 14px}
.rs-v2-dot{width:7px;height:7px;border-radius:50%;background:#c7c9ce}
.rs-v2-screen{height:calc(100% - 38px);display:grid;grid-template-columns:.8fr 1.2fr}
.rs-v2-copy{padding:10%;display:flex;flex-direction:column;justify-content:center;color:#0e0f12}
.rs-v2-copy b{font-size:clamp(28px,3vw,54px);letter-spacing:-.06em;line-height:.92}
.rs-v2-copy small{margin-top:14px;color:#797b80;font-size:11px;line-height:1.5}
.rs-v2-art{background:radial-gradient(circle at 45% 42%,#6ac3ff 0 6%,#006bd8 22%,#001a35 52%,#03070d 70%);position:relative}
.rs-v2-art::after{content:"";position:absolute;inset:19%;border:1px solid rgba(255,255,255,.35);border-radius:50%;box-shadow:0 0 50px rgba(97,190,255,.4)}
.rs-visual.v3{background:#f1efe9}
.rs-grid-lines{
  position:absolute;inset:0;
  background-image:linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px);
  background-size:34px 34px
}
.rs-editorial{
  position:absolute;width:56%;min-height:72%;left:50%;top:50%;transform:translate(-50%,-50%) rotate(4deg);
  background:#fff;padding:8%;box-shadow:0 35px 75px rgba(0,0,0,.14);display:flex;flex-direction:column;justify-content:space-between
}
.rs-editorial .num{font-size:11px;letter-spacing:.16em}
.rs-editorial p{margin:0;font-family:Georgia,serif;font-weight:400;font-size:clamp(42px,5vw,82px);line-height:.88;letter-spacing:-.06em}
.rs-editorial .rule{height:1px;background:#111}
.rs-editorial small{font-size:10px;line-height:1.6;color:#646464}
.rs-philosophy{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:30px;overflow:hidden}
.rs-philosophy article{background:white;padding:44px;min-height:290px}
.rs-index{font-size:11px;color:#98989d;letter-spacing:.1em}
.rs-philosophy h3{margin:52px 0 16px;font-size:27px;letter-spacing:-.045em}
.rs-philosophy p{margin:0;color:var(--muted);font-size:14px;line-height:1.7}
.rs-banner{
  min-height:560px;border-radius:42px;background:#0a0a0c;color:#fff;
  display:flex;align-items:end;padding:52px;position:relative;overflow:hidden
}
.rs-banner::before{
  content:"";position:absolute;width:70%;aspect-ratio:1;border-radius:50%;right:-18%;top:-55%;
  background:radial-gradient(circle,#168bf0 0,#004489 32%,rgba(0,0,0,0) 68%);
  filter:blur(14px);opacity:.8
}
.rs-banner-copy{position:relative;z-index:2}
.rs-banner h2{margin:0 0 22px;font-size:clamp(52px,7vw,108px);line-height:.9;letter-spacing:-.07em;max-width:1000px}
.rs-banner p{margin:0;color:#b7b7bd;max-width:560px;line-height:1.6}
.rs-footer{padding:36px 0 45px;border-top:1px solid var(--line)}
.rs-footer-row{display:flex;justify-content:space-between;align-items:center;gap:20px;color:#7a7a7f;font-size:11px}
.rs-footer-links{display:flex;gap:18px}

/* WORK */
.rs-page-hero{padding:125px 0 92px;border-bottom:1px solid var(--line)}
.rs-page-hero h1{margin:12px 0 24px;font-size:clamp(62px,9vw,150px);line-height:.86;letter-spacing:-.075em}
.rs-page-hero p{max-width:690px;margin:0;color:#55555a;font-size:clamp(18px,1.6vw,25px);line-height:1.5}
.rs-case{padding:120px 0;border-bottom:1px solid var(--line)}
.rs-case-head{display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-bottom:50px}
.rs-case-no{font-size:12px;color:#8c8c91;letter-spacing:.14em}
.rs-case-copy h2{margin:0 0 16px;font-size:clamp(42px,5vw,78px);letter-spacing:-.06em;line-height:.94}
.rs-case-copy p{margin:0;max-width:610px;color:#67676c;line-height:1.7}
.rs-case-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:25px}
.rs-chip{border:1px solid var(--line);border-radius:999px;padding:7px 11px;font-size:11px;color:#66666b}
.rs-case-stage{height:min(76vw,800px);border-radius:38px;overflow:hidden;position:relative}

/* ABOUT */
.rs-about-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:9vw;align-items:start}
.rs-about-sticky{position:sticky;top:110px}
.rs-about-sticky h1{margin:10px 0 0;font-size:clamp(66px,8vw,125px);line-height:.84;letter-spacing:-.075em}
.rs-about-copy{padding-top:60px}
.rs-about-copy .statement{font-size:clamp(28px,3vw,48px);line-height:1.16;letter-spacing:-.05em;margin:0 0 56px}
.rs-about-copy .statement .muted{color:#b1b1b6}
.rs-about-copy p{font-size:16px;line-height:1.85;color:#57575c;margin:0 0 24px}
.rs-facts{margin-top:70px;border-top:1px solid var(--line)}
.rs-fact{display:grid;grid-template-columns:120px 1fr;padding:22px 0;border-bottom:1px solid var(--line);font-size:13px}
.rs-fact span:first-child{color:#949499}
.rs-process{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:46px}
.rs-step{background:var(--soft);border-radius:24px;padding:28px;min-height:230px}
.rs-step b{display:block;font-size:11px;color:#8b8b90;letter-spacing:.1em;margin-bottom:66px}
.rs-step h3{font-size:20px;margin:0 0 10px;letter-spacing:-.04em}
.rs-step p{margin:0;color:#747479;font-size:12px;line-height:1.6}

/* CONTACT */
.rs-contact{min-height:calc(100svh - 64px);display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:8vw;padding:90px 0}
.rs-contact-copy h1{margin:12px 0 24px;font-size:clamp(64px,8vw,126px);line-height:.85;letter-spacing:-.075em}
.rs-contact-copy p{max-width:500px;color:#66666b;line-height:1.7;font-size:16px}
.rs-contact-card{background:var(--soft);border-radius:34px;padding:38px}
.rs-field{margin-bottom:18px}
.rs-field label{display:block;font-size:11px;font-weight:700;letter-spacing:.08em;color:#77777c;margin-bottom:8px;text-transform:uppercase}
.rs-input{
  width:100%;border:1px solid rgba(0,0,0,.09);background:#fff;border-radius:16px;
  padding:14px 15px;outline:none;transition:border .2s ease,box-shadow .2s ease
}
textarea.rs-input{min-height:145px;resize:vertical}
.rs-input:focus{border-color:rgba(0,113,227,.55);box-shadow:0 0 0 4px rgba(0,113,227,.08)}
.rs-submit{
  border:0;background:#111;color:white;border-radius:999px;padding:14px 20px;
  cursor:pointer;font-weight:720;width:100%;margin-top:4px
}
.rs-contact-note{font-size:10px;line-height:1.6;color:#919196;margin-top:14px}
.rs-contact-mini{display:flex;gap:18px;flex-wrap:wrap;margin-top:35px;font-size:13px}
.rs-contact-mini a{border-bottom:1px solid #bbb;padding-bottom:2px}
.rs-toast{
  position:fixed;z-index:999;left:50%;bottom:26px;transform:translate(-50%,30px);
  padding:12px 16px;background:#111;color:white;border-radius:999px;font-size:12px;
  opacity:0;pointer-events:none;transition:.25s ease
}
.rs-toast.show{opacity:1;transform:translate(-50%,0)}
.rs-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1)}
.rs-reveal.in{opacity:1;transform:none}
@keyframes rsBreathe{0%,100%{transform:scale(.97);opacity:.78}50%{transform:scale(1.04);opacity:1}}
@keyframes rsSpin{to{transform:rotate(360deg)}}

/* ==========================================================================
   ADDITIVE — Accessibility (keyboard focus)
   ========================================================================== */
:focus-visible{outline:2px solid var(--blue);outline-offset:3px;border-radius:4px}
.rs-input:focus-visible{outline:none} /* keeps the designed focus ring on inputs */
.rs-skip{
  position:absolute;left:16px;top:-60px;z-index:200;
  background:#111;color:#fff;padding:10px 16px;border-radius:999px;font-size:12px;font-weight:700;
  transition:top .2s ease
}
.rs-skip:focus{top:12px}

/* ==========================================================================
   ADDITIVE — Mobile menu (hamburger). Hidden on desktop; the PC design
   is untouched. Appears only where the inline nav was already hidden (<=980px).
   ========================================================================== */
.rs-burger{
  display:none;width:40px;height:40px;border:0;background:transparent;cursor:pointer;
  align-items:center;justify-content:center;position:relative;border-radius:10px
}
.rs-burger span{
  position:absolute;left:9px;right:9px;height:1.6px;background:#1d1d1f;border-radius:2px;
  transition:transform .3s ease,opacity .2s ease
}
.rs-burger span:nth-child(1){transform:translateY(-4px)}
.rs-burger span:nth-child(2){transform:translateY(4px)}
.rs-menu-open .rs-burger span:nth-child(1){transform:translateY(0) rotate(45deg)}
.rs-menu-open .rs-burger span:nth-child(2){transform:translateY(0) rotate(-45deg)}
.rs-mobile-menu{
  position:fixed;z-index:99;left:0;right:0;top:var(--nav-h);
  padding:18px max(24px,calc((100vw - var(--max))/2)) 30px;
  background:rgba(255,255,255,.86);
  backdrop-filter:saturate(180%) blur(24px);
  -webkit-backdrop-filter:saturate(180%) blur(24px);
  border-bottom:1px solid rgba(0,0,0,.06);
  display:flex;flex-direction:column;gap:4px;
  transform:translateY(-12px);opacity:0;pointer-events:none;
  transition:transform .32s cubic-bezier(.2,.8,.2,1),opacity .32s ease;
}
.rs-menu-open .rs-mobile-menu{transform:translateY(0);opacity:1;pointer-events:auto}
.rs-mobile-menu a{
  display:flex;align-items:center;justify-content:space-between;
  padding:15px 4px;font-size:22px;font-weight:640;letter-spacing:-.03em;
  border-bottom:1px solid rgba(0,0,0,.06)
}
.rs-mobile-menu a:last-child{border-bottom:0}
.rs-mobile-menu a::after{content:"→";color:#c7c7cc;font-size:18px;font-weight:400}
.rs-mobile-cta{color:var(--blue)}
.rs-mobile-cta::after{content:"↗";color:var(--blue)}

/* ==========================================================================
   ADDITIVE — Responsive. Base breakpoints (980 / 640) preserved from the
   approved design; refinements added for 430px / 375px and mobile menu.
   ========================================================================== */
@media (max-width:980px){
  .rs-nav-center{display:none}
  .rs-burger{display:inline-flex}
  .rs-hero{grid-template-columns:1fr;padding-top:70px}
  .rs-hero-art{min-height:540px}
  .rs-orbit{width:min(86vw,600px)}
  .rs-card-3d{width:min(72vw,420px)}
  .rs-scrollcue{display:none}
  .rs-project,.rs-project.wide{grid-column:1/-1;min-height:620px}
  .rs-philosophy{grid-template-columns:1fr}
  .rs-philosophy article{min-height:230px}
  .rs-case-head,.rs-about-grid,.rs-contact{grid-template-columns:1fr}
  .rs-about-sticky{position:relative;top:auto}
  .rs-process{grid-template-columns:1fr 1fr}
  .rs-contact{padding-top:85px}
}
@media (max-width:640px){
  :root{--radius:26px}
  .rs-container{width:min(calc(100% - 30px),var(--max))}
  .rs-nav{padding:0 15px}
  .rs-brand{font-size:14px}
  .rs-nav-actions .rs-cta{display:none}
  .rs-hero{min-height:auto;padding:82px 0 32px}
  .rs-hero-copy h1{font-size:clamp(58px,18vw,92px)}
  .rs-lead{font-size:17px}
  .rs-hero-art{min-height:470px}
  .rs-card-content{padding:25px}
  .rs-section{padding:105px 0}
  .rs-section-head{display:block;margin-bottom:38px}
  .rs-section-head p{margin-top:18px}
  .rs-project,.rs-project.wide{min-height:530px}
  .rs-project-meta{left:22px;right:22px;top:22px}
  .rs-project-title{left:22px;right:22px;bottom:22px;display:block}
  .rs-project-title p{text-align:left;margin-top:10px}
  .rs-v1-ring{border-width:42px;width:78%}
  .rs-v2-window{inset:19% 8% 17%}
  .rs-v2-screen{grid-template-columns:1fr}
  .rs-v2-copy{display:none}
  .rs-editorial{width:72%}
  .rs-banner{min-height:520px;padding:30px}
  .rs-footer-row{display:block}
  .rs-footer-links{margin-top:12px}
  .rs-page-hero{padding:90px 0 70px}
  .rs-case{padding:86px 0}
  .rs-case-stage{height:620px}
  .rs-case-head{gap:22px}
  .rs-about-copy{padding-top:25px}
  .rs-process{grid-template-columns:1fr}
  .rs-contact-card{padding:25px}
}
/* Small phones (375–430px): keep the hero art from crowding the copy. */
@media (max-width:430px){
  .rs-hero-art{min-height:420px}
  .rs-orbit{width:min(84vw,420px)}
  .rs-card-3d{width:min(74vw,340px)}
  .rs-banner h2{font-size:clamp(40px,11vw,64px)}
  .rs-fact{grid-template-columns:96px 1fr;gap:6px}
  .rs-mobile-menu a{font-size:20px}
}
@media (prefers-reduced-motion:reduce){
  *{scroll-behavior:auto!important;animation:none!important;transition:none!important}
  .rs-reveal{opacity:1;transform:none}
}

/* ==========================================================================
   READABILITY PASS
   Additive overrides for contrast (WCAG AA), small-text legibility, and
   touch targets. Keeps the light/minimal identity; only nudges the values
   that hurt readability. Colors stay grey — just dark enough to pass AA.
   ========================================================================== */
:root{--muted:#5f6067;--faint:#6a6b71}

/* Contrast — lift the lightest secondary greys to meet AA on white */
.rs-eyebrow{color:var(--faint)}
.rs-field label{color:var(--faint)}
.rs-index{color:var(--faint)}
.rs-case-no{color:var(--faint)}
.rs-fact span:first-child{color:var(--faint)}
.rs-step b{color:var(--faint)}
.rs-scrollcue{color:var(--faint)}
.rs-v2-copy small{color:#6a6b71}
.rs-footer-row{color:#5f6067}
.rs-cred{color:#5f6067}

/* Small-text sizing & spacing for comfortable reading */
.rs-contact-note{font-size:11px;line-height:1.65}
.rs-step p{color:#5f6067;font-size:12.5px;line-height:1.66}
.rs-project-title p{line-height:1.55}
.rs-fact{line-height:1.5}
.rs-philosophy p{line-height:1.75}

/* Touch targets — enlarge hit areas without changing visual weight */
.rs-lang{min-height:44px;display:inline-flex;align-items:center;padding:0 8px}
.rs-nav-center a{padding:10px 2px}
.rs-brand{padding:8px 0}
.rs-footer-links a{display:inline-block;padding:8px 0}
.rs-burger{width:44px;height:44px}
.rs-skip{padding:12px 18px}

/* ==========================================================================
   ROAMING ORB (구슬) · FLOATING CTA · CARD BADGES
   ========================================================================== */
/* A blue marble that rolls across the whole viewport and stays on scroll. */
.rs-roam{
  position:fixed;top:0;left:0;z-index:0;pointer-events:none;
  width:min(46vw,440px);aspect-ratio:1;border-radius:50%;
  background:
    radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(255,255,255,0) 24%),
    radial-gradient(circle at 44% 46%,rgba(0,113,227,.72),rgba(77,180,255,.34) 42%,rgba(198,226,255,.14) 62%,rgba(255,255,255,0) 76%);
  filter:blur(2px);opacity:.82;
  animation:rsRoam 24s ease-in-out infinite;
  will-change:transform;
}
@keyframes rsRoam{
  0%  {transform:translate(-10vw,10vh) rotate(0deg) scale(1)}
  20% {transform:translate(66vw,4vh) rotate(120deg) scale(1.12)}
  40% {transform:translate(74vw,64vh) rotate(220deg) scale(.94)}
  60% {transform:translate(12vw,80vh) rotate(300deg) scale(1.16)}
  80% {transform:translate(-8vw,42vh) rotate(340deg) scale(1)}
  100%{transform:translate(-10vw,10vh) rotate(360deg) scale(1)}
}
/* Persistent "Start a project" button — always visible while scrolling. */
.rs-fab{
  position:fixed;z-index:120;bottom:24px;right:max(20px,calc((100vw - var(--max))/2));
  display:inline-flex;align-items:center;gap:9px;
  background:var(--blue);color:#fff;border:0;border-radius:999px;cursor:pointer;font-family:inherit;
  padding:16px 24px;font-size:15px;font-weight:770;letter-spacing:-.01em;
  box-shadow:0 14px 34px rgba(0,113,227,.45);
  transition:transform .2s ease,background .2s ease,box-shadow .2s ease;
  animation:rsFab 2.8s ease-in-out infinite;
}
.rs-fab:hover{transform:translateY(-2px);background:#0063c6;box-shadow:0 18px 46px rgba(0,113,227,.6)}
@keyframes rsFab{0%,100%{box-shadow:0 14px 34px rgba(0,113,227,.4)}50%{box-shadow:0 16px 46px rgba(0,113,227,.66)}}
@media (max-width:640px){
  .rs-fab{bottom:18px;right:16px;padding:14px 20px;font-size:14px}
  .rs-roam{width:min(70vw,360px);opacity:.72}
}
/* Card credential badges */
/* Contact — service checkboxes */
.rs-field-group{margin-bottom:18px}
.rs-field-legend{font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--faint);margin-bottom:8px;text-transform:uppercase}
.rs-svc{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rs-svc label{display:flex;align-items:center;gap:9px;padding:11px 13px;border:1px solid rgba(0,0,0,.09);border-radius:14px;background:#fff;cursor:pointer;font-size:13px;transition:border .15s ease,background .15s ease}
.rs-svc label:hover{border-color:rgba(0,113,227,.4)}
.rs-svc input{width:17px;height:17px;accent-color:var(--blue);flex:0 0 auto}
.rs-svc label:has(input:checked){border-color:var(--blue);background:rgba(0,113,227,.06)}

/* Insight / blog list cards */
.rs-post-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.rs-post{display:flex;flex-direction:column;gap:14px;background:var(--soft);border:1px solid rgba(0,0,0,.04);border-radius:var(--radius);padding:30px;min-height:240px;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease}
.rs-post:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.rs-post .cat{font-size:11px;font-weight:760;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.rs-post h3{margin:0;font-size:21px;line-height:1.32;letter-spacing:-.03em;flex:1}
.rs-post .status{align-self:flex-start;font-size:11px;font-weight:700;border:1px solid var(--line);border-radius:999px;padding:5px 11px;color:#66666b}
@media (max-width:980px){ .rs-post-grid{grid-template-columns:1fr 1fr} }
@media (max-width:640px){ .rs-post-grid{grid-template-columns:1fr} }

/* Case-study Problem/Strategy rows */
.rs-case-kv{margin:20px 0 0;display:grid;gap:12px}
.rs-case-kv .row{display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:start}
.rs-case-kv .k{font-size:11px;font-weight:760;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);padding-top:3px}
.rs-case-kv .v{margin:0;font-size:14px;line-height:1.7;color:#57575c}
.rs-chip.is-concept{border-color:rgba(0,113,227,.4);color:var(--blue);background:rgba(0,113,227,.06);font-weight:700}
@media (max-width:640px){ .rs-case-kv .row{grid-template-columns:76px 1fr;gap:10px} }

.rs-cred-wrap{display:flex;flex-direction:column;gap:10px;align-items:flex-start}
.rs-chip-badge{
  display:inline-flex;align-items:center;border:1px solid rgba(0,0,0,.16);
  border-radius:999px;padding:5px 12px;font-size:10.5px;font-weight:650;
  color:#4a4a50;letter-spacing:.02em;white-space:nowrap
}

/* ==========================================================================
   LIVE CHAT — FAB "live" dot, rolling metallic bead, consultation modal
   ========================================================================== */
.rs-fab-dot{width:8px;height:8px;border-radius:50%;background:#37e0a6;box-shadow:0 0 0 3px rgba(55,224,166,.28);flex:0 0 auto}
.rs-fab-bead{display:none}
@supports (offset-path: border-box){
  .rs-fab-bead{
    display:block;position:absolute;width:14px;height:14px;border-radius:50%;
    offset-path:border-box;offset-distance:0%;offset-anchor:center;
    background:radial-gradient(circle at 35% 30%,#ffffff 0 12%,#eef1f5 28%,#aab2bc 58%,#5b636c 100%);
    box-shadow:0 0 7px rgba(255,255,255,.85),0 1px 3px rgba(0,0,0,.45);
    animation:rsBead 3.4s linear infinite;pointer-events:none;
  }
}
@keyframes rsBead{to{offset-distance:100%}}

.rs-chat-backdrop{
  position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;padding:20px;
  background:rgba(10,12,18,.5);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  opacity:0;pointer-events:none;transition:opacity .25s ease;
}
.rs-chat-backdrop.open{opacity:1;pointer-events:auto}
.rs-chat-modal{
  position:relative;width:min(560px,100%);max-height:min(88vh,780px);overflow:auto;
  background:#fff;color:var(--ink);border-radius:28px;padding:34px;
  box-shadow:0 40px 120px rgba(0,0,0,.35);
  transform:translateY(16px) scale(.985);transition:transform .3s cubic-bezier(.2,.8,.2,1);
}
.rs-chat-backdrop.open .rs-chat-modal{transform:none}
.rs-chat-close{position:absolute;top:18px;right:18px;width:38px;height:38px;border:0;background:var(--soft);border-radius:50%;font-size:20px;line-height:1;cursor:pointer;color:#333}
.rs-chat-close:hover{background:#ececf0}
.rs-chat-h{margin:8px 0 8px;font-size:clamp(26px,3.2vw,38px);letter-spacing:-.04em;line-height:1.02}
.rs-chat-lead{margin:0 0 22px;color:var(--muted);font-size:14px;line-height:1.6}
.rs-chat-group{margin:0 0 22px}
.rs-chat-legend{font-size:14px;font-weight:760;letter-spacing:-.02em;margin-bottom:12px;display:flex;align-items:baseline;gap:8px}
.rs-chat-legend em{font-style:normal;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--faint)}
.rs-chat-sub{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--faint);margin:14px 0 8px}
.rs-chat-sub:first-child{margin-top:0}
.rs-chat-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rs-chat-opts--mood{grid-template-columns:1fr}
.rs-chat-opt{display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid rgba(0,0,0,.10);border-radius:14px;cursor:pointer;font-size:13px;transition:border .15s ease,background .15s ease}
.rs-chat-opt:hover{border-color:rgba(0,113,227,.4)}
.rs-chat-opt input{width:17px;height:17px;accent-color:var(--blue);flex:0 0 auto}
.rs-chat-opt small{margin-left:auto;color:var(--faint);font-size:11px}
.rs-chat-opt:has(input:checked){border-color:var(--blue);background:rgba(0,113,227,.06)}
.rs-chat-modal .rs-submit{margin-top:6px}
.rs-chat-note{font-size:11px;line-height:1.6;color:var(--faint);margin:12px 0 0}
@media (max-width:560px){
  .rs-chat-modal{padding:26px 20px;border-radius:22px}
  .rs-chat-opts{grid-template-columns:1fr}
}

/* ==========================================================================
   SPACING PASS — 더 넉넉한 자간(letter-spacing)과 행간(line-height)
   촘촘하던 한글 제목·본문에 숨통을 틔웁니다. (컬러/레이아웃은 그대로)
   ========================================================================== */
h1,h2,h3,h4{text-wrap:balance}
/* Display headings: relax tight tracking, open line-height */
.rs-section-head h2,.rs-display{letter-spacing:-.03em;line-height:1.08}
.rs-page-hero h1{letter-spacing:-.045em;line-height:1.0}
.rs-case-copy h2{letter-spacing:-.035em;line-height:1.1}
.rs-project-title h3{letter-spacing:-.03em;line-height:1.06}
.rs-banner h2{letter-spacing:-.04em;line-height:1.02}
.rs-contact-copy h1{letter-spacing:-.045em;line-height:1.0}
.rs-about-sticky h1{letter-spacing:-.03em}
.rs-philosophy h3{letter-spacing:-.02em;line-height:1.22}
.rs-step h3{letter-spacing:-.02em;line-height:1.3}
.rs-post h3{letter-spacing:-.02em;line-height:1.45}
.rs-back-lead{line-height:1.3}
/* Body text: more line-height for readability */
.rs-lead{line-height:1.62}
.rs-page-hero p{line-height:1.62}
.rs-section-head p{line-height:1.78}
.rs-project-title p{line-height:1.62}
.rs-case-copy p,.rs-case-kv .v{line-height:1.85}
.rs-philosophy p{line-height:1.9}
.rs-step p{line-height:1.72}
.rs-about-copy p{line-height:2}
.rs-about-copy .statement{letter-spacing:-.02em;line-height:1.32}
.rs-fact{line-height:1.6}
.rs-banner p{line-height:1.72}
.rs-contact-copy p{line-height:1.8}
.rs-chat-opt{line-height:1.4}
```

## assets/rahel.js

```js
/* ==========================================================================
   RAHEL STUDIO — shared behaviour
   Reveal on scroll · 3D pointer motion · KO/EN toggle (persisted) ·
   Mobile menu · Contact form (mailto). No design changes.
   ========================================================================== */
(function(){
  "use strict";

  /* ------- ONE place to change the contact address ------- */
  var CONTACT_EMAIL = "eunakim1984@gmail.com";

  var $  = function(s, c){ return (c||document).querySelector(s); };
  var $$ = function(s, c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };

  /* ---------- Ambient roaming orb + live-chat button (all pages) ---------- */
  (function(){
    if (document.querySelector(".rs-fab")) return;
    var roam = document.createElement("div");
    roam.className = "rs-roam";
    roam.setAttribute("aria-hidden", "true");
    var fab = document.createElement("button");
    fab.className = "rs-fab";
    fab.type = "button";
    fab.setAttribute("aria-haspopup", "dialog");
    fab.innerHTML = '<span class="rs-fab-dot" aria-hidden="true"></span><span data-ko="채팅 상담" data-en="Live chat">채팅 상담</span><span class="rs-fab-bead" aria-hidden="true"></span>';
    fab.addEventListener("click", openChatModal);
    document.body.appendChild(roam);
    document.body.appendChild(fab);
  })();

  /* ---------- Reveal on scroll ---------- */
  var els = $$(".rs-reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold:.12 });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add("in"); });
  }

  /* ---------- Subtle 3D pointer motion ---------- */
  var card = $(".rs-card-3d");
  if (card && window.matchMedia("(pointer:fine)").matches) {
    var host = $(".rs-hero-art");
    if (host) {
      host.addEventListener("pointermove", function(e){
        var r = host.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width  - .5;
        var y = (e.clientY - r.top)  / r.height - .5;
        card.style.transform = "rotateY(" + (x*12 - 8) + "deg) rotateX(" + (-y*10 + 3) + "deg) translate3d(0,-3px,0)";
      });
      host.addEventListener("pointerleave", function(){
        card.style.transform = "rotateY(-10deg) rotateX(5deg)";
      });
    }
  }

  /* ---------- Profile card flip ---------- */
  var flipCard = $(".rs-card-3d");
  if (flipCard){
    var toggleFlip = function(){
      flipCard.classList.toggle("flipped");
    };
    flipCard.addEventListener("click", function(e){
      if (e.target.closest("a")) return;            // let the portfolio link navigate
      if (e.target.closest(".rs-flip-btn")) return; // buttons handle their own click
      toggleFlip();
    });
    $$(".rs-flip-btn", flipCard).forEach(function(b){
      b.addEventListener("click", function(e){ e.stopPropagation(); toggleFlip(); });
    });
  }

  /* ---------- Language toggle (KO/EN), persisted across pages ---------- */
  var STORAGE_KEY = "rahel-lang";
  var lang = "ko";
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ko" || saved === "en") lang = saved;
  } catch (err) { /* private mode / storage disabled */ }

  var langBtn = $(".rs-lang");

  function applyLang(){
    $$("[data-ko][data-en]").forEach(function(el){
      var text = lang === "ko" ? el.getAttribute("data-ko") : el.getAttribute("data-en");
      if (text !== null && text !== undefined) el.innerHTML = text;
    });
    if (langBtn){
      langBtn.textContent = lang === "ko" ? "EN" : "KO";
      langBtn.setAttribute("aria-label", lang === "ko" ? "Switch to English" : "한국어로 전환");
    }
    document.documentElement.lang = lang;
  }

  if (langBtn){
    langBtn.addEventListener("click", function(){
      lang = lang === "ko" ? "en" : "ko";
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (err) {}
      applyLang();
    });
  }
  applyLang();

  /* ---------- Mobile menu ---------- */
  var burger = $(".rs-burger");
  var menu   = $(".rs-mobile-menu");
  var shell  = $(".rs-shell") || document.body;

  function setMenu(open){
    shell.classList.toggle("rs-menu-open", open);
    if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
    if (menu)   menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (burger && menu){
    setMenu(false);
    burger.addEventListener("click", function(){
      setMenu(!shell.classList.contains("rs-menu-open"));
    });
    $$("a", menu).forEach(function(a){
      a.addEventListener("click", function(){ setMenu(false); });
    });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && shell.classList.contains("rs-menu-open")) setMenu(false);
    });
    // Close the menu if the viewport grows back to desktop.
    window.addEventListener("resize", function(){
      if (window.innerWidth > 980 && shell.classList.contains("rs-menu-open")) setMenu(false);
    });
  }

  /* ---------- Toast (created on demand so it works on every page) ---------- */
  function showToast(msg){
    var t = document.querySelector(".rs-toast");
    if (!t){ t = document.createElement("div"); t.className = "rs-toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(function(){ t.classList.remove("show"); }, 2600);
  }

  /* ---------- Contact form → mailto ---------- */
  var form = $("#rs-contact-form");

  if (form){
    var target   = form.getAttribute("data-email") || CONTACT_EMAIL;
    // Optional: paste a Formspree (or similar) endpoint here or on the form's
    // data-endpoint attribute to collect inquiries without a backend.
    var endpoint = (form.getAttribute("data-endpoint") || "").trim();

    form.addEventListener("submit", function(e){
      e.preventDefault();
      var fd = new FormData(form);

      // Path A — endpoint configured: POST in the background, no mail app needed.
      if (endpoint){
        showToast(lang === "ko" ? "보내는 중…" : "Sending…");
        fetch(endpoint, { method:"POST", body:fd, headers:{ "Accept":"application/json" } })
          .then(function(r){
            if (!r.ok) throw new Error("bad status");
            form.reset();
            showToast(lang === "ko" ? "문의가 전송되었습니다. 감사합니다!" : "Thanks — your inquiry has been sent!");
          })
          .catch(function(){
            showToast(lang === "ko" ? "전송에 실패했어요. 잠시 후 다시 시도해 주세요." : "Couldn't send. Please try again shortly.");
          });
        return;
      }

      // Path B — fallback: open the visitor's mail app pre-filled.
      if (!target || target.indexOf("YOUR_EMAIL") !== -1){
        showToast(lang === "ko" ? "이메일 주소를 먼저 설정해 주세요." : "Please set a contact email first.");
        return;
      }
      var services = fd.getAll("service").join(", ");
      var subject = encodeURIComponent("[Rahel Studio] " + (fd.get("name") || "New inquiry"));
      var body = encodeURIComponent(
        "이름/업체명: " + (fd.get("name")     || "") + "\n" +
        "업종: "        + (fd.get("industry") || "") + "\n" +
        "필요한 서비스: " + services + "\n" +
        "예상 일정: "   + (fd.get("timeline") || "") + "\n\n" +
        "현재 가장 고민되는 점:\n" + (fd.get("message") || "")
      );
      showToast(lang === "ko" ? "메일 앱을 여는 중…" : "Opening your mail app…");
      window.location.href = "mailto:" + target + "?subject=" + subject + "&body=" + body;
    });
  }

  /* ==========================================================================
     LIVE CHAT CONSULTATION
     Set your widget below; on submit the form opens & prefills that chat.
     Leave provider empty → the request is sent by email instead.
     ========================================================================== */
  var CHAT_CONFIG = {
    provider: "",   // "channel" | "crisp" | "tawk" | "" (none → email)
    key: ""         // Channel plugin key · Crisp website id · Tawk "propertyId/widgetId"
  };

  var CHAT_MENUS = [
    { v:"메인(홈)", en:"Home", on:true },
    { v:"업무 분야", en:"Practice areas", on:true },
    { v:"변호사 소개", en:"About the lawyer", on:true },
    { v:"상담 안내", en:"Consultation", on:true },
    { v:"오시는 길", en:"Location", on:true },
    { v:"성공 사례", en:"Case results", opt:true, on:true },
    { v:"법률 칼럼", en:"Legal column", opt:true, on:true },
    { v:"언론 보도", en:"Press", opt:true, on:true },
    { v:"FAQ", en:"FAQ", opt:true, on:false }
  ];
  var CHAT_MOODS = [
    { v:"미니멀", en:"Minimal", d:"여백 많고 깔끔" },
    { v:"모던 럭셔리", en:"Modern Luxury", d:"고급스럽고 절제된" },
    { v:"내추럴", en:"Natural", d:"자연스럽고 편안한" },
    { v:"키치", en:"Kitsch", d:"알록달록 발랄, 복고 팝" },
    { v:"비비드 & 볼드", en:"Vivid & Bold", d:"강렬하고 자신감 있는" },
    { v:"파스텔 소프트", en:"Pastel Soft", d:"부드럽고 사랑스러운" },
    { v:"감성 빈티지", en:"Vintage", d:"따뜻한 추억, 아날로그" },
    { v:"다크 & 시크", en:"Dark Chic", d:"세련되고 힙한, 몰입감" },
    { v:"코퍼레이트 트러스트", en:"Corporate", d:"신뢰·안정·전문" },
    { v:"일러스트 프렌들리", en:"Friendly", d:"친근하고 귀여운" }
  ];

  var chatModal = null, chatPrevFocus = null;

  function chatEsc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  function buildChatModal(){
    if (chatModal) return chatModal;
    var i, m, d, menus = '<div class="rs-chat-sub" data-ko="필수 메뉴" data-en="Essential">필수 메뉴</div><div class="rs-chat-opts">';
    for (i=0;i<CHAT_MENUS.length;i++){
      m = CHAT_MENUS[i];
      if (m.opt && CHAT_MENUS[i-1] && !CHAT_MENUS[i-1].opt){
        menus += '</div><div class="rs-chat-sub" data-ko="있으면 좋은 메뉴" data-en="Recommended">있으면 좋은 메뉴</div><div class="rs-chat-opts">';
      }
      menus += '<label class="rs-chat-opt"><input type="checkbox" name="rs-menu" value="'+chatEsc(m.v)+'"'+(m.on?" checked":"")+'><span data-ko="'+chatEsc(m.v)+'" data-en="'+chatEsc(m.en)+'">'+chatEsc(m.v)+'</span></label>';
    }
    menus += '</div>';
    var moods = '<div class="rs-chat-opts rs-chat-opts--mood">';
    for (i=0;i<CHAT_MOODS.length;i++){
      d = CHAT_MOODS[i];
      moods += '<label class="rs-chat-opt"><input type="radio" name="rs-mood" value="'+chatEsc(d.v)+'"'+(i===0?" checked":"")+'><span data-ko="'+chatEsc(d.v)+'" data-en="'+chatEsc(d.en)+'">'+chatEsc(d.v)+'</span><small data-ko="'+chatEsc(d.d)+'" data-en="'+chatEsc(d.en)+'">'+chatEsc(d.d)+'</small></label>';
    }
    moods += '</div>';

    var back = document.createElement("div");
    back.className = "rs-chat-backdrop";
    back.setAttribute("hidden", "");
    back.innerHTML =
      '<div class="rs-chat-modal" role="dialog" aria-modal="true" aria-labelledby="rs-chat-title">'
      + '<button class="rs-chat-close" type="button" aria-label="닫기">×</button>'
      + '<div class="rs-eyebrow">Live Consulting</div>'
      + '<h2 id="rs-chat-title" class="rs-chat-h" data-ko="채팅 상담 신청" data-en="Start a chat consultation">채팅 상담 신청</h2>'
      + '<p class="rs-chat-lead" data-ko="원하는 메뉴와 디자인 분위기를 고르고 제출하면 상담 채팅이 바로 열립니다." data-en="Pick your pages and design mood, then submit — the chat opens right away.">원하는 메뉴와 디자인 분위기를 고르고 제출하면 상담 채팅이 바로 열립니다.</p>'
      + '<form id="rs-chat-form">'
      + '<div class="rs-chat-group"><div class="rs-chat-legend"><span data-ko="① 홈페이지 메뉴" data-en="① Pages">① 홈페이지 메뉴</span> <em data-ko="다중 선택" data-en="multiple">다중 선택</em></div>'+menus+'</div>'
      + '<div class="rs-chat-group"><div class="rs-chat-legend"><span data-ko="② 디자인 분위기" data-en="② Design mood">② 디자인 분위기</span> <em data-ko="1개 선택" data-en="pick one">1개 선택</em></div>'+moods+'</div>'
      + '<button class="rs-submit" type="submit" data-ko="제출 → 채팅 열기" data-en="Submit → Open chat">제출 → 채팅 열기</button>'
      + '<p class="rs-chat-note" data-ko="제출하면 선택 내용이 상담 채팅으로 자동 전송됩니다." data-en="On submit, your selections are sent to the chat automatically.">제출하면 선택 내용이 상담 채팅으로 자동 전송됩니다.</p>'
      + '</form></div>';
    document.body.appendChild(back);
    chatModal = back;
    back.querySelector(".rs-chat-close").addEventListener("click", closeChatModal);
    back.addEventListener("mousedown", function(e){ if (e.target === back) closeChatModal(); });
    back.querySelector("#rs-chat-form").addEventListener("submit", function(e){ e.preventDefault(); submitChat(); });
    applyLang();
    return back;
  }

  function openChatModal(){
    buildChatModal();
    chatPrevFocus = document.activeElement;
    chatModal.removeAttribute("hidden");
    requestAnimationFrame(function(){ chatModal.classList.add("open"); });
    document.body.style.overflow = "hidden";
    var c = chatModal.querySelector(".rs-chat-close");
    if (c) c.focus();
    document.addEventListener("keydown", chatKeydown);
  }
  function closeChatModal(){
    if (!chatModal) return;
    chatModal.classList.remove("open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", chatKeydown);
    setTimeout(function(){ if (chatModal) chatModal.setAttribute("hidden", ""); }, 280);
    if (chatPrevFocus && chatPrevFocus.focus) chatPrevFocus.focus();
  }
  function chatKeydown(e){
    if (e.key === "Escape"){ closeChatModal(); return; }
    if (e.key === "Tab" && chatModal){
      var f = Array.prototype.filter.call(
        chatModal.querySelectorAll('button,input,a[href],[tabindex]:not([tabindex="-1"])'),
        function(el){ return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length-1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  }

  function chatMessage(){
    var menus = $$('#rs-chat-form input[name="rs-menu"]:checked').map(function(i){ return i.value; });
    var mood = ($('#rs-chat-form input[name="rs-mood"]:checked') || {}).value || "-";
    return "[홈페이지 상담 신청]\n▸ 선택 메뉴: " + (menus.join(", ") || "-") + "\n▸ 디자인 분위기: " + mood;
  }

  function chatInstall(){
    var p = CHAT_CONFIG.provider, k = CHAT_CONFIG.key;
    if (!p || !k || window.__rsChatInstalled) return;
    window.__rsChatInstalled = true;
    if (p === "crisp"){
      window.$crisp = window.$crisp || []; window.CRISP_WEBSITE_ID = k;
      var s = document.createElement("script"); s.src = "https://client.crisp.chat/l.js"; s.async = 1; document.head.appendChild(s);
    } else if (p === "channel"){
      (function(){ var w = window; if (w.ChannelIO) return; var ch = function(){ ch.c(arguments); }; ch.q = []; ch.c = function(a){ ch.q.push(a); }; w.ChannelIO = ch;
        var sc = document.createElement("script"); sc.async = true; sc.src = "https://cdn.channel.io/plugin/ch-plugin-web.js"; document.head.appendChild(sc); })();
      window.ChannelIO("boot", { pluginKey: k });
    } else if (p === "tawk"){
      var parts = k.split("/"); window.Tawk_API = window.Tawk_API || {};
      var t = document.createElement("script"); t.async = 1; t.src = "https://embed.tawk.to/" + parts[0] + "/" + (parts[1] || "default"); t.charset = "UTF-8"; t.setAttribute("crossorigin", "*"); document.head.appendChild(t);
    }
  }
  function chatOpenSend(msg){
    var p = CHAT_CONFIG.provider;
    try{
      if (p === "crisp"){ window.$crisp.push(["do","chat:open"]); window.$crisp.push(["do","message:send",["text", msg]]); return true; }
      if (p === "channel"){ window.ChannelIO("openChat", undefined, msg); return true; }
      if (p === "tawk"){ if (window.Tawk_API && window.Tawk_API.maximize){ window.Tawk_API.maximize(); return true; } return false; }
    }catch(err){}
    return false;
  }
  function submitChat(){
    var msg = chatMessage();
    if (CHAT_CONFIG.provider && CHAT_CONFIG.key){
      chatInstall();
      showToast(lang === "ko" ? "상담 채팅을 여는 중…" : "Opening the chat…");
      var tries = 0;
      (function trySend(){
        if (chatOpenSend(msg)){ closeChatModal(); return; }
        if (tries++ < 20){ setTimeout(trySend, 300); } else { chatEmailFallback(msg); }
      })();
      return;
    }
    chatEmailFallback(msg);
  }
  function chatEmailFallback(msg){
    try{ if (navigator.clipboard) navigator.clipboard.writeText(msg); }catch(e){}
    showToast(lang === "ko" ? "메일로 신청을 보냅니다 (채팅 위젯 미설정)" : "Sending via email (chat not set up)");
    closeChatModal();
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("[홈페이지 상담 신청]") + "&body=" + encodeURIComponent(msg);
  }
})();
```

## site.webmanifest

```json
{
  "name": "RAHEL STUDIO",
  "short_name": "RAHEL",
  "description": "Strategy · Branding · Web Design for professionals.",
  "lang": "ko",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ffffff",
  "icons": [
    { "src": "/assets/favicon.svg", "type": "image/svg+xml", "sizes": "any", "purpose": "any" },
    { "src": "/assets/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/assets/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

## robots.txt

```text
User-agent: *
Allow: /

# After deploying, replace the domain below with your real one and keep it in sync with sitemap.xml
Sitemap: https://YOUR-DOMAIN/sitemap.xml
```

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Replace https://YOUR-DOMAIN with your real domain after deploying (e.g. https://rahel-studio.vercel.app). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-DOMAIN/index.html</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://YOUR-DOMAIN/works.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://YOUR-DOMAIN/about.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://YOUR-DOMAIN/contact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

