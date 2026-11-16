// Coleta de acessos (Cloudflare Pages Function): acrescenta cidade/estado/país da Cloudflare e grava no Supabase
const SB = 'https://qjunaahcantfiscligvs.supabase.co', KEY = 'sb_publishable_IeLlzcOWO7bc6eUyhvnMWg_jtEbMh32';
export async function onRequestPost({ request, waitUntil }) {
  let p = {}; try { p = await request.json(); } catch { return new Response(null, { status: 204 }); }
  if (!p || typeof p !== 'object') return new Response(null, { status: 204 });
  const cf = request.cf || {};
  p.site = 'obim'; p.city = cf.city || null; p.region = cf.region || null; p.country = cf.country || null;
  const ua = request.headers.get('user-agent') || '';
  if (/bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp\/|headless/i.test(ua)) return new Response(null, { status: 204 });
  const tk = (p.tk && /^[\w-]+\.[\w-]+\.[\w-]+$/.test(p.tk)) ? p.tk : null; delete p.tk;
  const send = (t) => fetch(SB + '/rest/v1/rpc/track', { method: 'POST', headers: { apikey: KEY, ...(t ? { Authorization: 'Bearer ' + t } : {}), 'Content-Type': 'application/json' }, body: JSON.stringify({ p }) });
  // com o login do aluno quando houver; se o login venceu, grava como visitante
  waitUntil(send(tk).then((r) => (r.status === 401 && tk ? send(null) : r)).catch(() => {}));
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
}
export const onRequestGet = () => new Response('ok', { headers: { 'Cache-Control': 'no-store' } });
