# RAHEL STUDIO — Portfolio

Strategy · Branding · Web Design for professionals.

A hand-built, **dependency-free static site** (plain HTML/CSS/JS). No build step,
no framework — it runs anywhere and deploys to Vercel as-is. The approved 1st
design is preserved exactly; this repo adds the independent, responsive, and
deploy-ready structure around it.

---

## Pages (4)

| Page | File | Content |
|------|------|---------|
| Home | `index.html` | Hero (RAHEL STUDIO), Selected Work preview, Approach, CTA banner |
| Works | `works.html` | WORK 01 Brand Identity · 02 Web Design · 03 Editorial |
| About | `about.html` | Studio statement, facts, 4-step process |
| Contact | `contact.html` | Inquiry form (mailto) + contact details |

## Structure

```
index.html  works.html  about.html  contact.html
assets/
  rahel.css      shared design system + responsive + mobile menu
  rahel.js       reveal · 3D pointer · KO/EN toggle (persisted) · mobile menu · contact form
  favicon.svg    brand favicon
  og-image.png   1200×630 social share image
img/             real case-study images go here (WORK 01–03 are CSS artwork for now)
robots.txt  sitemap.xml  vercel.json
```

The CSS/JS are shared across all four pages — edit once, applies everywhere.

## Local preview

Pure static site — open with any local server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then visit http://localhost:8000. Opening the files directly (`file://`) also
works for a quick look.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** this repo.
3. Framework preset: **Other** (no build command, output = repo root). Deploy.

`vercel.json` sets long-cache headers for `assets/` and `img/`. Nothing else to configure.

### After you have a domain
Replace `https://YOUR-DOMAIN` in **`robots.txt`** and **`sitemap.xml`** with your
real domain, and (optionally) add a matching `<link rel="canonical">` and absolute
`og:url` to each page's `<head>`.

## Customizing

- **Contact email** — one place in `assets/rahel.js` (`CONTACT_EMAIL`), plus the
  `data-email` attribute and `mailto:` links in `contact.html` / footers. Currently
  `eunakim1984@gmail.com` — change it to a business address or a form service.
- **Text / translations** — edit inline `data-ko` / `data-en` attributes in the HTML.
  The KO/EN toggle (top right) swaps them live and remembers the choice across pages.
- **Colors / spacing / radius** — CSS variables in `:root` at the top of `assets/rahel.css`.
- **Real work images** — see `img/README.md` for how to swap a CSS cover for a real image.

## Contact form

The form opens the visitor's mail app pre-filled (`mailto:`). For reliable
inquiry collection without a backend, connect it to a service such as
[Formspree](https://formspree.io): point the form's action/endpoint at your form
ID. The mailto flow stays as a no-JS fallback.

## Notes

- Fully responsive; verified at 375 / 430 / 768 / 1440 / 1920 px.
- Accessibility: skip link, keyboard focus rings, labelled controls, `prefers-reduced-motion` respected.
- WORK 01–03 visuals are temporary CSS artwork, ready to be replaced by real case studies.
- An earlier unrelated "천국의 정원 · 강아지의 방" 3D prototype lived in this repo; it's
  removed from the working tree but preserved in git history (commit `595feb4`).
