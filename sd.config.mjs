// Builds every output in dist/ from tokens/. Run: npm run build
import StyleDictionary from 'style-dictionary';

const HEADER = 'Rapid Mastery brand tokens. Generated from tokens/ by Style Dictionary. Do not edit by hand.';

// Tailwind preset: maps semantic tokens to the CSS variables, so Tailwind classes follow tokens.css.
StyleDictionary.registerFormat({
  name: 'rm/tailwind-preset',
  format: ({ dictionary }) => {
    const set = (obj, path, val) => { let o = obj; path.slice(0, -1).forEach(k => (o = o[k] ??= {})); o[path.at(-1)] = val; };
    const theme = { colors: {}, fontFamily: {}, borderRadius: {}, boxShadow: {} };
    for (const t of dictionary.allTokens) {
      const v = `var(--${t.name})`;
      const [root, ...rest] = t.path;
      if (root === 'color') set(theme.colors, ['rm', ...rest], v);
      if (root === 'font') theme.fontFamily[rest.join('-')] = v;
      if (root === 'radius') theme.borderRadius[rest.join('-')] = v;
      if (root === 'shadow') theme.boxShadow[rest.join('-')] = v;
    }
    return `// ${HEADER}\n// Usage: presets: [require('@rapidmastery/brand-kit/tailwind')] — needs dist/css/tokens.css loaded.\nmodule.exports = { theme: { extend: ${JSON.stringify(theme, null, 2)} } };\n`;
  },
});

const fileHeader = () => [HEADER];
StyleDictionary.registerFileHeader({ name: 'rm/header', fileHeader });

const web = new StyleDictionary({
  source: ['tokens/base/**/*.json', 'tokens/semantic/**/*.json'],
  usesDtcg: true,
  log: { verbosity: 'default' },
  platforms: {
    css: {
      transformGroup: 'css', prefix: 'rm', buildPath: 'dist/css/', expand: { include: ['typography'] },
      files: [{ destination: 'tokens.css', format: 'css/variables', options: { outputReferences: true, fileHeader: 'rm/header' } }],
    },
    js: {
      transformGroup: 'js', buildPath: 'dist/js/', expand: { include: ['typography'] },
      files: [
        { destination: 'tokens.js', format: 'javascript/es6', options: { fileHeader: 'rm/header' } },
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations', options: { fileHeader: 'rm/header' } },
      ],
    },
    json: {
      transformGroup: 'js', buildPath: 'dist/json/', expand: { include: ['typography'] },
      files: [
        { destination: 'tokens.json', format: 'json/nested' },
        { destination: 'tokens.flat.json', format: 'json/flat' },
      ],
    },
    tailwind: {
      transformGroup: 'css', prefix: 'rm', buildPath: 'dist/tailwind/', expand: { include: ['typography'] },
      files: [{ destination: 'preset.cjs', format: 'rm/tailwind-preset', filter: t => !t.path[0].startsWith('base') }],
    },
  },
});

const print = new StyleDictionary({
  source: ['tokens/base/**/*.json', 'tokens/semantic/**/*.json', 'tokens/modes/print.json'],
  usesDtcg: true,
  log: { verbosity: 'silent', warnings: 'disabled' },
  platforms: {
    css: {
      transformGroup: 'css', prefix: 'rm', buildPath: 'dist/css/', expand: { include: ['typography'] },
      files: [{
        destination: 'tokens-print.css', format: 'css/variables',
        filter: t => t.filePath.includes('modes/print'),
        options: { selector: '@media print { :root', fileHeader: 'rm/header' },
      }],
    },
  },
});

await web.buildAllPlatforms();
await print.buildAllPlatforms();
