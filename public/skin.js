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
      <div class="lst"><a class="ob-tc" href="/equipe#allan"><img src="/allan.webp" alt=""><span><b>Allan Dallen Almeida de Sousa</b><small>Eng. Civil · Mestrado e Doutorado</small></span></a>
      <a class="ob-tc" href="/equipe#ewerton"><img src="/ewerton.webp" alt=""><span><b>Ewerton Henrique Almeida da Silva</b><small>Engenheiro Civil · BIM Manager</small></span></a>
      <a class="ob-tc" href="/equipe#miriam"><img src="/miriam.webp" alt=""><span><b>Miriam Mônica Viegas Miranda</b><small>Especialista em BIM e Infraestrutura</small></span></a>
      </div>`;
    secs[secs.length - 1].before(t);
  };
  const foot = () => { const f = document.querySelector('footer'); if (f && !f.querySelector('.ob-eq')) { const a = document.createElement('a'); a.className = 'ob-eq'; a.href = '/equipe'; a.textContent = 'Equipe técnica'; a.style.cssText = 'display:block;text-align:center;color:#38bdf8;font-weight:700;padding:8px 0'; f.prepend(a); } };
  const tick = () => { put(); foot(); }; setInterval(tick, 1500); tick();
})();
