import './polyfills.server.mjs';
import{a as B}from"./chunk-KDHITXFJ.mjs";import{a as E,b as v,c as W,d as D}from"./chunk-C6HZSTCE.mjs";import"./chunk-WQRJY2CL.mjs";import{a as C}from"./chunk-SBKWRXW3.mjs";import{N as P,O as M}from"./chunk-AJ7SUW3U.mjs";import{m as S}from"./chunk-C6RPCFR6.mjs";import{C as h,Db as r,Eb as o,Fb as u,Ob as g,Xb as p,ab as m,ac as x,bb as f,ja as d,q as l,sb as y,ub as s}from"./chunk-LIQVIPVH.mjs";import"./chunk-VVCT4QZE.mjs";function N(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Magnificiant 7+"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!1),m(7),s("stockNames",c.magnificent7PlusWatchlist)("height",400)}}function A(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Potential Buys"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!1),m(7),s("stockNames",c.potentialBuysWatchlist)("height",600)}}var F=(()=>{let n=class n{constructor(e){this.dataService=e,this.magnificent7PlusSymbols=["AAPL","MSFT","META","GOOG","AMZN","NVDA","NFLX","TSLA","SMCI"],this.magnificent7PlusWatchlist=[],this.potentialBuysSymbols=["DGRO","DGRW","DIVO","OBDC","BAC","NEE","MCD","LOW","PG","AMD","AMT"],this.potentialBuysWatchlist=[]}ngOnInit(){this.magnificent7PlusSymbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.magnificent7PlusWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.potentialBuysSymbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.potentialBuysWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.magnificent7PlusWatchlist.sort((e,t)=>e.changePercent-t.changePercent),this.potentialBuysWatchlist.sort((e,t)=>e.changePercent-t.changePercent)}};n.\u0275fac=function(t){return new(t||n)(f(C))},n.\u0275cmp=d({type:n,selectors:[["app-watchlists"]],standalone:!0,features:[x],decls:2,vars:2,consts:[[3,"expanded",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"]],template:function(t,a){t&1&&y(0,N,8,3,"mat-expansion-panel",0)(1,A,8,3,"mat-expansion-panel",0),t&2&&(s("ngIf",a.magnificent7PlusWatchlist&&a.magnificent7PlusWatchlist.length===a.magnificent7PlusSymbols.length),m(),s("ngIf",a.potentialBuysWatchlist&&a.potentialBuysWatchlist.length===a.potentialBuysSymbols.length))},dependencies:[S,D,E,v,W,M,P,B]});let i=n;return i})();export{F as WatchlistsComponent};