/* ============================================================
   RAHEL STUDIO — i18n (Korean / English)
   Usage in HTML:  <span data-i18n="hero.role">...</span>
   Attribute text: data-i18n-attr="placeholder:contact.form.name_ph"
   Language persists in localStorage. Default: ko
   ============================================================ */
(function () {
  const DICT = {
    ko: {
      /* nav */
      "nav.work": "작업",
      "nav.about": "소개",
      "nav.contact": "문의",
      "nav.langLabel": "EN",

      /* hero (home) */
      "hero.role": "Designer & Creative Director",
      "hero.tag": "전문직을 위한 브랜딩과 웹 기획 — 데이터를 근거로 신뢰를 디자인합니다.",
      "hero.cta1": "작업 보기",
      "hero.cta2": "프로젝트 문의",
      "hero.scroll": "Scroll",

      /* home — intro */
      "home.introKicker": "Rahel Studio",
      "home.introTitle": "브랜드의 첫인상을,\n데이터로 설계합니다.",
      "home.introBody": "감으로 예쁘게 만드는 디자인이 아니라, 시장·고객·경쟁을 읽고 근거 위에 쌓아 올리는 브랜딩과 웹 기획. 변호사·의사·회계사·세무사 등 전문직의 신뢰를 화면 위에 구현합니다.",

      /* home — work preview */
      "home.workKicker": "Selected Work",
      "home.workTitle": "세 가지 축으로 일합니다",
      "home.workLink": "전체 작업 보기",
      "work.01.num": "Work 01",
      "work.01.title": "Brand Identity",
      "work.02.num": "Work 02",
      "work.02.title": "Web Design",
      "work.03.num": "Work 03",
      "work.03.title": "Editorial",

      /* work page */
      "workpage.kicker": "Portfolio",
      "workpage.title": "선택된 작업",
      "workpage.intro": "브랜드 아이덴티티, 웹 디자인, 에디토리얼 — 전문직 고객의 신뢰를 만드는 세 가지 방식입니다.",
      "work.01.desc": "로고, 컬러, 타이포그래피, 톤앤매너까지. 하나의 원칙에서 출발해 어디에 놓여도 흔들리지 않는 아이덴티티 시스템을 만듭니다.",
      "work.02.desc": "전환을 목표로 설계하는 웹사이트. 방문자가 무엇을 보고, 어디서 신뢰하고, 언제 연락하는지 데이터로 설계합니다.",
      "work.03.desc": "브로슈어, 회사소개서, 리포트. 읽는 순간 전문성이 전해지도록 정보를 위계로 정돈하는 편집 디자인입니다.",
      "work.01.t1": "로고 시스템", "work.01.t2": "브랜드 가이드", "work.01.t3": "네이밍",
      "work.02.t1": "UX 설계", "work.02.t2": "반응형", "work.02.t3": "랜딩페이지",
      "work.03.t1": "브로슈어", "work.03.t2": "회사소개서", "work.03.t3": "타이포그래피",
      "work.more": "케이스 자세히",

      /* about page */
      "about.kicker": "About",
      "about.title": "데이터로 신뢰를\n디자인하는 사람",
      "about.lead": "디자인과를 졸업한 뒤 브랜딩과 기획을 함께 다루는 디자이너로 일하고 있습니다. 전문직 웹사이트의 기획과 브랜딩을 데이터를 근거로 설계합니다 — 예쁨을 넘어, 결과로 증명되는 디자인을 지향합니다.",
      "about.statTitle": "숫자로 보는 작업 방식",
      "about.stat1n": "100%", "about.stat1t": "리서치로 시작하는 프로젝트",
      "about.stat2n": "3", "about.stat2t": "전문 영역: 브랜딩·웹·에디토리얼",
      "about.stat3n": "1:1", "about.stat3t": "대표 디자이너 직접 진행",
      "about.apprKicker": "How I Work",
      "about.apprTitle": "일하는 원칙",
      "about.appr1t": "데이터로 시작",
      "about.appr1d": "시장·경쟁·타겟을 먼저 읽습니다. 근거 없는 디자인은 취향일 뿐, 브랜드가 되지 않습니다.",
      "about.appr2t": "전문직에 특화",
      "about.appr2d": "변호사·의사·회계사·세무사·부동산·강사. 신뢰가 곧 전환인 분야를 깊게 이해합니다.",
      "about.appr3t": "미니멀·모던",
      "about.appr3d": "덜어낼수록 신뢰는 또렷해집니다. 애플처럼 담백하고 확신 있는 화면을 만듭니다.",
      "about.clientsKicker": "Who I Work With",
      "about.clientsTitle": "이런 분들과 함께합니다",
      "about.c1": "변호사 · 법률사무소", "about.c2": "의사 · 병원", "about.c3": "회계사",
      "about.c4": "세무사", "about.c5": "부동산", "about.c6": "강사 · 전문가",
      "about.processKicker": "Process",
      "about.processTitle": "진행 방식",
      "about.p1t": "리서치 & 전략", "about.p1d": "시장, 경쟁사, 타겟 고객을 분석해 브랜드가 서 있어야 할 자리를 정의합니다.",
      "about.p2t": "브랜딩 & 기획", "about.p2d": "전략을 로고·컬러·메시지·구조로 번역합니다. 모든 결정에는 이유가 있습니다.",
      "about.p3t": "디자인 & 구현", "about.p3d": "애플을 모티브로 한 미니멀·모던 화면을 설계하고 반응형으로 완성합니다.",
      "about.p4t": "연동 & 운영", "about.p4d": "아임웹 등 실제 운영 환경에 연동하고, 이후에도 다듬을 수 있게 넘겨드립니다.",

      /* contact page */
      "contact.kicker": "Contact",
      "contact.title": "프로젝트를\n시작해볼까요?",
      "contact.lead": "브랜딩, 웹사이트, 에디토리얼 — 무엇이든 편하게 이야기해 주세요. 24시간 이내에 답장드립니다.",
      "contact.emailK": "이메일",
      "contact.hoursK": "응답 시간",
      "contact.hoursV": "평일 · 24시간 이내",
      "contact.basedK": "위치",
      "contact.basedV": "대한민국 · 온라인 진행",
      "contact.form.name": "이름",
      "contact.form.name_ph": "성함을 입력해 주세요",
      "contact.form.email": "이메일",
      "contact.form.email_ph": "you@example.com",
      "contact.form.type": "문의 유형",
      "contact.form.type_brand": "브랜드 아이덴티티",
      "contact.form.type_web": "웹사이트 디자인",
      "contact.form.type_editorial": "에디토리얼 · 인쇄물",
      "contact.form.type_other": "기타 / 상담",
      "contact.form.msg": "프로젝트 내용",
      "contact.form.msg_ph": "어떤 일을 하시는지, 무엇이 필요한지 편하게 적어주세요.",
      "contact.form.submit": "문의 보내기",
      "contact.form.note": "보내주신 내용은 이메일로 전달됩니다.",
      "contact.form.sending": "보내는 중…",
      "contact.form.ok": "감사합니다! 메시지가 전송되었습니다. 곧 연락드릴게요.",
      "contact.form.err": "전송에 문제가 있었습니다. 이메일로 직접 연락 부탁드립니다.",

      /* cta */
      "cta.title": "브랜드의 다음 장을\n함께 씁니다.",
      "cta.body": "지금 상담을 시작하세요. 첫 대화는 언제나 무료입니다.",
      "cta.btn": "문의하기",

      /* footer */
      "footer.tagline": "Designer & Creative Director",
      "footer.rights": "All rights reserved.",
      "footer.work": "작업", "footer.about": "소개", "footer.contact": "문의",
    },

    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.langLabel": "KR",

      "hero.role": "Designer & Creative Director",
      "hero.tag": "Branding & web strategy for professionals — designing trust, grounded in data.",
      "hero.cta1": "View Work",
      "hero.cta2": "Start a Project",
      "hero.scroll": "Scroll",

      "home.introKicker": "Rahel Studio",
      "home.introTitle": "First impressions,\nengineered with data.",
      "home.introBody": "Not design by gut feeling — branding and web strategy built on evidence: market, customer, competition. I translate the credibility of professionals like lawyers, doctors and accountants onto the screen.",

      "home.workKicker": "Selected Work",
      "home.workTitle": "Three ways I work",
      "home.workLink": "See all work",
      "work.01.num": "Work 01",
      "work.01.title": "Brand Identity",
      "work.02.num": "Work 02",
      "work.02.title": "Web Design",
      "work.03.num": "Work 03",
      "work.03.title": "Editorial",

      "workpage.kicker": "Portfolio",
      "workpage.title": "Selected Work",
      "workpage.intro": "Brand identity, web design and editorial — three ways I build trust for professional clients.",
      "work.01.desc": "Logo, color, typography and tone of voice. Starting from a single principle, I build identity systems that hold up wherever they appear.",
      "work.02.desc": "Websites designed for conversion. What visitors see, where they trust, and when they reach out — all designed with data.",
      "work.03.desc": "Brochures, company profiles, reports. Editorial design that orders information into hierarchy so expertise reads at a glance.",
      "work.01.t1": "Logo System", "work.01.t2": "Brand Guide", "work.01.t3": "Naming",
      "work.02.t1": "UX Design", "work.02.t2": "Responsive", "work.02.t3": "Landing Page",
      "work.03.t1": "Brochure", "work.03.t2": "Company Profile", "work.03.t3": "Typography",
      "work.more": "View case",

      "about.kicker": "About",
      "about.title": "Designing trust,\nwith data.",
      "about.lead": "After graduating in design, I work as a designer spanning both branding and strategy. I plan and brand websites for professionals — grounded in data. Beyond looking good, I aim for design that proves itself in results.",
      "about.statTitle": "The way I work, in numbers",
      "about.stat1n": "100%", "about.stat1t": "Projects that start with research",
      "about.stat2n": "3", "about.stat2t": "Disciplines: branding, web, editorial",
      "about.stat3n": "1:1", "about.stat3t": "Led directly by the designer",
      "about.apprKicker": "How I Work",
      "about.apprTitle": "Principles",
      "about.appr1t": "Start with data",
      "about.appr1d": "Market, competition and audience first. Design without evidence is just taste — it never becomes a brand.",
      "about.appr2t": "Built for professionals",
      "about.appr2d": "Lawyers, doctors, accountants, tax advisors, real estate, instructors. Fields where trust is conversion.",
      "about.appr3t": "Minimal & modern",
      "about.appr3d": "The less there is, the clearer the trust. Calm, confident screens — inspired by Apple.",
      "about.clientsKicker": "Who I Work With",
      "about.clientsTitle": "Who I work with",
      "about.c1": "Lawyers · Law firms", "about.c2": "Doctors · Clinics", "about.c3": "Accountants",
      "about.c4": "Tax advisors", "about.c5": "Real estate", "about.c6": "Instructors · Experts",
      "about.processKicker": "Process",
      "about.processTitle": "How it goes",
      "about.p1t": "Research & Strategy", "about.p1d": "Analyzing market, competitors and audience to define where the brand should stand.",
      "about.p2t": "Branding & Planning", "about.p2d": "Translating strategy into logo, color, message and structure. Every decision has a reason.",
      "about.p3t": "Design & Build", "about.p3d": "Designing minimal, modern screens inspired by Apple, finished fully responsive.",
      "about.p4t": "Integration & Handoff", "about.p4d": "Connecting to real platforms like Imweb, and handing it off so you can keep refining.",

      "contact.kicker": "Contact",
      "contact.title": "Shall we start\na project?",
      "contact.lead": "Branding, a website, editorial — whatever it is, tell me about it. I reply within 24 hours.",
      "contact.emailK": "Email",
      "contact.hoursK": "Response",
      "contact.hoursV": "Weekdays · within 24h",
      "contact.basedK": "Based",
      "contact.basedV": "Korea · Remote friendly",
      "contact.form.name": "Name",
      "contact.form.name_ph": "Your name",
      "contact.form.email": "Email",
      "contact.form.email_ph": "you@example.com",
      "contact.form.type": "Inquiry type",
      "contact.form.type_brand": "Brand Identity",
      "contact.form.type_web": "Website Design",
      "contact.form.type_editorial": "Editorial · Print",
      "contact.form.type_other": "Other / Consulting",
      "contact.form.msg": "About your project",
      "contact.form.msg_ph": "Tell me what you do and what you need.",
      "contact.form.submit": "Send message",
      "contact.form.note": "Your message will be delivered by email.",
      "contact.form.sending": "Sending…",
      "contact.form.ok": "Thank you! Your message was sent. I'll be in touch soon.",
      "contact.form.err": "Something went wrong. Please email me directly.",

      "cta.title": "Let's write your\nbrand's next chapter.",
      "cta.body": "Start the conversation today. The first talk is always free.",
      "cta.btn": "Get in touch",

      "footer.tagline": "Designer & Creative Director",
      "footer.rights": "All rights reserved.",
      "footer.work": "Work", "footer.about": "About", "footer.contact": "Contact",
    },
  };

  const STORE_KEY = "rahel-lang";
  const DEFAULT = "ko";

  function getLang() {
    try { return localStorage.getItem(STORE_KEY) || DEFAULT; }
    catch (e) { return DEFAULT; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function t(key, lang) {
    const table = DICT[lang] || DICT[DEFAULT];
    return (table && table[key] != null) ? table[key] : (DICT[DEFAULT][key] || "");
  }

  function apply(lang) {
    const dict = DICT[lang] ? lang : DEFAULT;
    document.documentElement.setAttribute("lang", dict === "ko" ? "ko" : "en");
    document.documentElement.setAttribute("data-lang", dict);

    // text content (supports \n → <br>)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key, dict);
      if (val == null) return;
      if (val.indexOf("\n") !== -1) {
        el.innerHTML = val.split("\n").map(escapeHtml).join("<br>");
      } else {
        el.textContent = val;
      }
    });

    // attributes: data-i18n-attr="placeholder:key; aria-label:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s && s.trim());
        if (attr && key) el.setAttribute(attr, t(key, dict));
      });
    });

    // language toggle label
    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = t("nav.langLabel", dict);
    });
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function init() {
    apply(getLang());
    document.querySelectorAll("[data-lang-toggle], #langToggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = getLang() === "ko" ? "en" : "ko";
        setLang(next);
        apply(next);
      });
    });
  }

  // expose for other scripts (e.g. contact form messages)
  window.RahelI18n = { t, getLang, apply, setLang };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
