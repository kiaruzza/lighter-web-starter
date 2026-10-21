# ✅ Quality and release

**English** | [Italiano](../RILASCIO.md)

## Before the production build

- [ ] Replace the example domain, name, email, descriptions and favicon.
- [ ] Review content, headings, navigation and sitemap for the actual pages.
- [ ] Check resource rights and the presence of confidential data.
- [ ] Run `npm ci`, install Chromium for Playwright and run `npm test`.
- [ ] Complete the manual accessibility record.
- [ ] Review `npm run measure:weight`: exceeding a threshold requires a decision.

The build is `dist/`. The report describes generated files and estimates
compression; it does not measure server settings, actual transfer or emissions.
Inline categories are already included in HTML and must not be added again.

## On the final domain

- [ ] HTTPS and redirects reach the chosen domain without unnecessary chains.
- [ ] HTML and resources have the correct Content-Type.
- [ ] Compression and caching work, including on repeat visits.
- [ ] Long caching is reserved for versioned files; HTML updates remain available.
- [ ] A nonexistent path returns HTTP 404 and a useful page.
- [ ] Canonical URLs, robots and sitemap refer to the deployed domain.
- [ ] Network shows no unexpected integrations or missing resources.
- [ ] Repeat Lighthouse and the manual journey on representative pages.

The companion toolkit provides curl procedures, three-run Network measurements,
Lighthouse CI and imports of existing EcoIndex results. Keep conditions and
reports; do not replace usability testing with a score.

## Maintenance

Assign owners to content and checks. Plan reviews of dependencies, links,
providers and claims. Limit retention of logs, builds and reports according to
actual needs. A simple editorial change does not require every external scan
on every commit.
