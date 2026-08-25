import fs from 'node:fs';

const src = fs.readFileSync('index.html', 'utf8');
const needle = "hostState.pending={};hostState.turn+=1;";
const replacement = "hostState.pending={};hostState.turn+=1;submitted=false;selectedAction=null;$('#controls').querySelectorAll('button').forEach(b=>b.classList.remove('selected'));";
if (!src.includes(needle)) throw new Error('Expected turn transition was not found');
const out = src.replace(needle, replacement);
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', out);
console.log('Built dist/index.html');
