# Changelog

All notable changes to `@todovue/tv-relative-time` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---
## [1.1.0] - 2025-05-06

### ✨ Features
- Added localization support for relative time formatting (`es`, `fr`, `pt`, and `en` as default)

### 🐛 Fixed
- Fixed date formatting issues by enforcing the UTC timezone
- Watched `date` and other props to ensure reactivity
- Updated package references and improved documentation consistency

## [1.0.0] - 2025-05-05

### ✨ Features
- Fully functional `<TvRelativeTime />` component.
- Live update support with customizable `updateInterval`.
- Compact mode via `compact` prop: displays formats like `2d`, `3w`, `1mo`, `1a`.
- Optional absolute date display using `showFullDate` prop.
- Tooltip support with accessible `<time>` tag and `aria-label`.
- Human-friendly phrasing for relative dates like `yesterday`, `last week` or `this Wednesday`.
- Detailed breakdown of time differences in years, months, weeks, and days (limited to two units for UI clarity).
- No external dependencies.
- Includes `useRelativeTime()` composable for shared logic.

### ✅ Accessibility
- Semantic `<time>` element with `datetime`, `title`, and `aria-label`.

---

[1.1.0]: https://github.com/TODOvue/tv-relative-time/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-relative-time/pull/1/files
