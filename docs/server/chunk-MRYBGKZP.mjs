import './polyfills.server.mjs';
import{a as se}from"./chunk-KDHITXFJ.mjs";import{a as z,b as G,c as K,d as Z}from"./chunk-C6HZSTCE.mjs";import{f as re,g as oe,h as ae}from"./chunk-YN5QO56I.mjs";import{a as j,c as J,d as ee,f as te,h as ie,k as ne}from"./chunk-AVBBTYG7.mjs";import{a as Y,b as H}from"./chunk-YAB6PUT4.mjs";import{a as D}from"./chunk-WQRJY2CL.mjs";import{a as M}from"./chunk-SBKWRXW3.mjs";import{N as $,O as q}from"./chunk-AJ7SUW3U.mjs";import{l as U,m as w,n as V,t as O,u as Q}from"./chunk-C6RPCFR6.mjs";import{Ba as P,Db as c,Eb as l,Fb as p,Gb as N,Hb as L,Jb as _,Nb as y,Ob as m,Tb as k,Ub as S,Vb as b,Xa as E,Xb as h,Yb as A,Zb as T,ab as a,ac as v,bb as g,bc as F,cc as W,fc as B,gc as R,ic as X,ja as u,sb as f,ta as C,ua as x,ub as s}from"./chunk-LIQVIPVH.mjs";var me=["miniChartWidget"],ce=(()=>{let n=class n{constructor(e){this.tradingviewService=e,this.width="100%",this.height=200,this.range="12M",this.theme="light"}ngAfterViewInit(){let e=this.tradingviewService.miniChartWidget(this.symbol,this.width,this.height,this.range,this.theme);this.miniChartWidget.nativeElement.appendChild(e)}};n.\u0275fac=function(t){return new(t||n)(g(D))},n.\u0275cmp=u({type:n,selectors:[["tv-mini-chart-widget"]],viewQuery:function(t,o){if(t&1&&k(me,5),t&2){let d;S(d=b())&&(o.miniChartWidget=d.first)}},inputs:{symbol:"symbol",width:"width",height:"height",range:"range",theme:"theme"},standalone:!0,features:[v],decls:2,vars:0,consts:[["miniChartWidget",""]],template:function(t,o){t&1&&p(0,"div",null,0)},encapsulation:2});let i=n;return i})();var pe=["tickersWidget"],be=(()=>{let n=class n{constructor(e){this.tradingviewService=e,this.symbols=`[
    {
      "title": "S&P 500 Index",
      "proName": "FOREXCOM:SPXUSD"
    },
    {
      "title": "Nasdaq 100",
      "proName": "NASDAQ:NDX"
    },
    {
      "title": "Dow Jones Industrial",
      "proName": "DJI"
    },
    {
      "title": "Bitcoin",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "title": "Ethereum",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "title": "Dogecoin",
      "proName": "BINANCE:DOGEUSD"
    },
    {
      "title": "USD/RMB",
      "proName": "FX:USDCNH"
    },
    {
      "title": "USD/JPY",
      "proName": "FX:USDJPY"
    },
    {
      "title": "EUR/USD",
      "proName": "FX:EURUSD"
    }
  ]`,this.theme="light",this.displayMode="adaptive"}ngAfterViewInit(){let e=this.tradingviewService.tickersWidget(this.symbols,this.tape,this.displayMode,this.theme);this.tickersWidget.nativeElement.appendChild(e);try{let t=this.tickersWidget.nativeElement.children[1];this.tickersWidget.nativeElement.removeChild(t)}catch{}}};n.\u0275fac=function(t){return new(t||n)(g(D))},n.\u0275cmp=u({type:n,selectors:[["tv-tickers-widget"]],viewQuery:function(t,o){if(t&1&&k(pe,5),t&2){let d;S(d=b())&&(o.tickersWidget=d.first)}},inputs:{symbols:"symbols",tape:"tape",theme:"theme",displayMode:"displayMode"},standalone:!0,features:[v],decls:2,vars:0,consts:[["tickersWidget",""]],template:function(t,o){t&1&&p(0,"div",null,0)},encapsulation:2});let i=n;return i})();var de=()=>({"padding-right":"1.25rem"}),ue=i=>({color:i});function ge(i,n){if(i&1&&(c(0,"div",11)(1,"span"),h(2,"Today's Unrealized P/L: "),l(),c(3,"span",5),h(4),B(5,"currency"),l()()),i&2){let r=m(2);a(3),s("ngStyle",W(4,ue,r.getDayPriceChangeColor())),a(),T(" ",R(5,2,r.priceChange)," ")}}function fe(i,n){if(i&1&&(p(0,"tv-mini-chart-widget",15)(1,"mat-divider",16),c(2,"span"),h(3),l(),c(4,"span"),h(5),l()),i&2){let r=n.model;s("symbol",r.name)("theme","dark"),a(3),T("Pre/Post: ",r.name," "),a(2),T("",r.value.toFixed(2),"%")}}function ve(i,n){if(i&1&&(c(0,"div",3)(1,"div",12)(2,"ngx-charts-bar-vertical",13),f(3,fe,6,4,"ng-template",null,0,X),l()(),c(5,"div",12),p(6,"ngx-charts-bar-vertical-stacked",14),l()()),i&2){let r=m(2);a(2),s("results",r.priceChangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Price Change %")("customColors",r.getPriceChangeChartColor),a(4),s("scheme",r.priceRangeColorScheme)("results",r.priceRangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Market Day Price Range $")}}function Ce(i,n){if(i&1&&(c(0,"div",3)(1,"div",12),p(2,"ngx-charts-bar-vertical",17),l()()),i&2){let r=m(2);a(2),s("scheme",r.betaColorScheme)("schemeType",r.scaleType.Linear)("results",r.betaChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Beta")}}function xe(i,n){if(i&1){let r=_();c(0,"section",2)(1,"div",3),f(2,ge,6,6,"div",4),c(3,"mat-chip-listbox",5)(4,"mat-chip-option",6),y("click",function(){C(r);let t=m();return x(t.displayChart(1))}),h(5,"Today's Change"),l(),c(6,"mat-chip-option",7),y("click",function(){C(r);let t=m();return x(t.displayChart(2))}),h(7,"Beta"),l()()(),f(8,ve,7,18,"div",8)(9,Ce,3,10,"div",8),c(10,"mat-expansion-panel",9)(11,"mat-expansion-panel-header")(12,"mat-panel-title")(13,"mat-icon"),h(14,"price_change"),l(),c(15,"span"),h(16,"Price Quotes"),l()()(),p(17,"tv-market-quotes-widget",10),l()()}if(i&2){let r=m();a(2),s("ngIf",r.priceChangeChartData),a(),s("ngStyle",F(7,de)),a(5),s("ngIf",r.selectedChart===1),a(),s("ngIf",r.selectedChart===2),a(),s("expanded",!1),a(7),s("stockNames",r.stockNames)("height",820)}}var Oe=(()=>{let n=class n{constructor(e){this.dataService=e,this.showTickers=!0,this.priceChange=0,this.priceChangeChartData=[],this.priceRangeChartData=[],this.betaChartData=[],this.stockNames=[],this.priceRangeColorScheme={domain:["steelblue","skyblue"]},this.betaColorScheme={domain:["palevioletred"]},this.scaleType=ee,this.selectedChart=1,this.getPriceChangeChartColor=t=>this.portfolioData[t].regularMarketChangePercent>0?"teal":"chocolate"}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataService.portfolioSymbols?.forEach(e=>{let t=this.portfolioHoldings[e],o=this.portfolioData[e];this.stockNames.push({name:o.symbol,displayName:`${o.longName} - ${o.symbol} `}),this.priceChange+=o.regularMarketChange*t.sharesOwned,this.priceChangeChartData.push({name:o.symbol,value:o.regularMarketChangePercent*100||0}),this.priceRangeChartData.push({name:o.symbol,series:[{name:"Low Range",value:o.regularMarketPrice-o.regularMarketDayLow},{name:"High Range",value:o.regularMarketDayHigh-o.regularMarketPrice}]}),o.quoteType==="EQUITY"&&this.betaChartData.push({name:o.symbol,value:o.beta||0})}),this.stockNames.sort((e,t)=>{let o=this.portfolioData[e.name].regularMarketChangePercent,d=this.portfolioData[t.name].regularMarketChangePercent;return o-d}),this.priceChangeChartData.sort((e,t)=>e.value-t.value),this.priceRangeChartData.sort((e,t)=>e.series[0].value+e.series[1].value-(t.series[0].value+t.series[1].value)),this.betaChartData.sort((e,t)=>e.value-t.value)}getDayPriceChangeColor(){return this.priceChange>0?"teal":"chocolate"}displayChart(e){this.selectedChart=e}};n.\u0275fac=function(t){return new(t||n)(g(M))},n.\u0275cmp=u({type:n,selectors:[["stock-price-movement-charts"]],inputs:{showTickers:"showTickers"},standalone:!0,features:[v],decls:1,vars:1,consts:[["tooltipTemplate",""],["class","add-border",4,"ngIf"],[1,"add-border"],[1,"add-flex"],["class","title",4,"ngIf"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],["class","add-flex",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"],[1,"title"],[1,"chart-container"],[3,"results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel","customColors"],[3,"scheme","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel"],[3,"symbol","theme"],[2,"margin","none","border-top-color","slategrey"],[3,"scheme","schemeType","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel"]],template:function(t,o){t&1&&f(0,xe,18,8,"section",1),t&2&&s("ngIf",o.priceChangeChartData.length>0)},dependencies:[Q,w,V,O,ae,oe,re,H,Y,Z,z,G,K,q,$,ne,te,ie,ce,se]});let i=n;return i})();function ye(i,n){if(i&1){let r=_();c(0,"button",3),y("click",function(){let t=C(r).$implicit,o=m();return x(o.emitSelectedTicker(t.symbol))}),p(1,"img",4),c(2,"div"),h(3),l()()}if(i&2){let r=n.$implicit,e=m();a(),s("src",e.getLogoSource(r),E),a(2),A(r.symbol)}}function _e(i,n){if(i&1){let r=_();c(0,"button",3),y("click",function(){let t=C(r).$implicit,o=m(2);return x(o.emitSelectedTicker(t.symbol))}),p(1,"img",4),c(2,"div"),h(3),l()()}if(i&2){let r=n.$implicit,e=m(2);a(),s("src",e.getLogoSource(r),E),a(2),A(r.symbol)}}function ke(i,n){if(i&1&&(N(0),f(1,_e,4,2,"button",1),L()),i&2){let r=m();a(),s("ngForOf",r.sortedEtfs)}}var Ge=(()=>{let n=class n{constructor(e){this.dataService=e,this.showETF=!0,this.selectedTicker=new P,this.sortedStocks=[],this.sortedEtfs=[]}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").sort((e,t)=>e["52WeekChange"]-t["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="ETF").sort((e,t)=>e.ytdReturn-t.ytdReturn)}emitSelectedTicker(e){this.selectedTicker.emit(e)}getLogoSource(e){return`/assets/ticker-logos/${e.symbol}.png`}};n.\u0275fac=function(t){return new(t||n)(g(M))},n.\u0275cmp=u({type:n,selectors:[["stock-ticker-buttons"]],inputs:{showETF:"showETF"},outputs:{selectedTicker:"selectedTicker"},standalone:!0,features:[v],decls:3,vars:2,consts:[[1,"logos-container"],["mat-button","","class","ticker-button",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-button","",1,"ticker-button",3,"click"],["alt","Logo","width","auto","height","35",3,"src"]],template:function(t,o){t&1&&(c(0,"div",0),f(1,ye,4,2,"button",1)(2,ke,2,1,"ng-container",2),l()),t&2&&(a(),s("ngForOf",o.sortedStocks),a(),s("ngIf",o.showETF))},dependencies:[U,w,J,j],styles:[".logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 1rem 1rem}.ticker-button[_ngcontent-%COMP%]{align-items:center;height:5rem}.ticker-button[_ngcontent-%COMP%]:hover{border-left:.25rem solid slategrey}"]});let i=n;return i})();export{be as a,Oe as b,Ge as c};