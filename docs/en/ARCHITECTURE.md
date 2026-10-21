# Architecture and the cost of changes

**English** | [Italiano](../ARCHITETTURA.md)

## What comes from the original site

Astro generates static HTML. A shared layout centralizes language, metadata,
navigation and the skip link. Fonts are system fonts, resources are local, and
printing has a dedicated stylesheet. Link and budget checks analyze the build;
axe and Playwright test pages in the browser.

The extraction removes personal copy, illustrations and deployment constraints.
Italian and English examples are included, with separate documents, language
links and metadata. If you add more languages, extend the same approach and
verify equivalents. Do not reuse the original site's audit results as evidence
for your own project.

## Before adding JavaScript

1. Describe the person's need and the affected journey.
2. Try a native HTML element, CSS, or generation at build time.
3. If you choose a script, document what remains available when it fails or never arrives.
4. Measure additional bytes, requests, CPU work and dependencies.
5. Check names, roles, states, focus, keyboard operation and error messages.
6. Update the budget with a reason and a relevant regression check.

Zero JS bytes is the template's starting value, not a universal prohibition.
The original site had a small theme controller; here CSS follows system
preferences. A manual selector is possible when its cost and behavior are deliberate.

## Dependencies and builds

Astro runs at build time. It does not automatically imply a browser JavaScript
runtime. Before adding a package, examine its purpose, native alternatives,
license, transitive dependencies, maintenance and execution environment.
Keep the lockfile and validate updates; avoid forced fixes without examining
incompatibilities.

If your project needs dynamic content, identify the component and its fallback.
Keep track of build cost, job frequency, image caching and artifact retention.
