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

  /* ---------- Contact form → mailto ---------- */
  var form  = $("#rs-contact-form");
  var toast = $(".rs-toast");

  function showToast(msg){
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function(){ toast.classList.remove("show"); }, 2600);
  }

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
      var subject = encodeURIComponent("[Rahel Studio] " + (fd.get("name") || "New inquiry"));
      var body = encodeURIComponent(
        "Name: "    + (fd.get("name")    || "") + "\n" +
        "Email: "   + (fd.get("email")   || "") + "\n" +
        "Project: " + (fd.get("project") || "") + "\n\n" +
        (fd.get("message") || "")
      );
      showToast(lang === "ko" ? "메일 앱을 여는 중…" : "Opening your mail app…");
      window.location.href = "mailto:" + target + "?subject=" + subject + "&body=" + body;
    });
  }
})();
