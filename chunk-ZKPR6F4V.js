import{b as g}from"./chunk-Z6ROTX7E.js";import{$a as l,Db as u,Rb as d,Sb as a,Tb as c,_b as p,ja as r}from"./chunk-HSDL35WG.js";var m=["singleQuoteWidget"],y=(()=>{let e=class e{constructor(t){this.tradingviewService=t,this.type="simple"}ngAfterViewInit(){let t=this.tradingviewService.singleQuoteWidget(this.symbol,this.type);this.singleQuoteWidget.nativeElement.appendChild(t)}};e.\u0275fac=function(i){return new(i||e)(l(g))},e.\u0275cmp=r({type:e,selectors:[["tv-single-quote-widget"]],viewQuery:function(i,o){if(i&1&&d(m,5),i&2){let s;a(s=c())&&(o.singleQuoteWidget=s.first)}},inputs:{symbol:"symbol",type:"type"},standalone:!0,features:[p],decls:2,vars:0,consts:[["singleQuoteWidget",""]],template:function(i,o){i&1&&u(0,"div",null,0)},encapsulation:2});let n=e;return n})();export{y as a};