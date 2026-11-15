// Baixa o site da Office BIM guardado no Supabase Storage e monta a pasta dist para a Cloudflare Pages.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
const BASE = 'https://qjunaahcantfiscligvs.supabase.co/storage/v1/object/public/media/obim/';
const { files } = await (await fetch(BASE + 'manifest.json?t=' + Date.now())).json();
for (const f of files) {
  const r = await fetch(BASE + 'site/' + f + '?t=' + Date.now()); // evita cópia antiga em cache
  if (!r.ok) throw new Error(f + ' ' + r.status);
  const out = 'dist/' + f;
  await mkdir(dirname(out), { recursive: true });
  let buf = Buffer.from(await r.arrayBuffer());
  // imagens servidas pelo próprio site (nada mais da Hostinger)
  if (/\.(js|css|html)$/.test(f)) buf = Buffer.from(buf.toString('utf8').split('https://horizons-cdn.hostinger.com/03404b42-3ed1-43b5-9ee2-d7aa3e65abf9').join('/cdn'));
  await writeFile(out, buf);
}
// Assistente virtual (orbe) em todas as páginas
import { readFile } from 'node:fs/promises';
await writeFile('dist/bot.js', await readFile('public/bot.js'));
await writeFile('dist/skin.js', await readFile('public/skin.js'));
await writeFile('dist/ob-simbolo.webp', await readFile('public/ob-simbolo.webp'));
// nomes novos para JS/CSS a cada publicação (navegador nunca usa versão velha)
import { rename } from 'node:fs/promises';
const tag = Date.now().toString(36);
let html0 = await readFile('dist/index.html', 'utf8');
for (const f of files.filter((x) => /^assets\/index-[^/]+\.(js|css)$/.test(x))) {
  const nf = f.replace(/\.(js|css)$/, '.' + tag + '.$1'); await rename('dist/' + f, 'dist/' + nf); html0 = html0.split('/' + f).join('/' + nf);
}
await writeFile('dist/index.html', html0);
const idx = (await readFile('dist/index.html', 'utf8')).replace('</body>', '<script src="/skin.js?v=' + Date.now().toString(36) + '" defer></script><script src="/bot.js?v=' + Date.now().toString(36) + '" defer></script></body>');
await writeFile('dist/index.html', idx);
// SPA: todas as rotas abrem o index.html
await writeFile('dist/_redirects', '/* /index.html 200\n');
await writeFile('dist/_headers', '/cdn/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n');
console.log('ok', files.length, 'arquivos');
