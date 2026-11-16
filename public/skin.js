// Office BIM — nova pele visual (cores vivas, tipografia forte, movimento). Aplicada por cima do site atual.
(() => {
  if (window.__obSkin) return; window.__obSkin = 1;
  const q = new URLSearchParams(location.search);
  if (q.has('antigo')) { try { localStorage.setItem('ob-skin', '0'); } catch (e) {} }
  if (q.has('novo')) { try { localStorage.setItem('ob-skin', '1'); } catch (e) {} }
  let on = true; try { on = localStorage.getItem('ob-skin') !== '0'; } catch (e) {}
  if (!on) return;
  const L = document.createElement('link'); L.rel = 'stylesheet'; L.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap'; document.head.append(L);
  const css = `
:root,.dark{--background:224 52% 4%;--foreground:210 40% 98%;--card:224 45% 8%;--card-foreground:210 40% 98%;--popover:224 45% 8%;--popover-foreground:210 40% 98%;
  --primary:217 91% 56%;--primary-foreground:0 0% 100%;--secondary:222 40% 12%;--secondary-foreground:210 40% 98%;--muted:222 42% 9%;--muted-foreground:215 25% 72%;
  --accent:217 91% 56%;--accent-foreground:0 0% 100%;--border:218 45% 18%;--input:218 45% 18%;--ring:217 91% 56%;--radius:.9rem}
html{scroll-behavior:smooth}
body{background:hsl(224 52% 4%);color:hsl(210 40% 98%);font-family:Inter,system-ui,sans-serif}
h1,h2,h3,.font-display{font-family:"Space Grotesk",Inter,system-ui,sans-serif!important;letter-spacing:-.02em}
main>section{position:relative}
main>section:nth-of-type(odd)::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(56,189,248,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.05) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at 50% 30%,#000 30%,transparent 75%);z-index:0}
main>section>*{position:relative;z-index:1}
.bg-muted\\/40{background:linear-gradient(180deg,hsl(224 48% 6%),hsl(224 52% 4%))!important}
/* topo */
header{background:rgba(5,8,18,.72)!important;backdrop-filter:blur(14px) saturate(1.4);border-bottom:1px solid rgba(255,255,255,.07)}
#top{background:radial-gradient(900px 520px at 85% 15%,rgba(37,99,235,.20),transparent 60%),radial-gradient(800px 600px at 0% 100%,rgba(8,145,178,.14),transparent 60%),hsl(224 52% 4%)!important}
#top h1{font-size:clamp(2.4rem,5.2vw,4.6rem)!important;line-height:1.02!important;font-weight:700!important}
#top h1 .ob-hl{background:linear-gradient(90deg,#93c5fd,#60a5fa);-webkit-background-clip:text;background-clip:text;color:transparent}
#top p{color:#cbd5e1}
#top img{border-radius:22px!important;box-shadow:0 40px 90px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08),0 0 80px rgba(37,99,235,.18);animation:obFloat 7s ease-in-out infinite}
@keyframes obFloat{50%{transform:translateY(-10px)}}
/* botões */
main a[href*="wa.me"],header a[href*="wa.me"],main .bg-accent,header .bg-accent{background:linear-gradient(135deg,#2563eb,#1d4ed8)!important;color:#fff!important;border:0!important;border-radius:999px!important;box-shadow:0 12px 30px rgba(37,99,235,.35);transition:transform .2s,box-shadow .2s}
main a[href*="wa.me"]:hover,header a[href*="wa.me"]:hover,main .bg-accent:hover{transform:translateY(-2px);box-shadow:0 18px 40px rgba(37,99,235,.5)}
main a.inline-flex.border,main button.inline-flex.border:not(.flex-col){border-radius:999px!important;border-color:rgba(255,255,255,.22)!important;backdrop-filter:blur(8px)}
main button.group.flex-col{border-radius:18px!important;background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))!important;border-color:rgba(255,255,255,.08)!important;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s,border-color .35s}
main button.group.flex-col:hover{transform:translateY(-6px);border-color:rgba(96,165,250,.5)!important;box-shadow:0 24px 60px rgba(0,0,0,.45),0 0 50px rgba(37,99,235,.14)}
.text-accent{color:#60a5fa!important}
/* números */
main>section:nth-of-type(3){background:linear-gradient(90deg,rgba(0,48,120,.25),rgba(0,120,144,.12))!important}
main>section:nth-of-type(3) dd{font-size:clamp(1.6rem,2.8vw,2.4rem)!important;background:linear-gradient(90deg,#fff,#9fe3f0);-webkit-background-clip:text;background-clip:text;color:transparent}
/* cartões e imagens */
main article,.rounded-lg,.rounded-xl{border-radius:18px!important}
main article,main .border.bg-card,main .bg-card{background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))!important;border:1px solid rgba(255,255,255,.08)!important;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s,border-color .35s}
main article:hover,main .bg-card:hover{transform:translateY(-6px);border-color:rgba(96,165,250,.5)!important;box-shadow:0 24px 60px rgba(0,0,0,.45),0 0 0 1px rgba(96,165,250,.2),0 0 50px rgba(37,99,235,.14)}
main article img{transition:transform .8s cubic-bezier(.2,.8,.2,1)}main article:hover img{transform:scale(1.06)}
/* rótulos de seção 01 / 02 */
.ob-kick{display:inline-flex!important;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;background:rgba(0,120,144,.14);border:1px solid rgba(34,211,238,.35);color:#7dd3e6!important;letter-spacing:.14em}
.ob-kick::before{content:"";width:7px;height:7px;border-radius:50%;background:#22d3ee;box-shadow:0 0 12px #22d3ee}
main h2{font-size:clamp(1.9rem,3.6vw,3.1rem)!important;line-height:1.08!important}
/* faixa de tecnologias */
.ob-marq{overflow:hidden;border-block:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);padding:16px 0}
.ob-marq div{display:flex;gap:46px;width:max-content;animation:obMarq 38s linear infinite;font:600 .95rem "Space Grotesk",Inter,sans-serif;letter-spacing:.12em;color:#94a3b8;text-transform:uppercase}
.ob-marq span{display:flex;align-items:center;gap:46px}.ob-marq span::after{content:"◆";color:#3b82f6;font-size:.6rem}
@keyframes obMarq{to{transform:translateX(-50%)}}
/* barra de progresso e entrada ao rolar */
.ob-prog{position:fixed;top:0;left:0;height:3px;z-index:9998;background:linear-gradient(90deg,#2563eb,#38bdf8);width:0;box-shadow:0 0 12px rgba(37,99,235,.6)}
.ob-rv{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1)}.ob-rv.in{opacity:1;transform:none}

.ob-bc{position:fixed;left:16px;bottom:18px;z-index:60;display:flex;align-items:center;gap:9px;padding:7px 14px 7px 9px;border-radius:999px;background:rgba(8,12,26,.85);border:1px solid rgba(59,130,246,.45);backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.4);color:#fff!important;text-decoration:none!important;font-family:Inter,sans-serif;transition:transform .2s}
.ob-bc:hover{transform:translateY(-2px)}.ob-bc img{height:26px;width:auto}.ob-bc span{display:flex;flex-direction:column;line-height:1.05}.ob-bc small{font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:#93c5fd}.ob-bc b{font-size:.92rem}
@media(max-width:700px){.ob-bc{padding:6px;left:12px;bottom:16px}.ob-bc span{display:none}.ob-bc img{height:30px}}

.ob-wa{display:inline-flex;align-items:center;gap:8px;margin:14px auto 0;padding:10px 18px;width:max-content;border-radius:999px;font:700 .9rem Inter,sans-serif;text-decoration:none!important;background:#16a34a;color:#fff!important;place-items:center;box-shadow:0 8px 20px rgba(0,0,0,.4)}
.ob-wa-w{display:flex;justify-content:center;padding:6px 0 14px}
@media (prefers-reduced-motion:reduce){.ob-rv{opacity:1;transform:none}#top img,.ob-marq div{animation:none}}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);
  const prog = document.createElement('div'); prog.className = 'ob-prog'; document.body.append(prog);
  addEventListener('scroll', () => { const h = document.documentElement; prog.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  const TECH = ['Revit', 'Civil 3D', 'InfraWorks', 'Navisworks', 'BIM 360', 'GNSS / RTK', 'Estação Total', 'ONR / SIG-RI', 'REURB', 'BIM 5D', 'Clash Detection', 'Concreto Protendido', 'Estruturas Metálicas'];
  const enhance = () => {
    const main = document.querySelector('main'); if (!main) return false;
    const secs = [...main.querySelectorAll(':scope > section')]; if (secs.length < 4) return false;
    // título do topo: destaca o final da frase
    const h1 = document.querySelector('#top h1'); if (h1 && !h1.dataset.ob) { h1.dataset.ob = 1; const t = h1.textContent; const k = t.indexOf(':'); if (k > 0) h1.innerHTML = t.slice(0, k + 1) + ' <span class="ob-hl">' + t.slice(k + 1).trim() + '</span>'; }
    // logo do topo: símbolo sem caixa branca
    document.querySelectorAll('header img, footer img').forEach((lg) => { if (lg.dataset.ob || lg.offsetWidth > 140) return; lg.dataset.ob = 1; lg.src = '/ob-simbolo.webp'; lg.style.background = 'transparent'; lg.style.padding = '0'; lg.style.objectFit = 'contain'; const p = lg.parentElement; if (p && p.tagName !== 'HEADER') { p.style.background = 'transparent'; p.style.boxShadow = 'none'; p.style.border = '0'; } });
    // atalho para a escola (BIM CURSOS) no canto inferior esquerdo
    if (!document.querySelector('.ob-bc')) { const b = document.createElement('a'); b.className = 'ob-bc'; b.href = 'https://bimcursos.com'; b.target = '_blank'; b.rel = 'noopener';
      b.innerHTML = '<img src="https://bimcursos-plataforma.pages.dev/assets/brand/bimcursos-b.webp?v=4" alt=""><span><small>Nossa escola</small><b>BIM Cursos</b></span>'; document.body.append(b); }
    // WhatsApp: um único lugar. No computador fica no topo; no celular (onde o topo esconde) vira um botão pequeno acima do atalho da escola
    if (!document.querySelector('.ob-wa') && document.querySelector('footer')) { const w = document.createElement('a'); w.className = 'ob-wa'; w.href = 'https://wa.me/5593991863444'; w.target = '_blank'; w.rel = 'noopener'; w.setAttribute('aria-label', 'WhatsApp Office BIM'); const ft = document.querySelector('footer');
      w.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z"/></svg> WhatsApp Office BIM'; const wr = document.createElement('div'); wr.className = 'ob-wa-w'; wr.append(w); ft.prepend(wr); }
    // rótulos "01 / SOBRE..." viram etiquetas
    main.querySelectorAll('p,span,div').forEach((el) => { if (el.children.length === 0 && /^\d{2} \/ /.test(el.textContent.trim()) && !el.classList.contains('ob-kick')) el.classList.add('ob-kick'); });
    // faixa de tecnologias depois dos números
    if (!main.querySelector('.ob-marq') && secs[2]) { const m = document.createElement('div'); m.className = 'ob-marq'; const row = TECH.map((x) => `<span>${x}</span>`).join(''); m.innerHTML = `<div>${row}${row}</div>`; secs[2].append(m); }
    // WhatsApp flutuante sai do canto (o assistente fica lá); o contato continua no topo, nos botões e no rodapé
    document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').forEach((a) => { if (a.closest('header,.bot,.ob-wa') || a.classList.contains('ob-wa')) return; let e = a; while (e && e !== document.body) { if (getComputedStyle(e).position === 'fixed') { e.style.display = 'none'; break; } e = e.parentElement; } });
    renomeia();
    // entrada suave ao rolar
    if (io) main.querySelectorAll(':scope > section:not(#top) h2, :scope > section article, :scope > section button.group.flex-col, :scope > section dl > div').forEach((el) => { if (!el.classList.contains('ob-rv')) { el.classList.add('ob-rv'); io.observe(el); } });
    return true;
  };
  // WhatsApp fica só no topo; os botões do meio da página abrem o assistente (que monta o orçamento)
  document.addEventListener('click', (e) => { const a = e.target.closest('main a[href*="wa.me"], main a[href*="whatsapp"], header a[href*="wa.me"], header a[href*="whatsapp"]'); if (!a) return; e.preventDefault(); a.setAttribute('data-open-bot', ''); }, true);
  const renomeia = () => document.querySelectorAll('main a[href*="wa.me"], main a[href*="whatsapp"], header a[href*="wa.me"], header a[href*="whatsapp"]').forEach((a) => { a.setAttribute('data-open-bot', '');
    a.querySelectorAll('*').forEach(() => {}); const w = document.createTreeWalker(a, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { n.nodeValue = n.nodeValue.replace(/no whatsapp/i, 'com o assistente').replace(/falar com o comercial/i, 'Falar com o assistente').replace(/whatsapp office bim/i, 'Atendimento Office BIM').replace(/falar com a office bim/i, 'Falar com o assistente'); } });
  let n = 0; const t = setInterval(() => { if (enhance() || ++n > 40) clearInterval(t); }, 250);
  new MutationObserver(() => { clearTimeout(window.__obT); window.__obT = setTimeout(enhance, 300); }).observe(document.documentElement, { childList: true, subtree: true });
})();

// Acorda o assistente ao abrir o site, para a primeira resposta sair rápida
try { setTimeout(() => fetch('https://qjunaahcantfiscligvs.supabase.co/functions/v1/assistente', { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: 'sb_publishable_IeLlzcOWO7bc6eUyhvnMWg_jtEbMh32' }, body: '{"warm":true}', keepalive: true }).catch(() => {}), 1500); } catch (e) {}

// Equipe técnica: faixa na página inicial (antes do convite final) e link no rodapé
(function equipe() {
  const css = document.createElement('style');
  css.textContent = `.ob-team{max-width:1120px;margin:40px auto;padding:26px 20px;border:1px solid #1e293b;border-radius:22px;background:linear-gradient(180deg,#0f172a,#0b1220);color:#e2e8f0;display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:center}
  .ob-team h2{margin:6px 0;font-size:1.6rem}.ob-team p{color:#94a3b8;margin:0}.ob-tc{display:flex;gap:14px;align-items:center;background:#0b1220;border:1px solid #1e293b;border-radius:16px;padding:12px;text-decoration:none;color:#e2e8f0}
  .ob-tc img,.ob-tc i{width:72px;height:72px;border-radius:14px;object-fit:cover;flex:none}.ob-tc i{display:grid;place-items:center;font-style:normal;font-weight:800;background:linear-gradient(135deg,#1d4ed8,#7c3aed)}.ob-tc b{display:block}.ob-tc small{color:#38bdf8}
  .ob-team .lst{display:grid;gap:10px}@media(max-width:820px){.ob-team{grid-template-columns:1fr;margin:24px 12px}}`;
  document.head.append(css);
  const put = () => {
    if (location.pathname !== '/' || document.querySelector('.ob-team')) return;
    const main = document.querySelector('main'); if (!main) return; const secs = main.querySelectorAll(':scope > section, :scope > div > section'); if (secs.length < 4) return;
    const t = document.createElement('section'); t.className = 'ob-team';
    t.innerHTML = `<div><span class="ob-kick">05 / EQUIPE TÉCNICA</span><h2>Especialistas em BIM</h2><p>Quem coordena e assina os seus projetos: engenheiros e especialistas em BIM, com registro no CREA, BIM Managers e professores da BIM Cursos.</p><p style="margin-top:12px"><a href="/equipe" style="color:#38bdf8;font-weight:700">Ver perfis completos →</a></p></div>
      <div class="lst"><a class="ob-tc" href="/equipe#allan"><img src="/allan.webp" alt=""><span><b>Allan Dallen Almeida de Sousa</b><small>Mestrado e Doutorado · Edificações e Infraestrutura em BIM</small></span></a>
      <a class="ob-tc" href="/equipe#ewerton"><img src="/ewerton.webp" alt=""><span><b>Ewerton Henrique Almeida da Silva</b><small>BIM Manager · Edificações e Infraestrutura em BIM</small></span></a>
      <a class="ob-tc" href="/equipe#miriam"><img src="/miriam.webp" alt=""><span><b>Miriam Mônica Viegas Miranda</b><small>Especialista · Edificações e Infraestrutura em BIM</small></span></a>
      <a class="ob-tc" href="/equipe#adrian"><img src="/adrian.webp" alt=""><span><b>Adrian Wallace Santos Aguiar</b><small>Engenheiro Civil e Cartográfico · Perito Judicial · Execução de obras</small></span></a>
      </div>`;
    secs[secs.length - 1].before(t);
  };
  const foot = () => { const f = document.querySelector('footer'); if (f && !f.querySelector('.ob-eq')) { const a = document.createElement('a'); a.className = 'ob-eq'; a.href = '/equipe'; a.textContent = 'Equipe técnica'; a.style.cssText = 'display:block;text-align:center;color:#38bdf8;font-weight:700;padding:8px 0'; f.prepend(a); } };
  const tick = () => { put(); foot(); }; setInterval(tick, 1500); tick();
})();

// Vitrine de obras de impacto logo abaixo do topo da página inicial
(function obras() {
  const css = document.createElement('style');
  css.textContent = `.ob-works{max-width:1180px;margin:34px auto 10px;padding:0 20px;color:#e2e8f0}
  .ob-works .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px}
  .ob-works .hd h2{margin:6px 0 4px;font-size:clamp(1.6rem,3.4vw,2.4rem);line-height:1.1}.ob-works .hd p{margin:0;color:#94a3b8;max-width:640px}
  .ob-works .hd a{color:#38bdf8;font-weight:700;text-decoration:none;white-space:nowrap}
  .ob-wg{display:grid;grid-template-columns:1.6fr 1fr;grid-template-rows:1fr 1fr;gap:14px;min-height:520px}
  .ob-wc{position:relative;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0b1220;text-decoration:none;color:#fff;display:block;min-height:240px;box-shadow:0 30px 70px rgba(0,0,0,.45)}
  .ob-wc.big{grid-row:1/3}
  .ob-wc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s}
  .ob-wc:hover img{transform:scale(1.05)}
  .ob-wc::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(2,6,23,0) 35%,rgba(2,6,23,.92))}
  .ob-wc .tx{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:20px}
  .ob-wc .tg{display:inline-block;font:700 .7rem Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;background:rgba(37,99,235,.85);padding:5px 10px;border-radius:999px;margin-bottom:8px}
  .ob-wc h3{margin:0 0 4px;font-size:clamp(1.1rem,2.2vw,1.6rem);line-height:1.15}.ob-wc p{margin:0;color:#cbd5e1;font-size:.92rem}
  .ob-wc .pl{position:absolute;right:18px;top:18px;z-index:2;display:flex;align-items:center;gap:8px;background:rgba(2,6,23,.7);border:1px solid rgba(255,255,255,.25);padding:8px 14px;border-radius:999px;font:700 .85rem Inter,sans-serif;color:#fff;cursor:pointer}
  .ob-nums{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:14px}
  .ob-nums div{background:#0b1220;border:1px solid #1e293b;border-radius:16px;padding:14px;text-align:center}.ob-nums b{display:block;font:700 1.6rem "Space Grotesk",Inter,sans-serif;background:linear-gradient(90deg,#93c5fd,#38bdf8);-webkit-background-clip:text;background-clip:text;color:transparent}.ob-nums span{font-size:.78rem;color:#94a3b8}
.ob-rh{margin:26px 0 10px}.ob-rh h3{margin:6px 0 4px;font-size:clamp(1.2rem,2.6vw,1.7rem);line-height:1.15}.ob-rh p{margin:0;color:#94a3b8;max-width:760px;text-align:justify;hyphens:auto}
  .ob-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 2px 12px;scrollbar-width:thin;-webkit-mask-image:linear-gradient(90deg,#000 92%,transparent);mask-image:linear-gradient(90deg,#000 92%,transparent)}
  .ob-rc{flex:0 0 clamp(220px,26vw,300px);scroll-snap-align:start;position:relative;aspect-ratio:4/3;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.08);color:#fff;text-decoration:none;background:#0b1220}
  .ob-rc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s}.ob-rc:hover img{transform:scale(1.05)}
  .ob-rc span{position:absolute;left:0;right:0;bottom:0;padding:26px 12px 10px;background:linear-gradient(180deg,transparent,rgba(2,6,23,.92));display:block}.ob-rc b{display:block;font-size:.88rem;line-height:1.2}.ob-rc small{display:block;color:#94a3b8;font-size:.72rem;margin-top:2px}
  @media(max-width:820px){.ob-rc{flex-basis:72vw}}
  .ob-vm{position:fixed;inset:0;z-index:99999;background:rgba(2,6,23,.9);display:grid;place-items:center;padding:16px}.ob-vm video{width:min(1000px,100%);max-height:85vh;border-radius:16px;background:#000}.ob-vm button{position:absolute;top:16px;right:16px;background:#fff;border:0;border-radius:50%;width:40px;height:40px;font-size:1.1rem;cursor:pointer}
  @media(max-width:820px){.ob-wg{grid-template-columns:1fr;grid-template-rows:auto;min-height:0}.ob-wc.big{grid-row:auto;min-height:340px}.ob-nums{grid-template-columns:repeat(2,1fr)}}`;
  document.head.append(css);
  const put = () => {
    if (location.pathname !== '/' || document.querySelector('.ob-works')) return;
    const main = document.querySelector('main'); if (!main) return; const secs = main.querySelectorAll(':scope > section, :scope > div > section'); if (secs.length < 2) return;
    const w = document.createElement('section'); w.className = 'ob-works';
    w.innerHTML = `<div class="hd"><div><span class="ob-kick">OBRAS E PROJETOS DE DESTAQUE</span><h2>Da modelagem BIM à obra executada</h2><p>Projetos e execuções de grande porte da Office BIM na Amazônia: armazenagem de grãos, estrutura portuária e infraestrutura rodoviária.</p></div><a href="/equipe#execucao">Ver todas as obras →</a></div>
      <div class="ob-wg">
        <a class="ob-wc big" href="/equipe#execucao"><img src="/obras/fh-19.webp" alt="Vista aérea dos silos da FH Agro" loading="lazy"><span class="pl" data-ob-video="/obras/fh-tour.mp4">▶ Tour pela obra</span><div class="tx"><span class="tg">Armazenagem de grãos</span><h3>FH Agro · Mojuí dos Campos/PA</h3><p>Unidade armazenadora com silos, moega, torre de elevadores e barracão graneleiro: do projeto em BIM à execução.</p></div></a>
        <a class="ob-wc" href="/equipe#execucao"><img src="/obras/cn-9.webp" alt="Vista aérea do porto e armazéns da Calha Norte" loading="lazy"><div class="tx"><span class="tg">Portuário</span><h3>Porto e armazenagem Calha Norte · Santarém/PA</h3><p>Píer sobre estacas, galpões e pátio, com locação por GNSS e estação total.</p></div></a>
        <a class="ob-wc" href="/equipe#execucao"><img src="/obras/rod-1.webp" alt="Execução rodoviária e terraplenagem" loading="lazy"><div class="tx"><span class="tg">Infraestrutura rodoviária</span><h3>Rodovias e terraplenagem</h3><p>Adequação da MT-020 (SINFRA-MT), complexo BSO e topografia de campo.</p></div></a>
      </div>
      <div class="ob-rh"><span class="ob-kick">OPERAÇÕES PORTUÁRIAS · ARMAZENAGEM · TOPOGRAFIA</span><h3>Obras executadas e acompanhadas em campo</h3><p>Levantamento, locação e controle geométrico com GNSS RTK e estação total pela equipe Office BIM, do píer da Calha Norte aos silos da FH Agro e às rodovias.</p></div>
      <div class="ob-rail"><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-9.webp" alt="Vista aérea geral — porto e armazenamento" loading="lazy"><span><b>Vista aérea geral — porto e armazenamento</b><small>Calha Norte · Santarém/PA</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-3.webp" alt="Píer sobre estacas — vista aérea" loading="lazy"><span><b>Píer sobre estacas — vista aérea</b><small>Calha Norte · obra portuária</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-8.webp" alt="Estação total no píer" loading="lazy"><span><b>Estação total no píer</b><small>Calha Norte · topografia de obra</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-5.webp" alt="Galpões junto ao porto" loading="lazy"><span><b>Galpões junto ao porto</b><small>Calha Norte · estação total</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-1.webp" alt="Locação das fundações dos galpões" loading="lazy"><span><b>Locação das fundações dos galpões</b><small>Calha Norte · GNSS e estação total</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-4.webp" alt="GNSS na montagem da estrutura metálica" loading="lazy"><span><b>GNSS na montagem da estrutura metálica</b><small>Calha Norte · controle geométrico</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-6.webp" alt="Acompanhamento de fundações profundas" loading="lazy"><span><b>Acompanhamento de fundações profundas</b><small>Calha Norte · execução</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-2.webp" alt="GNSS RTK na terraplenagem do pátio" loading="lazy"><span><b>GNSS RTK na terraplenagem do pátio</b><small>Calha Norte · terraplenagem</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/cn-7.webp" alt="GNSS no aterro, com vista do porto" loading="lazy"><span><b>GNSS no aterro, com vista do porto</b><small>Calha Norte · topografia</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/fh-20.webp" alt="Silos e barracão — vista aérea" loading="lazy"><span><b>Silos e barracão — vista aérea</b><small>FH Agro · armazenagem de grãos</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/fh-proj-1.webp" alt="Projeto 3D — silos e transportadores" loading="lazy"><span><b>Projeto 3D — silos e transportadores</b><small>FH Agro · projeto em BIM</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/fh-2.webp" alt="Silos, moega e barracão graneleiro" loading="lazy"><span><b>Silos, moega e barracão graneleiro</b><small>FH Agro · executado</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/rod-3.webp" alt="Topografia com estação total" loading="lazy"><span><b>Topografia com estação total</b><small>Execução rodoviária</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/rod-4.webp" alt="Levantamento GNSS no corte" loading="lazy"><span><b>Levantamento GNSS no corte</b><small>Execução rodoviária</small></span></a><a class="ob-rc" href="/equipe#execucao"><img src="/obras/rod-2.webp" alt="Equipe de campo na plataforma" loading="lazy"><span><b>Equipe de campo na plataforma</b><small>Execução rodoviária</small></span></a></div>
      <div class="ob-rh"><span class="ob-kick">INTERIORES E LAYOUT COMERCIAL · PROJETO EM DESTAQUE</span><h3>JS Construções: loja de materiais de construção</h3><p>Layout, setorização, mobiliário e marcenaria em BIM, com renders fotorrealistas e caderno técnico de montagem. Cada corredor, gôndola e ponto elétrico pensado antes da obra.</p></div>
      <div class="ob-rail"><a class="ob-rc" href="/equipe#js"><img src="/obras/js-1.webp" alt="Vista aérea da loja — layout completo em 3D" loading="lazy"><span><b>Vista aérea da loja — layout completo em 3D</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-2.webp" alt="Entrada principal da loja" loading="lazy"><span><b>Entrada principal da loja</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-3.webp" alt="Caixas e balcão de atendimento" loading="lazy"><span><b>Caixas e balcão de atendimento</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-4.webp" alt="Setor de tintas e pintura" loading="lazy"><span><b>Setor de tintas e pintura</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-6.webp" alt="Showroom de pias e louças" loading="lazy"><span><b>Showroom de pias e louças</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-9.webp" alt="Painel de ferramentas e TV de ofertas" loading="lazy"><span><b>Painel de ferramentas e TV de ofertas</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-11.webp" alt="Acessórios de pintura" loading="lazy"><span><b>Acessórios de pintura</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-13.webp" alt="Escritório no mezanino" loading="lazy"><span><b>Escritório no mezanino</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-16.webp" alt="Painel ripado com a marca" loading="lazy"><span><b>Painel ripado com a marca</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-17.webp" alt="Escritório de notas — vista aérea" loading="lazy"><span><b>Escritório de notas — vista aérea</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-19.webp" alt="Planta de layout e setorização" loading="lazy"><span><b>Planta de layout e setorização</b><small>JS Construções · Oriximiná/PA</small></span></a><a class="ob-rc" href="/equipe#js"><img src="/obras/js-21.webp" alt="Caixas — marcenaria detalhada" loading="lazy"><span><b>Caixas — marcenaria detalhada</b><small>JS Construções · Oriximiná/PA</small></span></a></div>
      <div class="ob-nums"><div><b>+10 mi</b><span>m² projetados em BIM</span></div><div><b>+20</b><span>empreendimentos de grande porte</span></div><div><b>Desde 2013</b><span>projetando e executando</span></div><div><b>+52 mil</b><span>alunos formados na BIM Cursos</span></div></div>`;
    secs[0].after(w);
    w.querySelector('[data-ob-video]')?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const m = document.createElement('div'); m.className = 'ob-vm'; m.innerHTML = `<video src="${e.currentTarget.dataset.obVideo}" controls autoplay playsinline></video><button aria-label="Fechar">✕</button>`; m.addEventListener('click', (k) => { if (k.target === m || k.target.tagName === 'BUTTON') m.remove(); }); document.body.append(m); });
  };
  setInterval(put, 1500); put();
})();

// "Voltar ao topo" (mesmo estilo da BIM CURSOS e do Uhull)
(() => {
  if (window.__obSubir) return; window.__obSubir = 1;
  const st = document.createElement('style');
  st.textContent = '.ob-subir{position:fixed;left:50%;top:calc(var(--ob-toph,64px) + 10px);transform:translate(-50%,-14px);opacity:0;pointer-events:none;z-index:9000;display:flex;align-items:center;gap:6px;background:rgba(10,14,28,.94);color:#fff;border:1px solid rgba(148,163,184,.35);border-radius:999px;padding:10px 18px;font:800 .9rem/1 Inter,system-ui,sans-serif;box-shadow:0 10px 26px rgba(0,0,0,.45);backdrop-filter:blur(8px);cursor:pointer;transition:.25s}.ob-subir.on{opacity:1;pointer-events:auto;transform:translate(-50%,0)}@media print{.ob-subir{display:none}}';
  document.head.appendChild(st);
  const b = document.createElement('button'); b.type = 'button'; b.className = 'ob-subir'; b.textContent = '↑ Voltar ao topo';
  b.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  const add = () => document.body && !document.body.contains(b) && document.body.appendChild(b);
  const mede = () => { const h = document.querySelector('header,nav'); const r = h && h.getBoundingClientRect(); document.documentElement.style.setProperty('--ob-toph', (r && r.top <= 0 && r.bottom > 0 ? r.bottom : 0) + 'px'); };
  let tick = false;
  addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { add(); mede(); b.classList.toggle('on', scrollY > 900); tick = false; }); }, { passive: true });
  addEventListener('resize', mede);
})();

// WhatsApp com mensagem pronta (diz de onde a pessoa veio)
(() => { if (window.__obWaTxt) return; window.__obWaTxt = 1;
  document.addEventListener('click', (e) => { const a = e.target.closest('a[href*="wa.me/"],a[href*="api.whatsapp.com"]'); if (!a || a.hasAttribute('data-open-bot')) return;
    try { const u = new URL(a.href); if (u.searchParams.get('text')) return; const p = location.pathname; let t;
      const art = a.closest('article,[id]'); const quem = art && art.querySelector('h2,h3') ? art.querySelector('h2,h3').textContent.trim().replace(/\s+/g, ' ') : '';
      if (p.startsWith('/equipe')) t = quem && quem.length < 60 ? `Olá! Vim pelo site da Office BIM, na página da equipe, e gostaria de falar com ${quem} sobre um projeto ou serviço de engenharia.` : 'Olá! Vim pela página da equipe da Office BIM e gostaria de falar sobre um projeto, uma obra ou um serviço de topografia.';
      else t = 'Olá! Vim pelo site da Office BIM e gostaria de um orçamento de projeto de edificações ou infraestrutura em BIM.';
      u.searchParams.set('text', t); a.href = u.toString(); } catch {} }, true);
})();

// Página inicial organizada: 1) modelo BIM 3D interativo  2) BIM + IA  3) obras executadas (tour)  4) números  5) projetos  6) serviços
// 7) ecossistema (BIM CURSOS ao vivo, app Uhull, franquia)  8) equipe  9) convite. Sem números repetidos.
(() => { if (window.__obOrdem) return; window.__obOrdem = 1;
  const css = document.createElement('style');
  css.textContent = `.ob-3d-top{padding-top:76px!important}.ob-3d-top h2{font-size:clamp(1.7rem,4vw,2.8rem)!important}
  .ob-proj{max-width:1180px;margin:10px auto 30px;padding:0 20px;color:#e2e8f0}
  .ob-eco{max-width:1180px;margin:40px auto;padding:0 20px;color:#e2e8f0}.ob-eco>h2{margin:6px 0 6px;font-size:clamp(1.5rem,3.2vw,2.2rem)}.ob-eco>p{color:#94a3b8;margin:0 0 18px;max-width:760px}
  .ob-eg{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.ob-ec{position:relative;border-radius:22px;padding:22px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(160deg,#111a33,#0b1220);display:flex;flex-direction:column;gap:12px;overflow:hidden;transition:transform .3s,border-color .3s}
  .ob-ec:hover{transform:translateY(-4px);border-color:rgba(255,106,0,.55)}.ob-ec img.lg{height:44px;width:auto;align-self:flex-start}.ob-ec h3{margin:0;font-size:1.25rem}.ob-ec p{margin:0;color:#cbd5e1;font-size:.93rem;line-height:1.5}
  .ob-ec .nm{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ob-ec .nm div{background:rgba(255,255,255,.05);border-radius:14px;padding:10px;text-align:center}.ob-ec .nm b{display:block;font:800 1.35rem "Space Grotesk",Inter,sans-serif;color:#ffb36b}.ob-ec .nm span{font-size:.72rem;color:#94a3b8}
  .ob-ec .go{margin-top:auto;display:inline-flex;justify-content:center;gap:6px;padding:12px 16px;border-radius:999px;background:#ff6a00;color:#fff;font-weight:800;text-decoration:none}.ob-ec .go.alt{background:transparent;border:1px solid rgba(255,255,255,.3)}
  .ob-ec .lv{display:inline-flex;align-items:center;gap:6px;font-size:.72rem;color:#86efac}.ob-ec .lv i{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 0 rgba(34,197,94,.7);animation:obpulse 1.6s infinite}
  @keyframes obpulse{70%{box-shadow:0 0 0 8px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
  .ob-ec ul{margin:0;padding-left:18px;color:#cbd5e1;font-size:.9rem;line-height:1.6}
  @media(max-width:900px){.ob-eg{grid-template-columns:1fr}}`;
  document.head.append(css);
  const SB = 'https://qjunaahcantfiscligvs.supabase.co', KEY = 'sb_publishable_IeLlzcOWO7bc6eUyhvnMWg_jtEbMh32';
  const fmt = (n) => Number(n).toLocaleString('pt-BR');
  let stats = null; const getStats = async () => { try { const r = await fetch(SB + '/rest/v1/rpc/public_stats', { method: 'POST', headers: { apikey: KEY, 'content-type': 'application/json' }, body: '{}' }); const j = await r.json(); stats = Array.isArray(j) ? j[0] : j; } catch (e) {} return stats; };
  const pinta = () => { if (!stats) return; document.querySelectorAll('[data-bc]').forEach((el) => { const v = stats[el.dataset.bc]; if (v != null) el.textContent = '+' + fmt(v); }); };
  const sec = (re) => [...document.querySelectorAll('main > section, main > div > section')].find((s) => re.test((s.querySelector('h2')?.textContent || '')));
  const arruma = () => {
    if (location.pathname !== '/') return false;
    const main = document.querySelector('main'); const hero = document.getElementById('top'); const works = document.querySelector('.ob-works');
    const s3d = sec(/Explore o modelo BIM/i), sobre = sec(/Intelig[eê]ncia Artificial e BIM/i), portf = sec(/Projetos otimizados/i), serv = sec(/Disciplinas integradas/i), parc = sec(/Indica[cç][oõ]es/i), team = document.querySelector('.ob-team');
    if (!main || !hero || !works || !s3d || !sobre || !portf) return false;
    const pai = hero.parentElement; if (pai.dataset.obOrd) return true;
    const stat = [...pai.children].find((s) => s !== works && /Desde 2013/.test(s.textContent) && /Ativos/i.test(s.textContent));
    // números repetidos e projeto (JS) saem da faixa de obras executadas
    works.querySelector('.ob-nums')?.remove();
    const rhs = [...works.querySelectorAll('.ob-rh')]; const jsH = rhs.find((h) => /JS Constru/.test(h.textContent));
    const proj = document.createElement('section'); proj.className = 'ob-proj';
    if (jsH) { const rail = jsH.nextElementSibling; jsH.querySelector('.ob-kick').textContent = 'PROJETO DE EDIFICAÇÃO · INTERIORES E LAYOUT COMERCIAL'; proj.append(jsH); if (rail?.classList.contains('ob-rail')) proj.append(rail); }
    const hk = works.querySelector('.hd .ob-kick'); if (hk) hk.textContent = 'OBRAS EXECUTADAS';
    const h2w = works.querySelector('.hd h2'); if (h2w) h2w.textContent = 'Tour pelas obras: da modelagem BIM à execução';
    const h3d = s3d.querySelector('h2'); if (h3d) h3d.textContent = 'Explore o modelo BIM de edificações e infraestrutura da Office BIM em 3D';
    s3d.classList.add('ob-3d-top');
    // ecossistema: BIM CURSOS ao vivo, app Uhull, franquia
    const eco = document.createElement('section'); eco.className = 'ob-eco';
    eco.innerHTML = `<span class="ob-kick">ECOSSISTEMA OFFICE BIM</span><h2>Projeto, ensino e tecnologia no mesmo grupo</h2><p>Além dos projetos e obras, a Office BIM forma profissionais pela BIM CURSOS e desenvolve sistemas inteligentes, como o aplicativo Uhull.</p>
      <div class="ob-eg">
        <article class="ob-ec"><img class="lg" src="https://bimcursos.com/assets/brand/bimcursos-logo-w.webp" alt="BIM CURSOS"><span class="lv"><i></i> números ao vivo da plataforma</span><h3>BIM CURSOS: referência em formação BIM</h3><p>A mesma precisão dos nossos projetos executivos, ensinada para profissionais do Brasil e de outros países.</p>
          <div class="nm"><div><b data-bc="students">+62.000</b><span>alunos</span></div><div><b data-bc="certificates">+14.800</b><span>certificados</span></div></div><a class="go" href="https://bimcursos.com" target="_blank" rel="noopener">Conhecer a BIM CURSOS →</a></article>
        <article class="ob-ec"><img class="lg" src="https://bimcursos.com/assets/uhull/slide-01.webp" alt="" style="height:120px;width:100%;object-fit:cover;border-radius:14px"><h3>Uhull: aplicativo de materiais e serviços</h3><p>Sistema inteligente que conecta lojas de materiais de construção, prestadores de serviço e clientes, com pedidos, entregas e pagamentos no app.</p>
          <ul><li>Lojas, entregadores e profissionais no mesmo app</li><li>Também desenvolvemos sistemas e aplicativos sob medida para a sua empresa</li></ul><a class="go alt" href="https://bimcursos.com/uhull" target="_blank" rel="noopener">Conhecer o app Uhull →</a></article>
        <article class="ob-ec"><span style="font-size:2.4rem">🚀</span><h3>Franquia: leve o Uhull para a sua cidade</h3><p>Seja franqueado do Uhull: cadastre lojas e profissionais da sua região e ganhe comissão sobre cada venda feita pelo aplicativo.</p>
          <ul><li>Suporte, treinamento e materiais de divulgação</li><li>Simulador de ganhos na página da franquia</li></ul><a class="go" href="https://bimcursos.com/uhull#franquia" target="_blank" rel="noopener">Quero ser franqueado →</a></article>
      </div>`;
    // ordem final
    const ordem = [s3d, hero, sobre, works, stat, portf, proj, serv, parc, eco, team].filter(Boolean);
    // só muda a ordem visual (CSS): não mexe na árvore do React
    pai.append(proj, eco); pai.style.display = 'flex'; pai.style.flexDirection = 'column';
    [...pai.children].forEach((el) => { const i = ordem.indexOf(el); el.style.order = i >= 0 ? String(i) : '100'; });
    pai.dataset.obOrd = '1'; getStats().then(pinta); setInterval(() => getStats().then(pinta), 60000);
    // rodapé: bloco da BIM CURSOS com o símbolo dela e números ao vivo
    const fb = [...document.querySelectorAll('footer section')].find((s) => /Forma[cç][aã]o BIM/i.test(s.textContent));
    if (fb) { const im = fb.querySelector('img'); if (im) { im.src = 'https://bimcursos.com/assets/brand/bimcursos-logo-w.webp'; im.alt = 'BIM CURSOS'; im.style.objectFit = 'contain'; }
      const w = document.createTreeWalker(fb, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (/52\.?000|52 mil/.test(n.nodeValue)) { n.nodeValue = n.nodeValue.replace(/Mais de 52\.000/, 'Mais de 62.000'); n.parentElement.setAttribute('data-bc-txt', ''); } }
    return true; };
  // número do WhatsApp não aparece em lugar nenhum: só o botão
  const semNumero = () => { document.querySelectorAll('footer span, footer a, footer p, footer li').forEach((el) => { if (el.children.length) return; const t = el.textContent;
      if (/^\s*\(?\d{2}\)?\s?9?\s?\d{4,5}[-\s]?\d{4}\s*$/.test(t)) { const p = el.parentElement; if (p && p.textContent.trim().length < 45 && !p.matches('footer')) p.style.display = 'none'; else el.style.display = 'none'; } });
    document.querySelectorAll('footer a').forEach((a) => { if (/^\s*WhatsApp Office BIM\s*$/i.test(a.textContent)) a.textContent = 'Fale com a gente no WhatsApp'; }); };
  let k = 0; const t = setInterval(() => { semNumero(); if (arruma() || ++k > 60) { clearInterval(t); semNumero(); } }, 300);
  new MutationObserver(() => { clearTimeout(window.__obSN); window.__obSN = setTimeout(semNumero, 400); }).observe(document.documentElement, { childList: true, subtree: true });
})();
