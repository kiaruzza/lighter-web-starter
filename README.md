# 🪶 Lighter Web Starter

**English** | [Italiano](README.it.md)

An open source template for a lightweight, accessible static website without
unnecessary client-side JavaScript. Extracted from Chiara Corrado's Astro site:
[origin and adaptations](ORIGIN.md). [MIT license](LICENSE).

## 📚 Project guides

The [template handbook](docs/en/README.md) covers architecture, JavaScript
decisions, accessibility, images, releases and sustainability. The companion
toolkit provides detailed guides to WSG, EcoIndex and auditing tools.

## 🚀 Quick start

Requires Node.js 22.12 or later and npm. Node is used for development and page
generation; production only needs static hosting.

```sh
npm ci
npm run dev
```

Open the address printed by Astro. To generate and preview the production build:

```sh
npm run build
npm run preview
```

Publish the contents of `dist/` at the domain root. Configure your host to serve
`404.html` with HTTP status 404, enable HTTPS, and check compression and caching
on the deployed site. The template has no provider-specific deployment setup.
Absolute paths assume the domain root: for a subdirectory, configure `base` and
update URLs and checks.

## Customization

1. Set your domain in `astro.config.mjs`, replacing `https://example.com`.
2. Edit localized names, descriptions, email, content and paths in `src/data/site.ts`.
3. Replace the content in `src/pages/` and shared page components; update the layout navigation.
4. Add indexable pages and their language equivalents to `src/pages/sitemap.xml.ts`.
5. Customize colors and spacing in `src/styles/site.css`, checking contrast in both themes.
6. Replace `public/favicon.svg`. For images, see [the guide](docs/en/IMAGES.md).

Italian is served at `/`, English at `/en/`. Every example page has a language
link to its equivalent. The layout includes the document language, metadata,
canonical URL, language alternates, current-page navigation, a skip link and
print styles. CSS follows the system theme. The example disclosure uses native
`details` and `summary`, without scripts. Small inline SVG icons accompany text
and are hidden from assistive technology. No remote fonts, analytics, personal
content or illustrations from the original site are included.

## ✅ Checks

```sh
npx playwright install chromium
npm test
npm run measure:weight
```

On Linux, if system libraries are missing: `npx playwright install --with-deps chromium`.
`npm test` builds the site, validates HTML, checks internal links and fragments,
applies the budget to every page and runs axe in the browser. It also checks
headings and skip links with JavaScript disabled, and language navigation and
metadata. GitHub Actions runs the same checks.

The thresholds in `budget.json` are starting decisions, not universal standards:
25 KiB HTML, 20 KiB CSS, zero JS bytes, 100 KiB fonts, 100 KiB per image,
200 KiB total, 15 local resources and no detected external resources.
1 KiB = 1024 bytes. A build dependency does not automatically become JavaScript
sent to the browser.

`reports/page-weight.json` describes generated files. gzip and Brotli values
are local estimates; resource counts are not a visit's actual requests.
The analyzer uses regular expressions, counts the last candidate in each srcset
and both AVIF/WebP alternatives. It does not interpret media queries, JS imports,
CSS imports, dynamic scripts or every nested CSS dependency. Absolute URLs are
classified as external even when they belong to the site. Confirm real transfers
in Network. Do not add inline CSS/JS to HTML again: it is already included.

Complement automation with keyboard and screen reader tests, zoom at 200% and
400%, narrow viewports, theme preferences and printing. No automated result
alone certifies WCAG conformance.

To analyze an existing site and plan improvements, use the companion
[Web Weight Toolkit](https://github.com/kiaruzza/web-weight-toolkit).
