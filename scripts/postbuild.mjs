// Closes the "@media print { :root" selector hack with an extra brace.
import { readFileSync, writeFileSync } from 'node:fs';
const f = 'dist/css/tokens-print.css';
writeFileSync(f, readFileSync(f, 'utf8').trimEnd() + '\n}\n');
