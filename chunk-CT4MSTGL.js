import{a as B}from"./chunk-HG6DSH2I.js";import{a as P,b as M,c as E,d as v}from"./chunk-NMF3L7ZG.js";import{a as D}from"./chunk-Z6ROTX7E.js";import{Sa as W,Ta as C,i as S}from"./chunk-U5L5YZWS.js";import{$a as f,Bb as r,C as h,Cb as o,Db as u,Mb as g,Vb as p,_a as m,_b as x,ja as d,q as l,qb as y,sb as s}from"./chunk-HSDL35WG.js";import"./chunk-MON7YFGF.js";function N(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Potential Buys"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!0),m(7),s("stockNames",c.potentialBuysWatchlist)("height",600)}}function A(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Magnificiant 7+"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!1),m(7),s("stockNames",c.magnificent7PlusWatchlist)("height",400)}}var F=(()=>{let n=class n{constructor(e){this.dataService=e,this.magnificent7PlusSymbols=["AAPL","MSFT","META","GOOG","AMZN","NVDA","NFLX","TSLA","SMCI"],this.magnificent7PlusWatchlist=[],this.potentialBuysSymbols=["DGRO","DGRW","DIVO","OBDC","BAC","NEE","MCD","LOW","PG","AMT"],this.potentialBuysWatchlist=[]}ngOnInit(){this.magnificent7PlusSymbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.magnificent7PlusWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.potentialBuysSymbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.potentialBuysWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.magnificent7PlusWatchlist.sort((e,t)=>e.changePercent-t.changePercent),this.potentialBuysWatchlist.sort((e,t)=>e.changePercent-t.changePercent)}};n.\u0275fac=function(t){return new(t||n)(f(D))},n.\u0275cmp=d({type:n,selectors:[["app-watchlists"]],standalone:!0,features:[x],decls:2,vars:2,consts:[[3,"expanded",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"]],template:function(t,a){t&1&&y(0,N,8,3,"mat-expansion-panel",0)(1,A,8,3,"mat-expansion-panel",0),t&2&&(s("ngIf",a.potentialBuysWatchlist&&a.potentialBuysWatchlist.length===a.potentialBuysSymbols.length),m(),s("ngIf",a.magnificent7PlusWatchlist&&a.magnificent7PlusWatchlist.length===a.magnificent7PlusSymbols.length))},dependencies:[S,v,P,M,E,C,W,B]});let i=n;return i})();export{F as WatchlistsComponent};
