const CSS = ".vbar:not(.big) .vb-head{display:flex!important;order:0;flex:1 1 100%;align-items:center;justify-content:space-between;font:800 .95rem Inter,system-ui,sans-serif;color:#fff;padding:0 2px 4px;border-bottom:1px solid rgba(255,255,255,.1);margin-bottom:4px}.vbar .vb-close{border:0;background:rgba(255,255,255,.12);color:#fff;font:800 .9rem Inter,system-ui,sans-serif;padding:9px 14px;border-radius:999px;cursor:pointer;min-height:40px}.vbar:not(.big) .vb-orb{order:1}.vbar:not(.big) .vs-tx{order:2}.vbar:not(.big) .vb-btn{order:3;display:flex;gap:6px}.vbar:not(.big) .vb-btn .end{display:none}.vbar:not(.big){flex-wrap:wrap;align-items:center}.vbar:not(.big) .vb-orb{flex:none}.vbar:not(.big) .vs-tx{flex:1 1 0;min-width:0}.vbar:not(.big) .vb-f{order:9;flex:1 1 100%;margin-top:6px}.vbar:not(.big) .vb-f [data-v=file],.vbar:not(.big) .vb-f [data-v=cam]{display:none}.vbar[data-m=idle].toque .vs{animation:vsHint 1.2s ease-in-out infinite;box-shadow:0 0 0 4px rgba(255,106,0,.7)}.vbar .vb-f{display:flex!important;gap:6px;margin-top:8px}.vbar .vb-f input{min-height:44px}.vb-f.pede input{border:2px solid #ff6a00!important;box-shadow:0 0 0 4px rgba(255,106,0,.25);animation:vbpulse 1.6s infinite}@keyframes vbpulse{70%{box-shadow:0 0 0 12px rgba(255,106,0,0)}100%{box-shadow:0 0 0 0 rgba(255,106,0,0)}}.bot{--bg2:#0e1222;--tx:#e8ecf5;--line:rgba(255,255,255,.12);--mut:#94a3b8;font-family:Inter,system-ui,sans-serif;color:var(--tx)}.bot *{box-sizing:border-box}.bot a{color:#93c5fd}\n/* assistente virtual: orbe animado */\n.bot{position:fixed;right:20px;bottom:20px;z-index:45}\n.orb{position:relative;width:62px;height:62px;border:0;border-radius:50%;padding:0;cursor:pointer;background:none;display:block}\n.orb-core{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,#4285f4,#9b72cb,#d96570,#f4b400,#34a853,#4285f4);animation:orbSpin 6s linear infinite;box-shadow:inset 0 0 18px rgba(255,255,255,.55)}\n.orb-core:after{content:\"\";position:absolute;inset:7px;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(255,255,255,.25) 35%,rgba(10,16,40,.85) 75%);mix-blend-mode:normal}\n.orb-glow{position:absolute;inset:-10px;border-radius:50%;background:conic-gradient(from 90deg,#4285f4,#9b72cb,#d96570,#4285f4);filter:blur(16px);opacity:.55;z-index:-1;animation:orbSpin 9s linear infinite reverse,orbBreath 3s ease-in-out infinite}\n.orb:hover .orb-core{animation-duration:2.5s}.bot.thinking .orb-core,.bot.thinking .orb.mini .orb-core{animation-duration:1s}\n.orb-tip{position:absolute;right:74px;top:50%;transform:translateY(-50%) scale(.9);opacity:0;white-space:nowrap;background:#fff;color:#0f172a;font:700 .82rem/1 Manrope,Inter,sans-serif;padding:9px 12px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:all .3s;pointer-events:none}\n.bot.hello:not(.open) .orb-tip,.orb:hover .orb-tip{opacity:1;transform:translateY(-50%) scale(1)}\n.bot.open .orb-tip{display:none}\n@keyframes orbSpin{to{transform:rotate(360deg)}}@keyframes orbBreath{50%{opacity:.85;transform:scale(1.08)}}\n.orb.mini{width:34px;height:34px;flex:none;pointer-events:none}.orb.mini .orb-core:after{inset:5px}\n.bot-win{position:absolute;right:0;bottom:76px;width:min(380px,calc(100vw - 28px));height:min(560px,74vh);display:flex;flex-direction:column;background:var(--bg2);color:var(--tx);border:1px solid var(--line);border-radius:20px;box-shadow:0 24px 70px rgba(0,0,0,.5);overflow:hidden;animation:botIn .25s ease-out}\n@keyframes botIn{from{opacity:0;transform:translateY(12px) scale(.98)}}\n.bot-win[hidden]{display:none}\n.bot-win header{position:relative;display:flex;align-items:center;gap:10px;padding:12px 40px 12px 14px;background:linear-gradient(135deg,#1e3a8a,#5b21b6);color:#fff}.bot-win header div{display:flex;flex-direction:column}.bot-win header span{font-size:.72rem;opacity:.85}\n.bot-x{position:absolute;right:10px;top:10px;border:0;background:none;color:#fff;font-size:1.4rem;cursor:pointer}\n.bot-log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:8px}\n.bot-m{margin:0;max-width:88%;padding:9px 12px;border-radius:14px;font-size:.88rem;line-height:1.45;word-break:break-word}.bot-m.a{background:rgba(127,127,127,.12);border-bottom-left-radius:4px}.bot-m.u{align-self:flex-end;background:#4f46e5;color:#fff;border-bottom-right-radius:4px}.bot-m.u a{color:#fff}\n.bot-m.typing{opacity:.6;animation:livep 1s infinite}\n.bot-sug{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 10px}.bot-sug button{border:1px solid var(--line);background:transparent;color:var(--tx);border-radius:999px;padding:6px 10px;font-size:.76rem;cursor:pointer}.bot-sug button:hover{border-color:#7c3aed}\n.bot-files{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px}.bot-files span{font-size:.72rem;background:rgba(124,58,237,.18);padding:4px 8px;border-radius:8px}\n.bot-f{display:flex;gap:6px;align-items:center;padding:10px;border-top:1px solid var(--line)}.bot-f input[name=q]{flex:1;min-width:0;border:1px solid var(--line);background:transparent;color:var(--tx);border-radius:999px;padding:10px 14px;font:inherit;font-size:.9rem}\n.bot-ic{width:36px;height:36px;border:0;border-radius:50%;background:rgba(127,127,127,.12);cursor:pointer;font-size:1rem;flex:none}.bot-ic.rec{background:#ef4444;animation:livep 1s infinite}\n.bot-send{width:40px;height:40px;border:0;border-radius:50%;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;cursor:pointer;flex:none}\n.bot-h{display:block;text-align:center;font-size:.75rem;padding:0 0 10px}\n@media(max-width:700px){.bot{right:14px;bottom:14px}.orb{width:56px;height:56px}}\n@media (prefers-reduced-motion:reduce){.orb-core,.orb-glow{animation:none}}\n/* n\u00fameros da p\u00e1gina inicial: cart\u00f5es limpos */\n.statsbar{background:transparent;border:0}\n.statsbar .wrap{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;padding:22px 20px}\n.statsbar .wrap>div{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px 10px;position:relative;overflow:hidden}\n.statsbar .wrap>div:before{content:\"\";position:absolute;left:0;top:0;right:0;height:3px;background:linear-gradient(90deg,#2563eb,#06b6d4)}\n.statsbar b{background:none;-webkit-background-clip:initial;background-clip:initial;color:var(--tx);font:800 1.7rem/1.1 Manrope,Inter,sans-serif;letter-spacing:-.02em}\n.statsbar span{display:block;margin-top:4px;font-size:.78rem;text-transform:uppercase;letter-spacing:.08em}\n@media(max-width:700px){.statsbar .wrap{grid-template-columns:repeat(2,1fr)}.statsbar .wrap>div:last-child{grid-column:span 2}.statsbar b{font-size:1.4rem}}\n/* celular: bot\u00f5es flutuantes menores, sem cobrir o conte\u00fado */\n@media(max-width:700px){\n  .obim{display:flex;padding:3px;left:12px;bottom:16px}.obim-ic{width:44px;height:44px}\n  .qc{right:80px;bottom:16px}.qc-btn{min-height:44px;padding:4px 14px 4px 4px;font-size:.82rem}.qc-ic{width:36px;height:36px}.qc-btn em{display:none}\n  .orb{width:52px;height:52px}\n}\n/* ===== Destaques do topo (feitos em c\u00f3digo, sempre n\u00edtidos) ===== */\n.hero-banners .banner-track{aspect-ratio:auto;height:clamp(420px,46vw,520px);max-height:none;background:#070b18}\n.hero-slide{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:30px;padding:40px 56px;background:radial-gradient(900px 500px at 85% 50%,color-mix(in srgb,var(--b) 45%,transparent),transparent 70%),radial-gradient(700px 400px at 0% 100%,color-mix(in srgb,var(--a) 35%,transparent),transparent 70%),linear-gradient(135deg,#060a17,#0b1026);color:#fff;overflow:hidden}\n.hs-grid{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;mask-image:linear-gradient(90deg,transparent,#000 40%,#000)}\n.hs-text{position:relative;z-index:2;max-width:560px}\n.hs-kicker{display:inline-block;font:800 .72rem/1 Manrope,Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);margin-bottom:16px}\n.hs-text h2{font:800 clamp(1.7rem,3.6vw,3rem)/1.08 Manrope,Inter,sans-serif;letter-spacing:-.02em;margin:0 0 14px;color:#fff}\n.hs-text h2 .grad{background:linear-gradient(90deg,var(--a),var(--b));-webkit-background-clip:text;background-clip:text;color:transparent;filter:brightness(1.5)}\n.hs-text p{font-size:clamp(.95rem,1.3vw,1.08rem);line-height:1.6;color:#cbd5e1;margin:0 0 18px}\n.hs-price{font:800 2rem/1 Manrope,Inter,sans-serif;margin:0 0 20px}.hs-price small{font-size:.85rem;font-weight:600;color:#94a3b8;margin:0 4px}\n.hs-cta{display:flex;gap:12px;flex-wrap:wrap}.hs-cta .btn{background:linear-gradient(135deg,var(--a),var(--b));border:0}.hs-cta .btn.ghost{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.2);color:#fff}\n.hs-visual{position:relative;height:100%;min-height:300px;z-index:1}\n.hs-img{position:absolute;border-radius:16px;box-shadow:0 30px 60px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08);object-fit:cover;aspect-ratio:16/10;transition:transform 1.2s cubic-bezier(.2,.8,.2,1)}\n.hs-img.k0{width:78%;right:4%;top:50%;transform:translateY(-50%) perspective(1200px) rotateY(-12deg) rotateX(4deg)}\n.hs-img.k1{width:46%;left:0;top:6%;transform:perspective(1200px) rotateY(-14deg) translateZ(-60px);opacity:.85}\n.hs-img.k2{width:44%;left:6%;bottom:4%;transform:perspective(1200px) rotateY(-14deg) translateZ(-40px);opacity:.9}\n.hs-img.k1~.hs-img.k0,.hs-visual .hs-img.k0:only-child{width:84%}\n.banner.on .hs-img.k0{animation:hsFloat 6s ease-in-out infinite}\n@keyframes hsFloat{50%{transform:translateY(-53%) perspective(1200px) rotateY(-9deg) rotateX(3deg)}}\n.hero-banners .dots button{width:9px;height:9px}\n@media(max-width:800px){\n  .hero-banners .banner-track{height:auto;min-height:520px}\n  .hero-slide{grid-template-columns:1fr;padding:28px 22px 46px;gap:10px;align-content:start}\n  .hs-visual{min-height:190px;order:-1}.hs-img.k1,.hs-img.k2{display:none}.hs-img.k0{width:86%;left:7%;right:auto}\n  .hs-price{font-size:1.6rem}\n}\n/* assistente: op\u00e7\u00f5es, abas e barra de voz ao vivo (estilo Gemini/Uhull) */\n.bot-opts{padding:10px 12px 6px;border-bottom:1px solid var(--line,rgba(255,255,255,.08));display:grid;gap:8px}\n.bot-tabs{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:rgba(255,255,255,.05);padding:4px;border-radius:12px}\n.bot-tabs button{border:0;border-radius:9px;padding:9px 6px;font:700 .85rem Inter,sans-serif;color:inherit;background:transparent;cursor:pointer}\n.bot-tabs button[aria-selected=true]{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;box-shadow:0 6px 16px rgba(79,70,229,.35)}\n.bot-row{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:.82rem}\n.bot-sw{display:flex;align-items:center;gap:8px;cursor:pointer}.bot-sw input{position:absolute;opacity:0}\n.bot-sw span{width:34px;height:20px;border-radius:99px;background:rgba(148,163,184,.4);position:relative;transition:.2s}\n.bot-sw span::after{content:\"\";position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;top:2px;left:2px;transition:.2s}\n.bot-sw input:checked+span{background:#22c55e}.bot-sw input:checked+span::after{left:16px}\n.bot-vsel{border:1px solid rgba(148,163,184,.35);background:transparent;color:inherit;border-radius:9px;padding:6px 8px;font:600 .8rem Inter,sans-serif}\n.bot-vsel option{color:#0f172a}\n.vbar{position:fixed;z-index:9999;top:12px;left:50%;transform:translateX(-50%);width:min(560px,calc(100vw - 20px));display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:22px;\n  background:linear-gradient(135deg,rgba(17,20,48,.94),rgba(35,24,78,.94));border:1px solid rgba(139,92,246,.35);box-shadow:0 18px 50px rgba(0,0,0,.45),0 0 40px rgba(124,58,237,.25);backdrop-filter:blur(14px);color:#fff;animation:vbIn .35s cubic-bezier(.2,.9,.3,1.2)}\n.vbar[hidden]{display:none}\n@keyframes vbIn{from{opacity:0;transform:translate(-50%,-20px) scale(.96)}}\n.vb-orb{display:flex;flex-direction:column;align-items:center;flex:none}\n.vbar .vs{width:68px;height:68px;cursor:pointer;border-radius:50%}\n.vbar .vs-st{font:600 .68rem/1 Inter,sans-serif;color:#a5b4fc;margin-top:2px}\n.vbar[data-m=listen] .vs-st{color:#4ade80}.vbar[data-m=speak] .vs-st{color:#c4b5fd}.vbar[data-m=think] .vs-st{color:#fbbf24}\n.vbar .vs-tx{flex:1;margin:0;font:500 .95rem/1.35 Inter,sans-serif;color:#e2e8f0;max-height:4.1em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}\n.vbar[data-m=idle] .vs-tx{color:#94a3b8}\n.vb-btn{display:flex;gap:8px;flex:none}\n.vb-btn button{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#fff;font-size:1.05rem;cursor:pointer;display:grid;place-items:center}\n.vb-btn button:hover{background:rgba(255,255,255,.16)}\n.vb-btn .end{background:#ef4444;border-color:#ef4444}.vb-btn .end:hover{background:#dc2626}\n.bot.voice .orb{box-shadow:0 0 0 4px rgba(34,197,94,.45)}\n@media(max-width:560px){.vbar{top:8px;gap:8px;padding:8px 10px}.vbar .vs{width:56px;height:56px}.vb-btn button{width:36px;height:36px}.vbar .vs-tx{font-size:.88rem}}\n\n.bot-ic.rec{background:#ef4444!important;color:#fff;animation:recP 1s infinite}@keyframes recP{50%{box-shadow:0 0 0 6px rgba(239,68,68,.25)}}\n.vbar[data-m=idle] .vs{animation:vsHint 2.4s ease-in-out infinite}@keyframes vsHint{50%{transform:scale(1.07)}}\n.bot-prop{align-self:stretch;margin:2px 0 6px;padding:10px 12px;border-radius:14px;background:linear-gradient(135deg,rgba(255,106,0,.16),rgba(124,58,237,.14));border:1px solid rgba(255,138,42,.4);font-size:.85rem}\n.bot-prop div{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}.bot-prop button{border:0;border-radius:999px;padding:7px 12px;font:700 .78rem Inter,sans-serif;cursor:pointer;background:#fff;color:#0f172a}.bot-prop button[data-a=pdf]{background:linear-gradient(135deg,#ff6a00,#ff9a3c);color:#fff}\n/* barra de voz sempre na frente do topo */\n.bot{z-index:9990}\n/* voz: tela inicial com a bolona (como o Uhull) e depois barra no topo */\n.vbar .vb-head,.vbar .vb-cont,.vbar .vb-f{display:none}\n.vbar.big{top:auto;bottom:16px;flex-direction:column;align-items:stretch;gap:10px;width:min(460px,calc(100vw - 24px));padding:16px 16px 14px;border-radius:26px;text-align:center}\n.vbar.big .vb-head{display:flex;align-items:center;justify-content:space-between;font:800 1rem Inter,sans-serif}\n.vb-close{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#fff;border-radius:999px;padding:8px 14px;font:700 .85rem Inter,sans-serif;cursor:pointer}\n.vbar.big .vb-orb{position:relative;margin:4px auto 0;width:220px;height:220px;border-radius:50%;display:grid;place-items:center;box-shadow:0 0 0 2px rgba(124,58,237,.45),0 0 0 22px rgba(124,58,237,.06)}\n.vbar.big .vs{width:200px;height:200px}\n.vbar.big .vs-st{position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);opacity:0}\n.vbar.big .vs-tx{font:800 1.35rem/1.25 Inter,sans-serif;color:#fff;-webkit-line-clamp:2;max-height:none}\n.vbar.big .vb-cont{display:inline-block;justify-self:center;margin:0 auto;border:0;background:none;color:#93c5fd;font:700 .95rem Inter,sans-serif;cursor:pointer}\n.vbar.big .vb-f{display:flex;gap:8px;margin-top:4px}\n.vb-f button{flex:none;width:46px;height:46px;border:0;border-radius:14px;background:#3b6fe0;color:#fff;font-size:1.05rem;cursor:pointer}\n.vb-f input{flex:1;min-width:0;border:1px solid rgba(255,255,255,.18);background:rgba(0,0,0,.25);color:#fff;border-radius:14px;padding:0 14px;font:500 .95rem Inter,sans-serif}\n.vbar.big .vb-btn{display:none}\n@media(max-width:560px){.vbar.big{bottom:0;width:100vw;border-radius:26px 26px 0 0;padding-bottom:18px}.vbar.big .vb-orb{width:190px;height:190px}.vbar.big .vs{width:172px;height:172px}}\n/* visualizado (\u2713\u2713) e ajustes do painel de voz no celular */\n.bot-m .tick{font-size:.68rem;margin-left:6px;opacity:.7;letter-spacing:-2px}.bot-m .tick.lida{color:#7dd3fc;opacity:1}\n@media(max-width:560px){.vbar.big{padding:12px 12px 14px;gap:6px}.vbar.big .vb-orb{width:150px;height:150px;box-shadow:0 0 0 2px rgba(124,58,237,.45),0 0 0 14px rgba(124,58,237,.06)}.vbar.big .vs{width:136px;height:136px}.vbar.big .vs-tx{font-size:1.1rem}.vb-f button{width:42px;height:42px}}\n.bot input,.bot button,.bot select{font-family:Inter,system-ui,sans-serif}.bot .vb-f input{background:rgba(0,0,0,.25)!important;color:#fff!important;height:46px;border:1px solid rgba(255,255,255,.18)!important}.bot .vbar{color:#fff}.bot .vbar *{box-sizing:border-box}.bot .vs-tx{text-align:center}";
// Assistente virtual da Office BIM — o mesmo assistente Gemini da BIM CURSOS (voz ao vivo, narração, áudio, fotos e proposta em PDF).
// Gerado por tools/gen_obim_bot.py a partir de bimcursos/site/public/assets/app.js. Fala com a Edge Function "assistente" (site: 'obim').
(() => {
  if (window.__obBot) return; window.__obBot = 1;
  const FN = 'https://qjunaahcantfiscligvs.supabase.co/functions/v1/assistente', KEY = 'sb_publishable_IeLlzcOWO7bc6eUyhvnMWg_jtEbMh32';
  const SITE = { whatsapp: '5593991863444', supabaseUrl: 'https://qjunaahcantfiscligvs.supabase.co', supabaseKey: KEY, bot: 'obim', botTitle: 'Assistente Office BIM', botTip: '✨ Atendimento Office BIM · 24h' };
  const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const sb = { functions: { invoke: async (_n, { body }) => { try { const r = await fetch(FN, { method: 'POST', headers: { 'content-type': 'application/json', apikey: KEY }, body: JSON.stringify({ ...body, site: 'obim' }) }); return { data: await r.json() }; } catch (e) { return { data: null }; } } }, auth: { getSession: async () => ({ data: { session: null } }) } };
  const sty = document.createElement('style'); sty.textContent = CSS; document.head.append(sty);

  const VOZES = [['Kore', 'Feminina'], ['Aoede', 'Feminina suave'], ['Charon', 'Masculina'], ['Puck', 'Masculina jovem']];
  const pref = (() => { try { return JSON.parse(localStorage.getItem('bot-pref') || '{}'); } catch (e) { return {}; } })();
  let voz = pref.voz || 'Kore', narrar = pref.narrar !== false;
  const save = () => { try { localStorage.setItem('bot-pref', JSON.stringify({ voz, narrar })); } catch (e) {} };
  const TITULO = SITE.botTitle || 'Assistente BIM CURSOS';
  const box = document.createElement('div'); box.className = 'bot';
  box.innerHTML = `<button class="orb" aria-label="Abrir assistente Office BIM" title="Tire suas dúvidas com o assistente"><span class="orb-core"></span><span class="orb-glow"></span><span class="orb-tip">${SITE.botTip || '✨ Suporte BIM CURSOS · 24h'}</span></button>
    <section class="bot-win" hidden role="dialog" aria-label="Assistente Office BIM"><header><span class="orb mini"><span class="orb-core"></span></span><div><b>Assistente Office BIM</b><span>projetos · orçamentos · fala e ouve</span></div><button class="bot-x" aria-label="Fechar">×</button></header>
    <div class="bot-opts"><div class="bot-tabs" role="tablist"><button type="button" data-t="voz" role="tab">🎙️ Conversar por voz</button><button type="button" data-t="txt" role="tab">⌨️ Texto</button></div>
      <div class="bot-row"><label class="bot-sw"><input type="checkbox" class="bot-narr"><span></span> Narrar respostas</label><select class="bot-vsel" aria-label="Escolher voz">${VOZES.map(([v, n]) => `<option value="${v}">${n}</option>`).join('')}</select></div></div>
    <div class="bot-log"><p class="bot-m a">Olá! 👷 Sou o assistente da Office BIM. Monto a proposta do seu projeto na hora, com PDF, e tiro dúvidas sobre loteamentos, edificações, topografia e BIM, e também sobre os cursos da BIM CURSOS. Fale comigo 🎙️, digite ou mande foto/planta 📷.</p></div>
    <div class="bot-sug"><button>Quero um orçamento de projeto</button><button>Orçamento de loteamento</button><button>Como funciona a parceria de 30%?</button><button>Cursos da BIM CURSOS</button></div>
    <div class="bot-files"></div>
    <form class="bot-f"><button type="button" class="bot-ic" data-k="file" aria-label="Anexar arquivo" title="Anexar print ou PDF">📎</button><button type="button" class="bot-ic" data-k="cam" aria-label="Tirar foto" title="Tirar foto">📷</button><input type="file" accept="image/png,image/jpeg,image/webp,application/pdf" hidden multiple><input type="file" data-cam accept="image/*" capture="environment" hidden><input name="q" placeholder="Digite sua dúvida…" autocomplete="off" maxlength="800"><button type="button" class="bot-ic" data-k="mic" aria-label="Gravar mensagem de áudio" title="Gravar áudio e enviar">🎤</button><button class="bot-send" aria-label="Enviar">➤</button></form>
    </section>
    <div class="bot-voice vbar" hidden role="dialog" aria-label="Conversa por voz"><div class="vb-head"><b>✨ ${TITULO}</b><button type="button" data-v="end" class="vb-close">✕ Fechar</button></div>
      <div class="vb-orb"><canvas class="vs" width="260" height="260" title="Toque para falar"></canvas><small class="vs-st">Toque</small></div>
      <p class="vs-tx">Pode falar…</p><button type="button" class="vb-cont" data-v="txt">💬 Continuar a conversa escrita</button>
      <form class="vb-f"><button type="button" data-v="file" aria-label="Anexar">📎</button><button type="button" data-v="cam" aria-label="Foto">📷</button><input name="q" placeholder="Ou escreva aqui…" autocomplete="off"><button type="button" data-v="mic" aria-label="Falar">🎤</button><button aria-label="Enviar">➤</button></form>
      <div class="vb-btn"><button type="button" data-v="txt" title="Abrir conversa escrita" aria-label="Abrir conversa escrita">💬</button><button type="button" data-v="voz" title="Trocar voz" aria-label="Trocar voz"></button><button type="button" data-v="end" class="end" title="Encerrar" aria-label="Encerrar conversa por voz">✕</button></div></div>`;
  document.body.append(box);
  const win = $('.bot-win', box), log = $('.bot-log', box), f = $('.bot-f', box), fin = $('input[type=file]', f), chips = $('.bot-files', box);
  const vsel = $('.bot-vsel', box), narr = $('.bot-narr', box); vsel.value = voz; narr.checked = narrar;
  vsel.onchange = () => { voz = vsel.value; save(); unlock(); say('Oi! Esta é a minha voz. Pode falar comigo.'); };
  narr.onchange = () => { narrar = narr.checked; save(); if (!narrar) hush(); };
  // A conversa (protocolo e histórico) fica guardada neste aparelho e continua no mesmo protocolo por até 12 h sem mensagens.
  // Fechar a janela não abre protocolo novo; só "Encerrar atendimento" (ou 12 h parado) abre outro.
  const PERS = /^bot-(proto|hist|nsrv)$/, TTL = 12 * 3600e3;
  try { const ts = +localStorage.getItem('bot-ts') || 0; if (ts && Date.now() - ts > TTL) ['bot-proto', 'bot-hist', 'bot-nsrv', 'bot-ts'].forEach((k) => localStorage.removeItem(k)); } catch (e) {}
  const ss = (k, v) => { try { const st = PERS.test(k) ? localStorage : sessionStorage; if (v === undefined) return JSON.parse(st.getItem(k) || 'null');
    if (v === null) st.removeItem(k); else st.setItem(k, JSON.stringify(v)); if (PERS.test(k)) localStorage.setItem('bot-ts', String(Date.now())); } catch (e) {} };
  const hist = ss('bot-hist') || []; let files = [], vmode = false; let modoH = false;
  let proto = ss('bot-proto'); const novoProto = () => { proto = 'AT-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase(); ss('bot-proto', proto); showProto(); };
  const showProto = () => { const el = $('.bot-win header div > span', box); if (el) { if (el.dataset.sub == null) el.dataset.sub = el.textContent; el.textContent = proto ? 'Protocolo ' + proto : el.dataset.sub; el.style.cssText = 'display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.74rem'; } };
  const fmt = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>').replace(/(^|\s)(\/[a-z][\w\-\/]*\/?)/g, '$1<a href="$2">$2</a>').replace(/\n/g, '<br>');
  const IR = /\[\[ir:(\/[^\]\s|]*)(?:\|([^\]]*))?\]\]/;
  const PR = /\[\[proposta\]\]([\s\S]*?)\[\[\/proposta\]\]/;
  const add = (role, text) => { text = String(text).replace(IR, '').replace(PR, '').trim(); const p = document.createElement('p'); p.className = 'bot-m ' + (role === 'user' ? 'u' : 'a'); p.innerHTML = fmt(text); log.append(p); log.scrollTop = log.scrollHeight; return p; };

  // ---- Áudio: voz do Gemini (feminina/masculina) tocada pelo WebAudio; se falhar, usa a voz do navegador ----
  let ac = null, out = null, src = null, an = null, buf = null, stopSay = null;
  const unlock = () => { try { if (!ac) { ac = new (window.AudioContext || window.webkitAudioContext)(); out = ac.createAnalyser(); out.fftSize = 64; out.connect(ac.destination); } ac.resume(); } catch (e) {} };
  let curStop = null;
  const hush = () => { try { curStop?.(); } catch (e) {} curStop = null; try { stopSay?.(); } catch (e) {} stopSay = null; try { speechSynthesis.cancel(); } catch (e) {} };
  const falavel = (t) => { let s = t.replace(/https?:\/\/\S+/g, '').replace(/(^|\s)\/[a-z][\w\-\/]*\/?/g, ' ').replace(/[*#_`>|]/g, '').replace(/[\u{1F000}-\u{1FFFF}☀-➿️]/gu, '').replace(/\s+\n/g, '\n').trim();
    if (s.length > 1100) { const first = s.split(/\n/).find((x) => x.trim().length > 20) || s; s = first.slice(0, 1000).replace(/[^.!?]*$/, '') || first.slice(0, 980); s += vmode ? ' O resto está escrito aqui: toque no balãozinho de conversa para ver.' : ' O resto está escrito aqui embaixo.'; } return s; };
  const browserSay = (t) => new Promise((res) => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'pt-BR'; u.rate = 1.03; const fem = !/Charon|Puck/.test(voz);
      const vs = speechSynthesis.getVoices().filter((x) => /pt(-|_)BR/i.test(x.lang)); const v = vs.find((x) => (fem ? /fem|luciana|francisca|maria|vit[oó]ria|google/i : /masc|daniel|antonio|ant[oô]nio|felipe|male/i).test(x.name)) || vs[0];
      if (v) u.voice = v; u.onend = res; u.onerror = res; speechSynthesis.cancel(); speechSynthesis.speak(u); stopSay = () => { speechSynthesis.cancel(); res(); }; } catch (e) { res(); } });
  const ttsFetch = (t) => sb.functions.invoke('assistente', { body: { tts: t, voice: voz } }).then((r) => r.data).catch(() => null);
  const playPCM = (data) => new Promise((res) => { try { const raw = atob(data.audio), n = raw.length >> 1, rate = +(/rate=(\d+)/.exec(data.mime || '') || [0, 24000])[1];
      const ab = ac.createBuffer(1, n, rate), ch = ab.getChannelData(0); for (let i = 0; i < n; i++) { let v = raw.charCodeAt(2 * i) | (raw.charCodeAt(2 * i + 1) << 8); if (v > 32767) v -= 65536; ch[i] = v / 32768; }
      src = ac.createBufferSource(); src.buffer = ab; src.connect(out); src.onended = res; stopSay = () => { try { src.stop(); } catch (e) {} res(); }; an = out; buf = new Uint8Array(out.frequencyBinCount); src.start(); } catch (e) { res(); } });
  const limpa = (t) => t.replace(/https?:\/\/\S+/g, '').replace(/(^|\s)\/[a-z][\w\-\/]*\/?/g, ' ').replace(/[*#_`>|•]/g, '').replace(/[\u{1F000}-\u{1FFFF}\u2600-\u27BF\uFE0F]/gu, '').replace(/\s+/g, ' ').trim();
  // Fala em cascata: cada frase pronta já vai para a voz enquanto o resto ainda chega
  const falador = () => { let chain = Promise.resolve(), total = 0, cut = false, stop = false; curStop = () => { stop = true; };
    return { add: (frase) => { if (stop || cut) return; let t = limpa(frase); if (t.length < 2) return; if (total + t.length > 1100) { cut = true; if (vmode) mostraTexto(); t = vmode ? 'O resto, com valores e detalhes, está escrito aqui. Toque no balãozinho de conversa para ver.' : 'O resto está escrito aqui embaixo.'; } total += t.length;
        const pr = ttsFetch(t); chain = chain.then(async () => { if (stop) return; speaking(true); const d = await pr; if (stop) return; if (d?.audio && ac) await playPCM(d); else await browserSay(t); }); },
      fim: async () => { await chain; an = null; if (!stop) speaking(false); } }; };
  const say = async (t) => { hush(); unlock(); const f = falador(); (limpa(t).match(/[^.!?]+[.!?]*/g) || []).forEach(f.add); await f.fim(); };
  // Pergunta com resposta em fluxo (texto aparece aos poucos)
  const FNURL = SITE.supabaseUrl + '/functions/v1/assistente';
  const streamAsk = async (body, onText) => { let tok = SITE.supabaseKey; try { tok = (await sb.auth.getSession()).data.session?.access_token || tok; } catch (e) {}
    const r = await fetch(FNURL, { method: 'POST', headers: { 'content-type': 'application/json', apikey: SITE.supabaseKey, authorization: 'Bearer ' + tok }, body: JSON.stringify({ ...body, stream: true, site: SITE.bot || 'bimcursos' }) }).catch(() => null);
    if (!r) return '';
    if (!(r.headers.get('content-type') || '').includes('event-stream') || !r.body) { const j = await r.json().catch(() => ({})); if (j.humano) modoH = true; const t = j.reply || ''; if (t) onText(t); return t; }
    const rd = r.body.getReader(), dec = new TextDecoder(); let acc = '', bf = '';
    for (;;) { const { done, value } = await rd.read(); if (done) break; bf += dec.decode(value, { stream: true }); let i;
      while ((i = bf.indexOf('\n\n')) >= 0) { const d = bf.slice(0, i).replace(/^data: ?/, ''); bf = bf.slice(i + 2); if (d === '[DONE]') continue; try { const o = JSON.parse(d); if (o.t) { acc += o.t; onText(acc); } } catch (e) {} } }
    return acc; };
  const speaking = (v) => { box.classList.toggle('speaking', v); if (vmode) { setMode(v ? 'speak' : 'idle', v ? (/iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent) ? 'Falando… toque na bolinha para falar' : 'Falando… (pode me interromper)') : 'Toque'); v ? bargeOn() : bargeOff(); } };
  // Interromper: enquanto a assistente fala, o microfone fica atento; se você começar a falar, ela para e escuta
  let bargeSt = null, bargeRaf = 0;
  const bargeOff = () => { cancelAnimationFrame(bargeRaf); try { bargeSt?.getTracks().forEach((t) => t.stop()); } catch (e) {} bargeSt = null; };
  const bargeOn = async () => { if (bargeSt || !ac || !navigator.mediaDevices?.getUserMedia || /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent)) return;
    try { const s = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: false } });
      if (mode !== 'speak' || bargeSt) { s.getTracks().forEach((t) => t.stop()); return; } bargeSt = s;
      const a = ac.createAnalyser(); a.fftSize = 512; ac.createMediaStreamSource(s).connect(a); const d = new Uint8Array(a.fftSize); let alto = 0, base = 0, n = 0;
      const loop = () => { if (!bargeSt) return; a.getByteTimeDomainData(d); let e = 0; for (const x of d) e += (x - 128) ** 2; e = Math.sqrt(e / d.length);
        if (n < 20) { base = (base * n + e) / (n + 1); n++; } else { alto = e > Math.max(7, base * 2.6) ? alto + 1 : Math.max(0, alto - 1);
          if (alto > 9) { bargeOff(); hush(); box.classList.remove('speaking'); mode = 'idle'; listen(); return; } }
        bargeRaf = requestAnimationFrame(loop); }; loop(); } catch (e) {} };

  // ---- Proposta de honorários Office BIM: PDF com timbre, WhatsApp do próprio cliente e e-mail ----
  const ASSET = 'https://bimcursos-plataforma.pages.dev/assets/brand/';
  const brl = (v) => 'R$ ' + (+v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const resumo = (p) => `Proposta prévia Office BIM nº ${p.numero}\nCliente: ${p.cliente || '-'}\nServiço: ${p.servico || '-'}${p.local ? ' · ' + p.local : ''}\n${(p.itens || []).map((i) => `• ${i.desc}: ${brl(i.total)}`).join('\n')}\nTotal estimado: ${brl(p.total)}${p.prazo ? '\nPrazo: ' + p.prazo : ''}\nValores de referência; proposta final após análise técnica.`;
  const pdfProposta = (p) => { const w = window.open('', '_blank'); if (!w) { add('assistant', 'Seu navegador bloqueou a janela do PDF. Libere pop-ups e toque de novo.'); return; }
    const hoje = new Date(), val = new Date(Date.now() + 15 * 864e5), d = (x) => x.toLocaleDateString('pt-BR');
    w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Proposta ${esc(p.numero)} - Office BIM</title><style>
@page{size:A4;margin:0}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{font:13px/1.5 Inter,Arial,sans-serif;color:#0f172a;margin:0;padding:14mm 14mm 12mm}
.hd{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #ff6a00;padding-bottom:12px}.hd img{height:54px}.hd .co{text-align:right;font-size:11px;color:#475569}
.hd b{font-size:18px;color:#0b1b3a;display:block}h1{font-size:20px;margin:18px 0 4px;color:#0b1b3a}.meta{display:flex;gap:24px;font-size:12px;color:#475569;margin-bottom:14px}
.box{border:1px solid #fed7aa;border-left:4px solid #ff6a00;border-radius:10px;padding:12px 14px;margin:10px 0;background:#fffaf5}.box h3{margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#ff6a00}
table{width:100%;border-collapse:collapse;margin-top:6px}th{background:#0b1b3a;color:#fff;text-align:left;font-size:11px;padding:7px 8px}td{padding:7px 8px;border-bottom:1px solid #fde3c8;font-size:12px}tbody tr:nth-child(even) td{background:#fff3e6}td.n,th.n{text-align:right;white-space:nowrap}
.tot{display:flex;justify-content:flex-end;margin-top:12px}.tot div{background:linear-gradient(135deg,#0b1b3a,#1e3a8a);color:#fff;padding:12px 22px;border-radius:12px;font-size:13px;font-weight:600;text-align:right;border:3px solid #ff6a00}.tot div b{display:block;font-size:26px;font-weight:900;color:#ffb36b;letter-spacing:-.01em}
.obs{font-size:11px;color:#475569}.sig{margin-top:28px;text-align:center}.sig img{height:60px}.sig p{margin:0;border-top:1px solid #94a3b8;display:inline-block;padding:4px 30px 0;font-size:12px}
.ft{margin-top:22px;font-size:10px;color:#64748b;text-align:center;border-top:1px solid #e2e8f0;padding-top:8px}.no-print{position:fixed;top:10px;right:10px}@media print{.no-print{display:none}}
</style></head><body><button class="no-print" onclick="print()" style="padding:10px 16px;border:0;border-radius:8px;background:#ff6a00;color:#fff;font-weight:700;cursor:pointer">Salvar em PDF / Imprimir</button>
<div class="hd"><div style="display:flex;align-items:center;gap:12px"><img src="${ASSET}officebim-simbolo.webp" alt=""><div><b>OFFICE BIM</b><span style="font-size:11px;color:#475569">Edificações e Infraestrutura</span></div></div>
<div class="co">OFFICE BIM, CURSOS, GERENCIAMENTO E PROJETOS DE ENGENHARIA LTDA<br>CNPJ 38.229.934/0001-72 · Santarém/PA<br>obim.com.br</div></div>
<h1>Proposta prévia de honorários</h1><div class="meta"><span><b>Nº</b> ${esc(p.numero)}</span><span><b>Emissão</b> ${d(hoje)}</span><span><b>Validade</b> ${d(val)}</span></div>
<div class="box"><h3>Cliente</h3><b>${esc(p.cliente || '-')}</b>${p.email ? ' · ' + esc(p.email) : ''}${p.telefone ? ' · ' + esc(p.telefone) : ''}${p.local ? '<br>Local da obra: ' + esc(p.local) : ''}</div>
<div class="box"><h3>Objeto</h3>${esc(p.servico || '')}${p.descricao ? '<br><span class="obs">' + esc(p.descricao) + '</span>' : ''}</div>
<div class="box"><h3>Composição dos honorários</h3><table><thead><tr><th>Item</th><th class="n">Qtd.</th><th class="n">Un.</th><th class="n">Unitário</th><th class="n">Subtotal</th></tr></thead><tbody>
${(p.itens || []).map((i) => `<tr><td>${esc(i.desc)}</td><td class="n">${esc(i.qtd ?? '')}</td><td class="n">${esc(i.un ?? '')}</td><td class="n">${i.unit != null ? brl(i.unit) : ''}</td><td class="n">${brl(i.total)}</td></tr>`).join('')}
</tbody></table><div class="tot"><div>Custo estimado do projeto<b>${brl(p.total)}</b></div></div></div>
${p.prazo ? `<div class="box"><h3>Prazo</h3>${esc(p.prazo)}</div>` : ''}
<div class="box"><h3>Condições</h3><div class="obs">${esc(p.obs || '')}<br>Valores de referência com base no Manual de Honorários Office BIM 2026 (máximos CEHOP 2026). Proposta final após análise técnica do escopo, documentos e visita, se necessária. Projetos desenvolvidos em BIM com ART/RRT.</div></div>
<div class="sig"><img src="${ASSET}assinatura.webp" alt=""><br><p>Eng. Civil Allan Dallen Almeida de Sousa · CREA 151156943-3<br>Office BIM - Edificações e Infraestrutura</p></div>
<div class="ft">Documento gerado pelo assistente virtual da Office BIM em ${d(hoje)} ${hoje.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}.</div>
<script>window.onload=()=>setTimeout(()=>print(),600)<\/script></body></html>`); w.document.close(); };
  const proposalTools = (bub, p) => { p.numero = p.numero || 'OB-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
    const bar = document.createElement('div'); bar.className = 'bot-prop';
    bar.innerHTML = `<b>📄 Proposta ${esc(p.numero)} · ${brl(p.total)}</b><div><button type="button" data-a="pdf">Baixar PDF</button><button type="button" data-a="mail">Enviar por e-mail</button></div>`;
    bub.after(bar); log.scrollTop = log.scrollHeight; if (vmode) mostraTexto('📄 Ver a proposta, baixar o PDF ou enviar por e-mail');
    $('[data-a=pdf]', bar).onclick = () => pdfProposta(p);
    $('[data-a=mail]', bar).onclick = async (ev) => { const bt = ev.currentTarget; let para = (p.email || '').trim();
      if (!para) para = (prompt('Para qual e-mail eu envio a proposta?') || '').trim(); if (!para) return; p.email = para;
      bt.disabled = true; bt.textContent = 'Enviando…';
      const r = await fetch(SITE.supabaseUrl + '/rest/v1/rpc/proposta_email', { method: 'POST', headers: { 'content-type': 'application/json', apikey: SITE.supabaseKey, authorization: 'Bearer ' + SITE.supabaseKey }, body: JSON.stringify({ p, para }) }).catch(() => null);
      const j = r ? await r.json().catch(() => ({})) : {};
      if (r?.ok) { bt.textContent = '✓ Enviada para ' + para; add('assistant', '📧 Pronto! Enviei a proposta ' + p.numero + ' para ' + para + '. Confira também a caixa de spam. A equipe da Office BIM recebeu uma cópia e pode te chamar para fechar os detalhes.'); }
      else { bt.disabled = false; bt.textContent = 'Enviar por e-mail'; alert('Não consegui enviar: ' + (j.message || 'tente de novo em instantes')); } }; };
  const ask = async (q, voiced) => { q = q.trim(); if (!q && !files.length) return; $('.bot-sug', box)?.remove(); hush();
    if (!proto) novoProto(); const ub = add('user', q || '📎 arquivo enviado'); const tk = document.createElement('span'); tk.className = 'tick'; tk.textContent = '✓'; ub.append(tk); hist.push({ role: 'user', content: q || 'Analise o arquivo enviado e me ajude.' });
    const sendFiles = files; files = []; chips.innerHTML = '';
    const w = add('assistant', '…'); w.classList.add('typing'); box.classList.add('thinking');
    const fala = (narrar || voiced) ? (unlock(), falador()) : null; let pos = 0;
    const visivel = (t) => t.replace(PR, '').replace(/\[\[proposta\]\][\s\S]*$/, '').replace(IR, '').replace(/\[\[[^\]]*$/, '').trim();
    const full0 = await streamAsk({ messages: leadTxt() ? hist.map((m, i) => (i === 0 && m.role === 'user' ? { ...m, content: leadTxt() + '\n' + m.content } : m)) : hist, lead: LEAD(), files: sendFiles, voice: !!voiced, protocolo: proto }, (acc) => {
      if (w.classList.contains('typing')) { w.classList.remove('typing'); box.classList.remove('thinking'); tk.textContent = '✓✓'; tk.classList.add('lida'); }
      const vis = visivel(acc); w.innerHTML = fmt(vis); log.scrollTop = log.scrollHeight; if (voiced) vtx.textContent = limpa(vis).slice(-240);
      if (fala) { const corpo = acc.split('[[')[0]; const re = /[^.!?\n]*?[.!?]+(?=\s)|[^\n]+\n/y; re.lastIndex = pos; let m; while ((m = re.exec(corpo))) { fala.add(m[0]); pos = re.lastIndex; } } });
    if (!full0 && modoH) { w.remove(); box.classList.remove('thinking'); tk.textContent = '✓✓'; tk.classList.add('lida'); ss('bot-hist', hist.slice(-16)); setTimeout(poll, 800); return ''; }
    const full = full0 || 'Não consegui responder agora. Tente de novo em instantes.'; const irm = IR.exec(full) || [], go = irm[1], hl = (irm[2] || '').trim(), r = full.replace(IR, '').trim();
    if (fala) { const corpo = full.split('[[')[0]; if (pos < corpo.length) fala.add(corpo.slice(pos)); }
    w.classList.remove('typing'); box.classList.remove('thinking'); w.innerHTML = fmt(visivel(full)); const bub = w; hist.push({ role: 'assistant', content: r.replace(PR, '[proposta gerada]') }); ss('bot-hist', hist.slice(-16));
    const pm = PR.exec(r); if (pm) { try { proposalTools(bub, JSON.parse(pm[1].trim().replace(/^```(json)?|```$/g, ''))); } catch (e) {} }
    if (fala) await fala.fim();
    if (hl) { try { sessionStorage.setItem('bot-hl', hl); } catch (e) {} }
    if (go) { const daqui = /^\/(equipe|sobre|servicos|cases|projetos|contato)?(\/|#|$)/.test(go);
      if (!daqui) window.open('https://bimcursos.com' + go, '_blank', 'noopener');
      else if (go.split('#')[0] !== location.pathname) { ss('bot-resume', vmode ? 'voz' : 'txt'); location.href = go; return ''; }
      else if (go.includes('#')) document.getElementById(go.split('#')[1])?.scrollIntoView({ behavior: 'smooth' }); }
    if (hl) window.__botHL?.(); return r; };
  const log0 = log.innerHTML;
  hist.forEach((m) => add(m.role, m.content)); showProto();
  // Atendimento ao vivo: quando a equipe assume, as mensagens dela (texto, foto, vídeo, áudio, arquivo) chegam aqui
  let nSrv = ss('bot-nsrv') || 0;
  const addH = (m) => { const p = document.createElement('div'); const u = m.media?.url ? esc(m.media.url) : '';
    if (m.role === 'sistema') { p.className = 'bot-m a'; p.style.cssText = 'align-self:center;font-size:.75rem;opacity:.75;background:transparent;border:1px dashed rgba(148,163,184,.4)'; p.textContent = m.content || ''; }
    else { p.className = 'bot-m a'; p.style.cssText = 'background:#065f46;color:#ecfdf5';
      p.innerHTML = `<small style="display:block;font-size:.7rem;font-weight:700;opacity:.85;margin-bottom:2px">👤 ${esc(m.by || 'Equipe')}</small>` + (u ? (m.media.type === 'image' ? `<a href="${u}" target="_blank" rel="noopener"><img src="${u}" alt="" style="max-width:220px;max-height:260px;border-radius:10px;display:block;margin:2px 0"></a>` : m.media.type === 'video' ? `<video src="${u}" controls playsinline style="max-width:240px;border-radius:10px;display:block"></video>` : m.media.type === 'audio' ? `<audio src="${u}" controls style="width:220px;max-width:100%"></audio>` : `<a href="${u}" target="_blank" rel="noopener" style="color:inherit">📎 ${esc(m.media.name || 'arquivo')}</a>`) : '') + (m.content ? `<div>${fmt(m.content)}</div>` : ''); }
    log.append(p); log.scrollTop = log.scrollHeight; };
  const poll = async () => { if (!proto) return; try { const r = await fetch(SITE.supabaseUrl + '/rest/v1/rpc/chat_poll', { method: 'POST', headers: { apikey: SITE.supabaseKey, 'content-type': 'application/json' }, body: JSON.stringify({ p_proto: proto, p_desde: nSrv }) });
      const j = await r.json(); if (!j || typeof j !== 'object') return; modoH = j.modo === 'humano'; box.classList.toggle('humano', modoH);
      const novas = j.msgs || []; novas.forEach((m) => { addH(m); if (m.role === 'human' && m.content) hist.push({ role: 'assistant', content: '[' + (m.by || 'Equipe') + '] ' + m.content }); });
      if (novas.length) { ss('bot-hist', hist.slice(-16)); if (win.hidden && novas.some((m) => m.role === 'human')) open(true); }
      nSrv = j.total || nSrv; ss('bot-nsrv', nSrv);
      if (j.encerrado && proto) { addH({ role: 'sistema', content: 'Atendimento ' + proto + ' encerrado. Se precisar, é só escrever: um novo protocolo será aberto.' }); proto = null; ss('bot-proto', null); nSrv = 0; ss('bot-nsrv', 0); hist.length = 0; ss('bot-hist', []); showProto(); } } catch (e) {} };
  // X: encerra o atendimento (a próxima conversa recebe um protocolo novo)
  const encerrar = async () => { if (proto && hist.length) { const p = proto; try { await fetch(SITE.supabaseUrl + '/rest/v1/rpc/chat_encerrar', { method: 'POST', headers: { apikey: SITE.supabaseKey, 'content-type': 'application/json' }, body: JSON.stringify({ p_proto: p }) }); } catch (e) {} }
    hist.length = 0; ss('bot-hist', []); proto = null; ss('bot-proto', null); nSrv = 0; ss('bot-nsrv', 0); log.innerHTML = log0; showProto(); };
  setInterval(() => { if (!document.hidden && proto) poll(); }, 4000); setTimeout(poll, 1500);

  // Identificação rápida antes do atendimento: nome, e-mail e cidade/UF (uma vez por aparelho); a assistente não pergunta de novo
  const LEAD = () => { try { return JSON.parse(localStorage.getItem('bot-lead') || 'null'); } catch (e) { return null; } };
  const leadTxt = () => { const l = LEAD(); return l ? `[Dados do cliente, já informados: nome ${l.nome}; e-mail ${l.email}; telefone ${l.telefone || '-'}; cidade ${l.cidade}; página atual ${location.pathname}. Chame pelo primeiro nome e não peça esses dados de novo.]` : ''; };
  const pedeLead = (depois) => { if (LEAD()) { depois?.(); return; } win.hidden = false; box.classList.add('open'); if ($('.bot-lead', win)) return;
    const u = {}; const fm = document.createElement('form'); fm.className = 'bot-lead';
    fm.style.cssText = 'position:absolute;inset:auto 0 0 0;top:64px;z-index:5;background:linear-gradient(180deg,#121a35,#0b1020);padding:18px 16px;display:flex;flex-direction:column;gap:10px;overflow:auto;color:#e8ecf5';
    const ip = 'width:100%;min-height:46px;border-radius:14px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.25);color:#fff;padding:0 14px;font:500 1rem Inter,system-ui,sans-serif';
    fm.innerHTML = `<b style="font:800 1.15rem Inter,system-ui,sans-serif">👋 Antes de começar</b><span style="color:#94a3b8;font-size:.9rem">Para te atender melhor e enviar a proposta ou a resposta por e-mail, preencha só uma vez:</span>
      <input name="nome" required minlength="3" placeholder="Seu nome completo" autocomplete="name" style="${ip}" value="${esc(u.nome || '')}">
      <input name="email" type="email" required placeholder="Seu e-mail" autocomplete="email" inputmode="email" style="${ip}" value="${esc(u.email || '')}">
      <input name="telefone" type="tel" required inputmode="tel" placeholder="Seu WhatsApp com DDD" autocomplete="tel" style="${ip}">
      <input name="cidade" required minlength="3" placeholder="Sua cidade e estado (ex.: Santarém/PA)" autocomplete="address-level2" style="${ip}">
      <button style="min-height:50px;border:0;border-radius:999px;background:#ff6a00;color:#fff;font:800 1rem Inter,system-ui,sans-serif;cursor:pointer">Começar atendimento →</button>
      <small style="color:#64748b">Seus dados ficam só com a nossa equipe, para responder você.</small>`;
    fm.onsubmit = (e) => { e.preventDefault(); const d = Object.fromEntries(new FormData(fm)); if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(d.email.trim())) { fm.email.focus(); return; } const tel = d.telefone.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, ''); if (!/^[1-9]\d9?\d{8}$/.test(tel)) { fm.telefone.setCustomValidity('Informe o celular com DDD, ex.: (93) 99999-9999'); fm.telefone.reportValidity(); fm.telefone.oninput = () => fm.telefone.setCustomValidity(''); return; } d.telefone = '(' + tel.slice(0, 2) + ') ' + tel.slice(2, -4) + '-' + tel.slice(-4);
      const ld = { nome: d.nome.trim(), email: d.email.trim().toLowerCase(), telefone: d.telefone, cidade: d.cidade.trim() }; try { localStorage.setItem('bot-lead', JSON.stringify(ld)); } catch (er) {}
      fetch(SITE.supabaseUrl + '/rest/v1/rpc/lead_salvar', { method: 'POST', headers: { apikey: SITE.supabaseKey, 'content-type': 'application/json' }, body: JSON.stringify({ p: { ...ld, site: SITE.bot || 'bimcursos', protocolo: proto } }) }).catch(() => {});
      fm.remove(); add('assistant', `Prazer, ${esc(d.nome.trim().split(' ')[0])}! 😊 Como posso te ajudar?`); depois?.(); };
    $('header', win).after(fm); setTimeout(() => (u.email ? fm.cidade : fm.nome).focus(), 80); };
  const open = (v) => { win.hidden = !v; box.classList.toggle('open', v); if (v) { unlock(); if (!LEAD()) { pedeLead(); return; } if (!vmode) setTimeout(() => f.q.focus(), 50); } else { hush(); voiceOn(false); } };
  document.addEventListener('click', (e) => { if (e.target.closest('[data-open-bot]')) { unlock(); voiceOn(false); open(true); } });
  $('.orb', box).onclick = () => { unlock(); if (vmode) { voiceOn(false); return; } if (!win.hidden) { open(false); return; } voiceOn(true); };
  // ✕ só minimiza (a conversa continua no mesmo protocolo); o botão "Encerrar" finaliza o atendimento
  $('.bot-x', box).onclick = () => open(false); $('.bot-x', box).title = 'Fechar (a conversa continua salva)';
  { const eb = document.createElement('button'); eb.type = 'button'; eb.className = 'bot-end'; eb.textContent = 'Encerrar'; eb.title = 'Encerrar este atendimento';
    eb.style.cssText = 'border:1px solid rgba(255,255,255,.25);background:transparent;color:inherit;border-radius:999px;padding:6px 10px;font:700 .75rem Inter,system-ui,sans-serif;cursor:pointer;margin-left:auto;margin-right:6px';
    eb.onclick = async () => { if (!proto || !hist.length) { open(false); return; } if (!confirm('Encerrar o atendimento ' + proto + '? Na próxima mensagem abre um protocolo novo.')) return; open(false); await encerrar(); };
    $('.bot-x', box).before(eb); }
  $$('.bot-sug button', box).forEach((b) => (b.onclick = () => { unlock(); ask(b.textContent); }));
  f.onsubmit = (e) => { e.preventDefault(); unlock(); const q = f.q.value; f.q.value = ''; ask(q); };
  $('[data-k=file]', f).onclick = () => fin.click();
  fin.onchange = async () => { for (const file of [...fin.files].slice(0, 3)) { if (file.size > 4e6) { add('assistant', `O arquivo ${file.name} passa de 4 MB. Mande um menor.`); continue; }
      const data = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.readAsDataURL(file); });
      files.push({ mime: file.type, data, name: file.name }); const c = document.createElement('span'); c.textContent = '📎 ' + file.name; chips.append(c); } fin.value = ''; };
  const camIn = $('input[data-cam]', f); $('[data-k=cam]', f).onclick = () => camIn.click();
  camIn.onchange = () => { fin.files = camIn.files; fin.onchange(); };

  // ---- Modo voz: esfera de pontos que reage à sua voz (ouvindo) e à voz do assistente (falando); conversa contínua ----
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const vbox = $('.bot-voice', box), cv = $('.vs', box), st = $('.vs-st', box), vtx = $('.vs-tx', box), ctx = cv.getContext('2d');
  let level = 0, mode = 'idle', raf = 0, rec = null, stream = null, mic = null, mbuf = null;
  const pts = Array.from({ length: 260 }, (_, i) => { const y = 1 - (i / 259) * 2, r = Math.sqrt(1 - y * y), t = i * 2.39996; return [Math.cos(t) * r, y, Math.sin(t) * r]; });
  const draw = (tm) => { const W = cv.width, R = W * .3; ctx.clearRect(0, 0, W, W); const A = mic || an, B = mic ? mbuf : buf;
    if (A && B) { A.getByteFrequencyData(B); level = level * .6 + (B.reduce((x, y) => x + y, 0) / B.length / 80) * .4; }
    else level = level * .9 + (mode === 'listen' ? .25 + .2 * Math.sin(tm / 140) : mode === 'think' ? .12 : .04) * .1;
    const rot = tm / (mode === 'think' ? 600 : 2400), k = 1 + Math.min(level, 1.2) * .28, hue = mode === 'listen' ? 160 : mode === 'speak' ? 265 : 215;
    for (const [x, y, z] of pts) { const cx = x * Math.cos(rot) - z * Math.sin(rot), cz = x * Math.sin(rot) + z * Math.cos(rot), wob = 1 + Math.sin(tm / 160 + y * 6) * level * .06;
      const sc = (cz + 2) / 3, px = W / 2 + cx * R * k * wob, py = W / 2 + y * R * k * wob;
      ctx.beginPath(); ctx.arc(px, py, 1.1 + sc * 2.7, 0, 6.283); ctx.fillStyle = `hsla(${hue + cz * 35 + level * 40},90%,${55 + sc * 20}%,${.22 + sc * .78})`; ctx.fill(); }
    ctx.beginPath(); ctx.arc(W / 2, W / 2, R * 1.32 * k, 0, 6.283); ctx.strokeStyle = `hsla(${hue},80%,60%,${.3 + level * .45})`; ctx.lineWidth = 3; ctx.stroke();
    raf = requestAnimationFrame(draw); };
  const setMode = (m, t) => { mode = m; st.textContent = t; vbox.dataset.m = m; vbox.classList.toggle('big', m === 'idle'); };
  const stopMic = () => { try { stream?.getTracks().forEach((t) => t.stop()); } catch (e) {} stream = null; mic = null; };
  // iPhone e navegadores sem reconhecimento de voz: grava a fala, detecta a pausa e a assistente transcreve no servidor
  const gravaEscuta = async () => {
    if (rec) { try { rec.stop(); } catch (e) {} return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { setMode('idle', 'Sem voz'); vtx.textContent = 'Este navegador não grava áudio. Digite no campo abaixo.'; return; }
    let st; try { st = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }); } catch (e) { setMode('idle', 'Microfone bloqueado'); vtx.textContent = 'Libere o microfone para este site nas configurações do navegador, ou digite abaixo.'; return; }
    const mime = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg'].find((t) => MediaRecorder.isTypeSupported?.(t)) || '';
    const mr = new MediaRecorder(st, mime ? { mimeType: mime } : undefined); const parts = []; mr.ondataavailable = (e) => e.data.size && parts.push(e.data);
    stream = st; try { mic = ac.createAnalyser(); mic.fftSize = 512; mbuf = new Uint8Array(mic.frequencyBinCount); ac.createMediaStreamSource(st).connect(mic); } catch (e) { mic = null; }
    const d = new Uint8Array(512); let falou = 0, quieto = 0; const t0 = Date.now(); let vad = 0;
    rec = { stop: () => { try { mr.state !== 'inactive' && mr.stop(); } catch (e) {} } };
    setMode('listen', 'Ouvindo… fale à vontade'); vtx.textContent = 'Pode falar… eu espero você terminar';
    vad = setInterval(() => { if (!mic) return; const an2 = mic; const buf2 = new Uint8Array(an2.fftSize); an2.getByteTimeDomainData(buf2); let e = 0; for (const x of buf2) e += (x - 128) ** 2; e = Math.sqrt(e / buf2.length);
      if (e > 6) { falou += 100; quieto = 0; } else quieto += 100;
      if ((falou > 300 && quieto > 1700) || Date.now() - t0 > 45000 || (!falou && Date.now() - t0 > 9000)) rec?.stop(); }, 100);
    mr.onstop = async () => { clearInterval(vad); rec = null; stopMic(); if (!falou) { setMode('idle', 'Toque'); vtx.textContent = 'Não ouvi nada. Toque na bolinha e fale.'; return; }
      setMode('think', 'Entendendo…'); vtx.textContent = 'Entendendo o que você falou…';
      let blob = new Blob(parts, { type: mr.mimeType || mime || 'audio/mp4' });
      // converte para WAV 16 kHz mono (formato que a IA sempre entende); se não der, manda o original
      try { const ab = await blob.arrayBuffer(); const au = await new Promise((ok, no) => { const p = ac.decodeAudioData(ab.slice(0), ok, no); if (p?.then) p.then(ok, no); });
        const sr = 16000, len = Math.ceil(au.duration * sr), oc = new OfflineAudioContext(1, len, sr); const s = oc.createBufferSource(); s.buffer = au; s.connect(oc.destination); s.start(); const rb = await oc.startRendering(); const ch = rb.getChannelData(0);
        const buf = new ArrayBuffer(44 + ch.length * 2), v = new DataView(buf), w = (o, t) => [...t].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
        w(0, 'RIFF'); v.setUint32(4, 36 + ch.length * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, ch.length * 2, true);
        for (let i = 0; i < ch.length; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, ch[i])) * 32767, true); blob = new Blob([buf], { type: 'audio/wav' }); } catch (e) {}
      const data = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = () => res(''); r.readAsDataURL(blob); });
      let said = ''; try { const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 25000); const r = await fetch(SITE.supabaseUrl + '/functions/v1/assistente', { method: 'POST', signal: ctl.signal, headers: { 'content-type': 'application/json', apikey: SITE.supabaseKey }, body: JSON.stringify({ transcrever: { mime: blob.type, data } }) }); clearTimeout(to); said = ((await r.json()).text || '').trim(); } catch (e) {}
      if (!/[a-zà-ÿ]{2}/i.test(said)) said = '';
      if (!said) { setMode('idle', 'Toque'); vtx.textContent = 'Não entendi. Toque na bolinha e fale de novo, ou digite abaixo.'; return; }
      vtx.textContent = said; setMode('think', 'Pensando…'); const r = await ask(said, true); if (r && vmode) depoisDaResposta(r); };
    mr.start(250); };
  const listen = async () => { unlock(); vbox.classList.remove('toque'); if (mode === 'speak') { hush(); }
    if (!SR || /iPhone|iPad|iPod/.test(navigator.userAgent)) return gravaEscuta();
    if (rec) { rec.stop(); return; }
    bargeOff(); rec = new SR(); rec.lang = 'pt-BR'; rec.interimResults = true; rec.continuous = !/Android|iPhone|iPad|Mobi/i.test(navigator.userAgent); let said = '', tmr = 0; setMode('listen', 'Sua vez, pode falar à vontade'); vtx.textContent = 'Pode falar… eu espero você terminar';
    // só encerra depois de uma pausa de verdade (não corta no meio da frase)
    rec.onresult = (e) => { said = [...e.results].map((r) => r[0].transcript).join(' ').replace(/\s+/g, ' ').trim(); vtx.textContent = said; clearTimeout(tmr); tmr = setTimeout(() => { try { rec?.stop(); } catch (er) {} }, 2000); };
    rec.onerror = () => {};
    rec.onend = async () => { rec = null; stopMic(); if (!said.trim()) { setMode('idle', 'Toque'); vtx.textContent = 'Toque na bolinha e fale'; return; }
      setMode('think', 'Pensando…'); const r = await ask(said, true);
      if (r && vmode) depoisDaResposta(r); };
    delete box.dataset.stop; try { rec.start(); } catch (e) {}
    if (!/iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent)) navigator.mediaDevices?.getUserMedia({ audio: true }).then((st) => { if (!rec) { st.getTracks().forEach((t) => t.stop()); return; } stream = st; mic = ac.createAnalyser(); mic.fftSize = 64; mbuf = new Uint8Array(mic.frequencyBinCount); ac.createMediaStreamSource(st).connect(mic); }).catch(() => {}); };
  const vbtn = $('[data-v=voz]', box), showVoz = () => { const fem = !/Charon|Puck/.test(voz); vbtn.textContent = fem ? '👩' : '👨'; vbtn.title = 'Voz: ' + (VOZES.find((x) => x[0] === voz) || [, ''])[1] + ' (toque para trocar)'; }; showVoz();
  vbtn.onclick = () => { unlock(); const i = VOZES.findIndex((x) => x[0] === voz); voz = VOZES[(i + 1) % VOZES.length][0]; vsel.value = voz; save(); showVoz(); say('Oi, esta é a voz ' + VOZES.find((x) => x[0] === voz)[1].toLowerCase() + '.'); };
  vsel.addEventListener('change', showVoz);
  // No modo voz, quando a resposta tem detalhes escritos (orçamento, lista), aparece um botão em destaque para ver e continuar
  const mostraTexto = (rot) => { const vb = $('.bot-voice', box); if (!vb) return; let b = $('.vb-ver', vb);
    if (!b) { b = document.createElement('button'); b.type = 'button'; b.className = 'vb-ver'; b.style.cssText = 'display:block;margin:10px auto 0;padding:12px 18px;border:0;border-radius:999px;background:#ff6a00;color:#fff;font:800 .95rem Inter,system-ui,sans-serif;box-shadow:0 0 0 0 rgba(255,106,0,.6);animation:vbpulse 1.6s infinite;cursor:pointer';
      if (!document.getElementById('vbpulse-css')) { const s = document.createElement('style'); s.id = 'vbpulse-css'; s.textContent = '@keyframes vbpulse{70%{box-shadow:0 0 0 12px rgba(255,106,0,0)}100%{box-shadow:0 0 0 0 rgba(255,106,0,0)}}'; document.head.append(s); }
      b.onclick = () => { hush(); voiceOn(false); win.hidden = false; box.classList.add('open'); b.remove(); setTimeout(() => { log.scrollTop = log.scrollHeight; f.q.focus(); }, 80); };
      ($('.vb-btn', vb) || vb).before(b); }
    b.textContent = rot || '📄 Ver tudo escrito e continuar a conversa'; };
  // Depois de cada resposta no modo voz: se ela pediu nome, e-mail, telefone ou cidade, destaca o campo para digitar e espera; senão, volta a ouvir
  const PEDE = [[/e-?mail/i, 'Digite aqui o seu e-mail'], [/telefone|whats|celular/i, 'Digite aqui o seu telefone com DDD'], [/nome/i, 'Digite aqui o seu nome completo'], [/cidade|estado|munic[ií]pio|localiza/i, 'Digite aqui a cidade e o estado (ex.: Santarém/PA)']];
  const depoisDaResposta = (r) => { if (!vmode || box.dataset.stop) return; const fim = String(r || '').split(/\n/).filter((x) => x.trim()).slice(-2).join(' ');
    const pede = /\?/.test(fim) && PEDE.find(([re]) => re.test(fim));
    if (pede) { vf.classList.add('pede'); vf.q.placeholder = pede[1]; } else { vf.classList.remove('pede'); vf.q.placeholder = 'Ou escreva aqui…'; }
    // iPhone só libera o microfone com um toque: em vez de ouvir sozinho, pede para tocar na bolinha
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) { setMode('idle', 'Toque para responder'); vbox.classList.add('toque'); vtx.textContent = pede ? '👆 Toque na bolinha e fale, ou digite no campo laranja' : '👆 Toque na bolinha para responder'; return; }
    // continua ouvindo; se a pessoa tocar no campo para digitar, a escuta pausa sozinha
    setTimeout(() => { if (!rec && mode !== 'listen' && !box.dataset.stop) { listen(); if (pede) setTimeout(() => { vtx.textContent = 'Pode falar, ou digite no campo laranja: ' + pede[1].replace('Digite aqui ', ''); }, 50); } }, 350); };
  const voiceOn = (v) => { if (v && !LEAD()) { pedeLead(() => { voiceOn(true); listen(); }); return; } vmode = v; vbox.hidden = !v; box.classList.toggle('voice', v); if (v) { win.hidden = true; box.classList.remove('open'); }
    $$('.bot-tabs button', box).forEach((b) => b.setAttribute('aria-selected', String((b.dataset.t === 'voz') === v)));
    cancelAnimationFrame(raf); if (v) { setMode('idle', 'Toque'); vtx.textContent = 'Toque na bolinha e fale'; raf = requestAnimationFrame(draw); } else { box.dataset.stop = 1; rec?.stop(); stopMic(); } };
  cv.onclick = () => { delete box.dataset.stop; listen(); };
  $$('[data-v=end]', box).forEach((b) => (b.onclick = () => { box.dataset.stop = 1; rec?.stop(); hush(); voiceOn(false); }));
  $$('[data-v=txt]', box).forEach((b) => (b.onclick = () => { voiceOn(false); open(true); }));
  const vf = $('.vb-f', box);
  // Digitar sem sair da voz: ao tocar no campo, ela para de falar e de ouvir e espera você digitar (nome, e-mail, cidade…)
  const pausaVoz = () => { box.dataset.stop = 1; try { rec?.stop(); } catch (e) {} hush(); setMode('idle', 'Esperando você digitar'); };
  vf.onsubmit = async (e) => { e.preventDefault(); const q = vf.q.value.trim(); if (!q) return; vf.q.value = ''; vf.classList.remove('pede'); vf.q.placeholder = 'Ou escreva aqui…'; vf.q.blur();
    delete box.dataset.stop; setMode('think', 'Pensando…'); const r = await ask(q, true); if (vmode) depoisDaResposta(r); };
  vf.q.addEventListener('focus', pausaVoz);
  vf.q.addEventListener('input', () => { if (mode !== 'idle') pausaVoz(); });
  $('[data-v=file]', vf).onclick = () => { voiceOn(false); open(true); fin.click(); };
  $('[data-v=cam]', vf).onclick = () => { voiceOn(false); open(true); camIn.click(); };
  $('[data-v=mic]', vf).onclick = () => { delete box.dataset.stop; listen(); };
  // 🎤 na caixa de texto = mensagem de áudio (grava, transcreve e envia como mensagem escrita)
  let dic = null; const micB = $('[data-k=mic]', f);
  micB.onclick = () => { unlock(); if (dic) { dic.stop(); return; } if (!SR) { add('assistant', 'Seu navegador não grava áudio aqui. Use o Chrome ou digite.'); return; }
    hush(); dic = new SR(); dic.lang = 'pt-BR'; dic.interimResults = true; dic.continuous = true; let said = ''; micB.classList.add('rec'); f.q.placeholder = 'Gravando… toque 🎤 de novo para enviar';
    dic.onresult = (e) => { said = [...e.results].map((r) => r[0].transcript).join(''); f.q.value = said; };
    dic.onend = () => { dic = null; micB.classList.remove('rec'); f.q.placeholder = 'Digite sua dúvida…'; const q = f.q.value.trim(); f.q.value = ''; if (q) ask('🎤 ' + q); };
    dic.onerror = () => {}; dic.start(); };
  // escrever encerra a conversa por voz
  f.q.addEventListener('input', () => { if (vmode) voiceOn(false); });
  $$('.bot-tabs button', box).forEach((b) => (b.onclick = () => { unlock(); if (b.dataset.t === 'voz') { voiceOn(true); listen(); } else f.q.focus(); }));
  $$('.bot-tabs button', box)[1].setAttribute('aria-selected', 'true');
  const resume = ss('bot-resume'); if (resume) { sessionStorage.removeItem('bot-resume'); if (resume === 'voz') { voiceOn(true); vtx.textContent = 'Pronto, abri a página. Toque na esfera para continuar.'; } else open(true); }
  setTimeout(() => box.classList.add('hello'), 4000); setTimeout(() => box.classList.remove('hello'), 11000);
})();

// Guia na tela: a assistente aponta, piscando, o botão ou item onde clicar (também depois de mudar de página)
(() => { const st = document.createElement('style');
  st.textContent = '.bot-hl{position:relative;outline:3px solid #ff6a00!important;outline-offset:4px;border-radius:12px;animation:botHL 1s ease-in-out infinite;z-index:5}@keyframes botHL{50%{outline-color:#ffd166;box-shadow:0 0 0 10px rgba(255,106,0,.25)}}.bot-hl-tip{position:absolute;z-index:99990;background:#ff6a00;color:#fff;font:800 .85rem Inter,system-ui,sans-serif;padding:7px 12px;border-radius:999px;box-shadow:0 8px 20px rgba(0,0,0,.35);pointer-events:none;animation:bhtip .9s ease-in-out infinite alternate}@keyframes bhtip{to{transform:translateY(-5px)}}';
  document.head.append(st);
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  window.__botHL = () => { let t; try { t = sessionStorage.getItem('bot-hl'); } catch (e) {} if (!t) return; const alvo = norm(t); let n = 0;
    const tick = setInterval(() => { n++;
      const els = [...document.querySelectorAll('a, button, summary, label, h1, h2, h3, article, .ob-wc, .ob-rc, .ob-tc, .ob-ec')].filter((e) => e.offsetParent && !e.closest('.bot') && norm(e.textContent).includes(alvo));
      if (!els.length && n < 40) return; clearInterval(tick); try { sessionStorage.removeItem('bot-hl'); } catch (e) {}
      const el = els.sort((x, y) => x.textContent.length - y.textContent.length)[0]; if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.add('bot-hl');
      const tip = document.createElement('div'); tip.className = 'bot-hl-tip'; tip.textContent = '👆 Clique aqui'; document.body.append(tip);
      const pos = () => { const r = el.getBoundingClientRect(); tip.style.left = Math.max(8, r.left + scrollX + r.width / 2 - 50) + 'px'; tip.style.top = Math.max(8, r.top + scrollY - 42) + 'px'; }; pos(); const iv = setInterval(pos, 200);
      const sai = () => { el.classList.remove('bot-hl'); tip.remove(); clearInterval(iv); }; setTimeout(sai, 12000); el.addEventListener('click', sai, { once: true }); }, 300); };
  setTimeout(() => window.__botHL(), 900); })();

// Balão do assistente: frases que se revezam para mostrar que a bolinha é um assistente que atende, orça e tira dúvidas
(() => { const F = ["✨ Faça seu orçamento com o assistente", "💬 Pergunte ao assistente: projetos e obras", "📄 Proposta em PDF na hora", "🎙️ Pode falar comigo por voz", "🎓 Dúvidas sobre a BIM CURSOS também", "✨ Atendimento Office BIM · 24h"]; let i = 0;
  const st = document.createElement('style'); st.textContent = '.orb-tip.troca{animation:tipin .5s ease}@keyframes tipin{from{opacity:0}to{opacity:1}}'; document.head.append(st);
  setInterval(() => { const t = document.querySelector('.bot .orb-tip'); const b = t?.closest('.bot'); if (!t || b?.classList.contains('open') || b?.classList.contains('voice')) return;
    i = (i + 1) % F.length; t.textContent = F[i]; t.classList.remove('troca'); void t.offsetWidth; t.classList.add('troca'); }, 4500); })();

// Acessos da Office BIM no painel da BIM CURSOS (mesmo painel: visitas, cidades, origens, páginas e quem está online)
(() => { if (window.__obTrack) return; window.__obTrack = 1;
  try { let sid = sessionStorage.getItem('ob_sid'); if (!sid) { sid = 'ob' + Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem('ob_sid', sid); }
    let org = null; try { org = JSON.parse(sessionStorage.getItem('ob_org') || 'null'); } catch (e) {}
    if (!org) { const q = new URLSearchParams(location.search); let host = ''; try { host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) {} if (host === location.hostname.replace(/^www\./, '')) host = '';
      const M = [[/google\./, 'google', 'organico'], [/bing\.|duckduckgo|yahoo\./, 'busca', 'organico'], [/youtube\.|youtu\.be/, 'youtube', 'social'], [/instagram\./, 'instagram', 'social'], [/facebook\.|fb\./, 'facebook', 'social'], [/whatsapp|wa\.me/, 'whatsapp', 'social'], [/linkedin\./, 'linkedin', 'social'], [/bimcursos\./, 'bim cursos', 'indicacao'], [/uhull/, 'uhull', 'indicacao']];
      const m = host && M.find(([r]) => r.test(host)); org = { source: q.get('utm_source') || (m ? m[1] : host || 'direto'), medium: q.get('utm_medium') || (m ? m[2] : host ? 'outro site' : 'direto'), campaign: q.get('utm_campaign') || null, ref_host: host || null };
      try { sessionStorage.setItem('ob_org', JSON.stringify(org)); } catch (e) {} }
    const dev = matchMedia('(max-width: 800px)').matches ? 'mobile' : 'desktop';
    const T = (ev) => fetch('/api/t', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sid, ev, path: location.pathname, device: dev, ...org }) }).catch(() => {});
    setTimeout(() => T('view'), 1000); setInterval(() => { if (!document.hidden) T('hb'); }, 60000);
    document.addEventListener('click', (e) => { if (e.target.closest('a[href*="wa.me"]')) T('whatsapp'); if (e.target.closest('.orb')) T('assistente'); }, true);
  } catch (e) {} })();
