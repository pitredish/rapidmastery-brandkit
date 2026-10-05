# Fonts

| Role | Family | Weights | License |
|---|---|---|---|
| Display (headings, band titles) | Bricolage Grotesque | 600, 700 | SIL OFL 1.1 |
| Body (text, buttons, inputs) | Figtree | 400, 600, 700 | SIL OFL 1.1 |

Both are open-source Google Fonts. Free for commercial use, web embedding, print and PDFs. Redistributing them in this repo is allowed under the OFL; the license travels with them in `OFL.txt`.

- **Web:** load `fonts/fonts.css` (self-hosted) or the Google Fonts link inside it.
- **Desktop apps / print:** install from [Google Fonts](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Figtree](https://fonts.google.com/specimen/Figtree). The files here are latin-subset `.woff2` for the web only.
- **Display settings:** Bricolage at 700 with `-0.02em` tracking for large headings; 600 for card titles and row titles.

Only Latin subsets are included. Add more from `@fontsource/bricolage-grotesque` and `@fontsource/figtree` if needed.
