# Rapid Mastery brand rules for AI tools

Read this before designing or building anything for Rapid Mastery: Claude Design, Claude Code, Artifacts, or any other agent. Values live in `tokens/` and build to `dist/`. Never hard-code a hex value that exists as a token; use the CSS variable (`var(--rm-…)`) or the JS export.

## The look in one paragraph

A cool light-gray page with white modules. One solid logo-blue band at the top of each screen gives every asset the same recognizable face. Navy headings, slate body text, burnt-orange pill buttons. Color appears as a few confident blocks, not pale tints everywhere. It should read like a precise learning tool, not a cozy blog.

## Hard rules

1. **No cream, beige or parchment backgrounds.** Ground is `--rm-color-bg-ground` (`#F2F4F6`), surfaces are white. The old cream `#FFFDF9` system is retired.
2. **One blue band per screen**, full width, at the top (`--rm-color-bg-brand`). White headline. At most one word in peach (`--rm-color-on-brand-emphasis`), large text only.
3. **Buttons and inputs are full pills** (`--rm-radius-pill`). Never square, never 8px.
4. **One button color.** Primary actions are `--rm-color-action-primary-bg` with white text. Hover darkens to `-bg-hover`; that color is never a resting state.
5. **Highlight orange (`#E8692F`) always gets dark text.** White on it fails contrast (2.6:1). Use it for progress, due dates and target lines, not for primary buttons.
6. **Text links use `--rm-color-text-link` (`#B5441B`) and are underlined.** Not the button orange.
7. **Pillar colors carry meaning everywhere:** blue = Smart Learning, orange = Smart Systems, green = Smart Execution. Never use a pillar color for a different topic. Callouts follow the same mapping: The Science = blue, Common Mistakes = orange, Do This = green.
8. **Headings on light backgrounds are navy** (`--rm-color-text-heading`), body text is ink, secondary text is muted, eyebrows and captions are meta.
9. **Eyebrows always sit directly above a heading.** Uppercase, letterspaced, meta color. Never alone.
10. **Two typefaces only:** Bricolage Grotesque for display, Figtree for everything else. No serif anywhere.
11. **Navy dark panel at most once per page**, for the final CTA, a download, or full-screen study mode.
12. **Crimson (`#D72E50`) is for the logo only.**

## Approved text-on-color pairs

| Text | Background | Ratio |
|---|---|---|
| Ink `#1B232B` | Ground, white, any tint | 13.0+ |
| Muted `#44566A` | Ground, white, any tint | 6.1+ |
| Meta `#56687A` | Ground, white, any tint | 4.7+ |
| Navy `#173F5F` | Ground, white, any tint | 8.9+ |
| Link `#B5441B` | Ground, white, any tint | 4.5+ |
| White | Logo blue `#25668F` | 6.2 |
| White | Navy `#173F5F` | 11.0 |
| White | Button orange `#C24A1E` | 4.9 |
| `#E1EDF5` (band body) | Logo blue | 5.2 |
| Peach `#FFB98F` | Logo blue | 3.7, large text only |
| Ink | Highlight `#E8692F` | 4.9 |

## Avoid (the generic AI look)

- Cream ground with a terracotta accent
- Every block in its own big rounded card with heavy padding
- Pale tints on every card at once; tint means a pillar
- A centered, airy hero with one soft button
- Gradients, sparkles, emoji as section markers

## Screen tools (applets, toolkits, dashboards)

- Lists are rows with hairline dividers (`rm-row`), not stacks of cards. Meta line above the title.
- Solid icon tiles in the pillar heading color with a white glyph (`rm-tile`).
- Status as dots, progress as segmented bars, attributes as outlined chips.
- Denser than marketing pages: module radius 14px, padding 16-20px, almost no shadows.

## Print (Pocket Guides, cheat sheets, worksheets)

Load `dist/css/tokens-print.css` after `tokens.css`: white ground, 4-6px radii, no shadows. Tints, the band and the pillar mapping stay.

## Where things are

- Tokens: `dist/css/tokens.css`, `dist/js/tokens.js`, `dist/json/tokens.json`, `dist/tailwind/preset.cjs`
- Components: `components/components.css`, `components/react/index.jsx`, live specimens in `components/html/index.html`
- Fonts: `fonts/fonts.css`
- Voice and copy rules live outside this repo (Rapid Mastery Voice Guide). Short version: warm, plain, direct. No hype, no exclamation points.
