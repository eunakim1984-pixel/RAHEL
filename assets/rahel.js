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
