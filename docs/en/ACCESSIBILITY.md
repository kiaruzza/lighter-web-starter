# Accessibility: checks for every change

**English** | [Italiano](../ACCESSIBILITA.md)

## Included checks

`npm test` validates HTML, links, budgets and pages with axe. The JavaScript-off
check covers h1 and skip links. These checks are useful but limited; they do not
alone demonstrate [WCAG 2.2](https://www.w3.org/TR/WCAG22/) conformance.

## Manual test record

For every new page and state, record date, browser, assistive technology,
versions, viewport, outcome and unresolved issues.

- [ ] Page title, language, h1 and hierarchy explain the content.
- [ ] The first Tab reaches the skip link, and activation works.
- [ ] Tab and Shift+Tab follow a meaningful order with visible focus.
- [ ] Links and controls respond to expected commands without traps.
- [ ] A screen reader lets you find sections and complete the journey.
- [ ] Both themes keep text, links, focus and controls readable.
- [ ] Zoom at 200% and 400% and narrow viewports do not hide content or controls.
- [ ] Images have appropriate alternatives; decorative content adds no noise.
- [ ] Forms, if added, have labels, instructions and understandable errors.
- [ ] Reading and navigation remain available without JavaScript.
- [ ] Animations, if added, address motion and pause requirements.

Also test expanded states, errors and long content. When adding languages,
check label length, characters and reading order. For an issue, record steps,
actual behavior, expected behavior and the relevant criterion; close it by
repeating the test after the fix.

For further checks: [WAI tools](https://www.w3.org/WAI/test-evaluate/tools/),
[WAVE](https://wave.webaim.org/), [axe-core](https://github.com/dequelabs/axe-core).

For Linux tests, include [Orca](https://help.gnome.org/orca/): record desktop
environment, browser, versions and keyboard configuration. Check reading,
heading/link navigation, control names and states, and journey completion.
The toolkit handbook includes a dedicated Orca procedure. Tab navigation alone
does not check screen reader announcements.
