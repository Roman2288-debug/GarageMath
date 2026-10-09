const assert=require('node:assert/strict');const vm=require('node:vm');const fs=require('node:fs');
(async()=>{
 const handlers={},cachedKeys=[],matchKeys=[];let offline=false;
 const ctx={URL,Response,location:{origin:'https://garagemath.com'},self:{addEventListener:(n,f)=>handlers[n]=f,skipWaiting(){},clients:{claim(){}}},caches:{open:async()=>({put:async(k)=>cachedKeys.push(typeof k==='string'?k:k.url),add:async()=>{}}),keys:async()=>[],delete:async()=>true,match:async(k)=>{matchKeys.push(typeof k==='string'?k:k.url);return new Response('cached page')}},fetch:async()=>{if(offline)throw Error('offline');return new Response('fresh page')}};
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),ctx);
 async function request(url,mode='navigate'){
  let p;const pending=[];handlers.fetch({request:{method:'GET',url,mode},respondWith:x=>p=x,waitUntil:x=>pending.push(x)});const r=await p;await Promise.all(pending);return r;
 }
 assert.equal(await (await request('https://garagemath.com/tire-size?mph=60')).text(),'fresh page');
 assert.equal(cachedKeys[0],'https://garagemath.com/tire-size');
 offline=true;assert.equal(await (await request('https://garagemath.com/tire-size?mph=70')).text(),'cached page');
 assert.equal(matchKeys[0],'https://garagemath.com/tire-size');
 offline=false;await request('https://garagemath.com/calculations.js?v=3.6.0','cors');
 assert.equal(cachedKeys[1],'https://garagemath.com/calculations.js?v=3.6.0');
 console.log('Network-first cache and shared-state fallback checks passed');
})().catch(e=>{console.error(e);process.exitCode=1});
