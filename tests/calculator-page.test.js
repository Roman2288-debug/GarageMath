const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const core=require('../calculations');
const pages=['tire-size','wheel-offset','wheel-backspacing','rpm-speed','fuel-cost','hp-weight','engine-displacement','compression-ratio','injector-size','quarter-mile','wheel-tire-setup'];
function fixture(slug){
  const html=fs.readFileSync(`${slug}.html`,'utf8');
  let inputs=[...html.matchAll(/<input\b([^>]+)>/g)].map(([,attrs])=>{
    const a=Object.fromEntries([...attrs.matchAll(/([\w-]+)="([^"]*)"/g)].map(x=>[x[1],x[2]]));
    return {id:a.id,type:a.type||'text',value:a.value||'',listeners:{},addEventListener(name,fn){this.listeners[name]=fn},attrs:{},dataset:{optional:a['data-optional']},parentElement:{querySelector:()=>({})},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},focus(){},matches:()=>true};
  });
  for(const [,id,body] of html.matchAll(/<select id="([^"]+)"[^>]*>(.*?)<\/select>/g)){
    const value=body.match(/<option value="([^"]+)"/)[1];
    inputs.push({id,type:'select',value,attrs:{},dataset:{},listeners:{},addEventListener(name,fn){this.listeners[name]=fn},setAttribute(){},removeAttribute(){},parentElement:{querySelector:()=>({})}});
  }
  const results={innerHTML:'',dataset:{},setAttribute(){}};
  const listeners={};
  const calc={addEventListener(name,fn){listeners[name]=fn},insertAdjacentHTML(){},click(){listeners.click()}};
  const panel={querySelector:()=>null,querySelectorAll:()=>[]};
  const document={body:{dataset:{calculator:html.match(/data-calculator="([^"]+)"/)[1]}},getElementById:id=>inputs.find(x=>x.id===id),
    querySelector:s=>s==='[data-results]'?results:s==='[data-calculate]'?calc:s==='.calc>.panel:first-child'?panel:s==='.calc'?{addEventListener(){}}:null,
    querySelectorAll:s=>s.includes('aria-invalid')?inputs.filter(x=>x.attrs['aria-invalid']):s.includes('input[type="number"]')?inputs.filter(x=>x.type==='number'):inputs,
    addEventListener:(name,fn)=>{if(name==='DOMContentLoaded')document.ready=fn}};
  const context={document,window:{GarageMathCore:core},GarageMathCore:core,location:{search:'',pathname:`/${slug}`,hash:'',href:`https://garagemath.com/${slug}`},history:{replaceState(){}},localStorage:{getItem:()=>null,setItem(){}},gmTrack(){},num:(n,d=2)=>Number(n).toLocaleString(undefined,{maximumFractionDigits:d}),money:n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),URLSearchParams,Intl,console};
  vm.runInNewContext(fs.readFileSync('calculator-details.js','utf8'),context);
  vm.runInNewContext(fs.readFileSync('calculator-page.js','utf8'),context);
  document.ready();
  return {inputs,results,calc};
}
for(const slug of pages){
 const {inputs,results,calc}=fixture(slug);
 assert.match(results.innerHTML,/result-summary/,`${slug} default result`);
 assert.doesNotMatch(results.innerHTML,/NaN|Infinity/);
 const field=inputs.find(x=>x.type==='number');field.value='';calc.click();
 assert.match(results.innerHTML,/error-box/,`${slug} rejects missing numbers`);
 assert.equal(field.attrs['aria-invalid'],'true');
 field.value='Infinity';calc.click();assert.match(results.innerHTML,/error-box/);
}
for(const [slug,id] of [['engine-displacement','cyl'],['injector-size','injectors']]){
 const {inputs,results,calc}=fixture(slug);inputs.find(x=>x.id===id).value='4.5';calc.click();assert.match(results.innerHTML,/whole number/);
}
{
 const {inputs,results,calc}=fixture('wheel-offset');inputs.find(x=>x.id==='o2').value='-10';calc.click();assert.match(results.innerHTML,/result-summary/);
}
{
 const {inputs,results,calc}=fixture('tire-size');inputs.find(x=>x.id==='old').value='000/45R17';calc.click();assert.match(results.innerHTML,/error-box/);
}
{
 const {inputs,results,calc}=fixture('wheel-tire-setup');
 inputs.find(x=>x.id==='innergap').value='12';inputs.find(x=>x.id==='fendergap').value='15';calc.click();
 assert.match(results.innerHTML,/4\.3 mm/);assert.match(results.innerHTML,/-2\.7 mm — crosses measured boundary/);
 assert.match(results.innerHTML,/Geometric revs per mile/);assert.match(results.innerHTML,/Speed readings after the tire change/);
}
{
 const {inputs,results,calc}=fixture('rpm-speed');inputs.find(x=>x.id==='altfinal').value='4.10';calc.click();assert.match(results.innerHTML,/Alternative 4\.1:1/);
 inputs.find(x=>x.id==='altfinal').value='0';calc.click();assert.match(results.innerHTML,/error-box/);
}
{
 const {inputs,results,calc}=fixture('engine-displacement');
 const units=inputs.find(x=>x.id==='dimension-unit');const bore=inputs.find(x=>x.id==='bore');const inchBore=Number(bore.value);
 units.value='mm';units.listeners.change();assert.ok(Math.abs(Number(bore.value)-inchBore*25.4)<.000001);
 bore.value='86';inputs.find(x=>x.id==='stroke').value='86';inputs.find(x=>x.id==='cyl').value='4';calc.click();assert.match(results.innerHTML,/1,998 cc/);
 units.value='in';units.listeners.change();calc.click();assert.match(results.innerHTML,/1,998 cc/);
}
console.log('All eleven calculator page initialization and validation checks passed');
