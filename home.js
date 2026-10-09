document.addEventListener('DOMContentLoaded',()=>{
  const search=document.getElementById('tool-search'),chips=[...document.querySelectorAll('[data-tool-filter]')],groups=[...document.querySelectorAll('[data-tool-group]')],cards=[...document.querySelectorAll('[data-tool-card]')],empty=document.getElementById('tool-empty');
  const icons={
    'wheel-tire-setup.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><path d="M8 5h8M8 19h8"/></svg>',
    'tire-size.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/></svg>',
    'wheel-offset.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 18h16M8 6v12M16 6v12"/><path d="M12 9v6M10 11l2-2 2 2M10 13l2 2 2-2"/></svg>',
    'wheel-backspacing.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5v14M19 5v14M5 12h14"/><path d="M8 9l-3 3 3 3M16 9l3 3-3 3"/></svg>',
    'rpm-speed.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 12l4-3M7 17h10"/></svg>',
    'fuel-cost.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 20V4h9v16M6 9h9M15 7h2l2 2v7a2 2 0 0 0 2 2"/><path d="M8 13h5"/></svg>',
    'hp-weight.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L5 13h6l-1 9 9-13h-6z"/></svg>',
    'engine-displacement.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v5H8zM6 8h12v10H6zM9 18v3M15 18v3"/><path d="M9 12h6"/></svg>',
    'compression-ratio.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v18H7zM9 8h6M9 16h6"/><path d="M12 4v4M10 6l2 2 2-2M12 20v-4M10 18l2-2 2 2"/></svg>',
    'injector-size.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v5l2 2-3 3v7h-4v-7l-3-3 2-2z"/><path d="M12 20v2M8 22h8"/></svg>',
    'quarter-mile.html':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V3M7 4h10l-2 3 2 3H7"/><path d="M7 4l4 3-4 3M11 4l4 3-4 3"/></svg>'
  };
  document.querySelectorAll('.card,.popular-card').forEach(a=>{const holder=a.querySelector('.icon,.popular-icon'),key=(a.getAttribute('href')||'').split('?')[0];if(holder&&icons[key]){holder.innerHTML=icons[key];holder.classList.add('gm-svg-icon')}});

  if(search&&cards.length){
    let active='all';
    const apply=()=>{const query=search.value.trim().toLowerCase();let visible=0;groups.forEach(group=>{let groupVisible=0;group.querySelectorAll('[data-tool-card]').forEach(card=>{const hay=(card.dataset.search||card.innerText).toLowerCase(),category=card.dataset.category||'',show=(active==='all'||category===active)&&(!query||hay.includes(query));card.hidden=!show;if(show){visible++;groupVisible++}});group.hidden=groupVisible===0});empty.hidden=visible!==0;const count=document.querySelector('.tool-count');if(count)count.textContent=visible+' calculator'+(visible===1?'':'s');gmTrack('tool_finder_used',{filter:active,has_query:query?1:0})};
    chips.forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.toolFilter==='all')));
    let timer;search.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(apply,120)});chips.forEach(chip=>chip.addEventListener('click',()=>{active=chip.dataset.toolFilter;chips.forEach(c=>{c.classList.toggle('is-active',c===chip);c.setAttribute('aria-pressed',String(c===chip))});apply()}));
  }
  document.querySelectorAll('[data-popular-tool]').forEach(a=>a.addEventListener('click',()=>gmTrack('popular_tool_clicked',{tool:a.dataset.popularTool})));

  try{
    const recent=JSON.parse(localStorage.getItem('gm_recent')||'[]').slice(0,3),vehicles=JSON.parse(localStorage.getItem('gm_vehicles')||'[]'),activeId=localStorage.getItem('gm_active_vehicle'),activeVehicle=vehicles.find(v=>v.id===activeId);
    if(recent.length||activeVehicle){
      const anchor=document.querySelector('.tools-library');
      const section=document.createElement('section');section.className='section section-tight recent-strip';
      const vehicleHtml=activeVehicle?`<a class="recent-card" href="garage.html"><strong>Active Garage vehicle: ${escapeHtml(activeVehicle.name||'Vehicle')}</strong><span>Saved specs can prefill compatible calculators. Manage Garage →</span></a>`:'';
      section.innerHTML=`<div class="container"><div class="section-heading-row"><div><div class="micro">Pick up where you left off</div><h2 class="section-title">Your Garage</h2></div><a class="text-link" href="garage.html">Manage Garage →</a></div><div class="recent-grid">${vehicleHtml}${recent.map(r=>`<a class="recent-card" href="${escapeHtml(r.url||'#')}"><strong>${escapeHtml(r.title||'Recent calculation')}</strong><span>${escapeHtml((r.summary||'').slice(0,120))}</span></a>`).join('')}</div></div>`;
      anchor?.parentNode?.insertBefore(section,anchor);
    }
  }catch{}
});
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
