# GarageMath

Real numbers for real builds. Static HTML/CSS/JS site deployed on Cloudflare Pages.

## Validation

Run `npm test` for formula known-answer cases, invalid-input regressions and calculator-page initialization checks using each page’s actual default inputs. The page tests use a minimal DOM fixture; they do not verify visual layout in a browser.

Cloudflare Pages serves the `.html` files at extensionless URLs. Canonical metadata and sitemap entries use those final URLs.
