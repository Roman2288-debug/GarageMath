# GarageMath

Real numbers for real builds. Static HTML/CSS/JS site deployed on Cloudflare Pages.

## Validation

Run `npm test` for formula known-answer cases, invalid-input regressions calculator-page initialization checks, and site-structure checks using each page’s actual default inputs, local links, canonical URLs and sitemaps. The page tests use a minimal DOM fixture; they do not verify visual layout in a browser.

Cloudflare Pages serves the `.html` files at extensionless URLs. Canonical metadata and sitemap entries use those final URLs.

## Product review

See [benchmark notes](docs/benchmark-notes.md) for the six-site review and the rationale behind the original setup planner, result tables and decision guides.
