const CACHE='garagemath-v3.6.0';
const CORE=['/tire-size-guide.html','/wheel-offset-guide.html','/wheel-tire-buying-guide.html','/clearance-guide.html','/manufacturer-specs-guide.html','/awd-tire-guide.html','/speedometer-guide.html','/engine-volume-guide.html','/compression-ratio-guide.html','/injector-planning-guide.html','/fuel-economy-guide.html','/gear-ratio-guide.html','/power-to-weight-guide.html','/quarter-mile-guide.html','/','/index.html','/style.css?v=3.6.0','/v3-core.css?v=3.6.0','/v3.3.css?v=3.6.0','/v3.3-polish.css?v=3.6.0','/favicon.svg','/calculations.js?v=3.6.0','/common.js?v=3.6.0','/calculator-page.js?v=3.6.0','/home.js?v=3.6.0','/calculator-details.js?v=3.6.0','/wheel-tire-setup.html','/wheel-tire-buying-guide.html','/engine-volume-guide.html','/injector-planning-guide.html','/garage.html','/garage.js','/tire-size.html','/wheel-offset.html','/wheel-backspacing.html','/rpm-speed.html','/fuel-cost.html','/hp-weight.html','/engine-displacement.html','/compression-ratio.html','/injector-size.html','/quarter-mile.html','/guides.html','/methodology.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(async cache=>{await Promise.allSettled([...new Set([...CORE,...CORE.filter(url=>url.endsWith('.html')).map(url=>url==='/index.html'?'/':url.slice(0,-5))])].map(url=>cache.add(url)))}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('garagemath-')).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();const key=r.mode==='navigate'?u.origin+u.pathname:r;e.waitUntil(caches.open(CACHE).then(c=>c.put(key,copy)).catch(()=>{}))}return res}).catch(async()=>{
    const cached=await caches.match(r.mode==='navigate'?u.origin+u.pathname:r);if(cached)return cached;
    // Do not masquerade the homepage as missing scripts or unknown pages.
    return new Response(r.mode==='navigate'?'This page is unavailable offline. Reconnect and reload.':'Asset unavailable offline.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }));
});
