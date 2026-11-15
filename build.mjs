// Baixa o site da Office BIM guardado no Supabase Storage e monta a pasta dist para a Cloudflare Pages.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
const BASE = 'https://qjunaahcantfiscligvs.supabase.co/storage/v1/object/public/media/obim/';
const { files } = await (await fetch(BASE + 'manifest.json?t=' + Date.now())).json();
for (const f of files) {
  const r = await fetch(BASE + 'site/' + f);
  if (!r.ok) throw new Error(f + ' ' + r.status);
  const out = 'dist/' + f;
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, Buffer.from(await r.arrayBuffer()));
}
// SPA: todas as rotas abrem o index.html
await writeFile('dist/_redirects', '/* /index.html 200\n');
await writeFile('dist/_headers', '/cdn/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n');
console.log('ok', files.length, 'arquivos');
