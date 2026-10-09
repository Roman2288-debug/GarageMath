function money(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n)}
function num(n,d=2){return Number(n).toLocaleString(undefined,{maximumFractionDigits:d})}
function gmTrack(name,params={}){if(typeof gtag==='function')gtag('event',name,params)}
window.gmTrack=gmTrack;

(()=>{
  const THEME_KEY='gm_theme_mode';
  const mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
  const getMode=()=>localStorage.getItem(THEME_KEY)||'system';
  const resolved=mode=>mode==='system'?(mq&&mq.matches?'dark':'light'):mode;
  const updateThemeUi=mode=>document.querySelectorAll('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===mode)));
  function applyTheme(mode,persist=true){
    if(!['system','light','dark'].includes(mode))mode='system';
    if(persist)localStorage.setItem(THEME_KEY,mode);
    const actual=resolved(mode);
    document.documentElement.dataset.theme=actual;
    document.documentElement.dataset.themeMode=mode;
    document.documentElement.style.colorScheme=actual;
    let meta=document.querySelector('meta[name="theme-color"]');
    if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta)}
    meta.content=actual==='dark'?'#0B0D10':'#F3F1EA';
    updateThemeUi(mode);
  }
  window.gmSetTheme=applyTheme;
  applyTheme(getMode(),false);
  mq?.addEventListener?.('change',()=>{if(getMode()==='system')applyTheme('system',false)});
})();

const navToggle=document.querySelector('.nav-toggle');
const nav=document.getElementById('site-nav');
if(nav){
  const contact=nav.querySelector('a[href="contact.html"]');
  if(!nav.querySelector('.nav-garage')){
    const garage=document.createElement('a');garage.href='garage.html';garage.className='nav-garage';garage.textContent='Garage';
    contact?nav.insertBefore(garage,contact):nav.appendChild(garage);
  }
  if(!nav.querySelector('.theme-switcher')){
    const wrap=document.createElement('div');wrap.className='theme-switcher';wrap.setAttribute('aria-label','Appearance');
    wrap.innerHTML='<span>Appearance</span>'+['system','light','dark'].map(x=>`<button class="theme-choice" type="button" data-theme-choice="${x}" aria-pressed="false">${x[0].toUpperCase()+x.slice(1)}</button>`).join('');
    nav.appendChild(wrap);
    wrap.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>{window.gmSetTheme(b.dataset.themeChoice);gmTrack('appearance_changed',{mode:b.dataset.themeChoice})}));
    const mode=localStorage.getItem('gm_theme_mode')||'system';
    wrap.querySelectorAll('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===mode)));
  }
}
if(navToggle&&nav){
  navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open))});
  nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');navToggle.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');navToggle.setAttribute('aria-expanded','false')}});
  const slug=location.pathname.split('/').pop()||'index';
  const current=slug.endsWith('.html')?slug:slug+'.html';
  nav.querySelectorAll('a').forEach(a=>{const href=a.getAttribute('href')||'';if(href===current||(current==='index.html'&&href==='index.html#tools'))a.setAttribute('aria-current','page')});
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

if(document.body.dataset.calculator){
  const actions=document.querySelector('.result-actions');
  if(actions&&!actions.querySelector('[data-print-results]')){
    const print=document.createElement('button');print.className='action';print.type='button';print.dataset.printResults='1';print.textContent='Print garage sheet';actions.appendChild(print);
  }
  if(actions&&!actions.querySelector('[data-report-result]')){
    const report=document.createElement('button');report.className='action';report.type='button';report.dataset.reportResult='1';report.textContent='Report issue';actions.appendChild(report);
  }
}

document.addEventListener('click',async e=>{
  const copy=e.target.closest('[data-copy-results]');
  if(copy){
    const box=document.querySelector(copy.dataset.copyResults||'[data-results]');const text=(box?.dataset.lastSummary||box?.innerText||'').trim();if(!text)return;
    try{await navigator.clipboard.writeText(text);const old=copy.textContent;copy.textContent='Copied';setTimeout(()=>copy.textContent=old,1200);gmTrack('result_copied',{calculator:document.body.dataset.calculator||'unknown'})}catch{}
    return;
  }
  const share=e.target.closest('[data-share-results]');
  if(share){
    const box=document.querySelector(share.dataset.shareResults||'[data-results]');const text=(box?.dataset.lastSummary||box?.innerText||'GarageMath result').trim();
    if(navigator.share){try{await navigator.share({title:document.title,text,url:location.href});gmTrack('result_shared',{calculator:document.body.dataset.calculator||'unknown'})}catch{}}
    else{try{await navigator.clipboard.writeText(location.href);const old=share.textContent;share.textContent='Link copied';setTimeout(()=>share.textContent=old,1200)}catch{}}
    return;
  }
  if(e.target.closest('[data-print-results]')){gmTrack('result_printed',{calculator:document.body.dataset.calculator||'unknown'});window.print();return}
  if(e.target.closest('[data-report-result]')){
    const type=document.body.dataset.calculator||'calculator';
    const subject=encodeURIComponent(`GarageMath ${type} result issue`);
    const body=encodeURIComponent(`Page: ${location.href}\n\nWhat looked wrong or unclear?\n\nExpected behavior:\n`);
    location.href=`mailto:contact@garagemath.com?subject=${subject}&body=${body}`;
  }
});

document.querySelectorAll('a[href*=".html"]').forEach(a=>a.addEventListener('click',()=>{
  const fromCalc=!!document.body.dataset.calculator,href=a.getAttribute('href')||'';
  if(fromCalc&&/guide|methodology/.test(href))gmTrack('calculator_to_guide',{calculator:document.body.dataset.calculator,destination:href});
  if(!fromCalc&&/(tire-size|wheel-offset|wheel-backspacing|rpm-speed|fuel-cost|hp-weight|engine-displacement|compression-ratio|quarter-mile|injector-size)\.html/.test(href))gmTrack('guide_to_calculator',{destination:href});
}));

if(!document.querySelector('link[rel="manifest"]')){const link=document.createElement('link');link.rel='manifest';link.href='manifest.webmanifest?v=3.5.0';document.head.appendChild(link)}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v=3.5.0').catch(()=>{}))}
