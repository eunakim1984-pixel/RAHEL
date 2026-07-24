# img/ — real project images

Right now WORK 01–03 are temporary CSS artwork (no image files needed).
When real case-study images arrive, drop them here and swap them in one at a time.

## Recommended
- Format: **WebP** (or AVIF), with a JPG/PNG fallback if needed.
- Export at the size actually displayed (≈ up to 1600px wide for full-bleed cards).
- Always set `width`, `height`, `alt`, and `loading="lazy"` on `<img>` to avoid layout shift.

## How to replace a CSS cover with a real image
In `works.html` / `index.html`, replace a `.rs-visual …` block with:

```html
<div class="rs-visual">
  <img src="img/work-01.webp" alt="Brand identity system for a law firm"
       width="1600" height="1000" loading="lazy"
       style="width:100%;height:100%;object-fit:cover">
</div>
```

Keep the surrounding `.rs-project` / `.rs-case-stage` wrappers — they hold the
rounded corners, hover motion, and layout. Only the inner visual changes.
