// Draws assets/palette.svg and assets/pillars.svg from the built tokens, for the README.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const t = JSON.parse(readFileSync('dist/json/tokens.flat.json', 'utf8'));
const g = k => t[k.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('')];
const L = h => { const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((a, c, i) => a + c * [.2126, .7152, .0722][i], 0); };
const cr = (a, b) => { const x = L(a), y = L(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
const on = h => cr(h, '#1B232B') >= cr(h, '#FFFFFF') ? '#1B232B' : '#FFFFFF';
const font = "font-family='Figtree, Arial, sans-serif'";
mkdirSync('assets', { recursive: true });

const core = [
  ['Logo blue', 'color-bg-brand'], ['Navy', 'color-bg-brand-deep'], ['Ink', 'color-text-primary'], ['Muted', 'color-text-muted'],
  ['Meta', 'color-text-meta'], ['Button', 'color-action-primary-bg'], ['Link', 'color-text-link'], ['Highlight', 'color-highlight-bg'],
  ['Peach', 'color-on-brand-emphasis'], ['Input', 'color-border-input'], ['Line', 'color-border-default'], ['Ground', 'color-bg-ground'],
];
const W = 140, H = 120, cols = 6;
let s = `<svg xmlns='http://www.w3.org/2000/svg' width='${cols * W}' height='${Math.ceil(core.length / cols) * H}' ${font}>`;
core.forEach(([n, k], i) => {
  const x = (i % cols) * W, y = Math.floor(i / cols) * H, h = g(k).toUpperCase(), c = on(h);
  s += `<rect x='${x}' y='${y}' width='${W}' height='${H}' fill='${h}'/><text x='${x + 12}' y='${y + H - 34}' fill='${c}' font-size='14' font-weight='700'>${n}</text><text x='${x + 12}' y='${y + H - 14}' fill='${c}' font-size='12' font-family='Menlo, monospace'>${h}</text>`;
});
writeFileSync('assets/palette.svg', s + '</svg>\n');

const pillars = ['learning', 'systems', 'execution'], names = ['Smart Learning', 'Smart Systems', 'Smart Execution'];
let p = `<svg xmlns='http://www.w3.org/2000/svg' width='840' height='140' ${font}>`;
pillars.forEach((k, i) => {
  const x = i * 280, tint = g(`color-pillar-${k}-tint`).toUpperCase(), head = g(`color-pillar-${k}-heading`).toUpperCase(), body = g(`color-pillar-${k}-body`).toUpperCase();
  p += `<rect x='${x + 4}' y='4' width='272' height='132' rx='16' fill='${tint}'/><text x='${x + 22}' y='42' fill='${head}' font-size='19' font-weight='700' font-family='Bricolage Grotesque, Arial, sans-serif'>${names[i]}</text><text x='${x + 22}' y='70' fill='${body}' font-size='13'>Tint ${tint}</text><text x='${x + 22}' y='92' fill='${body}' font-size='13'>Heading ${head}</text><text x='${x + 22}' y='114' fill='${body}' font-size='13'>Body ${body}</text>`;
});
writeFileSync('assets/pillars.svg', p + '</svg>\n');
