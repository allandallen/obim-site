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
  --primary:24 100% 55%;--primary-foreground:0 0% 100%;--secondary:222 40% 12%;--secondary-foreground:210 40% 98%;--muted:222 42% 9%;--muted-foreground:215 25% 72%;
  --accent:24 100% 55%;--accent-foreground:0 0% 100%;--border:218 45% 18%;--input:218 45% 18%;--ring:24 100% 55%;--radius:.9rem}
html{scroll-behavior:smooth}
body{background:hsl(224 52% 4%);color:hsl(210 40% 98%);font-family:Inter,system-ui,sans-serif}
h1,h2,h3,.font-display{font-family:"Space Grotesk",Inter,system-ui,sans-serif!important;letter-spacing:-.02em}
main>section{position:relative}
main>section:nth-of-type(odd)::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(56,189,248,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.05) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at 50% 30%,#000 30%,transparent 75%);z-index:0}
main>section>*{position:relative;z-index:1}
.bg-muted\\/40{background:linear-gradient(180deg,hsl(224 48% 6%),hsl(224 52% 4%))!important}
/* topo */
header{background:rgba(5,8,18,.72)!important;backdrop-filter:blur(14px) saturate(1.4);border-bottom:1px solid rgba(255,255,255,.07)}
#top{background:radial-gradient(900px 520px at 85% 15%,rgba(255,106,0,.22),transparent 60%),radial-gradient(800px 600px at 0% 100%,rgba(14,165,233,.22),transparent 60%),hsl(224 52% 4%)!important}
#top h1{font-size:clamp(2.4rem,5.2vw,4.6rem)!important;line-height:1.02!important;font-weight:700!important}
#top h1 .ob-hl{background:linear-gradient(90deg,#ff7a1a,#ffb547 45%,#38bdf8);-webkit-background-clip:text;background-clip:text;color:transparent}
#top p{color:#cbd5e1}
#top img{border-radius:22px!important;box-shadow:0 40px 90px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08),0 0 80px rgba(255,106,0,.18);animation:obFloat 7s ease-in-out infinite}
@keyframes obFloat{50%{transform:translateY(-10px)}}
/* botões */
main a[href*="wa.me"],header a[href*="wa.me"],main .bg-accent,header .bg-accent{background:linear-gradient(135deg,#ff6a00,#ff9a3c)!important;color:#fff!important;border:0!important;border-radius:999px!important;box-shadow:0 12px 30px rgba(255,106,0,.35);transition:transform .2s,box-shadow .2s}
main a[href*="wa.me"]:hover,header a[href*="wa.me"]:hover,main .bg-accent:hover{transform:translateY(-2px);box-shadow:0 18px 40px rgba(255,106,0,.5)}
main a.border,main button.border{border-radius:999px!important;border-color:rgba(255,255,255,.22)!important;backdrop-filter:blur(8px)}
.text-accent{color:#ff8a2a!important}
/* números */
main>section:nth-of-type(3){background:linear-gradient(90deg,rgba(255,106,0,.08),rgba(14,165,233,.08))!important}
main>section:nth-of-type(3) dd{font-size:clamp(1.6rem,2.8vw,2.4rem)!important;background:linear-gradient(90deg,#fff,#ffb547);-webkit-background-clip:text;background-clip:text;color:transparent}
/* cartões e imagens */
main article,main li,.rounded-lg,.rounded-md,.rounded-xl{border-radius:18px!important}
main article,main .border.bg-card,main .bg-card{background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))!important;border:1px solid rgba(255,255,255,.08)!important;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s,border-color .35s}
main article:hover,main .bg-card:hover{transform:translateY(-6px);border-color:rgba(255,138,42,.55)!important;box-shadow:0 24px 60px rgba(0,0,0,.45),0 0 0 1px rgba(255,138,42,.25),0 0 50px rgba(255,106,0,.15)}
main article img{transition:transform .8s cubic-bezier(.2,.8,.2,1)}main article:hover img{transform:scale(1.06)}
/* rótulos de seção 01 / 02 */
.ob-kick{display:inline-flex!important;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;background:rgba(255,106,0,.12);border:1px solid rgba(255,138,42,.35);color:#ffb070!important;letter-spacing:.14em}
.ob-kick::before{content:"";width:7px;height:7px;border-radius:50%;background:#ff7a1a;box-shadow:0 0 12px #ff7a1a}
main h2{font-size:clamp(1.9rem,3.6vw,3.1rem)!important;line-height:1.08!important}
/* faixa de tecnologias */
.ob-marq{overflow:hidden;border-block:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);padding:16px 0}
.ob-marq div{display:flex;gap:46px;width:max-content;animation:obMarq 38s linear infinite;font:600 .95rem "Space Grotesk",Inter,sans-serif;letter-spacing:.12em;color:#94a3b8;text-transform:uppercase}
.ob-marq span{display:flex;align-items:center;gap:46px}.ob-marq span::after{content:"◆";color:#ff7a1a;font-size:.6rem}
@keyframes obMarq{to{transform:translateX(-50%)}}
/* barra de progresso e entrada ao rolar */
.ob-prog{position:fixed;top:0;left:0;height:3px;z-index:9998;background:linear-gradient(90deg,#ff6a00,#ffb547,#38bdf8);width:0;box-shadow:0 0 12px rgba(255,106,0,.7)}
.ob-rv{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1)}.ob-rv.in{opacity:1;transform:none}
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
    // rótulos "01 / SOBRE..." viram etiquetas
    main.querySelectorAll('p,span,div').forEach((el) => { if (el.children.length === 0 && /^\d{2} \/ /.test(el.textContent.trim()) && !el.classList.contains('ob-kick')) el.classList.add('ob-kick'); });
    // faixa de tecnologias depois dos números
    if (!main.querySelector('.ob-marq') && secs[2]) { const m = document.createElement('div'); m.className = 'ob-marq'; const row = TECH.map((x) => `<span>${x}</span>`).join(''); m.innerHTML = `<div>${row}${row}</div>`; secs[2].append(m); }
    // WhatsApp flutuante sai do canto (o assistente fica lá); o contato continua no topo, nos botões e no rodapé
    document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').forEach((a) => { if (a.closest('header,.bot')) return; let e = a; while (e && e !== document.body) { if (getComputedStyle(e).position === 'fixed') { e.style.display = 'none'; break; } e = e.parentElement; } });
    // entrada suave ao rolar
    if (io) main.querySelectorAll(':scope > section:not(#top) h2, :scope > section article, :scope > section dl > div').forEach((el) => { if (!el.classList.contains('ob-rv')) { el.classList.add('ob-rv'); io.observe(el); } });
    return true;
  };
  let n = 0; const t = setInterval(() => { if (enhance() || ++n > 40) clearInterval(t); }, 250);
  new MutationObserver(() => { clearTimeout(window.__obT); window.__obT = setTimeout(enhance, 300); }).observe(document.documentElement, { childList: true, subtree: true });
})();
