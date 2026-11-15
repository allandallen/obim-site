// Assistente virtual da Office BIM (Gemini via Supabase). Orbe no canto com texto, voz e anexos.
(() => {
  const FN = 'https://qjunaahcantfiscligvs.supabase.co/functions/v1/assistente';
  const KEY = 'sb_publishable_IeLlzcOWO7bc6eUyhvnMWg_jtEbMh32';
  const WA = 'https://wa.me/5593991863444';
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const box = document.createElement('div'); box.className = 'ob-bot';
  box.innerHTML = `<button class="ob-orb" aria-label="Abrir assistente Office BIM"><span class="ob-core"></span><span class="ob-glow"></span><span class="ob-tip">Orçamento ou dúvida? Fale comigo</span></button>
  <section class="ob-win" hidden role="dialog" aria-label="Assistente Office BIM"><header><span class="ob-orb mini"><span class="ob-core"></span></span><div><b>Assistente Office BIM</b><span>Edificações e Infraestrutura · responde na hora</span></div><button class="ob-x" aria-label="Fechar">×</button></header>
  <div class="ob-log"><p class="ob-m a">Olá! 👷 Sou o assistente da Office BIM. Posso ajudar com projetos de loteamentos, edificações, rodovias, topografia, orçamento 5D e parcerias. Fale, digite ou mande um arquivo.</p></div>
  <div class="ob-sug"><button>Quero orçamento de um loteamento</button><button>Como funciona a parceria de 30%?</button><button>Vocês fazem topografia para cartório?</button></div>
  <div class="ob-files"></div>
  <form class="ob-f"><button type="button" class="ob-ic" data-k="file" aria-label="Anexar arquivo">📎</button><input type="file" accept="image/png,image/jpeg,image/webp,application/pdf" hidden multiple><input name="q" placeholder="Digite ou fale…" autocomplete="off" maxlength="800"><button type="button" class="ob-ic" data-k="mic" aria-label="Falar">🎤</button><button class="ob-send" aria-label="Enviar">➤</button></form>
  <a class="ob-h" href="${WA}" target="_blank" rel="noopener">Falar com o engenheiro no WhatsApp</a></section>`;
  const css = document.createElement('style'); css.textContent = `
  .ob-bot{position:fixed;right:20px;bottom:90px;z-index:2147483000;font-family:Inter,system-ui,sans-serif}
  .ob-orb{position:relative;width:60px;height:60px;border:0;border-radius:50%;padding:0;background:none;cursor:pointer;display:block}
  .ob-core{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,#f59e0b,#ef4444,#7c3aed,#2563eb,#06b6d4,#f59e0b);animation:obSpin 6s linear infinite;box-shadow:inset 0 0 18px rgba(255,255,255,.5)}
  .ob-core:after{content:"";position:absolute;inset:7px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,rgba(255,255,255,.25) 35%,rgba(12,12,16,.9) 75%)}
  .ob-glow{position:absolute;inset:-10px;border-radius:50%;background:conic-gradient(#f59e0b,#7c3aed,#2563eb,#f59e0b);filter:blur(16px);opacity:.5;z-index:-1;animation:obSpin 9s linear infinite reverse}
  .ob-bot.thinking .ob-core{animation-duration:1s}
  .ob-tip{position:absolute;right:72px;top:50%;transform:translateY(-50%);opacity:0;white-space:nowrap;background:#fff;color:#111;font:700 13px/1 Inter,sans-serif;padding:9px 12px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:opacity .3s;pointer-events:none}
  .ob-bot.hello:not(.open) .ob-tip,.ob-orb:hover .ob-tip{opacity:1}
  @keyframes obSpin{to{transform:rotate(360deg)}}
  .ob-orb.mini{width:34px;height:34px;pointer-events:none;flex:none}.ob-orb.mini .ob-core:after{inset:5px}
  .ob-win{position:absolute;right:0;bottom:74px;width:min(370px,calc(100vw - 28px));height:min(540px,72vh);display:flex;flex-direction:column;background:#0e0f13;color:#f1f5f9;border:1px solid #262a33;border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.55);overflow:hidden}
  .ob-win[hidden]{display:none}
  .ob-win header{position:relative;display:flex;align-items:center;gap:10px;padding:12px 40px 12px 14px;background:linear-gradient(135deg,#1f2937,#111827);border-bottom:2px solid #f59e0b}.ob-win header div{display:flex;flex-direction:column}.ob-win header span{font-size:11px;opacity:.75}
  .ob-x{position:absolute;right:10px;top:10px;border:0;background:none;color:#fff;font-size:22px;cursor:pointer}
  .ob-log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:8px}
  .ob-m{margin:0;max-width:88%;padding:9px 12px;border-radius:14px;font-size:14px;line-height:1.45;word-break:break-word}.ob-m.a{background:#1c1f26;border-bottom-left-radius:4px}.ob-m.u{align-self:flex-end;background:#f59e0b;color:#111;border-bottom-right-radius:4px}.ob-m a{color:#fbbf24}.ob-m.u a{color:#111}
  .ob-m.typing{opacity:.6}
  .ob-sug{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 10px}.ob-sug button{border:1px solid #333;background:transparent;color:#e5e7eb;border-radius:999px;padding:6px 10px;font-size:12px;cursor:pointer}.ob-sug button:hover{border-color:#f59e0b}
  .ob-files{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px}.ob-files span{font-size:11px;background:#292524;padding:4px 8px;border-radius:8px}
  .ob-f{display:flex;gap:6px;align-items:center;padding:10px;border-top:1px solid #262a33}.ob-f input[name=q]{flex:1;min-width:0;border:1px solid #333;background:#0b0c0f;color:#f1f5f9;border-radius:999px;padding:10px 14px;font:inherit;font-size:14px}
  .ob-ic{width:36px;height:36px;border:0;border-radius:50%;background:#1c1f26;cursor:pointer;font-size:15px;flex:none}.ob-ic.rec{background:#ef4444}
  .ob-send{width:40px;height:40px;border:0;border-radius:50%;background:#f59e0b;color:#111;font-weight:900;cursor:pointer;flex:none}
  .ob-h{display:block;text-align:center;font-size:12px;padding:0 0 10px;color:#fbbf24}
  @media(max-width:700px){.ob-bot{right:14px;bottom:84px}}
  @media (prefers-reduced-motion:reduce){.ob-core,.ob-glow{animation:none}}`;
  document.head.append(css); document.body.append(box);
  const $ = (s) => box.querySelector(s); const win = $('.ob-win'), log = $('.ob-log'), f = $('.ob-f'), fin = $('input[type=file]'), chips = $('.ob-files');
  const hist = []; let files = [];
  const fmt = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>').replace(/\n/g, '<br>');
  const add = (role, text) => { const p = document.createElement('p'); p.className = 'ob-m ' + (role === 'user' ? 'u' : 'a'); p.innerHTML = fmt(text); log.append(p); log.scrollTop = log.scrollHeight; return p; };
  const ask = async (q) => { q = q.trim(); if (!q && !files.length) return; $('.ob-sug')?.remove();
    add('user', q || '📎 arquivo enviado'); hist.push({ role: 'user', content: q || 'Analise o arquivo enviado.' });
    const sf = files; files = []; chips.innerHTML = ''; const w = add('assistant', '…'); w.classList.add('typing'); box.classList.add('thinking');
    let r = ''; try { const res = await fetch(FN, { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: KEY }, body: JSON.stringify({ site: 'obim', messages: hist, files: sf }) }); r = (await res.json()).reply; } catch (e) {}
    r = r || `Não consegui responder agora. Fale com o engenheiro: ${WA}`; w.remove(); box.classList.remove('thinking'); add('assistant', r); hist.push({ role: 'assistant', content: r }); };
  const open = (v) => { win.hidden = !v; box.classList.toggle('open', v); if (v) setTimeout(() => f.q.focus(), 50); };
  $('.ob-orb').onclick = () => open(win.hidden); $('.ob-x').onclick = () => open(false);
  box.querySelectorAll('.ob-sug button').forEach((b) => (b.onclick = () => ask(b.textContent)));
  f.onsubmit = (e) => { e.preventDefault(); const q = f.q.value; f.q.value = ''; ask(q); };
  $('[data-k=file]').onclick = () => fin.click();
  fin.onchange = async () => { for (const file of [...fin.files].slice(0, 3)) { if (file.size > 4e6) { add('assistant', `O arquivo ${file.name} passa de 4 MB.`); continue; }
    const data = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.readAsDataURL(file); });
    files.push({ mime: file.type, data }); const c = document.createElement('span'); c.textContent = '📎 ' + file.name; chips.append(c); } fin.value = ''; };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition; const mic = $('[data-k=mic]');
  if (!SR) mic.hidden = true; else { let rec = null; mic.onclick = () => { if (rec) { rec.stop(); return; } rec = new SR(); rec.lang = 'pt-BR'; rec.interimResults = true; mic.classList.add('rec');
    rec.onresult = (e) => { f.q.value = [...e.results].map((x) => x[0].transcript).join(''); }; rec.onend = () => { mic.classList.remove('rec'); rec = null; if (f.q.value.trim()) f.requestSubmit(); }; rec.start(); }; }
  setTimeout(() => box.classList.add('hello'), 5000); setTimeout(() => box.classList.remove('hello'), 12000);
})();
