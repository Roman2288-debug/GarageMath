
function money(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n); }
function num(n,d=2){ return Number(n).toLocaleString(undefined,{maximumFractionDigits:d}); }
