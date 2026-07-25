# img/ — work cover images

## Exported placeholder covers (ready now)

The current WORK 01–03 artwork has been exported to real image files so you have
usable cover assets. **The live pages still render the original CSS artwork** —
these files are here for when you swap in real Case Studies.

| File | Cover | Size |
|------|-------|------|
| `work-01.png` / `.webp` | Brand Identity (ring) | 589 KB / 17 KB |
| `work-02.png` / `.webp` | Web Design (browser mockup) | 554 KB / 20 KB |
| `work-03.png` / `.webp` | Editorial ("Evidence into Story.") | 65 KB / 18 KB |

All are 1600×1000 (16:10). Use the `.webp` for the web (≈30× smaller); the `.png`
is the universal copy for design tools/docs.

## How to use an image as a WORK cover

Replace a `.rs-visual …` block in `works.html` / `index.html` with a `<picture>`
(WebP first, PNG fallback):

```html
<div class="rs-visual">
  <picture>
    <source srcset="img/work-01.webp" type="image/webp">
    <img src="img/work-01.png" alt="Brand identity system"
         width="1600" height="1000" loading="lazy"
         style="width:100%;height:100%;object-fit:cover">
  </picture>
</div>
```

Keep the surrounding `.rs-project` / `.rs-case-stage` wrappers — they hold the
rounded corners, hover motion, and layout. Only the inner visual changes.

## When real project images arrive

- Format: **WebP** (or AVIF), with a JPG/PNG fallback.
- Export at the size actually displayed (up to ~1600px wide for full-bleed cards).
- Always set `width`, `height`, `alt`, and `loading="lazy"` to avoid layout shift.
