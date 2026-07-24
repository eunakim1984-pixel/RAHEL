/* ============================================================
   RAHEL STUDIO — contact form
   ------------------------------------------------------------
   HOW TO CONNECT EMAIL (choose one):

   1) IMWEB (아임웹) — recommended when hosted on Imweb
      Replace this whole form with Imweb's native "폼/문의" widget
      so submissions are stored in the Imweb admin AND emailed.
      (See README.md → "아임웹 연동".)

   2) Formspree (or any email API) — works anywhere, no backend
      - Sign up at https://formspree.io, create a form, copy its ID
      - Set CONFIG.endpoint below to "https://formspree.io/f/XXXXXXX"

   3) mailto fallback (default) — if no endpoint is set, the form
      opens the visitor's email app addressed to CONFIG.email.
   ============================================================ */
(function () {
  var CONFIG = {
    endpoint: "",                       // e.g. "https://formspree.io/f/abcdwxyz" — leave "" for mailto
    email: "hello@rahelstudio.com",     // your receiving email (used for mailto + display)
  };

  var form = document.getElementById("contactForm");
  if (!form) return;

  var statusEl = form.querySelector(".form__status");
  var T = function (k) {
    return (window.RahelI18n && window.RahelI18n.t)
      ? window.RahelI18n.t(k, window.RahelI18n.getLang())
      : "";
  };

  function setStatus(msgKey, kind) {
    if (!statusEl) return;
    statusEl.textContent = T(msgKey);
    statusEl.className = "form__status" + (kind ? " " + kind : "");
  }

  function mailtoFallback(data) {
    var subject = "[Rahel Studio] " + (data.type || "문의") + " — " + (data.name || "");
    var body =
      "이름 / Name: " + (data.name || "") + "\n" +
      "이메일 / Email: " + (data.email || "") + "\n" +
      "유형 / Type: " + (data.type || "") + "\n\n" +
      (data.message || "");
    window.location.href =
      "mailto:" + CONFIG.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var fd = new FormData(form);
    var data = {
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      type: (fd.get("type") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
    };

    // No API configured → open the visitor's mail client.
    if (!CONFIG.endpoint) {
      mailtoFallback(data);
      setStatus("contact.form.ok", "ok");
      return;
    }

    form.classList.add("is-sending");
    setStatus("contact.form.sending", "");

    fetch(CONFIG.endpoint, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: fd,
    })
      .then(function (res) {
        form.classList.remove("is-sending");
        if (res.ok) {
          form.reset();
          setStatus("contact.form.ok", "ok");
        } else {
          setStatus("contact.form.err", "err");
        }
      })
      .catch(function () {
        form.classList.remove("is-sending");
        setStatus("contact.form.err", "err");
      });
  });
})();
