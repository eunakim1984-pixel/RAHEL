/* ============================================================
   RAHEL STUDIO — interactions
   - Frosted nav shadow on scroll
   - Mobile menu toggle
   - Scroll reveal (IntersectionObserver)
   ============================================================ */
(function () {
  /* nav scroll state */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* mobile menu */
  const burger = document.getElementById("burger");
  const mmenu = document.getElementById("mmenu");
  if (burger && mmenu) {
    const close = () => {
      burger.classList.remove("is-open");
      mmenu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    burger.addEventListener("click", () => {
      const open = !mmenu.classList.contains("is-open");
      burger.classList.toggle("is-open", open);
      mmenu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    mmenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("resize", () => { if (window.innerWidth > 860) close(); });
  }

  /* scroll reveal */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  /* mark active nav link by current path */
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav__menu a, .mmenu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop().toLowerCase();
    if (href && href === path) a.classList.add("is-active");
  });
})();
