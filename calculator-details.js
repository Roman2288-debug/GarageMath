// Original result tables built from the same tested formulas as the main outputs.
(function(){
  const fmt=(n,d=2)=>Number(n).toLocaleString(undefined,{maximumFractionDigits:d});
  const signed=(n,d=2)=>(n>0?'+':'')+fmt(n,d);
  function table(caption,headers,rows){return `<div class="detail-table"><div class="table-wrap" role="region" aria-label="${caption}" tabindex="0"><table><caption>${caption}</caption><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(([label,...cells])=>`<tr><th scope="row">${label}</th>${cells.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`}
  window.GarageMathDetails=function(type,{val,n}){
    const gm=window.GarageMathCore;
    if(type==='tire'||type==='fitment'){
      const r=gm.tireCompare(val('old'),val('new'),n('mph')),a=r.old,b=r.new;
      const dim=x=>`${fmt(x)} in / ${fmt(x*25.4,1)} mm`;
      const rows=[['Diameter',dim(a.diameter),dim(b.diameter),signed((b.diameter-a.diameter)*25.4,1)+' mm'],['Nominal width',dim(a.width/25.4),dim(b.width/25.4),signed(b.width-a.width,1)+' mm'],['Sidewall',dim(a.sidewall),dim(b.sidewall),signed((b.sidewall-a.sidewall)*25.4,1)+' mm'],['Circumference',dim(a.circumference),dim(b.circumference),signed((b.circumference-a.circumference)*25.4,1)+' mm'],['Geometric revs per mile',fmt(63360/a.circumference,1),fmt(63360/b.circumference,1),signed(63360/b.circumference-63360/a.circumference,1)]];
      return table('Tire dimensions: current versus proposed',['Measurement','Current','Proposed','Change'],rows)+table('Speed readings after the tire change',['Indicated speed','Calculated actual speed','Difference'],[20,30,40,50,60,70].map(speed=>[`${speed} mph`,`${fmt(speed*b.diameter/a.diameter,1)} mph`,`${signed(speed*(b.diameter/a.diameter-1),1)} mph`]))+'<p class="note">Dimensions come from the tire code, not a measured tire. Speed assumes the original calibration matches the current size and remains unchanged.</p>';
    }
    if(type==='rpm'){
      const dia=n('dia'),gear=n('gear'),final=n('finaldrive'),alt=String(val('altfinal')||'').trim()===''?null:n('altfinal');
      const rows=[30,40,50,60,70,80].map(speed=>{const current=gm.rpmSpeed(0,dia,gear,final,speed).requiredRpm;return [`${speed} mph`,`${fmt(current,0)} RPM`,...(alt===null?[]:[`${fmt(gm.rpmSpeed(0,dia,gear,alt,speed).requiredRpm,0)} RPM`])]});
      return table('Cruise RPM across road speeds',['Speed',`Current ${fmt(final,3)}:1`,...(alt===null?[]:[`Alternative ${fmt(alt,3)}:1`])],rows)+'<p class="note">Both columns use the same tire diameter and transmission gear. This models a locked mechanical relationship, not converter slip or fuel economy.</p>';
    }
    if(type==='fuel'){
      const mpg=n('mpg'),price=n('price'),distance=n('distance'),annual=n('annual'),usd=x=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(x);
      return table('MPG sensitivity: distance and fuel price held fixed',['Assumption','MPG','Trip fuel cost','Annual fuel cost'],[['20% lower MPG',mpg*.8],['Your entered MPG',mpg],['20% higher MPG',mpg*1.2]].map(([label,value])=>{const r=gm.fuelCost(distance,value,price,annual);return [label,fmt(value,1),usd(r.cost),usd(r.annualCost)]}))+'<p class="note">These scenarios show how the budget reacts to an assumed MPG change. They are not a forecast of your driving conditions.</p>';
    }
    return '';
  };
})();
